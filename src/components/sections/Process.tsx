"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS_STEPS } from "@/data/agencyData";
import { CheckCircle2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Process = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-process-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-process-btn",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  // — Morph transition: stagger detail content when activeStep changes —
  useEffect(() => {
    const panel = detailRef.current;
    if (!panel) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-stage-label",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        ".gsap-stage-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.15 }
      );
      gsap.fromTo(
        ".gsap-stage-desc",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".gsap-stage-deliverable",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power3.out", stagger: 0.06, delay: 0.45 }
      );
    }, panel);

    return () => ctx.revert();
  }, [activeStep]);

  return (
    <section ref={sectionRef} id="process" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto">
      {/* Header */}
      <div className="gsap-process-header flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-20">
        <div>
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
            // EDITORIAL METHODOLOGY
          </span>
          <h2 className="text-section-title font-outfit text-white mt-2">
            THE FIVE-STAGE <br />
            <span className="text-white/40 italic font-light">PROCESS</span>
          </h2>
        </div>
        <p className="mt-6 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-light">
          A disciplined, highly transparent digital marketing strategy pipeline designed to optimize CPL, CAC, and ROAS.
        </p>
      </div>

      {/* Grid with Sticky Sidebar Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Process Navigation */}
        <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-4">
          <span className="text-meta text-white/40 block">// STAGE SELECTOR</span>
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <TiltCard key={step.number} className="w-full" disabled={isActive} maxTilt={3} scale={1.005}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`gsap-process-btn w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#121216] border-[#00f0ff] shadow-xl shadow-[#00f0ff]/5"
                      : "bg-surface/50 border-white/5 hover:border-white/20"
                  }`}
                  data-cursor-pointer
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl font-outfit font-extrabold ${isActive ? "text-[#00f0ff]" : "text-white/40"}`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`text-xl font-outfit font-bold uppercase ${isActive ? "text-white" : "text-white/70"}`}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-mono text-white/40 block">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#00f0ff] scale-125" : "bg-white/20"}`} />
                </button>
              </TiltCard>
            );
          })}
        </div>

        {/* Right Active Step Detailed View */}
        <div className="lg:col-span-7">
          {/* Progress bar: current step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="h-1 flex-1 rounded-full transition-all duration-500"
                style={{
                  background:
                    i <= activeStep
                      ? "linear-gradient(90deg, #00f0ff, #00f0ff80)"
                      : "rgba(255,255,255,0.08)",
                }}
              />
            ))}
          </div>

          <motion.div
            key={activeStep}
            ref={detailRef}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-14 rounded-3xl bg-surface border border-white/10 space-y-8 relative overflow-hidden"
          >
            {/* Background Stage Number Watermark */}
            <span className="absolute -bottom-10 -right-6 text-[180px] sm:text-[240px] font-outfit font-black text-white/[0.02] pointer-events-none select-none leading-none">
              {PROCESS_STEPS[activeStep].number}
            </span>

            <div className="gsap-stage-label flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-meta text-[#00f0ff]">
                STAGE {PROCESS_STEPS[activeStep].number} OF 05
              </span>
              <span className="text-xs font-mono text-white/50 border border-white/10 px-3 py-1 rounded-full">
                {PROCESS_STEPS[activeStep].subtitle}
              </span>
            </div>

            <h3 className="gsap-stage-title text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="gsap-stage-desc text-base sm:text-xl text-white/80 font-light leading-relaxed">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="text-meta text-white/60">STAGE DELIVERABLES:</span>
              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="gsap-stage-deliverable flex items-center gap-3 text-sm font-sans text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
