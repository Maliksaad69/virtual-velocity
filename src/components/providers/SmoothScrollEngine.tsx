"use client";

import { useEffect } from "react";
import type Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * SmoothScrollEngine — headless Lenis + GSAP ScrollTrigger bridge.
 *
 * Renders nothing. It lives behind an `ssr: false` dynamic boundary so Lenis,
 * GSAP and ScrollTrigger (~100 KB) are never part of the initial page payload.
 * On touch devices / reduced-motion it does nothing and the browser's native
 * momentum scrolling is used instead.
 */
export const SmoothScrollEngine = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let disposed = false;
    let teardown: (() => void) | undefined;

    const start = async () => {
      const [{ default: LenisCtor }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new LenisCtor({
        lerp: 0.1,
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

      // Recalculate ScrollTrigger positions after the next paint
      const refreshTimeout = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      teardown = () => {
        window.clearTimeout(refreshTimeout);
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
        delete (window as unknown as { lenis?: Lenis }).lenis;
      };
    };

    // Kick the engine off once the browser is idle so it can never compete with
    // the first paint / hydration for main-thread time.
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => void start(), { timeout: 1500 });
    } else {
      window.setTimeout(() => void start(), 200);
    }

    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return null;
};
