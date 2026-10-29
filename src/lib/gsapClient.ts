/**
 * Lazy GSAP loader.
 *
 * GSAP + ScrollTrigger are ~90 KB of JS that is only needed for scroll-driven
 * choreography. Loading them through `await import()` (instead of a top-level
 * static `import`) keeps them out of the initial page payload — the browser
 * fetches them the moment a component actually needs them, after first paint.
 *
 * The promise is cached so the engine is only ever downloaded and registered
 * once per session, no matter how many components call `loadGsap()`.
 */
export type GsapBundle = {
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
};

let bundle: Promise<GsapBundle> | null = null;

export function loadGsap(): Promise<GsapBundle> {
  if (!bundle) {
    bundle = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([g, st]) => {
        g.default.registerPlugin(st.ScrollTrigger);
        return { gsap: g.default, ScrollTrigger: st.ScrollTrigger };
      }
    );
  }
  return bundle;
}
