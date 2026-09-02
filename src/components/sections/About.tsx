"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, Sparkles } from "lucide-react";

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
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto relative overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-zinc-200/40 blur-[180px] pointer-events-none" />

      <div className="space-y-16 relative z-10">
        {/* Top Tagline */}
        <div className="flex items-center gap-2 text-meta text-emerald-600 font-extrabold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>ABOUT VIRTUAL VELOCITY</span>
        </div>

        {/* Oversized Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          <h2 className="text-editorial-quote font-outfit text-zinc-900 tracking-tight leading-[1.05] uppercase">
            WE TURN <span className="text-zinc-900 font-extrabold">COMPLEX IDEAS</span> INTO{" "}
            <span className="text-emerald-600 font-extrabold">DIGITAL EXPERIENCES</span> PEOPLE{" "}
            <span className="underline decoration-zinc-400 decoration-wavy underline-offset-8">REMEMBER.</span>
          </h2>
        </motion.div>

        {/* Supporting Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-zinc-200">
          <div className="md:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-800 font-light leading-relaxed">
              Founded by design engineers and art directors, VIRTUAL VELOCITY operates at the frontier where creative strategy, high-speed graphics, and custom AI engineering merge into unified digital products.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              We reject template architecture and generic SaaS formulas. Every layout, spring physics interaction, and typographic rhythm is art-directed to amplify brand equity and create emotional resonance.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col justify-between space-y-8">
            {/* Global Studio Hub Clocks */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 block">TOKYO</span>
                <span className="text-xl font-outfit font-extrabold text-zinc-900">{times.tokyo || "00:00"}</span>
                <span className="text-[9px] font-mono text-zinc-500 block">JST</span>
              </div>
              <div className="space-y-1 border-x border-zinc-200 px-4">
                <span className="text-[10px] font-mono text-zinc-500 block">LONDON</span>
                <span className="text-xl font-outfit font-extrabold text-zinc-900">{times.london || "00:00"}</span>
                <span className="text-[9px] font-mono text-zinc-500 block">GMT</span>
              </div>
              <div className="space-y-1 pl-2">
                <span className="text-[10px] font-mono text-zinc-500 block">NEW YORK</span>
                <span className="text-xl font-outfit font-extrabold text-zinc-900">{times.nyc || "00:00"}</span>
                <span className="text-[9px] font-mono text-zinc-500 block">EST</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-200 pt-4">
              <span>● DISTRIBUTED CREATIVE STUDIO</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
