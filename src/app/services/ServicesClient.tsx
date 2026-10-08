"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ServicesClientLogosCarousel } from "@/components/sections/ServicesClientLogosCarousel";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SERVICES } from "@/data/agencyData";
import { Magnetic } from "@/components/ui/Magnetic";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Zap,
  MapPin,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROCESS_STEPS = [
  {
    step: "01",
    title: "AUDIT & DISCOVERY",
    description: "Deep-dive diagnostic into your ad accounts, analytics architecture, conversion funnels, and organic visibility to find immediate revenue bottlenecks.",
    deliverable: "Diagnostic Report & Growth Roadmap",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-emerald-100/50",
    border: "border-emerald-200/90 hover:border-emerald-500",
    shadow: "shadow-[0_4px_24px_rgba(23,138,102,0.07)] hover:shadow-[0_12px_32px_rgba(23,138,102,0.18)]",
    numColor: "text-emerald-600",
    badgeColor: "text-emerald-800",
    dividerColor: "border-emerald-200/70",
  },
  {
    step: "02",
    title: "STRATEGIC ARCHITECTURE",
    description: "Designing bespoke campaign architecture, creative testing matrices, technical sprint plans, and tracking infrastructure configured for compounding ROI.",
    deliverable: "Full Campaign & Tech Blueprint",
    cardBg: "bg-gradient-to-br from-sky-50/90 via-blue-50/40 to-indigo-100/50",
    border: "border-sky-200/90 hover:border-sky-500",
    shadow: "shadow-[0_4px_24px_rgba(14,165,233,0.07)] hover:shadow-[0_12px_32px_rgba(14,165,233,0.18)]",
    numColor: "text-sky-600",
    badgeColor: "text-sky-800",
    dividerColor: "border-sky-200/70",
  },
  {
    step: "03",
    title: "RAPID EXECUTION",
    description: "High-velocity creative production, landing page engineering, ad launch sprints, and technical implementations built to capture intent at scale.",
    deliverable: "Live Campaigns & Deployed Systems",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-rose-50/50",
    border: "border-amber-200/90 hover:border-amber-500",
    shadow: "shadow-[0_4px_24px_rgba(245,158,11,0.07)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.18)]",
    numColor: "text-amber-600",
    badgeColor: "text-amber-800",
    dividerColor: "border-amber-200/70",
  },
  {
    step: "04",
    title: "SCALE & OPTIMIZATION",
    description: "Rigorous daily bid management, conversion rate optimization sprints, multivariate copy testing, and budget allocation targeting maximum ROAS.",
    deliverable: "Compounding Monthly Revenue",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-violet-50/40 to-fuchsia-100/50",
    border: "border-purple-200/90 hover:border-purple-500",
    shadow: "shadow-[0_4px_24px_rgba(168,85,247,0.07)] hover:shadow-[0_12px_32px_rgba(168,85,247,0.18)]",
    numColor: "text-purple-600",
    badgeColor: "text-purple-800",
    dividerColor: "border-purple-200/70",
  },
];

