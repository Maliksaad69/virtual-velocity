"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

/**
 * SmoothScrollProvider — thin shell around the smooth-scroll engine.
 *
 * The actual Lenis + GSAP work lives in `SmoothScrollEngine`, which is loaded
 * with `ssr: false` after hydration. This keeps ~100 KB of scroll/animation
 * machinery out of the initial page payload while children still render (and
 * SSR) exactly as before.
 */
const SmoothScrollEngine = dynamic(
  () =>
    import("@/components/providers/SmoothScrollEngine").then(
      (mod) => mod.SmoothScrollEngine
    ),
  { ssr: false }
);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <SmoothScrollEngine />
    </>
  );
};
