"use client";

import { useEffect, type RefObject } from "react";

/**
 * HeroScrollDriver — headless GSAP choreography for the hero video reveal.
 *
 * This component renders nothing. It exists purely so the GSAP + ScrollTrigger
 * code can live behind an `ssr: false` dynamic boundary: rendering is untouched,
 * but the animation library is fetched *after* the page is interactive instead
 * of being part of the initial page payload.
 */
export const HeroScrollDriver = ({
  outerRef,
  wrapperRef,
}: {
  outerRef: RefObject<HTMLDivElement | null>;
  wrapperRef: RefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    const outer = outerRef.current;
    const wrapper = wrapperRef.current;
    if (!outer || !wrapper) return;

    let cancelled = false;
    let mm: {
      add: (query: string, fn: () => void) => void;
      revert: () => void;
    } | null = null;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !outerRef.current || !wrapperRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      // ─── Mobile (width < 768px): Responsive edge-to-edge scaling without letterboxing gaps ───
      mm.add("(max-width: 767px)", () => {
        gsap.set(wrapper, {
          y: 0,
          width: "90%",
          height: "46vh",
          clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
          borderRadius: "16px",
          willChange: "transform, clip-path",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: "+=75%",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        // Smoothly expand to fill 100% width and 100% container height on mobile
        tl.to(wrapper, {
          y: 0,
          width: "100%",
          height: "100%",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0px",
          ease: "power2.out",
          duration: 0.7,
        });

        tl.to({}, { duration: 0.1 });
      });

      // ─── Desktop & Tablet (width >= 768px): Full-bleed widescreen viewport ───
      mm.add("(min-width: 768px)", () => {
        gsap.set(wrapper, {
          y: "-16vh",
          width: "60%",
          height: "55vh",
          clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
          borderRadius: "0px",
          willChange: "transform, clip-path",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: "+=120%",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1 (0% -> 14% scroll): Video smoothly settles to y: 0 in center before enlarging
        tl.to(wrapper, {
          y: 0,
          width: "60%",
          height: "55vh",
          clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
          ease: "power1.out",
          duration: 0.14,
        });

        // Phase 2 (14% -> 44% scroll): Starts enlarging & straightening toward 86% width
        tl.to(wrapper, {
          y: 0,
          width: "86%",
          height: "82vh",
          clipPath: "polygon(6% 0.3%, 96% 12%, 99.5% 99.5%, 0% 88%)",
          ease: "power1.inOut",
          duration: 0.3,
        });

        // Phase 3 (44% -> 88% scroll): Stretches to full screen and straightens
        tl.to(wrapper, {
          y: 0,
          width: "100%",
          height: "100vh",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power2.out",
          duration: 0.44,
        });

        // Phase 4 (88% -> 100% scroll): User stays on the video full screen and straight
        tl.to({}, { duration: 0.12 });
      });
    })();

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, [outerRef, wrapperRef]);

  return null;
};
