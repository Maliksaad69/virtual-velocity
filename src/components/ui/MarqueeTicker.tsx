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
          ? "bg-white text-zinc-950 border-zinc-200"
          : "bg-zinc-50 text-zinc-950 border-zinc-200"
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
            <span className="font-outfit font-black text-2xl sm:text-4xl uppercase tracking-tighter text-zinc-950">
              {item}
            </span>
            <span
              className="w-2.5 h-2.5 rounded-full bg-emerald-600"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
