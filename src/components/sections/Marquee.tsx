"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS_1 = [
  "DIGITAL EXPERIENCES",
  "BRAND ARCHITECTURE",
  "WEBGL & SHADERS",
  "SPATIAL COMPUTING",
  "AI USER INTERFACES",
  "ART DIRECTION",
  "MOTION DYNAMICS",
];

const MARQUEE_ITEMS_2 = [
  "FUTURE-PROOF CODE",
  "HIGH IMPACT DESIGN",
  "EMOTIONAL CONNECTIONS",
  "UNCOMPROMISING SPEED",
  "GLOBAL RECOGNITION",
  "CREATIVE TECH LAB",
];

export const Marquee = () => {
  return (
    <section className="py-16 md:py-24 border-y border-white/10 bg-[#08080a] overflow-hidden select-none space-y-6">
      {/* Marquee Row 1 - Left to Right */}
      <div className="hover-marquee flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-8">
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl md:text-7xl font-outfit font-black tracking-tight text-white/90 uppercase hover:text-[#00f0ff] transition-colors duration-300">
                {item}
              </span>
              <span className="text-xl sm:text-3xl text-[#00f0ff] font-mono">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left with Outlined Typography */}
      <div className="hover-marquee flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-right animate-marquee-fast flex items-center gap-8">
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl md:text-7xl font-outfit font-black tracking-tight text-transparent uppercase stroke-text hover:text-[#ff2a6d] transition-colors duration-300"
                    style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)" }}>
                {item}
              </span>
              <span className="text-xl sm:text-3xl text-[#ff2a6d] font-mono">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
