"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, TrendingUp, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { HeroCanvas3D } from "@/components/ui/HeroCanvas3D";
import { GSAPMagnetic } from "@/components/ui/GSAPMagnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Text Scramble Utility ───
 * Animates text by cycling through random characters before resolving to the final text.
 * Left-to-right wave resolution — characters settle as the animation progresses.
 */
function createScrambleTimeline(
  element: HTMLElement | null,
  finalText: string,
  duration: number = 1.0
) {
  if (!element) return gsap.timeline();

  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?~";
  const original = finalText;
  const length = original.length;
  const tl = gsap.timeline();

  // Phase 1: rapid random scramble (builds anticipation)
  tl.to(
    {},
    {
      duration: duration * 0.35,
      ease: "none",
      onUpdate: function () {
        let output = "";
        for (let i = 0; i < length; i++) {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
        element.textContent = output;
      },
    }
  );

  // Phase 2: settle from left → right (wave resolution)
  tl.to(
    {},
    {
      duration: duration * 0.65,
      ease: "power2.out",
      onUpdate: function () {
        const progress = this.progress();
        const settled = Math.floor(progress * length);
        let output = "";
        for (let i = 0; i < length; i++) {
          if (i < settled) {
            output += original[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        element.textContent = output;
      },
      onComplete: () => {
        element.textContent = original;
      },
    }
  );

  return tl;
}

export const GSAPHeroTimeline = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.0 },
      });

      // — Entrance animations —
      tl.fromTo(
        ".gsap-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 }
      )
        .fromTo(
          ".gsap-title-line",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".gsap-pills",
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, ease: "back.out(1.7)" },
          "<0.2"
        )
        .fromTo(
          ".gsap-hero-footer",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.3"
        );

      // — Text Scramble on status pill & tag (fires after entrance) —
      tl.add(
        createScrambleTimeline(
          document.querySelector(".gsap-scramble-1") as HTMLElement,
          "[ROI-DRIVEN AGENCY]",
          1.0
        ),
        "-=0.2"
      )
        .add(
          createScrambleTimeline(
            document.querySelector(".gsap-scramble-2") as HTMLElement,
            "[SEO • PPC • SOCIAL • CRO]",
            1.2
          ),
          "-=0.4"
        )
        .add(
          createScrambleTimeline(
            document.querySelector(".gsap-scramble-3") as HTMLElement,
            "ACCEPTING NEW CLIENTS",
            1.0
          ),
          "-=0.3"
        );

      // — Scroll-triggered ambient floating for lower elements (subtle parallax) —
      gsap.to(".gsap-hero-footer", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: scopeRef }
  );

  return (
    <section
      ref={scopeRef}
      className="relative h-screen min-h-[650px] max-h-[1000px] flex flex-col justify-between pt-24 pb-6 px-6 sm:px-12 max-w-[1700px] mx-auto overflow-hidden select-none"
    >
      {/* 3D WebGL Background Canvas */}
      <HeroCanvas3D />

      {/* Radiant Background Ambient Neon Spheres */}
      <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-[#00f0ff]/20 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-[#ff2a6d]/15 blur-[160px] pointer-events-none" />

      {/* Top Meta Bar with Glowing Border Pill */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-meta text-white/60">
        <div className="gsap-badge flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#00f0ff]/10 border border-[#00f0ff]/40 px-3 py-1 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="text-[#00f0ff] font-mono text-[11px] font-bold">FULL-SERVICE DIGITAL MARKETING</span>
          </div>
          <span className="hidden md:inline-block text-white/40">// US & PK</span>
        </div>

        <div className="gsap-badge hidden sm:flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#00f0ff]">
            <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
            <span>EST. 2026</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-white/70">SCALING REVENUE IN REAL TIME</span>
        </div>
      </div>

      {/* Compact Main Headline Block with Dynamic Accent Tags */}
      <div className="relative z-10 my-auto py-2 flex flex-col justify-center space-y-1 sm:space-y-2">
        <div className="overflow-hidden flex items-center gap-4">
          <h1 className="gsap-title-line text-hero font-outfit font-black tracking-tighter text-white uppercase leading-none block">
            FULL-SERVICE
          </h1>
          <span className="gsap-pills gsap-scramble-1 hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-[#00f0ff] border border-[#00f0ff]/30 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-[#00f0ff]" />
            [ROI-DRIVEN AGENCY]
          </span>
        </div>

        <div className="overflow-hidden flex flex-wrap items-center gap-3">
          <h1 className="gsap-title-line text-hero font-outfit font-black tracking-tighter text-[#00f0ff] uppercase leading-none block drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
            DIGITAL MARKETING
          </h1>
          <span className="gsap-pills gsap-scramble-2 hidden xl:inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f0ff] border border-[#00f0ff]/50 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 backdrop-blur-md uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            [SEO • PPC • SOCIAL • CRO]
          </span>
        </div>

        <div className="overflow-hidden flex items-center gap-6">
          <h1 className="gsap-title-line text-hero font-outfit font-black tracking-tighter text-[#ff2a6d] uppercase leading-none block drop-shadow-[0_0_35px_rgba(255,42,109,0.35)]">
            THAT SCALES REVENUE.
          </h1>
        </div>
      </div>

      {/* Sleek Subtitle & Electric Magnetic CTA Footer */}
      <div className="gsap-hero-footer relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-4 bg-surface/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
        <div className="space-y-0.5 max-w-xl">
          <span className="text-meta text-[#00f0ff] flex items-center gap-2 font-bold uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-[#00f0ff]" />
            // ROI-DRIVEN STRATEGY & PERFORMANCE MARKETING
          </span>
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
            High-converting Google Ads PPC, Technical SEO audits, Paid Social, and Conversion Rate Optimization (CRO) engineered for aggressive market growth.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-widest text-white/60">
            <div className="space-y-0.5">
              <span className="block text-white font-bold text-sm text-[#00f0ff]">4.8x ROAS</span>
              <span className="text-[10px] text-white/50">PPC & SOCIAL</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="space-y-0.5">
              <span className="block text-white font-bold text-sm text-[#ff2a6d]">320%</span>
              <span className="text-[10px] text-white/50">SEO GROWTH</span>
            </div>
          </div>

          <GSAPMagnetic strength={0.4}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00f0ff] text-black font-outfit font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(255,255,255,0.6)]"
              data-cursor-pointer
            >
              <span>PROPOSE A CAMPAIGN</span>
              <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-1 transition-transform" />
            </a>
          </GSAPMagnetic>
        </div>
      </div>
    </section>
  );
};