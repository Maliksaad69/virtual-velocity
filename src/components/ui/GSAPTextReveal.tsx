"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GSAPTextRevealProps {
  text: string;
  className?: string;
  skewAmount?: number;
}

export const GSAPTextReveal = ({ text, className = "", skewAmount = 6 }: GSAPTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const words = el.querySelectorAll(".gsap-word");

      gsap.fromTo(
        words,
        {
          y: "110%",
          skewY: skewAmount,
          opacity: 0,
        },
        {
          y: "0%",
          skewY: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [skewAmount] }
  );

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`overflow-hidden inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <span className="gsap-word inline-block transform-gpu origin-bottom-left">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};
