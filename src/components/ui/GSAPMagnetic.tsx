"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface GSAPMagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const GSAPMagnetic: React.FC<GSAPMagneticProps> = ({
  children,
  strength = 0.4,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Leverage GSAP quickTo from cheat sheet for fluid mouse physics
      xTo.current = gsap.quickTo(containerRef.current, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      yTo.current = gsap.quickTo(containerRef.current, "y", {
        duration: 0.4,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !xTo.current || !yTo.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    xTo.current(deltaX);
    yTo.current(deltaY);
  };

  const handleMouseLeave = () => {
    if (xTo.current && yTo.current) {
      xTo.current(0);
      yTo.current(0);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transform-gpu ${className}`}
    >
      {children}
    </div>
  );
};
