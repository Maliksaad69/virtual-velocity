"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TICKER_ITEMS = [
  "Creative Brand House",
  "Performance Marketing",
  "Google Ads PPC & Meta Ads",
  "Technical SEO & CRO",
  "Custom Web & App Engineering",
  "Social Media & Influencer Growth",
  "Commercial Videography",
  "Brand Architecture & Identity",
  "AI-Driven Growth Solutions",
];

/* Single run of the bottom ticker — rendered twice for a seamless -50% loop
   driven by the existing `animate-marquee-left` keyframes in globals.css */
const TickerRun = () => (
  <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
    <span className="font-black text-base sm:text-xl uppercase tracking-tighter text-zinc-950 flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
      VIRTUAL VELOCITY
    </span>
    <span className="font-mono text-sm sm:text-lg text-emerald-600 font-extrabold">/</span>
    {TICKER_ITEMS.map((word) => (
      <div key={word} className="flex items-center gap-4 sm:gap-8">
        <span className="font-black text-sm sm:text-lg uppercase tracking-tight text-zinc-950 font-outfit">
          {word}
        </span>
        <span className="font-mono text-xs sm:text-sm text-emerald-600 font-extrabold">✦</span>
      </div>
    ))}
  </div>
);

export const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative isolate overflow-hidden bg-white text-zinc-900 font-outfit select-none border-t border-zinc-200"
    >
      {/* Ambient blurred background accents */}
      <div className="absolute top-0 -left-24 sm:-left-40 w-[240px] h-[240px] sm:w-[560px] sm:h-[560px] rounded-full bg-emerald-100/40 sm:bg-emerald-100/60 blur-[100px] sm:blur-[140px] pointer-events-none transform-gpu" style={{ transform: "translate3d(0,0,0)" }} />
      <div className="absolute bottom-0 -right-24 sm:-right-40 w-[240px] h-[240px] sm:w-[560px] sm:h-[560px] rounded-full bg-emerald-100/35 sm:bg-emerald-100/50 blur-[100px] sm:blur-[140px] pointer-events-none transform-gpu" style={{ transform: "translate3d(0,0,0)" }} />

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-28">
        {/* Eyebrow meta row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-zinc-200 pb-4 sm:pb-6 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-700"
        >
          <span className="flex items-center gap-2 font-extrabold text-emerald-600">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Who We Are
          </span>
          <span className="text-zinc-500">( The Agency Manifesto )</span>
        </motion.div>

        {/* Editorial headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: EASE, delay: 0.05 }}
          className="mt-6 sm:mt-12 text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black uppercase text-zinc-900 tracking-tighter leading-[1.05] sm:leading-[0.92]"
        >
          We are{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-emerald-600">not</span>
            <span className="absolute left-0 -bottom-0.5 sm:-bottom-2 w-full h-2.5 sm:h-4 bg-emerald-200/80 -skew-x-3" />
          </span>{" "}
          your usual marketing agency.
          <br />
          <span className="text-zinc-500 font-extrabold block sm:inline">
            Don&apos;t treat us like one.
          </span>
        </motion.h2>

        {/* Pure narrative layout — NO box containers */}
        <div className="mt-8 sm:mt-14 pt-6 sm:pt-10 border-t border-zinc-200 max-w-5xl space-y-6 sm:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-4xl font-normal text-black leading-[1.5] sm:leading-[1.45]"
          >
            We are a creative house built for brands that want to be{" "}
            <span className="font-black text-emerald-600">seen</span>,{" "}
            <span className="font-black text-emerald-600">remembered</span>, and{" "}
            <span className="font-black text-emerald-600">talked about</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="text-base sm:text-xl lg:text-2xl text-zinc-800 font-normal leading-relaxed sm:leading-[1.75]"
          >
            From strategy and creative direction to content, social media, campaigns, and brand storytelling, we bring every element together to build brands with a distinct voice and presence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="text-lg sm:text-2xl lg:text-3xl font-black uppercase text-zinc-950 tracking-tight leading-snug pt-6 border-t border-zinc-200"
          >
            We don&apos;t believe in simply filling content calendars. We create{" "}
            <span className="text-emerald-600">ideas</span>, build{" "}
            <span className="text-emerald-600 font-extrabold">identities</span>, and turn brands into{" "}
            <span className="text-emerald-600">experiences</span>.
          </motion.p>
        </div>
      </div>

      {/* Bottom ticker strip */}
      <div
        aria-hidden="true"
        className="relative z-10 border-t-2 border-zinc-300 bg-zinc-100 hover-marquee overflow-hidden whitespace-nowrap py-3 sm:py-3.5 shadow-inner"
      >
        <div className="animate-marquee-left flex items-center">
          <TickerRun />
          <TickerRun />
        </div>
      </div>
    </section>
  );
};

