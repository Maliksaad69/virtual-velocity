"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth momentum & natural inertia
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // 1. Sync Lenis scroll updates directly to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Bind Lenis RAF directly to GSAP's central rendering engine
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // 3. Disable lag smoothing so animations stay 100% in sync during fast mouse scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};