"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const GSAPScrollGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const cards = gsap.utils.toArray<HTMLElement>(".gsap-gallery-card");
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      // Main Pinning Track Tween
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const viewportCenter = window.innerWidth / 2;

            cards.forEach((card, i) => {
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const dist = cardCenter - viewportCenter; // negative = left of center, positive = right

              const maxDist = window.innerWidth * 0.55;
              const absDist = Math.abs(dist);
              const normalized = Math.min(absDist / maxDist, 1);
              const proximity = 1 - normalized;

              // === Stair-step descent effect ===
              // Center card = full scale, normal position
              // Cards to the left (already viewed) = smaller scale, dropped DOWN (behind you on stairs)
              // Cards to the right (upcoming) = smaller scale, positioned HIGHER (coming from above)
              // The transition creates a walking-down-stairs feel

              // Scale: 1.0 at center, 0.7 at edges
              const scale = 0.7 + proximity * 0.3;

              // Opacity: 1.0 at center, 0.35 at edges
              const opacity = 0.35 + proximity * 0.65;

              // Y offset: stair-step drop
              // Left side (past cards): dropped down (positive y) — you've stepped past them
              // Right side (upcoming cards): raised up (negative y) — yet to step down to
              // Center: neutral y
              let yOffset = 0;
              if (dist < -50) {
                // Card is to the left — already viewed, dropping down the stairs
                const leftProgress = Math.min(-dist / maxDist, 1);
                yOffset = leftProgress * 80; // drops down to 80px
              } else if (dist > 50) {
                // Card is to the right — upcoming, coming from above
                const rightProgress = Math.min(dist / maxDist, 1);
                yOffset = -rightProgress * 60; // starts 60px above, settles to 0
              }

              // Z rotation for stair-step tilt (subtle)
              const rotation = dist < 0
                ? Math.min(-dist / maxDist, 1) * 6  // past cards tilt forward
                : -Math.min(dist / maxDist, 1) * 4;   // upcoming cards tilt back

              gsap.set(card, {
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#050507] overflow-hidden flex flex-col justify-between py-10 px-6 sm:px-12">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
        <div className="flex items-center gap-4">
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
            // FEATURED CASE STUDIES
          </span>
          <span className="text-xs font-mono text-white/40">
            [CURATED PORTFOLIO SHOWCASE]
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#00f0ff]">
          <span className="animate-pulse">●</span>
          <span>CURATED PORTFOLIO WALKTHROUGH</span>
        </div>
      </div>

      {/* Horizontal Pin Track */}
      <div className="my-auto overflow-hidden py-12" style={{ perspective: "800px" }}>
        <div
          ref={trackRef}
          className="flex gap-10 sm:gap-16 items-center w-max px-8"
        >
          {/* Introductory Card */}
          <div className="gsap-gallery-card w-[85vw] sm:w-[42vw] lg:w-[30vw] flex-shrink-0 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-surface/60 border border-white/10 space-y-6 select-none transition-all">
            <div className="space-y-3">
              <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
                // PORTFOLIO WALKTHROUGH
              </span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tighter leading-[0.9]">
                CURATED <br />
                <span className="text-[#00f0ff] font-extrabold">PORTFOLIO</span> <br />
                <span className="text-white/40 italic font-light">SHOWCASE</span>
              </h2>
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed">
              Each project descends into view like a stair — the current case study stands tall while past work steps down behind it.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#00f0ff] border-t border-white/10 pt-4">
              <span>SCROLL TO BROWSE PROJECTS →</span>
            </div>
          </div>

          {/* Project Cards with Stair-Step Descent */}
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="gsap-gallery-card w-[85vw] sm:w-[50vw] lg:w-[38vw] flex-shrink-0 group cursor-pointer transition-all"
              data-cursor-text="VIEW"
            >
              <Link href={`/work/${project.id}`} className="block space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 bg-surface shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                  <div className="absolute top-6 left-6 flex items-center gap-3 text-xs font-mono text-white/80 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-[#00f0ff] font-bold">0{idx + 1}</span>
                    <span>// {project.year}</span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[#00f0ff] block uppercase tracking-wider">
                        {project.industry}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-outfit font-black text-white group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <Magnetic strength={0.3}>
                      <div className="p-3.5 rounded-full bg-[#00f0ff] text-black group-hover:bg-white transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Magnetic>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Helper */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3 z-10 text-xs font-mono text-white/40">
        <span>PORTFOLIO EXPLORATION ACTIVE</span>
        <span className="hidden sm:inline-block">// AURA LABS DIGITAL</span>
      </div>
    </section>
  );
};