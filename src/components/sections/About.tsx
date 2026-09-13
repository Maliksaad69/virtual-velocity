"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, TrendingUp, Target, Megaphone, Palette, ArrowRight } from "lucide-react";

export const About = () => {
  const [times, setTimes] = useState({ wilmington: "", lahore: "" });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        wilmington: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false }),
        lahore: now.toLocaleTimeString("en-US", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit", hour12: false }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const pillars = [
    {
      icon: Target,
      label: "Performance Marketing",
      desc: "Data-driven Google Ads, PPC & paid media that consistently hit target ROAS.",
      accent: "text-emerald-600",
    },
    {
      icon: TrendingUp,
      label: "Organic SEO Growth",
      desc: "Technical SEO, authority building, and content pipelines that compound traffic.",
      accent: "text-emerald-500",
    },
    {
      icon: Megaphone,
      label: "Social & Creative",
      desc: "Scroll-stopping content, brand narratives, and paid social at scale.",
      accent: "text-emerald-700",
    },
    {
      icon: Palette,
      label: "Brand & Creative Direction",
      desc: "Identity systems, visual language, and art direction that build recognition.",
      accent: "text-emerald-400",
    },
  ];

  return (
    <section id="about" className="pt-0 sm:pt-2 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-10 md:px-16 max-w-[1700px] mx-auto relative overflow-hidden bg-white">
      {/* Multi-layer blurred background accents */}
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-emerald-100/60 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[520px] h-[520px] rounded-full bg-emerald-100/60 blur-[160px] pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-zinc-100 blur-[120px] pointer-events-none" />

      <div className="space-y-4 sm:space-y-6 relative z-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-zinc-700"
        >
          <div className="flex items-center gap-2 text-emerald-600 font-extrabold">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>About Virtual Velocity</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-zinc-700">
            <span>Est. 2026</span>
            <span className="w-px h-4 bg-zinc-300" />
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              24/7 Operations
            </span>
          </div>
        </motion.div>

        {/* Hero headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="select-none max-w-6xl"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-outfit font-black text-zinc-900 tracking-tighter leading-[0.92] sm:leading-[0.9] uppercase">
            A <span className="text-emerald-600">digital marketing</span>
            <br className="hidden sm:block" />
            agency built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">scale.</span>
              <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-3 sm:h-4 bg-emerald-200/80 -z-0 -skew-x-3" />
            </span>
          </h2>
        </motion.div>

        {/* Narrative + office clocks grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4 border-t border-zinc-200"
        >
          {/* Narrative text */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="text-base sm:text-xl lg:text-2xl text-black font-normal leading-[1.7] sm:leading-[1.8]">
              <span className="text-black font-black first-letter:text-3xl sm:first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:text-emerald-600">
                Virtual Velocity
              </span>{" "}
              is a full-stack digital marketing &amp; creative technology agency specializing in performance-driven growth for ambitious brands. We engineer revenue pipelines through high-converting Google Ads PPC campaigns, razor-sharp technical SEO, emotionally resonant creative content, and always-on paid social machines.
            </p>

            <p className="text-sm sm:text-lg text-black font-normal leading-relaxed sm:leading-[1.85]">
              We operate as an embedded extension of your growth team — not a detached vendor. Every dollar of media spend is accounted for, every keyword is audited, and every creative iteration is measured against a clear north-star metric. Our clients see measurable, compounding returns because our work is rooted in engineering, not guesswork.
            </p>

            <p className="text-sm sm:text-lg text-black font-normal leading-relaxed sm:leading-[1.85]">
              From direct-to-consumer e-commerce and real estate to QSR chains, fintech platforms, and premium hospitality — our playbooks adapt, our creatives iterate, and our performance compounds.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-4xl font-black text-emerald-600 font-mono">140+</span>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-black font-bold pb-0.5">Campaigns Launched</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-zinc-200" />
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-4xl font-black text-black font-mono">4.8x</span>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-black font-bold pb-0.5">Avg. Client ROAS</span>
              </div>
            </div>
          </div>

          {/* Capability pillars + studio clocks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            {/* Four service pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.08 }}
                  className="group relative p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-emerald-200 pointer-events-none" />
                  <p.icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-2.5 ${p.accent}`} />
                  <h4 className="text-sm sm:text-[15px] font-bold text-black mb-1 tracking-tight leading-snug">
                    {p.label}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-black font-normal leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Global studio clocks */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border border-emerald-700/30 shadow-lg relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-100">
                  Global Studio Hubs
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 relative z-10">
                <div className="space-y-0.5 p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <span className="text-[9px] font-mono text-emerald-50/80 block uppercase tracking-widest">Wilmington, United States</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-white tracking-tight block">
                    {times.wilmington || "00:00"}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-100 block uppercase">HQ • Global Operations</span>
                </div>
                <div className="space-y-0.5 p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <span className="text-[9px] font-mono text-emerald-50/80 block uppercase tracking-widest">Lahore, Pakistan</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-white tracking-tight block">
                    {times.lahore || "00:00"}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-100 block uppercase">Delivery • Production</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/15 text-[10px] font-mono uppercase tracking-widest text-emerald-100/80 relative z-10">
                <span>Follow-the-sun</span>
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
