"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Eye, MessageCircle } from "lucide-react";

export const CreativePunchline = () => {
  return (
    <section className="relative w-full bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* HD blurred background image with color tint */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover scale-110 filter blur-[80px] brightness-[0.3] saturate-[1.4]"
        />
        {/* Emerald / teal color overlay */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(0, 174, 172, 0.45) 0%, rgba(10,10,12,0.88) 60%), radial-gradient(circle at 70% 80%, rgba(59,130,246,0.35) 0%, rgba(10,10,12,0.88) 55%)",
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Meta tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-[0.25em] mb-6 sm:mb-10"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Who We Are</span>
        </motion.div>

        {/* Punchline headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] sm:leading-none">
            We are <span className="text-emerald-400">not</span> your usual
            <br className="hidden sm:block" /> marketing agency.
          </h2>
          <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-light italic text-zinc-300 tracking-tight">
            Don&apos;t treat us like <span className="text-white font-semibold not-italic">one.</span>
          </p>
        </motion.div>

        {/* Horizontal divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="origin-center h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent mb-10 sm:mb-14"
        />

        {/* Body narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <p className="text-base sm:text-xl md:text-2xl text-zinc-200 font-light leading-relaxed sm:leading-[1.7] text-center">
            We are a <span className="text-emerald-400 font-bold not-italic">creative house</span> built for brands that want to be{" "}
            <span className="inline-flex items-center gap-1.5">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="font-bold text-white">seen</span>
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="font-bold text-white">remembered</span>
            </span>
            , and{" "}
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="font-bold text-white">talked about.</span>
            </span>
          </p>

          <p className="text-sm sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed sm:leading-[1.8] text-center">
            From strategy and creative direction to content, social media, campaigns, and brand storytelling, we bring every element together to build brands with a{" "}
            <span className="text-emerald-400 font-semibold">distinct voice</span> and{" "}
            <span className="text-emerald-400 font-semibold">presence.</span>
          </p>

          <div className="w-20 sm:w-24 h-px mx-auto bg-emerald-500/50 my-4 sm:my-6" />

          <p className="text-sm sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed sm:leading-[1.8] text-center">
            We don&apos;t believe in simply{" "}
            <span className="text-zinc-400 line-through decoration-zinc-500/60">filling content calendars.</span>{" "}
            We <span className="text-white font-semibold">create ideas</span>,{" "}
            <span className="text-white font-semibold">build identities</span>, and{" "}
            <span className="text-white font-semibold">turn brands into experiences.</span>
          </p>
        </motion.div>

        {/* Bottom signature strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-zinc-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            VIRTUAL VELOCITY
          </span>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <span>CREATIVE • STRATEGY • GROWTH</span>
        </motion.div>
      </div>
    </section>
  );
};
