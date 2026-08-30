"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TrendingUp, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { HeroCanvas3D } from "@/components/ui/HeroCanvas3D";
import { CreativeCTA } from "@/components/ui/CreativeCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const GSAPHeroTimeline = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.0 },
      });

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
      className="relative min-h-[90vh] sm:min-h-screen max-h-[1050px] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-12 max-w-[1700px] mx-auto overflow-hidden select-none font-outfit"
    >
      <HeroCanvas3D />

      <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-[#00f0ff]/20 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-[#ff2a6d]/15 blur-[160px] pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-white/60">
        <div className="gsap-badge flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#00f0ff]/10 border border-[#00f0ff]/40 px-3 py-1 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="text-[#00f0ff] font-outfit text-xs font-extrabold uppercase tracking-wider">FULL-SERVICE DIGITAL MARKETING</span>
          </div>
          <span className="hidden md:inline-block text-white/40 text-xs uppercase tracking-wider font-bold">US & PK HUBS</span>
        </div>

        <div className="gsap-badge hidden sm:flex items-center gap-4 text-xs font-outfit font-bold">
          <div className="flex items-center gap-2 text-[#00f0ff]">
            <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
            <span>EST. 2026</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-white/80">SCALING REVENUE IN REAL TIME</span>
        </div>
      </div>

      {/* Hero Big Headlines */}
      <div className="relative z-10 my-auto py-4 flex flex-col justify-center space-y-1 sm:space-y-3">
        <div className="overflow-hidden flex items-center gap-4 flex-wrap">
          <h1 className="gsap-title-line text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-outfit font-black tracking-tight text-white uppercase leading-[0.9] block">
            FULL-SERVICE
          </h1>
          <span className="gsap-pills hidden md:inline-flex items-center gap-2 text-xs font-outfit font-extrabold tracking-wider text-[#00f0ff] border border-[#00f0ff]/30 px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-md uppercase">
            <Zap className="w-4 h-4 text-[#00f0ff]" />
            ROI-DRIVEN AGENCY
          </span>
        </div>

        <div className="overflow-hidden flex flex-wrap items-center gap-3">
          <h1 className="gsap-title-line text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-outfit font-black tracking-tight text-[#00f0ff] uppercase leading-[0.9] block drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
            DIGITAL MARKETING
          </h1>
          <span className="gsap-pills hidden xl:inline-flex items-center gap-2 text-xs font-outfit font-extrabold tracking-wider text-[#00f0ff] border border-[#00f0ff]/50 px-4 py-1.5 rounded-full bg-[#00f0ff]/10 backdrop-blur-md uppercase">
            <Sparkles className="w-4 h-4 text-[#00f0ff]" />
            SEO • PPC • SOCIAL • CRO
          </span>
        </div>

        <div className="overflow-hidden flex items-center gap-6">
          <h1 className="gsap-title-line text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-outfit font-black tracking-tight text-[#ff2a6d] uppercase leading-[0.9] block drop-shadow-[0_0_35px_rgba(255,42,109,0.35)]">
            THAT SCALES REVENUE.
          </h1>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="gsap-hero-footer relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-4 bg-surface/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10">
        <div className="space-y-1 max-w-xl">
          <span className="text-xs sm:text-sm font-outfit text-[#00f0ff] flex items-center gap-2 font-extrabold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#00f0ff]" />
            PERFORMANCE MARKETING & REVENUE GROWTH
          </span>
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
            High-converting Google Ads PPC, Technical SEO audits, Paid Social, and Conversion Rate Optimization (CRO) engineered for aggressive market growth.
          </p>
        </div>

        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
          <div className="hidden lg:flex items-center gap-6 text-xs font-outfit font-bold text-white/70">
            <div className="space-y-0.5">
              <span className="block font-black text-sm text-[#00f0ff]">4.8x ROAS</span>
              <span className="text-[10px] text-white/50">PPC & SOCIAL</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="space-y-0.5">
              <span className="block font-black text-sm text-[#ff2a6d]">320%</span>
              <span className="text-[10px] text-white/50">SEO GROWTH</span>
            </div>
          </div>

          <CreativeCTA href="#contact" text="PROPOSE A CAMPAIGN" variant="electric" />
        </div>
      </div>
    </section>
  );
};