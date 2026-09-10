"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

// Rounded-flat honeycomb hexagon silhouette, built in pure CSS.
const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

interface LogoAsset {
  src: string;
  alt: string;
}

const LOGO = (file: string, alt: string): LogoAsset => ({
  src: `/All logo in SVG Format/${file}`,
  alt,
});

// Inner orbit (12 client brands)
const INNER_LOGOS: LogoAsset[] = [
  LOGO("Anta logo.svg", "Anta"),
  LOGO("Glamar.svg", "Glamar"),
  LOGO("Gloria Jeans logo.svg", "Gloria Jeans"),
  LOGO("pizza hut.svg", "Pizza Hut"),
  LOGO("Blue world city.svg", "Blue World City"),
  LOGO("Red apple.svg", "Red Apple"),
  LOGO("Megazone logo.svg", "Megazone"),
  LOGO("chinaar.svg", "Chinaar"),
  LOGO("maple vista.svg", "Maple Vista"),
  LOGO("revival.svg", "Revival"),
  LOGO("oxbite.svg", "Oxbite"),
  LOGO("chaaye khana.svg", "Chaaye Khana"),
];

// Outer orbit (18 client brands)
const OUTER_LOGOS: LogoAsset[] = [
  LOGO("Unied nations.svg", "United Nations"),
  LOGO("andaz.svg", "Andaz"),
  LOGO("ariston.svg", "Ariston"),
  LOGO("capital arena.svg", "Capital Arena"),
  LOGO("cresto.svg", "Cresto"),
  LOGO("de asthethic.svg", "De Aesthetic"),
  LOGO("desi chapter.svg", "Desi Chapter"),
  LOGO("Untitled-1.svg", "Galaxy Hayatabad"),
  LOGO("iplexmarketing.svg", "IPlex Marketing"),
  LOGO("kapacious.svg", "Kapacious"),
  LOGO("levante.svg", "Levante"),
  LOGO("media sniffers.svg", "Media Sniffers"),
  LOGO("Mughlai logo.svg", "Mughlai"),
  LOGO("Pamir.svg", "Pamir"),
  LOGO("shake wake.svg", "Shake Wake"),
  LOGO("slice and cone.svg", "Slice and Cone"),
  LOGO("TSL.svg", "TSL"),
  LOGO("wild wings logo.svg", "Wild Wings"),
];

const ALL_LOGOS = [...INNER_LOGOS, ...OUTER_LOGOS];

const INNER_RADIUS = 240;
const OUTER_RADIUS = 372;
const CARD = 66; // hexagon card size (px)
const INNER_CARD = 88;
const OUTER_CARD = 92;

// Inner / outer hexagon card visuals (no borders).
const innerCard = (hovering: boolean) =>
  ({
    clipPath: HEX,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 100%)",
    filter: hovering
      ? "drop-shadow(0 2px 4px rgba(24,24,27,0.10)) drop-shadow(0 10px 22px rgba(0,174,172,0.16))"
      : "drop-shadow(0 1px 2px rgba(24,24,27,0.06)) drop-shadow(0 5px 12px rgba(24,24,27,0.08))",
  } as React.CSSProperties);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export const ClientPartners = () => {
  const reduced = usePrefersReducedMotion();

  const innerRingRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 selection:bg-zinc-900 selection:text-white">
      {/* Muted blurred background accents (same vocabulary as site About section) */}
      <div className="pointer-events-none absolute right-0 top-[18%] h-[480px] w-[520px] rounded-full bg-emerald-100/50 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-[12%] h-[460px] w-[520px] rounded-full bg-zinc-100 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 26 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-2 text-emerald-600 font-extrabold text-sm uppercase tracking-[0.25em]">
            <Sparkles className="h-4 w-4" />
            <span>Our Clients &amp; Partners</span>
          </div>
          <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
            Trusted by <span className="text-emerald-600">Ambitious Brands.</span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-700 sm:text-lg md:text-xl">
            From emerging businesses to established companies, Virtual Velocity
            helps brands stand out, connect with their audiences, and grow through
            creative strategy, digital marketing, and technology.
          </p>
        </motion.div>
      </div>
{/* ── Desktop: revolving logo rings around the central anchor (lg+) ── */}
      <div
        className="relative z-10 mt-16 hidden min-h-[900px] pb-24 lg:block lg:mx-auto lg:max-w-7xl"
      >
        {/* Soft radial glow behind the central logo */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 30%, rgba(0,174,172,0.10) 62%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Center — Virtual Velocity logo (visual anchor, clearly dominant, no border) */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="flex h-[300px] w-[264px] items-center justify-center"
            style={{
              clipPath: HEX,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 100%)",
              filter:
                "drop-shadow(0 2px 4px rgba(24,24,27,0.08)) drop-shadow(0 14px 30px rgba(0,174,172,0.12))",
            }}
          >
            <img
              src="/VV png.png"
              alt="Virtual Velocity — Digital Marketing & Creative Agency"
              loading="lazy"
              className="h-auto w-[210px] object-contain"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Revolving rings (fade in once) */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Inner ring */}
          <div
            ref={innerRingRef}
            className="orbit-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: `${INNER_RADIUS * 2}px`, height: `${INNER_RADIUS * 2}px` }}
          >
            {INNER_LOGOS.map((logo, i) => {
              const a = (i / INNER_LOGOS.length) * Math.PI * 2;
              return (
                <div
                  key={logo.alt}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    width: `${INNER_CARD}px`,
                    height: `${INNER_CARD}px`,
                    marginLeft: `${-INNER_CARD / 2}px`,
                    marginTop: `${-INNER_CARD / 2}px`,
                    transform: `rotate(${a}rad) translateX(${INNER_RADIUS}px) rotate(${-a}rad)`,
                  }}
                >
                  <div
                    className="flex cursor-pointer items-center justify-center"
                    style={innerCard(false)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="max-h-[92%] max-w-[92%] object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outer ring */}
          <div
            ref={outerRingRef}
            className="orbit-ring orbit-ring-outer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: `${OUTER_RADIUS * 2}px`, height: `${OUTER_RADIUS * 2}px` }}
          >
            {OUTER_LOGOS.map((logo, i) => {
              const a = (i / OUTER_LOGOS.length) * Math.PI * 2;
              return (
                <div
                  key={logo.alt}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    width: `${OUTER_CARD}px`,
                    height: `${OUTER_CARD}px`,
                    marginLeft: `${-OUTER_CARD / 2}px`,
                    marginTop: `${-OUTER_CARD / 2}px`,
                    transform: `rotate(${a}rad) translateX(${OUTER_RADIUS}px) rotate(${-a}rad)`,
                  }}
                >
                  <div
                    className="flex cursor-pointer items-center justify-center"
                    style={innerCard(false)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="max-h-[92%] max-w-[92%] object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ── Mobile: static responsive grid of partner logos (below lg) ── */}
      <div className="relative z-10 mt-16 lg:hidden">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-6">
          {ALL_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex cursor-pointer items-center justify-center"
              style={innerCard(false)}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-[84%] max-w-[84%] object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}