export function ServicesClient() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-service-hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      const mm = gsap.matchMedia();

      // Desktop image card reveal animation
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-image-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { clipPath: "inset(0% 0% 0% 60% round 16px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 16px)",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 42%",
                scrub: 0.4,
              },
            }
          );
        });
      });

      // Mobile / Tablet image card reveal
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-image-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { clipPath: "inset(0% 0% 0% 45% round 16px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 16px)",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 94%",
                end: "top 48%",
                scrub: 0.4,
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();

      return () => {
        mm.revert();
      };
    },
    { scope: scopeRef, dependencies: [] }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        {/* 1. Hero Section with Prominent, High-Visibility Background Picture */}
        <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-800 bg-zinc-950 text-white">
          {/* PROMINENT BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/banner-2.webp"
              alt="Virtual Velocity Services Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Dark Gradient Vignette for High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
            {/* Top Tag Badge */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 font-extrabold mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>DISCIPLINES & CAPABILITIES</span>
            </div>

            {/* Display title + division counter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
              <div className="lg:col-span-8 xl:col-span-9">
                <h1 className="gsap-service-hero-title font-outfit font-black uppercase text-white tracking-tighter leading-[0.88] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[5rem] drop-shadow-md select-none">
                  Services
                </h1>
                <div className="mt-3 sm:mt-5 flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-10 sm:w-20 bg-emerald-400" />
                  <p className="text-xs sm:text-sm lg:text-base font-mono font-extrabold uppercase tracking-[0.24em] text-emerald-300 drop-shadow-xs">
                    What we do — and how we make it pay
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 xl:col-span-3 flex lg:justify-end">
                <div className="w-full lg:max-w-[15rem] lg:text-right border-t border-white/20 pt-4 lg:pt-6">
                  <span className="block font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-emerald-400 leading-none drop-shadow-md">
                    09
                  </span>
                  <span className="mt-2.5 block text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-200 leading-relaxed drop-shadow-xs">
                    Specialized divisions
                    <br />
                    One accountable team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead statement + support + CTA */}
          <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 py-8 sm:py-10 lg:py-12">
              <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-8">
                <p className="text-lg sm:text-2xl lg:text-[1.75rem] font-outfit font-black uppercase tracking-tight leading-[1.16] text-white drop-shadow-sm">
                  We engineer high-converting <span className="text-emerald-400">performance marketing</span>{" "}
                  systems, bespoke e-commerce platforms and visual brand identities built to accelerate
                  revenue.
                </p>

                <Magnetic strength={0.05}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-emerald-500 text-zinc-950 font-outfit font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 shadow-lg active:scale-[0.98]"
                    data-cursor-pointer
                  >
                    <span>Start a project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Magnetic>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 space-y-5 self-end">
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal drop-shadow-xs">
                  Every service at Virtual Velocity is built with measurable business outcomes at its
                  core: zero vanity metrics, zero cookie-cutter templates and absolute transparency in
                  performance engineering.
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="border-l border-white/20 pl-3 sm:pl-4">
                    <span className="block text-white font-black text-xl sm:text-2xl leading-none">
                      140+
                    </span>
                    <span className="mt-1.5 block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-zinc-300">
                      Projects delivered
                    </span>
                  </div>
                  <div className="border-l border-white/20 pl-3 sm:pl-4">
                    <span className="block text-emerald-400 font-black text-xl sm:text-2xl leading-none">
                      4.8x
                    </span>
                    <span className="mt-1.5 block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-zinc-300">
                      Avg client ROAS
                    </span>
                  </div>
                  <div className="border-l border-white/20 pl-3 sm:pl-4">
                    <span className="text-white font-black text-xl sm:text-2xl leading-none inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      3
                    </span>
                    <span className="mt-1.5 block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-zinc-300">
                      Global offices
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trusted by Ambitious Brands - Client Logos Carousel */}
        <ServicesClientLogosCarousel />

        {/* 3. Services Rows without brackets */}
        <section className="gsap-services-list px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto pt-6 sm:pt-10 pb-12 sm:pb-20">
          <div className="space-y-0 divide-y divide-zinc-200 border-t border-b border-zinc-200">
            <AnimatePresence mode="popLayout">
              {SERVICES.map((service, index) => {
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="gsap-service-row group relative py-6 sm:py-8 lg:py-10 px-1 sm:px-3 lg:px-4 transition-colors duration-300 hover:bg-zinc-50/70"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                      {/* Left: Monospace Number without brackets & Category Tag */}
                      <div className="lg:col-span-1 flex lg:flex-col justify-start items-start gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg lg:text-xl font-mono font-black text-emerald-600 tracking-tight">
                          {service.number}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 whitespace-nowrap">
                          {service.category}
                        </span>
                      </div>

                      {/* Middle: Title, Narrative, Deliverables & Tech Stack */}
                      <div className="lg:col-span-6 space-y-3.5">
                        <div>
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-black uppercase tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                            {service.title}
                          </h2>
                          <p className="mt-2 text-xs sm:text-sm text-black font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Deliverables List */}
                        <div className="space-y-1.5 pt-1">
                          <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600">
                            KEY DELIVERABLES
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                            {service.deliverables.map((deliv, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 text-xs font-outfit font-semibold text-zinc-700"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                {deliv}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="pt-2">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-xs font-outfit font-black tracking-widest uppercase text-zinc-900 group-hover:text-emerald-600 transition-colors"
                            data-cursor-pointer
                          >
                            <span>GET STARTED WITH {service.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Visual Showcase Card */}
                      <div className="lg:col-span-5 w-full flex justify-end">
                        <div className="service-image-card relative w-full h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[320px] rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-zinc-100 will-change-[clip-path]">
                          {service.previewImage ? (
                            <Image
                              src={service.previewImage}
                              alt={service.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white font-mono text-xs">
                              VIRTUAL VELOCITY SHOWCASE
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-80" />

                          {/* Bottom Card Title */}
                          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white gap-2">
                            <span className="font-outfit font-black text-xs uppercase tracking-wide truncate">
                              {service.title}
                            </span>
                            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. Process Workflow Section */}
        <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto border-b border-zinc-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 pb-4 sm:pb-6 lg:pb-8 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-600 font-extrabold mb-2 sm:mb-3">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>OPERATIONAL METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-tight">
                HOW WE DELIVER <br />
                <span className="text-emerald-600">PREDICTABLE GROWTH</span>
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-xs sm:text-base text-black max-w-md font-normal leading-relaxed">
              Our 4-stage deployment framework ensures every marketing dollar and line of code translates into measurable top-line scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 px-0 sm:px-2 lg:px-6 xl:px-20">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:flex absolute top-1/2 lg:-right-[38px] -translate-y-1/2 items-center justify-center w-7 h-7 rounded-full bg-white border border-emerald-200 text-emerald-600 shadow-xs z-20"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}

                <div
                  className={`group relative h-full p-6 sm:p-7 lg:p-8 rounded-2xl border ${step.border} ${step.cardBg} ${step.shadow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <span className={`block text-3xl sm:text-4xl lg:text-5xl font-mono font-black ${step.numColor} transition-transform duration-300 group-hover:scale-105 mb-3 sm:mb-4 lg:mb-6`}>
                      {step.step}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-outfit font-black text-zinc-950 uppercase tracking-tight mb-2 sm:mb-2.5 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-800 leading-normal sm:leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className={`pt-3.5 sm:pt-4 lg:pt-6 border-t ${step.dividerColor} mt-4 sm:mt-5 lg:mt-6`}>
                    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
                      DELIVERABLE
                    </span>
                    <span className={`text-xs font-outfit font-bold ${step.badgeColor} transition-colors block`}>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
