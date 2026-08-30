# Smooth Scrolling Physics & Performance Standard

This document details the smooth-scrolling architecture and frame-rate optimization strategies for Virtual Velocity and future projects.

---

## 1. Eliminate Smooth-Scroll Conflicts
- Never combine native `html { scroll-behavior: smooth }` with Javascript smooth-scrollers like Lenis. Native smooth scrolling delays JS wheel inputs, causing jerky, double-damped momentum.
- Allow Lenis to control `window` scrolling entirely while maintaining standard touch scrolling on touch devices (`touchMultiplier: 1.5`).

## 2. GSAP ScrollTrigger Easing & Scrubbing
- **Pinned Pacing**: Set `scrub: 0.4` to `0.8` for pinned step animations (e.g. 5-Stage Strategy Pipeline, Revolving Spectrum).
- **Parallax Layers**: Use `scrub: true` for pure 1:1 scroll tracking without artificial lag.
- **Batching**: Use `ScrollTrigger.batch()` when animating long grids of cards to prevent layout recalculation bottlenecks.

## 3. High-DPI Mouse Movement & Cursor Dynamics
- Use passive mouse listeners (`window.addEventListener("mousemove", handler, { passive: true })`).
- Utilize Framer Motion `useSpring` with lightweight mass parameters (`mass: 0.2` to `0.3`) so mouse follow effects remain fluid regardless of monitor refresh rate (60Hz, 120Hz, 144Hz, 240Hz).
