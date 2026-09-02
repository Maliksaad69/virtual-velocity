"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/agencyData";
import { TrendingUp } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 border-y border-zinc-200 bg-zinc-50 relative overflow-hidden select-none">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16">
          <div>
            <span className="text-meta text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> IMPACT & METRICS
            </span>
            <h2 className="text-4xl sm:text-6xl font-outfit font-black text-zinc-950 mt-2 uppercase tracking-tight">
              BY THE <br />
              <span className="text-emerald-600 font-extrabold">NUMBERS</span>
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
              className="group p-8 rounded-3xl bg-white border-2 border-zinc-200 hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between shadow-md"
            >
              <div className="text-5xl sm:text-7xl font-outfit font-black text-zinc-950 group-hover:text-emerald-600 transition-colors duration-500 tracking-tighter">
                {stat.value}
              </div>

              <div className="pt-8 border-t border-zinc-200 space-y-2">
                <h3 className="text-xs font-outfit font-extrabold tracking-widest text-zinc-900 uppercase">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-600 font-light">
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
