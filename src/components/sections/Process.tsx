"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS_STEPS } from "@/data/agencyData";
import { CheckCircle2, Zap, ShieldCheck, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Process = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
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
        end: () => `+=${totalSteps * 450}`,
        scrub: 0.8,
        onUpdate: (self) => {
          const rawProgress = self.progress;
          const stepIndex = Math.min(
            Math.floor(rawProgress * totalSteps),
            totalSteps - 1
          );

          if (stepIndex !== activeStep) {
            triggerHolographicTransition(stepIndex);
            setActiveStep(stepIndex);
          }

          if (laserBeamRef.current) {
            gsap.to(laserBeamRef.current, {
              height: `${rawProgress * 100}%`,
              duration: 0.2,
              ease: "none",
            });
          }
        },
      });
    },
    { scope: sectionRef }
  );

  const triggerHolographicTransition = (nextIndex: number) => {
    const card = cardContainerRef.current;
    if (!card) return;

    const tl = gsap.timeline();

    tl.to(".gsap-laser-wipe", {
      x: "150%",
      duration: 0.35,
      ease: "power2.inOut",
    });

    tl.to(
      card,
      {
        rotationY: 75,
        scale: 0.92,
        opacity: 0.1,
        duration: 0.25,
        ease: "power2.in",
        transformOrigin: "center left",
      },
      "-=0.3"
    );

    tl.set(card, { rotationY: -75, scale: 0.92, opacity: 0.1 });
    tl.set(".gsap-laser-wipe", { x: "-100%" });

    tl.to(card, {
      rotationY: 0,
      scale: 1,
      opacity: 1,
      duration: 0.45,
      ease: "power4.out",
    });

    tl.fromTo(
      ".gsap-stage-item",
      { opacity: 0, x: -20, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "back.out(1.5)",
      },
      "-=0.2"
    );
  };

  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    triggerHolographicTransition(index);
    setActiveStep(index);
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen h-screen bg-[#040406] py-10 px-6 sm:px-12 max-w-[1700px] mx-auto flex flex-col justify-between overflow-hidden selection:bg-[#00f0ff] selection:text-black font-outfit"
    >
      {/* Background Holographic Ambient Matrix Light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00f0ff]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7000ff]/10 blur-[180px] pointer-events-none" />

      {/* Header Bar */}
      <div className="gsap-process-header flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 z-10">
        <div>
          <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00f0ff] animate-pulse" />
            FIVE-STAGE STRATEGY METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-white uppercase tracking-tight leading-[0.9] mt-2">
            THE FIVE-STAGE <br />
            <span className="text-[#00f0ff]">STRATEGY PIPELINE</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-md">
          Scroll through to experience our 3D Matrix stage transition across each milestone from audit to aggressive revenue scaling.
        </p>
      </div>

      {/* Main 5-Stage Layout */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-5 relative space-y-3">
          {/* Vertical Laser Line */}
          <div className="absolute left-0 top-3 bottom-3 w-1 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={laserBeamRef}
              className="w-full bg-gradient-to-b from-[#00f0ff] via-[#7000ff] to-[#ff2a6d] shadow-[0_0_15px_#00f0ff]"
              style={{ height: `${((activeStep + 1) / 5) * 100}%` }}
            />
          </div>

          <div className="pl-6 space-y-3">
            <span className="text-xs font-outfit font-bold text-white/50 block tracking-wider uppercase">
              SELECT STAGE TO INSPECT
            </span>

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => handleStepClick(idx)}
                  className={`gsap-process-step-btn w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-[#00f0ff]/15 via-surface/90 to-surface border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.25)]"
                      : "bg-surface/50 border-white/10 hover:border-white/25 hover:bg-surface/80"
                  }`}
                  data-cursor-pointer
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl font-outfit font-black transition-colors ${
                        isActive ? "text-[#00f0ff]" : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-outfit font-extrabold uppercase tracking-wide transition-colors ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs font-outfit font-medium text-white/50 block uppercase">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="text-xs font-outfit font-extrabold text-[#00f0ff] tracking-wider animate-pulse">
                        ACTIVE
                      </span>
                    )}
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? "bg-[#00f0ff] scale-125 shadow-[0_0_10px_#00f0ff]" : "bg-white/20"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Holographic Display */}
        <div className="lg:col-span-7" style={{ perspective: "1200px" }}>
          <div
            ref={cardContainerRef}
            className="relative p-8 sm:p-14 rounded-3xl bg-surface/90 border-2 border-white/15 shadow-2xl backdrop-blur-2xl space-y-8 overflow-hidden transition-all duration-300 group hover:border-[#00f0ff]/60"
          >
            {/* Holographic Laser Grid Wipe Layer */}
            <div className="gsap-laser-wipe absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent w-full h-full -translate-x-full pointer-events-none z-30" />

            {/* Stage Number Background Watermark */}
            <span className="absolute top-4 right-8 text-[140px] sm:text-[200px] font-outfit font-black text-white/[0.03] pointer-events-none select-none leading-none z-0">
              {currentStep.number}
            </span>

            {/* Panel Top Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-outfit font-extrabold text-[#00f0ff] tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00f0ff]" />
                STAGE {currentStep.number} OF 05
              </span>
              <span className="text-xs font-outfit font-bold text-white/80 bg-white/10 px-3.5 py-1 rounded-full border border-white/10 uppercase">
                {currentStep.subtitle}
              </span>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 space-y-3">
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight leading-tight">
                {currentStep.title}
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl">
                {currentStep.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="relative z-10 space-y-4 border-t border-white/10 pt-6">
              <span className="text-xs font-outfit font-extrabold text-white/60 block tracking-wider uppercase">
                STAGE MILESTONES & DELIVERABLES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentStep.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="gsap-stage-item p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3 text-sm font-outfit font-bold text-white/95 shadow-md"
                  >
                    <div className="p-1 rounded-full bg-[#00f0ff]/15 text-[#00f0ff] flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel Bottom Footer */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-outfit font-medium text-white/50">
              <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>GUARANTEED DELIVERABLE EXECUTION</span>
              </div>
              <span className="hidden sm:inline-block">VIRTUAL VELOCITY ENGINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3 z-10 text-xs font-outfit font-medium text-white/50">
        <span>STRATEGY PIPELINE ACTIVE</span>
        <span className="hidden sm:inline-block">SCROLL OR SELECT STAGES TO ANIMATE</span>
      </div>
    </section>
  );
};
