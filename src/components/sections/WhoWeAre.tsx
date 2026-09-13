"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const DISCIPLINES = [
  { number: "01", label: "Strategy & Creative Direction" },
  { number: "02", label: "Content & Social Media" },
  { number: "03", label: "Campaigns" },
  { number: "04", label: "Brand Storytelling" },
];

/* Single run of the bottom ticker — rendered twice for a seamless -50% loop
   driven by the existing `animate-marquee-left` keyframes in globals.css */
const TickerRun = () => (
  <div className="flex shrink-0 items-center gap-3 sm:gap-6 pr-3 sm:pr-6">
    <span className="font-black text-sm sm:text-lg uppercase tracking-tighter text-zinc-950">
      Virtual Velocity
    </span>
    <span className="font-mono text-xs sm:text-base text-emerald-600">/</span>
    {["Creative", "Strategy", "Growth"].map((word, i) => (
      <div key={word} className="flex items-center gap-3 sm:gap-6">
        {i > 0 && <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-600" />}
        <span
          className="font-black text-sm sm:text-lg uppercase tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(24, 24, 27, 0.35)" }}
        >
          {word}
        </span>
      </div>
    ))}
    <span className="font-mono text-xs sm:text-base text-emerald-600">✦</span>
  </div>
);

export const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative isolate overflow-hidden bg-white text-zinc-900 font-outfit select-none border-t border-zinc-200"
    >
      {/* Ambient blurred background accents */}
      <div className="absolute top-0 -left-24 sm:-left-40 w-[240px] h-[240px] sm:w-[560px] sm:h-[560px] rounded-full bg-emerald-100/40 sm:bg-emerald-100/60 blur-[100px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 sm:-right-40 w-[240px] h-[240px] sm:w-[560px] sm:h-[560px] rounded-full bg-emerald-100/35 sm:bg-emerald-100/50 blur-[100px] sm:blur-[170px] pointer-events-none" />

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
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(24, 24, 27, 0.4)" }}
          >
            Don&apos;t treat us like one.
          </span>
        </motion.h2>

        {/* Lede + disciplines rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8 sm:mt-14 pt-6 sm:pt-10 border-t border-zinc-200">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7 text-lg sm:text-2xl lg:text-3xl font-light text-zinc-800 leading-[1.6] sm:leading-[1.55]"
          >
            We are a creative house built for brands that want to be{" "}
            <span className="font-black text-emerald-600">seen</span>,{" "}
            <span className="font-black text-emerald-600">remembered</span>, and{" "}
            <span className="font-black text-emerald-600">talked about</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block mb-3 sm:mb-4">
              What we bring together
            </span>
            <ul>
              {DISCIPLINES.map((d, i) => (
                <li
                  key={d.number}
                  className={`group flex items-baseline gap-3 sm:gap-4 py-2.5 sm:py-3 border-t border-zinc-200 ${
                    i === DISCIPLINES.length - 1 ? "border-b" : ""
                  } hover:pl-2 transition-all duration-300`}
                >
                  <span className="text-xs font-mono font-bold text-emerald-600">{d.number}</span>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {d.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Narrative + punchline card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8 sm:mt-14">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7 text-sm sm:text-lg text-zinc-700 font-normal leading-relaxed sm:leading-[1.85]"
          >
            From strategy and creative direction to content, social media, campaigns, and brand
            storytelling, we bring every element together to build brands with a distinct voice and
            presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-emerald-500/25 blur-3xl pointer-events-none" />
            <span className="relative z-10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-emerald-300 block leading-relaxed">
              We don&apos;t believe in simply filling content calendars
            </span>
            <p className="relative z-10 mt-3 sm:mt-4 text-base sm:text-2xl lg:text-[1.7rem] font-black uppercase tracking-tight leading-[1.15] sm:leading-[1.1]">
              We create <span className="text-emerald-400">ideas</span>, build{" "}
              <span className="text-emerald-400">identities</span>, and turn brands into{" "}
              <span className="text-emerald-400">experiences</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom ticker strip */}
      <div
        aria-hidden="true"
        className="relative z-10 border-t border-zinc-200 bg-zinc-50 hover-marquee overflow-hidden whitespace-nowrap py-2 sm:py-2.5"
      >
        <div className="animate-marquee-left flex items-center">
          <TickerRun />
          <TickerRun />
        </div>
      </div>
    </section>
  );
};

