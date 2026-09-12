"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/data/agencyData";
import { Quote, Star, ArrowLeft, ArrowRight, Pause, Play, Award } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AUTO_ROTATE_INTERVAL = 2000; // 2 seconds per review

export const EditorialTestimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPausedHover, setIsPausedHover] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const current = TESTIMONIALS[activeIdx];

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Timer effect for auto-changing reviews
  useEffect(() => {
    if (!isPlaying || isPausedHover) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isPausedHover, handleNext]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-testimonial-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-testimonial-card",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsPausedHover(true)}
      onMouseLeave={() => setIsPausedHover(false)}
      className="py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-zinc-100 text-zinc-900 relative border-t border-zinc-200 select-none font-outfit"
    >
      <div className="max-w-[1700px] mx-auto space-y-12 sm:space-y-16">
        {/* Header Bar */}
        <div className="gsap-testimonial-header flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-300 pb-6 sm:pb-8">
          <div className="space-y-2">
            <span className="text-xs font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" /> VERIFIED CLIENT REVIEWS & ENDORSEMENTS
            </span>
            <h2 className="text-3xl sm:text-6xl font-outfit font-black uppercase tracking-tight">
              CLIENT <span className="text-emerald-600 font-black">REVIEWS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1 text-amber-500 bg-zinc-200/60 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-zinc-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              ))}
              <span className="text-xs font-outfit font-extrabold text-zinc-900 ml-1.5 sm:ml-2">5.0 RATING</span>
            </div>

            {/* Play/Pause Auto-Timer Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs font-outfit font-extrabold px-3.5 py-2 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white transition-all duration-300 flex items-center gap-2 min-h-[40px]"
              aria-label={isPlaying ? "Pause review rotation" : "Play review rotation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? (isPausedHover ? "PAUSED (HOVER)" : "AUTO-TIMER ON") : "AUTO-TIMER OFF"}</span>
            </button>
          </div>
        </div>

        {/* Main Editorial Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Quote Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-5 sm:space-y-6"
              >
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-600" />

                <blockquote className="text-xl sm:text-3xl lg:text-4xl font-outfit font-light leading-snug tracking-tight text-zinc-900 italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-zinc-300">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-zinc-300 shadow-md"
                  />
                  <div>
                    <span className="font-outfit font-black text-base sm:text-lg uppercase text-zinc-900 block">
                      {current.author}
                    </span>
                    <span className="text-xs font-outfit font-bold text-zinc-700 block uppercase">
                      {current.role} • {current.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Metric Box & Controls */}
          <div className="gsap-testimonial-card lg:col-span-4 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-zinc-300 space-y-6 sm:space-y-8 shadow-xl sm:shadow-2xl relative overflow-hidden">
            {/* Animated Auto-Timer Progress Bar */}
            {isPlaying && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-200 overflow-hidden">
                <motion.div
                  key={`${activeIdx}-${isPlaying}-${isPausedHover}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isPausedHover ? "0%" : "100%" }}
                  transition={{ duration: AUTO_ROTATE_INTERVAL / 1000, ease: "linear" }}
                  className="h-full bg-zinc-900"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <span className="text-xs font-outfit font-extrabold text-zinc-700 uppercase tracking-wider block">
                VERIFIED IMPACT METRIC
              </span>
              <div className="text-2xl sm:text-4xl font-outfit font-black text-zinc-900 uppercase">
                {current.metric}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-300 pt-5 sm:pt-6">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? "w-8 bg-zinc-900" : "w-2 bg-zinc-300 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Magnetic strength={0.3}>
                  <button
                    onClick={handlePrev}
                    className="p-3 sm:p-3.5 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Previous review"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <button
                    onClick={handleNext}
                    className="p-3 sm:p-3.5 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Next review"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
