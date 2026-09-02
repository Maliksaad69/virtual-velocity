"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Globe, ShieldCheck, Zap } from "lucide-react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroCanvas3D } from "@/components/ui/HeroCanvas3D";
import { AGENCY_INFO } from "@/data/agencyData";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 max-w-[1700px] mx-auto overflow-hidden bg-white text-zinc-900">
      {/* 3D WebGL Wireframe Torus Knot & Particle Field */}
      <HeroCanvas3D />

      {/* Dynamic Background Light Spheres */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-zinc-200/40 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-zinc-100/60 blur-[160px] pointer-events-none" />

      {/* Top Metadata Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6 text-xs font-mono text-zinc-600"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span className="font-semibold text-zinc-900">GLOBAL OPERATIONS • USA & PAKISTAN</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-900 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="uppercase tracking-widest">{AGENCY_INFO.tagline}</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[11px] border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            ACCEPTING NEW CLIENTS
          </span>
        </div>
      </motion.div>

      {/* Main Hero Headline - 3 Lines with Decreasing Sizing & Emerald Accents */}
      <div className="relative z-10 my-auto py-8 sm:py-16 flex flex-col justify-center select-none space-y-3">
        {/* Line 1 - Largest (115px max) */}
        <div className="text-4xl sm:text-7xl lg:text-[7.2rem] font-outfit font-black tracking-tighter text-zinc-900 uppercase leading-[0.88] flex flex-wrap items-center gap-4">
          <SplitTextReveal text="FULL-SERVICE" accentColor="#059669" highlightWords={["SERVICE", "FULL-SERVICE"]} delay={0.2} />
          <SplitTextReveal text="DIGITAL" accentColor="#059669" highlightWords={["DIGITAL"]} delay={0.35} />
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden xl:inline-block text-xs sm:text-sm font-outfit font-extrabold tracking-widest text-emerald-600 border border-emerald-200 px-4 py-2 rounded-full bg-emerald-50 uppercase shadow-xs align-middle"
          >
            [PPC • SEO • CRO • TECH]
          </motion.span>
        </div>

        {/* Line 2 - Medium Decreased Size (68px max) */}
        <div className="text-3xl sm:text-5xl lg:text-[4.2rem] font-outfit font-black tracking-tight text-zinc-900 uppercase leading-[0.90]">
          <SplitTextReveal text="MARKETING & TECH SOLUTIONS" accentColor="#059669" highlightWords={["SOLUTIONS"]} delay={0.5} />
        </div>

        {/* Line 3 - Smallest Decreased Size (45px max) */}
        <div className="text-2xl sm:text-4xl lg:text-[2.8rem] font-outfit font-black tracking-tight text-zinc-900 uppercase leading-[0.92]">
          <SplitTextReveal text="THAT SCALES YOUR BRAND REVENUE." accentColor="#059669" highlightWords={["REVENUE", "BRAND"]} delay={0.65} />
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-zinc-200 pt-8"
      >
        <div className="md:col-span-7 space-y-2">
          <p className="text-xs font-outfit font-extrabold text-emerald-600 tracking-wider flex items-center gap-1.5 uppercase">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> PRACTICAL DELIVERABLE OUTCOMES
          </p>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed">
            {AGENCY_INFO.subTagline}
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-6">
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-500">
            <div>
              <span className="block text-zinc-900 font-black text-xl">140+</span>
              <span className="text-[10px] uppercase font-bold text-zinc-500">PROJECTS DELIVERED</span>
            </div>
            <div className="w-px h-8 bg-zinc-200" />
            <div>
              <span className="block text-emerald-600 font-black text-xl">4.8x</span>
              <span className="text-[10px] uppercase font-bold text-zinc-500">AVG CLIENT ROAS</span>
            </div>
          </div>

          <Magnetic strength={0.05}>
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 text-white font-outfit font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-emerald-700 transition-all duration-200 shadow-md shadow-emerald-600/20 active:scale-[0.98]"
              data-cursor-pointer
            >
              <span>GET A QUOTE</span>
              <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform duration-200" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};
