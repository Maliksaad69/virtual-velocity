"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroCanvas3D } from "@/components/ui/HeroCanvas3D";
import { AGENCY_INFO } from "@/data/agencyData";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 max-w-[1700px] mx-auto overflow-hidden">
      {/* 3D WebGL Wireframe Torus Knot & Particle Field */}
      <HeroCanvas3D />

      {/* Dynamic Background Glow Spheres */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#00f0ff]/15 blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff2a6d]/10 blur-[160px] pointer-events-none" />

      {/* Top Metadata Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-meta text-white/60"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-[#00f0ff] animate-pulse" />
          <span>USA (DE) // PAKISTAN (LAHORE)</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
          <ShieldCheck className="w-4 h-4" />
          <span className="uppercase tracking-widest">{AGENCY_INFO.tagline}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#00f0ff]">EST. 2026</span>
          <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
          <span>ACCEPTING NEW CLIENTS</span>
        </div>
      </motion.div>

      {/* Main Hero Headline */}
      <div className="relative z-10 my-auto py-8 sm:py-16 flex flex-col justify-center select-none space-y-2">
        <div className="text-hero font-outfit font-black tracking-tighter text-white uppercase leading-[0.88]">
          <SplitTextReveal text="FULL-SERVICE" delay={0.2} />
        </div>

        <div className="text-hero font-outfit font-black tracking-tighter uppercase leading-[0.88] flex items-center gap-4">
          <SplitTextReveal text="DIGITAL" accentColor="#00f0ff" highlightWords={["DIGITAL"]} delay={0.35} />
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden md:inline-block text-xs sm:text-base font-mono font-normal tracking-widest text-[#00f0ff] border border-[#00f0ff]/40 px-4 py-1.5 rounded-full bg-[#00f0ff]/10 backdrop-blur-md uppercase shadow-lg shadow-[#00f0ff]/10"
          >
            [WEB • APPS • SEO • ECOM]
          </motion.span>
        </div>

        <div className="text-hero font-outfit font-black tracking-tighter text-white/90 uppercase leading-[0.88]">
          <SplitTextReveal text="MARKETING & TECH" delay={0.5} />
        </div>

        <div className="text-hero font-outfit tracking-tighter uppercase leading-[0.88]">
          <SplitTextReveal text="THAT SCALES." accentColor="#ff2a6d" highlightWords={["SCALES."]} delay={0.65} />
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8"
      >
        <div className="md:col-span-7 space-y-2">
          <p className="text-meta text-[#00f0ff]">// PRACTICAL DELIVERABLE OUTCOMES</p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            {AGENCY_INFO.subTagline}
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-6">
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest text-white/50">
            <div>
              <span className="block text-white font-bold">140+</span>
              <span>PROJECTS DELIVERED</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="block text-white font-bold">4.8x</span>
              <span>AVG CLIENT ROAS</span>
            </div>
          </div>

          <Magnetic strength={0.4}>
            <a
              href="#contact"
              className="group flex items-center gap-4 px-7 py-4 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 transform hover:scale-105 shadow-xl shadow-[#00f0ff]/10"
              data-cursor-pointer
            >
              <span>GET A QUOTE</span>
              <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};
