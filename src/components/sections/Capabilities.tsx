"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/data/agencyData";
import { Cpu, Palette, Sparkles, Terminal, Layers, Compass } from "lucide-react";

const ICONS = [Palette, Terminal, Cpu, Sparkles, Layers, Compass];

export const Capabilities = () => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16">
        <div>
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
            // EXPERIMENTAL LABS
          </span>
          <h2 className="text-section-title font-outfit text-white mt-2">
            CORE <br />
            <span className="text-white/40 italic font-light">CAPABILITIES</span>
          </h2>
        </div>
        <p className="mt-6 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-light">
          An exploratory matrix of visual engineering, shader development, and intelligent software primitives.
        </p>
      </div>

      {/* Floating Capability Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CAPABILITIES.map((cap, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-surface border border-white/10 hover:border-[#00f0ff] transition-all duration-500 flex flex-col justify-between space-y-8 relative overflow-hidden"
              data-cursor-pointer
            >
              {/* Top Accent Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#00f0ff] group-hover:text-black text-[#00f0ff] transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">
                  // {cap.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl font-outfit font-extrabold text-white group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-white transition-colors">
                <span>MODULE 0{idx + 1}</span>
                <span className="text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">● ACTIVE</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
