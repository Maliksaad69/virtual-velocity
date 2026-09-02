"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES, Service } from "@/data/agencyData";
import { ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2, RotateCw, Sparkles, Layers } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Text Scramble Helper ─── */
function scrambleText(element: HTMLElement | null, text: string, duration = 0.8) {
  if (!element) return;
  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?~";
  const length = text.length;
  gsap.to(
    {},
    {
      duration: duration * 0.4,
      onUpdate: () => {
        let res = "";
        for (let i = 0; i < length; i++) res += chars[Math.floor(Math.random() * chars.length)];
        element.textContent = res;
      },
      onComplete: () => {
        gsap.to(
          {},
          {
            duration: duration * 0.6,
            ease: "power2.out",
            onUpdate: function () {
              const settled = Math.floor(this.progress() * length);
              let res = "";
              for (let i = 0; i < length; i++) {
                res += i < settled ? text[i] : chars[Math.floor(Math.random() * chars.length)];
              }
              element.textContent = res;
            },
            onComplete: () => {
              element.textContent = text;
            },
          }
        );
      },
    }
  );
}

export const GSAPRevolvingServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleScrambleRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [radius, setRadius] = useState(420);
  const rotationObj = useRef({ angle: 0 });
  const totalItems = SERVICES.length;
  const stepAngle = 360 / totalItems;

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadius(210);
      } else if (w < 1024) {
        setRadius(310);
      } else {
        setRadius(420);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const revolveToIndex = useCallback(
    (index: number, duration = 0.9) => {
      const normalizedIndex = (index + totalItems) % totalItems;
      setActiveIndex(normalizedIndex);

      const targetAngle = -normalizedIndex * stepAngle;

      gsap.to(rotationObj.current, {
        angle: targetAngle,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (carouselRef.current) {
            gsap.set(carouselRef.current, {
              rotationY: rotationObj.current.angle,
            });
          }
        },
      });

      if (titleScrambleRef.current) {
        scrambleText(titleScrambleRef.current, SERVICES[normalizedIndex].title, 0.7);
      }
    },
    [stepAngle, totalItems]
  );

  const nextService = () => revolveToIndex(activeIndex + 1);
  const prevService = () => revolveToIndex(activeIndex - 1);

  useGSAP(
    () => {
      const container = containerRef.current;
      const carousel = carouselRef.current;
      if (!container || !carousel) return;

      gsap.fromTo(
        ".gsap-revolve-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 80%" },
        }
      );

      ScrollTrigger.create({
        trigger: container,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: `+=1800`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalRotation = -360 * progress;
          rotationObj.current.angle = totalRotation;
          gsap.set(carousel, { rotationY: totalRotation });

          const positiveAngle = (-totalRotation % 360 + 360) % 360;
          const currentIdx = Math.round(positiveAngle / stepAngle) % totalItems;
          setActiveIndex(currentIdx);
        },
      });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      revolveToIndex(activeIndex + 1, 1.2);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoRotating, activeIndex, revolveToIndex]);

  const activeService: Service = SERVICES[activeIndex] || SERVICES[0];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white text-zinc-900 overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-8 lg:px-16 selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-20 bg-zinc-200/50 transition-all duration-1000"
      />

      <div className="gsap-revolve-header max-w-[1700px] w-full mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-6 z-10 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-outfit font-extrabold text-emerald-600 uppercase tracking-wider mb-2">
            <RotateCw className="w-4 h-4 animate-spin-slow text-emerald-600" />
            <span>3D SERVICE SPECTRUM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-outfit font-black uppercase text-zinc-950 tracking-tighter leading-none">
            AGENCY <span className="text-emerald-600 font-black">SERVICES</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`text-xs font-outfit font-bold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
              isAutoRotating
                ? "bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm"
                : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAutoRotating ? "AUTO-ROTATING" : "AUTO OFF"}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={prevService}
              className="p-3 rounded-full bg-white border border-zinc-300 hover:bg-emerald-600 hover:text-white text-zinc-950 transition-colors shadow-xs"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextService}
              className="p-3 rounded-full bg-white border border-zinc-300 hover:bg-emerald-600 hover:text-white text-zinc-950 transition-colors shadow-xs"
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 z-10">
        <div
          ref={stageRef}
          className="lg:col-span-7 h-[360px] sm:h-[520px] relative flex items-center justify-center overflow-visible"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={carouselRef}
            className="w-full h-full relative flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
            }}
          >
            {SERVICES.map((service, idx) => {
              const angle = idx * stepAngle;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={service.id}
                  onClick={() => revolveToIndex(idx)}
                  className={`absolute w-[230px] sm:w-[340px] p-5 sm:p-8 rounded-3xl cursor-pointer transition-all duration-700 select-none ${
                    isActive
                      ? "bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-500/10 z-30 opacity-100 scale-105"
                      : "bg-zinc-50 border-2 border-emerald-500/30 hover:border-emerald-600 z-10 opacity-75 hover:opacity-95 scale-90"
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "visible",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-outfit font-black text-zinc-950">
                      {service.number}
                    </span>
                    <span className={`text-[10px] sm:text-xs font-outfit font-bold border px-3 py-1 rounded-full uppercase ${
                      isActive ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-white text-zinc-600 border-zinc-200"
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-outfit font-black uppercase text-zinc-950 mb-2 sm:mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light line-clamp-3 leading-relaxed mb-4 sm:mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-zinc-200 text-xs font-outfit font-bold">
                    <span className={isActive ? "text-emerald-600 font-extrabold" : "text-zinc-700"}>{isActive ? "ACTIVE DISCIPLINE" : "SELECT TO VIEW"}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? "text-emerald-600" : "text-zinc-400"}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 bg-white border border-zinc-200 p-6 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Layers className="w-32 h-32 text-emerald-600" />
          </div>

          <div className="flex items-center justify-between text-xs font-outfit text-zinc-500 border-b border-zinc-200 pb-4">
            <span className="text-emerald-600 uppercase tracking-wider font-extrabold">
              ACTIVE DISCIPLINE [0{activeIndex + 1} / 0{totalItems}]
            </span>
            <span className="font-bold text-zinc-800">{activeService.category}</span>
          </div>

          <h3
            ref={titleScrambleRef}
            className="text-2xl sm:text-4xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-tight min-h-[56px]"
          >
            {activeService.title}
          </h3>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {activeService.description}
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-outfit font-extrabold text-zinc-950 uppercase tracking-wider block">
              KEY CAMPAIGN DELIVERABLES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeService.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-outfit font-bold text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-outfit font-bold text-zinc-500 uppercase tracking-wider block">
              PLATFORMS & TOOLING
            </span>
            <div className="flex flex-wrap gap-2">
              {activeService.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-outfit font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-200">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 text-white font-outfit font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-emerald-700 transition-colors duration-300 shadow-md"
            >
              <span>BOOK DISCIPLINE STRATEGY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between border-t border-zinc-200 pt-4 z-10 text-xs font-outfit font-medium text-zinc-500">
        <div className="flex items-center gap-2">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => revolveToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-8 bg-emerald-600" : "w-2 bg-zinc-300 hover:bg-emerald-400"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
        <span className="font-bold text-zinc-600">SCROLL OR CLICK TO EXPLORE 3D SPECTRUM</span>
      </div>
    </section>
  );
};
