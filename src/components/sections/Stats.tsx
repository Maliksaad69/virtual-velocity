"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/agencyData";

export const Stats = () => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 border-y border-white/10 bg-[#08080a] relative overflow-hidden select-none">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16">
          <div>
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
              // IMPACT & METRICS
            </span>
            <h2 className="text-section-title font-outfit text-white mt-2">
              BY THE <br />
              <span className="text-white/40 italic font-light">NUMBERS</span>
            </h2>
          </div>
        </div>

        {/* Dramatic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group p-8 rounded-3xl bg-surface/40 border border-white/10 hover:border-[#00f0ff] transition-all duration-500 flex flex-col justify-between"
            >
              <div className="text-hero font-outfit font-black text-white group-hover:text-[#00f0ff] transition-colors duration-500 tracking-tighter">
                {stat.value}
              </div>

              <div className="pt-8 border-t border-white/10 space-y-2">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                  {stat.label}
                </h3>
                <p className="text-xs text-white/50 font-light">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
