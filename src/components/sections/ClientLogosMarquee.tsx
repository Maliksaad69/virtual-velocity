"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// All featured client logos (in order: tree widest-row to tip).
const CLIENT_LOGOS = [
  { src: "/VV LOGOS/VV LOGOS/Anta logo/Anta logo.png", alt: "Anta" },
  { src: "/VV LOGOS/VV LOGOS/Blue world city/Blue world city.png", alt: "Blue World City" },
  { src: "/VV LOGOS/VV LOGOS/Glamar/Glamar.png", alt: "Glamar" },
  { src: "/VV LOGOS/VV LOGOS/Gloria Jeans/Gloria Jeans logo.png", alt: "Gloria Jeans" },
  { src: "/VV LOGOS/VV LOGOS/Megazone/Megazone logo.png", alt: "Megazone" },
  { src: "/VV LOGOS/VV LOGOS/Mughlai/Mughlai logo.png", alt: "Mughlai" },
  { src: "/VV LOGOS/VV LOGOS/Pamir/Pamir.png", alt: "Pamir" },
  { src: "/VV LOGOS/VV LOGOS/Red apple/Red apple.png", alt: "Red Apple" },
  { src: "/VV LOGOS/VV LOGOS/TSL/TSL.png", alt: "TSL" },
  { src: "/VV LOGOS/VV LOGOS/Unied nations/Unied nations.png", alt: "United Nations" },
  { src: "/VV LOGOS/VV LOGOS/andaz/andaz.png", alt: "Andaz" },
  { src: "/VV LOGOS/VV LOGOS/ariston/ariston.png", alt: "Ariston" },
  { src: "/VV LOGOS/VV LOGOS/capital arena/capital arena.png", alt: "Capital Arena" },
  { src: "/VV LOGOS/VV LOGOS/chaaye khana/chaaye khana.png", alt: "Chaaye Khana" },
  { src: "/VV LOGOS/VV LOGOS/chinaar/chinaar.png", alt: "Chinaar" },
  { src: "/VV LOGOS/VV LOGOS/cresto/cresto.png", alt: "Cresto" },
  { src: "/VV LOGOS/VV LOGOS/de asthethic/de asthethic transparent.png", alt: "De Aesthetic" },
  { src: "/VV LOGOS/VV LOGOS/desi chapter/desi chapter.png", alt: "Desi Chapter" },
  { src: "/VV LOGOS/VV LOGOS/galaxy hayatabad/Untitled-1.png", alt: "Galaxy Hayatabad" },
  { src: "/VV LOGOS/VV LOGOS/iplexmarketing/iplexmarketing.png", alt: "IPlex Marketing" },
  { src: "/VV LOGOS/VV LOGOS/kapacious/kapacious.png", alt: "Kapacious" },
  { src: "/VV LOGOS/VV LOGOS/levante/levante.png", alt: "Levante" },
  { src: "/VV LOGOS/VV LOGOS/maple vista/maple vista.png", alt: "Maple Vista" },
  { src: "/VV LOGOS/VV LOGOS/media sniffers/media sniffers.png", alt: "Media Sniffers" },
  { src: "/VV LOGOS/VV LOGOS/oxbite/oxbite.png", alt: "Oxbite" },
  { src: "/VV LOGOS/VV LOGOS/pizza hut/pizza hut.png", alt: "Pizza Hut" },
  { src: "/VV LOGOS/VV LOGOS/revival/revival.png", alt: "Revival" },
  { src: "/VV LOGOS/VV LOGOS/shake wake/shake wake.png", alt: "Shake Wake" },
  { src: "/VV LOGOS/VV LOGOS/slice and cone/slice and cone transparent.png", alt: "Slice and Cone" },
  { src: "/VV LOGOS/VV LOGOS/wild wings/wild wings logo.png", alt: "Wild Wings" },
];

/* Tree layout: logos stack into rows that start wide at the base and taper to
   a single point at the top - forming a tree wedged inside a semicircle. */
const TREE_ROWS = [8, 7, 6, 5, 4]; // bottom to top

interface LogoTileProps {
  src: string;
  name: string;
  className?: string;
}

const LogoTile = ({ src, name, className }: LogoTileProps) => {
  return (
    <div
      className={`flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 md:w-36 md:h-20 shrink-0 rounded-xl bg-zinc-900 ${className ?? ""}`}
    >
      {/* Logo: sharp grayscale (colorless) at rest; full original color on hover/press */}
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-[75%] max-w-[75%] object-contain grayscale brightness-125 opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110 active:grayscale-0 active:brightness-100 active:opacity-100 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

export const ClientLogosMarquee = () => {
  const treeRef = useRef<HTMLDivElement>(null);

  // Build the tree rows from top (tip) to bottom (base).
  let cursor = 0;
  const rows: { logos: typeof CLIENT_LOGOS }[] = [];
  for (const count of [...TREE_ROWS].reverse()) {
    rows.push({ logos: CLIENT_LOGOS.slice(cursor, cursor + count) });
    cursor += count;
  }

  // Scroll-reveal the tree: logos cascade in from the base up to the tip.
  useGSAP(
    () => {
      const tree = treeRef.current;
      if (!tree) return;

      gsap.from(".logo-tree-tile", {
        scrollTrigger: { trigger: tree, start: "top 80%" },
        y: 50,
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        stagger: 0.04,
        ease: "power3.out",
      });
    },
    { scope: treeRef }
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-zinc-800 bg-zinc-950 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-2">
        <p className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-[0.25em] text-center mb-2">
          Proven Track Record • Featured Clients
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-50 text-center leading-none">
          Brands We&apos;ve <span className="text-emerald-400">Powered</span>
        </h3>
      </div>

      {/* Tree of logos - wide base tapering to a point, centered like a semicircle */}
      <div ref={treeRef} className="max-w-7xl mx-auto flex flex-col items-center gap-2.5 sm:gap-3.5 md:gap-4 mt-4">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {row.logos.map((logo, i) => (
              <LogoTile key={i} src={logo.src} name={logo.alt} className="logo-tree-tile" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
