"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis (default: 6) */
  maxTilt?: number;
  /** Scale on hover (default: 1.01) */
  scale?: number;
  /** Perspective CSS value (default: 800) */
  perspective?: number;
  /** Disable tilt when card is in an open/active state */
  disabled?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 6,
  scale = 1.01,
  perspective = 800,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltX = useRef<gsap.QuickToFunc | null>(null);
  const tiltY = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      tiltX.current = gsap.quickTo(cardRef.current, "rotationX", {
        duration: 0.3,
        ease: "power3.out",
      });
      tiltY.current = gsap.quickTo(cardRef.current, "rotationY", {
        duration: 0.3,
        ease: "power3.out",
      });
    },
    { scope: cardRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current || !tiltX.current || !tiltY.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    tiltY.current(deltaX * maxTilt);
    tiltX.current(-deltaY * maxTilt);

    gsap.to(cardRef.current, {
      scale: scale,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    if (tiltX.current) tiltX.current(0);
    if (tiltY.current) tiltY.current(0);

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: `${perspective}px` }}
    >
      {children}
    </div>
  );
};