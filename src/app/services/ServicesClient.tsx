"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BrandPhysicsBalls } from "@/components/sections/BrandPhysicsBalls";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Magnetic } from "@/components/ui/Magnetic";
import { SERVICES, AGENCY_INFO } from "@/data/agencyData";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Search,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROCESS_STEPS = [
  {
    step: "01",
    title: "AUDIT & DISCOVERY",
    description: "Deep-dive diagnostic into your ad accounts, analytics architecture, conversion funnels, and organic visibility to find immediate revenue bottlenecks.",
    deliverable: "Diagnostic Report & Growth Roadmap",
  },
  {
    step: "02",
    title: "STRATEGIC ARCHITECTURE",
    description: "Designing bespoke campaign architecture, creative testing matrices, technical sprint plans, and tracking infrastructure configured for compounding ROI.",
    deliverable: "Full Campaign & Tech Blueprint",
  },
  {
    step: "03",
    title: "RAPID EXECUTION",
    description: "High-velocity creative production, landing page engineering, ad launch sprints, and technical implementations built to capture intent at scale.",
    deliverable: "Live Campaigns & Deployed Systems",
  },
  {
    step: "04",
    title: "SCALE & OPTIMIZATION",
    description: "Rigorous daily bid management, conversion rate optimization sprints, multivariate copy testing, and budget allocation targeting maximum ROAS.",
    deliverable: "Compounding Monthly Revenue",
  },
];

export function ServicesClient() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-service-hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      const mm = gsap.matchMedia();

      // Desktop: Animate image card reveal from right to left (GPU compositor clipPath)
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

      // Mobile / Tablet: Animate image card reveal from right to left
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

        {/* 1. Hero Section inspired by Emrix Media */}
        <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto border-b border-zinc-200">
          {/* Top Badge */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-emerald-600 font-extrabold mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 animate-pulse" />
            <span>OUR DISCIPLINES & CAPABILITIES</span>
          </div>

          {/* Giant Display Title */}
          <div className="gsap-service-hero-title">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black tracking-tighter text-zinc-950 uppercase leading-[0.88] select-none">
              SERVICES
            </h1>
          </div>

          {/* 2-Column Editorial Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-zinc-200">
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-zinc-700 tracking-widest uppercase">
                  9 SPECIALIZED DIVISIONS
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-600 uppercase tracking-wider">
                WILMINGTON, USA • LAHORE, PK • GLOBAL CLIENTS
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-xl sm:text-3xl lg:text-4xl text-zinc-900 font-black tracking-tight leading-[1.2] uppercase">
                We engineer high-converting <span className="text-emerald-600">performance marketing</span> systems, bespoke e-commerce platforms, and visual brand identities built to accelerate revenue.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-zinc-600 font-normal leading-relaxed max-w-3xl">
                Every service at Virtual Velocity is built with measurable business outcomes at its core: zero vanity metrics, zero cookie-cutter templates, and absolute transparency in performance engineering.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Services Rows (Emrix Media 3-Column Architecture) */}
        <section className="gsap-services-list px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto py-12 sm:py-20">
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
                      {/* Left: Monospace Number & Category Tag */}
                      <div className="lg:col-span-1 flex lg:flex-col justify-start items-start gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg lg:text-xl font-mono font-bold text-emerald-600 tracking-tight">
                          ({service.number})
                        </span>
                        <span className="inline-block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 whitespace-nowrap">
                          {service.category}
                        </span>
                      </div>

                      {/* Middle: Title, Narrative, Deliverables & Tech Stack */}
                      <div className="lg:col-span-6 space-y-3.5">
                        <div>
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-zinc-950 uppercase tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                            {service.title}
                          </h2>
                          <p className="mt-2 text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Deliverables List */}
                        <div className="space-y-1.5 pt-1">
                          <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600">
                            KEY DELIVERABLES:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.deliverables.map((deliv, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 text-xs font-outfit font-semibold px-2.5 py-1 rounded-lg bg-white border border-zinc-200/80 text-zinc-800 shadow-2xs"
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

                      {/* Right: Visual Showcase Card - Increased Height */}
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

                          {/* Top Card Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-zinc-900 shadow-sm whitespace-nowrap">
                              CASE STUDY READY
                            </span>
                          </div>

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

        {/* 4. Process Workflow Section (inspired by Emrix Media) */}
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
            <p className="mt-3 md:mt-0 text-xs sm:text-base text-zinc-700 max-w-md font-light leading-relaxed">
              Our 4-stage deployment framework ensures every marketing dollar and line of code translates into measurable top-line scale.
            </p>
          </div>

          {/* 4-Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="group relative p-5 sm:p-7 lg:p-9 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-emerald-600/60 group-hover:text-emerald-600 transition-colors mb-2.5 sm:mb-4 lg:mb-6">
                    {step.step}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-outfit font-black text-zinc-950 uppercase tracking-tight mb-1.5 sm:mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-normal sm:leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 lg:pt-6 border-t border-zinc-200/80 mt-3.5 sm:mt-5 lg:mt-6">
                  <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-0.5 sm:mb-1">
                    DELIVERABLE:
                  </span>
                  <span className="text-xs font-outfit font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Metrics & Impact Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto border-b border-zinc-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            <div className="space-y-2 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="block text-4xl sm:text-6xl font-outfit font-black text-zinc-950">140+</span>
              <span className="block text-xs sm:text-sm font-mono uppercase text-zinc-700 font-bold tracking-wider">
                PROJECTS DELIVERED
              </span>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="block text-4xl sm:text-6xl font-outfit font-black text-emerald-600">4.8x</span>
              <span className="block text-xs sm:text-sm font-mono uppercase text-zinc-700 font-bold tracking-wider">
                AVERAGE CLIENT ROAS
              </span>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="block text-4xl sm:text-6xl font-outfit font-black text-zinc-950">99.2%</span>
              <span className="block text-xs sm:text-sm font-mono uppercase text-zinc-700 font-bold tracking-wider">
                CLIENT RETENTION
              </span>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="block text-4xl sm:text-6xl font-outfit font-black text-emerald-600">7+</span>
              <span className="block text-xs sm:text-sm font-mono uppercase text-zinc-700 font-bold tracking-wider">
                YEARS TRACK RECORD
              </span>
            </div>
          </div>
        </section>

        {/* 6. Trusted by Ambitious Brands - Interactive Physics Simulator */}
        <BrandPhysicsBalls />

        {/* 7. High-Impact Call to Action Banner */}
        <section className="py-20 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white p-8 sm:p-16 lg:p-24 shadow-2xl border border-zinc-800">
            {/* Background Glow Accents */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 font-extrabold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>START YOUR REVENUE TRANSFORMATION</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black uppercase tracking-tight leading-[0.95]">
                HAVE A PROJECT IN MIND? <br />
                <span className="text-emerald-400">LET’S BUILD TOGETHER.</span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
                Whether you want to scale ad spend, rank on Google Search, or build custom digital products, our team delivers results within 30 days.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                <Magnetic strength={0.1}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-outfit font-black text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-emerald-600/30 active:scale-95"
                    data-cursor-pointer
                  >
                    <span>SCHEDULE A CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 sm:py-5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-outfit font-bold text-xs sm:text-sm tracking-wider uppercase border border-zinc-800 transition-all duration-300"
                  data-cursor-pointer
                >
                  <span>ABOUT OUR STUDIO</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
