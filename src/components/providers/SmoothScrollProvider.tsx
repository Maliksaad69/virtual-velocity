"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Initialize Lenis with smooth momentum & natural inertia
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (!document.body.classList.contains("is-scrolling")) {
        document.body.classList.add("is-scrolling");
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 100);
    };

    // 1. Sync Lenis scroll updates directly to GSAP ScrollTrigger & disable hover thrashing
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Bind Lenis RAF directly to GSAP's central rendering engine
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    return () => {
      clearTimeout(scrollTimeout);
      document.body.classList.remove("is-scrolling");
      window.removeEventListener("scroll", handleScroll);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};