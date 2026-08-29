"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/agencyData";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16">
        <div>
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
            // CLIENT TESTIMONIALS
          </span>
          <h2 className="text-section-title font-outfit text-white mt-2">
            WHAT PARTNERS <br />
            <span className="text-white/40 italic font-light">SAY</span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <button
            onClick={prevTestimonial}
            className="p-4 rounded-full border border-white/15 hover:border-[#00f0ff] hover:bg-[#00f0ff] hover:text-black text-white transition-all duration-300"
            data-cursor-pointer
            aria-label="Previous quote"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-white/50">
            0{currentIndex + 1} / 0{TESTIMONIALS.length}
          </span>
          <button
            onClick={nextTestimonial}
            className="p-4 rounded-full border border-white/15 hover:border-[#00f0ff] hover:bg-[#00f0ff] hover:text-black text-white transition-all duration-300"
            data-cursor-pointer
            aria-label="Next quote"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Quote Display */}
      <div className="relative min-h-[320px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="relative">
              <Quote className="w-12 h-12 text-[#00f0ff]/30 mb-6" />
              <blockquote className="text-2xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight uppercase leading-[1.1]">
                "{current.quote}"
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-lg font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">
                  {current.author}
                </h3>
                <p className="text-xs font-mono text-white/60">
                  {current.role} // <span className="text-white">{current.company}</span>
                </p>
              </div>

              <span className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">
                VERIFIED PARTNERSHIP // {current.year}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
