"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic = ({ children, strength = 0.05, className = "" }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Cached capability check. This wrapper sits on every nav link, so the probe
  // must NOT run inside `onMouseMove` (which fires 60–120×/s per element —
  // calling matchMedia there was a measurable main-thread cost).
  const disabledRef = useRef<boolean | null>(null);

  const isDisabled = () => {
    if (disabledRef.current === null) {
      disabledRef.current =
        typeof window !== "undefined" &&
        ("ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          window.innerWidth < 1024);
    }
    return disabledRef.current;
  };

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDisabled()) return;
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
