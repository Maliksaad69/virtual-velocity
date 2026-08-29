"use client";

import { motion } from "framer-motion";

interface MarqueeTickerProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  lightMode?: boolean;
}

export const MarqueeTicker = ({
  items,
  direction = "left",
  speed = 25,
  lightMode = false,
}: MarqueeTickerProps) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative overflow-hidden whitespace-nowrap py-6 border-y ${
        lightMode
          ? "bg-white text-black border-black/10"
          : "bg-[#08080a] text-white border-white/10"
      }`}
    >
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="inline-flex items-center gap-12"
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-outfit font-black text-2xl sm:text-5xl uppercase tracking-tighter">
              {item}
            </span>
            <span
              className={`w-3 h-3 rounded-full ${
                lightMode ? "bg-black" : "bg-[#00f0ff]"
              }`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
