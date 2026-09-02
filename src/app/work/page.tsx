"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GSAPScrollGallery } from "@/components/sections/GSAPScrollGallery";
import { CreativeCTA } from "@/components/ui/CreativeCTA";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WorkPage() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-work-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );
    },
    { scope: scopeRef }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-12 px-6 sm:px-12 max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="gsap-work-title space-y-6 border-b border-zinc-200 pb-12">
            <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-zinc-900" />
              PORTFOLIO & CASE STUDY GALLERY
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.9]">
              <SplitTextReveal text="FEATURED WORK" highlightWords={["WORK"]} accentColor="#059669" />
            </h1>
            <p className="text-base sm:text-2xl text-zinc-600 max-w-2xl font-light leading-relaxed">
              Walk through our portfolio of ROI-driven digital marketing campaigns, Technical SEO growth benchmarks, Google Ads PPC overhauls, and paid social activations.
            </p>
          </div>
        </div>

        {/* GSAP Screen-Filling Down Stair-case Case Study Walkthrough */}
        <GSAPScrollGallery />

        <div className="py-20 px-6 sm:px-12 max-w-[1700px] mx-auto">
          {/* Proposal CTA Box */}
          <div className="p-8 sm:p-16 rounded-3xl bg-white border-2 border-zinc-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider">NEXT STEPS</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                READY TO SCALE YOUR CAMPAIGN REVENUE?
              </h3>
            </div>
            <div className="z-10 w-full sm:w-auto">
              <CreativeCTA href="/contact" text="PROPOSE A CAMPAIGN" variant="electric" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
