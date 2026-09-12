"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, ShieldCheck, Calculator, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    <section ref={containerRef} className="py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto relative overflow-hidden select-none selection:bg-zinc-900 selection:text-white">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-zinc-200/30 blur-[140px] sm:blur-[200px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="gsap-cta-banner-content relative z-10 p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-white border-2 border-zinc-200 shadow-xl overflow-hidden space-y-8 sm:space-y-12 text-zinc-900">
        {/* Top Header Tag */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-200 pb-6 sm:pb-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              INTERACTIVE CAMPAIGN ROI ESTIMATOR
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-[0.95] sm:leading-[0.9]">
              READY TO SCALE YOUR <br />
              <span className="text-emerald-600 font-black">BRAND REVENUE?</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3.5 bg-zinc-50 border border-zinc-200 px-6 py-3.5 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div className="text-left font-outfit">
              <span className="block text-sm font-extrabold text-zinc-900">100% DATA ATTRIBUTION</span>
              <span className="text-xs text-zinc-700 font-medium">NO CONTRACT LOCK-IN</span>
            </div>
          </div>
        </div>

        {/* Interactive ROI Calculator HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-zinc-50 p-5 sm:p-8 lg:p-10 rounded-2xl border border-zinc-200">
          {/* Left: Select Monthly Ad Spend */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>STEP 1: SELECT YOUR MONTHLY AD BUDGET</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {BUDGET_TIERS.map((tier, idx) => {
                const isActive = activeTierIndex === idx;
                return (
                  <button
                    key={tier.label}
                    onClick={() => setActiveTierIndex(idx)}
                    className={`py-3.5 px-2.5 rounded-xl border text-center text-xs sm:text-sm font-outfit font-black uppercase tracking-wider transition-all duration-200 min-h-[48px] flex items-center justify-center ${
                      isActive
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]"
                        : "bg-white border-zinc-200 text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50/50"
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
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-zinc-200 pt-5 lg:pt-0 lg:pl-8">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-outfit font-bold text-zinc-700 uppercase tracking-wider block">EST. REVENUE</span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-outfit font-black text-emerald-600 tracking-tight block">
                {activeTier.estRevenue}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-outfit font-bold text-zinc-700 uppercase tracking-wider block">TARGET ROAS</span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-900 tracking-tight block">
                {activeTier.roas}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-outfit font-bold text-zinc-700 uppercase tracking-wider block">EST. LEADS</span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-900 tracking-tight block">
                {activeTier.leads}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 border-t border-zinc-200 pt-6 sm:pt-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-outfit font-extrabold text-zinc-900">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
              <span>GUARANTEED 12-HOUR CAMPAIGN PROPOSAL DELIVERY</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-light">
              Submit your project objectives for a personalized growth roadmap & channel breakdown.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <CreativeCTA
              href="#contact"
              text="LOCK IN YOUR CAMPAIGN PROPOSAL"
              variant="electric"
              fullWidth={true}
              icon={<ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
