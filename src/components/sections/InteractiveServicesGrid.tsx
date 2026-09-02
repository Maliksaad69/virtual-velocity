"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/data/agencyData";
import { ArrowUpRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Text scramble utility ─── */
function createScrambleTimeline(
  element: HTMLElement | null,
  finalText: string,
  duration: number = 0.9
) {
  if (!element) return gsap.timeline();
  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?~";
  const length = finalText.length;
  const tl = gsap.timeline();

  tl.to(
    {},
    {
      duration: duration * 0.3,
      ease: "none",
      onUpdate: function () {
        let out = "";
        for (let i = 0; i < length; i++) out += chars[Math.floor(Math.random() * chars.length)];
        element!.textContent = out;
      },
    }
  ).to(
    {},
    {
      duration: duration * 0.7,
      ease: "power2.out",
      onUpdate: function () {
        const settled = Math.floor(this.progress() * length);
        let out = "";
        for (let i = 0; i < length; i++) {
          out += i < settled ? finalText[i] : chars[Math.floor(Math.random() * chars.length)];
        }
        element!.textContent = out;
      },
      onComplete: () => {
        element!.textContent = finalText;
      },
    }
  );

  return tl;
}

export const InteractiveServicesGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // — Section header fade-in —
      gsap.fromTo(
        ".gsap-services-headline",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );

      // — Calculate total scroll distance: each panel = viewport —
      const panels = gsap.utils.toArray<HTMLElement>(".gsap-service-panel");
      const totalPanels = panels.length;
      const scrollDistance = () => {
        let total = 0;
        panels.forEach((p) => (total += p.offsetWidth));
        return total - window.innerWidth + 120;
      };

      // — Horizontal pin + scrub track with stair-step descent —
      gsap.to(track, {
        x: () => -scrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${scrollDistance() + window.innerHeight * 0.6}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update progress indicator
            if (progressRef.current) {
              const raw = self.progress;
              const active = Math.min(totalPanels - 1, Math.floor(raw * totalPanels));
              progressRef.current.textContent = `0${active + 1} / 0${totalPanels}`;
            }

            // — Stair-step descent on all panels (same as portfolio gallery) —
            const viewportCenter = window.innerWidth / 2;

            panels.forEach((panel) => {
              const rect = panel.getBoundingClientRect();
              const panelCenter = rect.left + rect.width / 2;
              const dist = panelCenter - viewportCenter; // negative = left, positive = right

              const maxDist = window.innerWidth * 0.55;
              const absDist = Math.abs(dist);
              const normalized = Math.min(absDist / maxDist, 1);
              const proximity = 1 - normalized;

              // Scale: 1.0 at center, 0.7 at edges
              const scale = 0.7 + proximity * 0.3;

              // Opacity: 1.0 at center, 0.35 at edges
              const opacity = 0.35 + proximity * 0.65;

              // Y offset: stair-step drop
              // Left side (past panels): dropped down — you've stepped past them
              // Right side (upcoming): raised up — yet to step down to
              let yOffset = 0;
              if (dist < -50) {
                const leftProgress = Math.min(-dist / maxDist, 1);
                yOffset = leftProgress * 80;
              } else if (dist > 50) {
                const rightProgress = Math.min(dist / maxDist, 1);
                yOffset = -rightProgress * 60;
              }

              // Z rotation for stair-step tilt
              const rotation = dist < 0
                ? Math.min(-dist / maxDist, 1) * 6
                : -Math.min(dist / maxDist, 1) * 4;

              gsap.set(panel, {
                scale,
                y: yOffset,
                opacity,
                rotationX: rotation,
                transformOrigin: "center center",
                force3D: true,
              });
            });
          },
        },
      });

      // — Per-panel content animations (scramble, skew, stagger) on enter —
      panels.forEach((panel, i) => {
        const img = panel.querySelector(".gsap-panel-image") as HTMLElement;
        const label = panel.querySelector(".gsap-panel-label") as HTMLElement;
        const num = panel.querySelector(".gsap-panel-number") as HTMLElement;
        const title = panel.querySelector(".gsap-panel-title") as HTMLElement;
        const desc = panel.querySelector(".gsap-panel-desc") as HTMLElement;
        const delItems = panel.querySelectorAll(".gsap-panel-deliverable") as NodeListOf<HTMLElement>;
        const techs = panel.querySelectorAll(".gsap-panel-tech") as NodeListOf<HTMLElement>;

        ScrollTrigger.create({
          trigger: panel,
          start: "left 75%",
          end: "left 5%",
          onEnter: () => {
            // Image: clip-path circle reveal without blur
            if (img) {
              gsap.fromTo(
                img,
                { clipPath: "circle(0%)", filter: "blur(0px)", scale: 1.2 },
                { clipPath: "circle(150%)", filter: "blur(0px)", scale: 1, duration: 1.2, ease: "power3.out" }
              );
            }

            // Scramble the number badge
            if (num) createScrambleTimeline(num, `0${i + 1}`, 0.7);

            // Label skew reveal
            if (label) {
              gsap.fromTo(
                label,
                { opacity: 0, x: -20, skewX: 8 },
                { opacity: 1, x: 0, skewX: 0, duration: 0.7, ease: "power3.out" }
              );
            }

            // Title stagger
            if (title) {
              gsap.fromTo(
                title,
                { opacity: 0, y: 30, rotateX: 15 },
                { opacity: 1, y: 0, rotateX: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
              );
            }

            // Description fade
            if (desc) {
              gsap.fromTo(
                desc,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 }
              );
            }

            // Deliverable items stagger
            if (delItems.length) {
              gsap.fromTo(
                delItems,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.06, delay: 0.35 }
              );
            }

            // Tech pills float up
            if (techs.length) {
              gsap.fromTo(
                techs,
                { opacity: 0, y: 12, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)", stagger: 0.04, delay: 0.55 }
              );
            }
          },
          onLeaveBack: () => {
            if (img) gsap.set(img, { clipPath: "circle(0%)", filter: "blur(0px)", scale: 1.2 });
            if (label) gsap.set(label, { opacity: 0, x: -20, skewX: 8 });
            if (title) gsap.set(title, { opacity: 0, y: 30, rotateX: 15 });
            if (desc) gsap.set(desc, { opacity: 0, y: 20 });
            delItems.forEach((el) => gsap.set(el, { opacity: 0, x: -20 }));
            techs.forEach((el) => gsap.set(el, { opacity: 0, y: 12, scale: 0.9 }));
          },
        });
      });

      ScrollTrigger.addEventListener("refresh", () => {});
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-zinc-900 overflow-hidden border-t border-zinc-200"
      style={{ height: "100vh" }}
    >
      {/* Section meta bar */}
      <div className="fixed top-24 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-12 py-4 pointer-events-none">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
          FULL-SERVICE CAPABILITIES
        </span>
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-600">
          <span>DISCIPLINES</span>
          <span className="text-zinc-900 font-extrabold w-16 text-right" ref={progressRef}>
            01 / 06
          </span>
        </div>
      </div>

      {/* Horizontal pin track */}
      <div
        ref={trackRef}
        className="flex h-screen items-center"
        style={{ width: "max-content", perspective: "800px" }}
      >
        {/* — INTRO CARD — */}
        <div className="gsap-service-panel h-screen w-screen flex-shrink-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24 select-none">
          <div className="gsap-services-headline max-w-3xl space-y-8">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-[0.3em] font-extrabold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-600" /> EVERY DISCIPLINE, EXPLORED
            </span>
            <h2 className="text-5xl sm:text-8xl font-outfit font-black text-zinc-900 uppercase tracking-tighter leading-[0.88]">
              OUR SERVICE <br />
              <span className="text-emerald-600 font-black">SPECTRUM</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-700 max-w-xl font-light leading-relaxed">
              Each discipline descends into view like a stair — the current service stands tall while past capabilities step down behind it.
            </p>

            {/* Pill indicators */}
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-zinc-900" /> SEO
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-zinc-700" /> PPC
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-zinc-500" /> SOCIAL
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-zinc-400" /> CRO
              </span>
            </div>
          </div>
        </div>

        {/* — SERVICE PANELS — */}
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              className={`gsap-service-panel h-screen w-screen flex-shrink-0 flex items-center px-6 sm:px-12 lg:px-24 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-3/5 space-y-6 lg:pr-12 lg:pl-12">
                {/* Number & Category Tag */}
                <div className="flex items-center gap-4">
                  <span className="gsap-panel-number text-2xl font-outfit font-black text-zinc-900">
                    0{idx + 1}
                  </span>
                  <span className="gsap-panel-label text-[10px] font-mono text-zinc-600 border border-zinc-200 px-3 py-1 rounded-full uppercase tracking-wider bg-zinc-50">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="gsap-panel-title text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-[0.95]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="gsap-panel-desc text-sm sm:text-base text-zinc-600 max-w-lg font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="pt-4 space-y-3">
                  <span className="text-xs font-mono text-zinc-900 uppercase tracking-widest font-bold block">
                    KEY DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="gsap-panel-deliverable flex items-center gap-2 text-xs font-mono text-zinc-800 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="gsap-panel-tech text-[10px] font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1.5 rounded-full uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right visual panel — image reveal */}
              <div className="hidden lg:block w-full lg:w-2/5 h-3/4 relative">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-lg">
                  <div
                    className="gsap-panel-image w-full h-full"
                    style={{
                      clipPath: "circle(0%)",
                      filter: "blur(0px)",
                      transform: "scale(1.2)",
                    }}
                  >
                    {service.previewImage ? (
                      <img
                        src={service.previewImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                        <span className="text-6xl font-outfit font-black text-zinc-300">
                          0{idx + 1}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-8 left-8 right-8 space-y-1">
                    <span className="text-xs font-mono text-zinc-200 uppercase tracking-wider">
                      // SERVICE PREVIEW
                    </span>
                    <h4 className="text-lg font-outfit font-bold text-white uppercase">
                      {service.title.split("(")[0].trim()}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* — OUTRO CTA — */}
        <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-6 sm:px-12 text-center space-y-8 bg-white">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">
            // EXPLORE FULL CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-7xl font-outfit font-black text-zinc-950 uppercase tracking-tighter leading-[0.9]">
            READY TO SCALE <br />
            <span className="text-emerald-600">YOUR REVENUE?</span>
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-emerald-600 text-white font-outfit font-black text-xs tracking-[0.2em] uppercase hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-600/20"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};