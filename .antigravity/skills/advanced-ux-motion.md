# Advanced UX & Motion Skill standard for Antigravity

This document outlines the core principles, performance standards, and animation architecture for high-end web experiences created by Antigravity.

---

## 1. Core Principles of High-Fidelity Motion

### A. Frame-Rate Independence
- All animations must be synchronized directly to the browser's refresh rate (60fps to 120fps+).
- Use `requestAnimationFrame` or `gsap.ticker` to drive continuous canvas, 3D, and scroll state recalculations.
- Always set `gsap.ticker.lagSmoothing(0)` when Lenis smooth scroll is active to prevent lag spikes on fast scroll inputs.

### B. Hardware Acceleration & Composite Layers
- Trigger composite-layer rendering on heavily animated elements using `transform: translate3d(0, 0, 0)` and `backface-visibility: hidden`.
- Explicitly declare `will-change: transform, opacity` on elements with high-frequency scroll or mouse interactions.
- Avoid animating non-composite properties (e.g. `top`, `left`, `margin`, `padding`, `width`, `height`). Stick strictly to `transform` (scale, translate, rotate) and `opacity`.

### C. Natural Spring Physics
- Prefer spring-based physics over linear or mechanical easing curves for UI elements, custom cursors, and hover cards.
- **Ideal Spring Configurations (Framer Motion)**:
  - **Custom Cursor**: `{ damping: 32, stiffness: 450, mass: 0.2 }` (Zero-latency tracking)
  - **Hover Cards**: `{ damping: 25, stiffness: 300, mass: 0.4 }` (Subtle weight)
  - **Page Modals / Overlays**: `{ damping: 30, stiffness: 350, mass: 0.5 }` (Snappy response)

---

## 2. Scroll Physics & Lenis Integration

### A. Lenis Configuration
```typescript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.5,
});
```

### B. Lenis + GSAP ScrollTrigger Synchronization
Always bridge Lenis scroll events directly into GSAP's rendering pipeline to eliminate scroll desynchronization:
```typescript
lenis.on("scroll", ScrollTrigger.update);

const updateTicker = (time: number) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(updateTicker);
gsap.ticker.lagSmoothing(0);
```

---

## 3. Responsive Touch & Motion Fallbacks

- **Mobile Viewports (<768px)**:
  - Disable custom cursor tracking on touch devices (`'ontouchstart' in window || navigator.maxTouchPoints > 0`).
  - Adapt 3D dynamic radii (e.g., in revolving carousels) from `420px` desktop down to `210px` mobile.
  - Scale GSAP ScrollTrigger scrub distance down proportionally (`300px` - `350px` per step) to prevent excessive vertical drag.
- **Accessibility**:
  - Respect `prefers-reduced-motion` settings.

---

## 4. Typography & Visual Hierarchy

- **Typeface**: Use clean, human-centric sans-serif / display typefaces such as **Outfit** (`font-outfit`) or **Inter** (`font-sans`).
- **Fluid Sizing**: Scale headings fluidly using CSS `clamp()` (e.g. `font-size: clamp(2.2rem, 5vw, 6rem)`).
- **Subpixel Rendering**: Ensure `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` are enabled globally.
