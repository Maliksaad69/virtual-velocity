"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Responsive spring tuning for zero-latency, natural mouse movement
  const springConfig = { damping: 32, stiffness: 450, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 1024;

    if (isTouch) return;

    let isShown = false;
    let rafId: number | null = null;
    let latestX = -100;
    let latestY = -100;

    const updatePosition = () => {
      cursorX.set(latestX);
      cursorY.set(latestY);
      rafId = null;
    };

    const moveCursor = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }

      if (!isShown) {
        isShown = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor-pointer]");
      const projectCard = target.closest("[data-cursor-text]");

      if (projectCard) {
        const text = projectCard.getAttribute("data-cursor-text") || "VIEW";
        setCursorText(text);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      isShown = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full text-white font-semibold text-[10px] tracking-widest uppercase transition-colors duration-200"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorText ? 100 : isHovered ? 54 : 14,
        height: cursorText ? 100 : isHovered ? 54 : 14,
        backgroundColor: cursorText ? "#178a66" : isHovered ? "rgba(23, 138, 102, 0.9)" : "#178a66",
        mixBlendMode: "normal",
      }}
      transition={{ type: "spring", damping: 28, stiffness: 350, mass: 0.3 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="text-center font-outfit font-extrabold px-2 leading-tight text-[11px] text-white tracking-wider uppercase"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
