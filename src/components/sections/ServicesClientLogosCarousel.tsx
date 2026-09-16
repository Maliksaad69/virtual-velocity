"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers, Building2 } from "lucide-react";

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

const ITEMS_PER_SLIDE = 6;
const TOTAL_SLIDES = Math.ceil(BRANDS.length / ITEMS_PER_SLIDE);

export const ServicesClientLogosCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? TOTAL_SLIDES - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const visibleBrands = BRANDS.slice(
    currentSlide * ITEMS_PER_SLIDE,
    (currentSlide + 1) * ITEMS_PER_SLIDE
  );

  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 relative font-outfit border-y border-zinc-200 overflow-hidden select-none">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              ENTERPRISE BRAND NETWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-outfit font-black uppercase tracking-tight text-zinc-950">
              BRANDS SCALED BY <span className="text-emerald-600">OUR SERVICES</span>
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-600">
              <span>0{currentSlide + 1}</span>
              <span className="text-zinc-400">/</span>
              <span>0{TOTAL_SLIDES}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous client logos"
                className="w-10 h-10 rounded-full border border-zinc-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-zinc-800 shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next client logos"
                className="w-10 h-10 rounded-full border border-zinc-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-zinc-800 shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Animated Grid Slide */}
        <div className="min-h-[260px] sm:min-h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            >
              {visibleBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="p-6 sm:p-8 rounded-2xl bg-zinc-50 hover:bg-white border border-zinc-200/90 hover:border-emerald-500/60 shadow-xs hover:shadow-xl transition-all duration-300 flex items-center justify-center h-[120px] sm:h-[140px] group cursor-pointer"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-12 sm:max-h-14 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to logo slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-emerald-600"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
