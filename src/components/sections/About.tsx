"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const About = () => {
  const [times, setTimes] = useState({ tokyo: "", london: "", nyc: "" });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        tokyo: now.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hour12: false }),
        london: now.toLocaleTimeString("en-US", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit", hour12: false }),
        nyc: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00f0ff]/5 blur-[180px] pointer-events-none" />

      <div className="space-y-16">
        {/* Top Tagline */}
        <div className="flex items-center gap-3 text-meta text-[#00f0ff]">
          <span className="w-8 h-px bg-[#00f0ff]"></span>
          <span>// ABOUT AURA LABS</span>
        </div>

        {/* Oversized Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          <h2 className="text-editorial-quote font-outfit text-white tracking-tight leading-[1.05] uppercase">
            WE TURN <span className="text-[#00f0ff] font-extrabold">COMPLEX IDEAS</span> INTO{" "}
            <span className="text-white/40 italic font-light">DIGITAL EXPERIENCES</span> PEOPLE{" "}
            <span className="underline decoration-[#ff2a6d] decoration-wavy underline-offset-8">REMEMBER.</span>
          </h2>
        </motion.div>

        {/* Supporting Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-white/10">
          <div className="md:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
              Founded by design engineers and art directors, AURA LABS operates at the frontier where creative strategy, high-speed graphics, and custom AI engineering merge into unified digital products.
            </p>
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              We reject template architecture and generic SaaS formulas. Every layout, spring physics interaction, and typographic rhythm is art-directed to amplify brand equity and create emotional resonance.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col justify-between space-y-8">
            {/* Global Studio Hub Clocks */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-surface border border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-white/40 block">TOKYO</span>
                <span className="text-xl font-outfit font-extrabold text-white">{times.tokyo || "00:00"}</span>
                <span className="text-[9px] font-mono text-[#00f0ff] block">// JST</span>
              </div>
              <div className="space-y-1 border-x border-white/10 px-4">
                <span className="text-[10px] font-mono text-white/40 block">LONDON</span>
                <span className="text-xl font-outfit font-extrabold text-white">{times.london || "00:00"}</span>
                <span className="text-[9px] font-mono text-[#00f0ff] block">// GMT</span>
              </div>
              <div className="space-y-1 pl-2">
                <span className="text-[10px] font-mono text-white/40 block">NEW YORK</span>
                <span className="text-xl font-outfit font-extrabold text-white">{times.nyc || "00:00"}</span>
                <span className="text-[9px] font-mono text-[#00f0ff] block">// EST</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-white/50 border-t border-white/10 pt-4">
              <span>● DISTRIBUTED CREATIVE STUDIO</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
