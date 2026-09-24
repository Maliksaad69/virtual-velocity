"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

interface BrandItem {
  src: string;
  name: string;
}

const BRANDS: BrandItem[] = [
  { src: "/All logo in SVG Format/pizza hut.svg", name: "Pizza Hut" },
  { src: "/All logo in SVG Format/Gloria Jeans logo.svg", name: "Gloria Jeans" },
  { src: "/All logo in SVG Format/Anta logo.svg", name: "Anta" },
  { src: "/All logo in SVG Format/Unied nations.svg", name: "United Nations" },
  { src: "/All logo in SVG Format/chaaye khana.svg", name: "Chaaye Khana" },
  { src: "/All logo in SVG Format/Blue world city.svg", name: "Blue World City" },
  { src: "/All logo in SVG Format/Red apple.svg", name: "Red Apple" },
  { src: "/All logo in SVG Format/Megazone logo.svg", name: "Megazone" },
  { src: "/All logo in SVG Format/wild wings logo.svg", name: "Wild Wings" },
  { src: "/All logo in SVG Format/chinaar.svg", name: "Chinaar" },
  { src: "/All logo in SVG Format/maple vista.svg", name: "Maple Vista" },
  { src: "/All logo in SVG Format/Glamar.svg", name: "Glamar" },
  { src: "/All logo in SVG Format/andaz.svg", name: "Andaz" },
  { src: "/All logo in SVG Format/ariston.svg", name: "Ariston" },
  { src: "/All logo in SVG Format/capital arena.svg", name: "Capital Arena" },
  { src: "/All logo in SVG Format/cresto.svg", name: "Cresto" },
  { src: "/All logo in SVG Format/de asthethic.svg", name: "De Aesthetic" },
  { src: "/All logo in SVG Format/desi chapter.svg", name: "Desi Chapter" },
  { src: "/All logo in SVG Format/Untitled-1.svg", name: "Galaxy Hayatabad" },
  { src: "/All logo in SVG Format/iplexmarketing.svg", name: "IPlex Marketing" },
  { src: "/All logo in SVG Format/kapacious.svg", name: "Kapacious" },
  { src: "/All logo in SVG Format/levante.svg", name: "Levante" },
  { src: "/All logo in SVG Format/media sniffers.svg", name: "Media Sniffers" },
  { src: "/All logo in SVG Format/Mughlai logo.svg", name: "Mughlai" },
  { src: "/All logo in SVG Format/Pamir.svg", name: "Pamir" },
  { src: "/All logo in SVG Format/shake wake.svg", name: "Shake Wake" },
  { src: "/All logo in SVG Format/slice and cone.svg", name: "Slice and Cone" },
  { src: "/All logo in SVG Format/TSL.svg", name: "TSL" },
  { src: "/All logo in SVG Format/revival.svg", name: "Revival" },
  { src: "/All logo in SVG Format/oxbite.svg", name: "Oxbite" },
];

const ROW_1 = BRANDS.slice(0, 15);
const ROW_2 = BRANDS.slice(15, 30);

export const AboutClientLogosSlider = () => {
  return (
    <section className="py-12 sm:py-16 bg-transparent text-zinc-900 relative overflow-hidden select-none font-outfit border-t border-zinc-200">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 mb-10 sm:mb-14 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-5 sm:pb-6">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            GLOBAL CLIENT ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black uppercase tracking-tight text-zinc-950">
            TRUSTED BY <span className="text-emerald-600">30+ INDUSTRY LEADERS</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            PROVEN BRAND RETENTION
          </span>
        </div>
      </div>

      {/* Dual Infinite Slider Tracks with ample top spacing from upper boundary */}
      <div className="relative z-10 mt-4 sm:mt-6 pt-2 sm:pt-4 space-y-4 sm:space-y-6 overflow-hidden">
        {/* Track 1: Moving Left */}
        <div className="flex w-max space-x-4 sm:space-x-6 animate-marquee-left hover:[animation-play-state:paused]">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((brand, idx) => (
            <div
              key={`row1-${brand.name}-${idx}`}
              className="shrink-0 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full bg-white border-2 border-zinc-200/90 hover:border-emerald-500/80 p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 group hover:scale-105 shadow-xs hover:shadow-lg"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-[82%] max-w-[82%] w-auto h-auto object-contain transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex w-max space-x-4 sm:space-x-6 animate-marquee-right hover:[animation-play-state:paused]">
          {[...ROW_2, ...ROW_2, ...ROW_2].map((brand, idx) => (
            <div
              key={`row2-${brand.name}-${idx}`}
              className="shrink-0 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full bg-white border-2 border-zinc-200/90 hover:border-emerald-500/80 p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 group hover:scale-105 shadow-xs hover:shadow-lg"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-[82%] max-w-[82%] w-auto h-auto object-contain transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
