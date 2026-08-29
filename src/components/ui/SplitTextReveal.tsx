"use client";

import { motion } from "framer-motion";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  accentColor?: string;
}

export const SplitTextReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  highlightWords = [],
  accentColor = "#00f0ff",
}: SplitTextRevealProps) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "110%",
      rotateX: -45,
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.05em] overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={idx} className="inline-block overflow-hidden py-1">
            <motion.span
              variants={wordVariants}
              className={`inline-block transform-gpu ${
                isHighlighted ? "italic font-light" : ""
              }`}
              style={{ color: isHighlighted ? accentColor : undefined }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};
