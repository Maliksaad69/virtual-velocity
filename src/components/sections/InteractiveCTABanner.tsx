"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TrendingUp, Zap, ShieldCheck, Calculator, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CreativeCTA } from "@/components/ui/CreativeCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BUDGET_TIERS = [
  { label: "$10K / MO", spend: 10000, estRevenue: "$48,000", roas: "4.8x", leads: "380+" },
  { label: "$25K / MO", spend: 25000, estRevenue: "$125,000", roas: "5.0x", leads: "950+" },
  { label: "$50K / MO", spend: 50000, estRevenue: "$265,000", roas: "5.3x", leads: "2,100+" },
  { label: "$100K+ / MO", spend: 100000, estRevenue: "$580,000+", roas: "5.8x", leads: "4,800+" },
];

export const InteractiveCTABanner = () => {
  const [activeTierIndex, setActiveTierIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      gsap.fromTo(
        ".gsap-cta-banner-content",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const activeTier = BUDGET_TIERS[activeTierIndex];

  return (
    <section ref={containerRef} className="py-20 sm:py-32 px-6 sm:px-12 max-w-[1700px] mx-auto relative overflow-hidden select-none selection:bg-[#00f0ff] selection:text-black">
      {/* Background Radiant Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/15 blur-[200px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#ff2a6d]/15 blur-[180px] pointer-events-none rounded-full" />

      {/* Main Glassmorphic High-Impact Container */}
      <div className="gsap-cta-banner-content relative z-10 p-8 sm:p-16 lg:p-20 rounded-3xl bg-surface/90 border-2 border-[#00f0ff]/30 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,240,255,0.2)] overflow-hidden space-y-12">
        {/* Top Header Tag */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00f0ff]" />
              INTERACTIVE CAMPAIGN ROI ESTIMATOR
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black text-white uppercase tracking-tight leading-[0.9] drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              READY TO SCALE YOUR <br />
              <span className="text-[#00f0ff]">BRAND REVENUE?</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3.5 bg-black/60 border border-white/10 px-6 py-3.5 rounded-2xl backdrop-blur-md">
            <ShieldCheck className="w-6 h-6 text-[#00f0ff] flex-shrink-0" />
            <div className="text-left font-outfit">
              <span className="block text-sm font-extrabold text-white">100% DATA ATTRIBUTION</span>
              <span className="text-xs text-white/50 font-medium">NO CONTRACT LOCK-IN</span>
            </div>
          </div>
        </div>

        {/* Interactive ROI Calculator HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 p-6 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Left: Select Monthly Ad Spend */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-[#00f0ff]" />
              <span>STEP 1: SELECT YOUR MONTHLY AD BUDGET</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {BUDGET_TIERS.map((tier, idx) => {
                const isActive = activeTierIndex === idx;
                return (
                  <button
                    key={tier.label}
                    onClick={() => setActiveTierIndex(idx)}
                    className={`py-4 px-3 rounded-xl border text-center text-sm font-outfit font-black uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-[#00f0ff] border-[#00f0ff] text-black shadow-[0_0_25px_rgba(0,240,255,0.5)] scale-105"
                        : "bg-surface/80 border-white/10 text-white/75 hover:border-white/30 hover:text-white"
                    }`}
                    data-cursor-pointer
                  >
                    {tier.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Real-time Projected ROI Display */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-1">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider block">EST. REVENUE</span>
              <span className="text-2xl sm:text-4xl font-outfit font-black text-[#00f0ff] tracking-tight block">
                {activeTier.estRevenue}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider block">TARGET ROAS</span>
              <span className="text-2xl sm:text-4xl font-outfit font-black text-white tracking-tight block">
                {activeTier.roas}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider block">EST. LEADS</span>
              <span className="text-2xl sm:text-4xl font-outfit font-black text-[#ff2a6d] tracking-tight block">
                {activeTier.leads}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 text-sm font-outfit font-extrabold text-white">
              <CheckCircle2 className="w-5 h-5 text-[#00f0ff]" />
              <span>GUARANTEED 12-HOUR CAMPAIGN PROPOSAL DELIVERY</span>
            </div>
            <p className="text-sm text-white/60 font-light">
              Submit your project objectives for a personalized growth roadmap & channel breakdown.
            </p>
          </div>

          <CreativeCTA
            href="#contact"
            text="LOCK IN YOUR CAMPAIGN PROPOSAL"
            variant="electric"
            icon={<ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
          />
        </div>
      </div>
    </section>
  );
};
