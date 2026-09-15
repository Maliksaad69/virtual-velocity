"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    // On pure mobile touch devices, native hardware momentum scrolling is 120Hz/60Hz zero-latency.
    // Lenis is optimized for smooth mouse-wheel & trackpad momentum on desktop.
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 0,
      wheelMultiplier: 1.0,
      infinite: false,
      autoResize: true,
    });

    // Make lenis globally accessible for anchor navigation and debugging
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // 1. Sync Lenis scroll updates directly with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Drive Lenis through GSAP's central ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // CRITICAL: Disable GSAP lagSmoothing so ticker time deltas don't clamp and stutter Lenis
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions after next tick
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return <>{children}</>;
};