"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS_STEPS } from "@/data/agencyData";
import { CheckCircle2, Zap, ShieldCheck, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Process = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const laserBeamRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".gsap-process-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-process-step-btn",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      const totalSteps = PROCESS_STEPS.length;
      ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${totalSteps * 250}`,
        scrub: 0.2,
        onUpdate: (self) => {
          const rawProgress = self.progress;
          const stepIndex = Math.min(
            Math.floor(rawProgress * totalSteps),
            totalSteps - 1
          );

          if (stepIndex !== activeStep) {
            setActiveStep(stepIndex);
          }

          if (laserBeamRef.current) {
            gsap.to(laserBeamRef.current, {
              height: `${rawProgress * 100}%`,
              duration: 0.1,
              ease: "none",
            });
          }
        },
      });
    },
    { scope: sectionRef }
  );

  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    setActiveStep(index);
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen h-screen bg-white text-zinc-900 py-10 px-6 sm:px-12 max-w-[1700px] mx-auto flex flex-col justify-between overflow-hidden selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >
      {/* Background Soft Ambient Matrix Light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-zinc-200/40 blur-[180px] pointer-events-none" />

      {/* Header Bar */}
      <div className="gsap-process-header flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-6 z-10">
        <div>
          <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-zinc-900 animate-pulse" />
            FIVE-STAGE STRATEGY METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-[0.9] mt-2">
            THE FIVE-STAGE <br />
            <span className="text-emerald-600 font-black">STRATEGY PIPELINE</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-md">
          Inspect our 5-stage strategy pipeline across each milestone from audit to aggressive revenue scaling.
        </p>
      </div>

      {/* Main 5-Stage Layout */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-5 relative space-y-3">
          {/* Vertical Laser Line */}
          <div className="absolute left-0 top-3 bottom-3 w-1 bg-zinc-200 rounded-full overflow-hidden">
            <div
              ref={laserBeamRef}
              className="w-full bg-zinc-900 shadow-sm"
              style={{ height: `${((activeStep + 1) / 5) * 100}%` }}
            />
          </div>

          <div className="pl-6 space-y-3">
            <span className="text-xs font-outfit font-bold text-zinc-500 block tracking-wider uppercase">
              SELECT STAGE TO INSPECT
            </span>

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => handleStepClick(idx)}
                  className={`gsap-process-step-btn w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? "bg-white border-2 border-zinc-900 shadow-xl"
                      : "bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100"
                  }`}
                  data-cursor-pointer
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl font-outfit font-black transition-colors ${
                        isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-900"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-outfit font-extrabold uppercase tracking-wide transition-colors ${
                          isActive ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs font-outfit font-medium text-zinc-500 block uppercase">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="text-xs font-outfit font-extrabold text-zinc-900 tracking-wider">
                        ACTIVE
                      </span>
                    )}
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? "bg-zinc-900 scale-125" : "bg-zinc-300"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Display Card */}
        <div className="lg:col-span-7">
          <div className="relative min-h-[460px] sm:min-h-[490px] p-8 sm:p-14 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:border-zinc-900">
            {/* Stage Number Background Watermark */}
            <span className="absolute top-4 right-8 text-[140px] sm:text-[200px] font-outfit font-black text-zinc-900/[0.04] pointer-events-none select-none leading-none z-0">
              {currentStep.number}
            </span>

            {/* In-Place Content Fade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="relative z-10 space-y-8 flex-1 flex flex-col justify-between"
              >
                {/* Panel Top Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <span className="text-sm font-outfit font-extrabold text-zinc-900 tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zinc-900" />
                    STAGE {currentStep.number} OF 05
                  </span>
                  <span className="text-xs font-outfit font-bold text-zinc-700 bg-zinc-100 px-3.5 py-1 rounded-full border border-zinc-200 uppercase">
                    {currentStep.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-5xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-tight">
                    {currentStep.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-xl">
                    {currentStep.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 border-t border-zinc-200 pt-6">
                  <span className="text-xs font-outfit font-extrabold text-zinc-500 block tracking-wider uppercase">
                    STAGE MILESTONES & DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentStep.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-3 text-sm font-outfit font-bold text-zinc-900 shadow-xs"
                      >
                        <div className="p-1 rounded-full bg-zinc-200 text-zinc-900 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-zinc-900" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel Bottom Footer */}
                <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-xs font-outfit font-medium text-zinc-500">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>GUARANTEED DELIVERABLE EXECUTION</span>
                  </div>
                  <span className="hidden sm:inline-block">VIRTUAL VELOCITY ENGINE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between border-t border-zinc-200 pt-3 z-10 text-xs font-outfit font-medium text-zinc-500">
        <span>STRATEGY PIPELINE ACTIVE</span>
        <span className="hidden sm:inline-block">SCROLL OR SELECT STAGES TO INSPECT</span>
      </div>
    </section>
  );
};
