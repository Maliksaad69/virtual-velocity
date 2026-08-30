"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/data/agencyData";
import { Quote, Star, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds per review

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
      className="py-24 sm:py-36 px-6 sm:px-12 bg-[#f4f4f6] text-black relative border-t border-black/10 select-none font-outfit"
    >
      <div className="max-w-[1700px] mx-auto space-y-16">
        {/* Header Bar */}
        <div className="gsap-testimonial-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/15 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-outfit font-extrabold text-black/60 uppercase tracking-wider block">
              VERIFIED CLIENT REVIEWS & ENDORSEMENTS
            </span>
            <h2 className="text-3xl sm:text-6xl font-outfit font-black uppercase tracking-tight">
              CLIENT <span className="text-black/30">REVIEWS</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-1 text-amber-500 bg-black/5 px-4 py-2 rounded-full border border-black/10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-outfit font-extrabold text-black ml-2">5.0 RATING</span>
            </div>

            {/* Play/Pause Auto-Timer Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs font-outfit font-extrabold px-4 py-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              aria-label={isPlaying ? "Pause review rotation" : "Play review rotation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? (isPausedHover ? "TIMER PAUSED (HOVER)" : "AUTO-TIMER ON") : "AUTO-TIMER OFF"}</span>
            </button>
          </div>
        </div>

        {/* Main Editorial Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Quote Content */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-6"
              >
                <Quote className="w-12 h-12 text-black/20" />

                <blockquote className="text-2xl sm:text-4xl font-outfit font-light leading-snug tracking-tight text-black italic">
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-black/10 shadow-md"
                  />
                  <div>
                    <span className="font-outfit font-black text-lg uppercase text-black block">
                      {current.author}
                    </span>
                    <span className="text-xs font-outfit font-bold text-black/60 block uppercase">
                      {current.role} • {current.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Metric Box & Controls */}
          <div className="gsap-testimonial-card lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-white border border-black/10 space-y-8 shadow-2xl relative overflow-hidden">
            {/* Animated Auto-Timer Progress Bar */}
            {isPlaying && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 overflow-hidden">
                <motion.div
                  key={`${activeIdx}-${isPlaying}-${isPausedHover}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isPausedHover ? "0%" : "100%" }}
                  transition={{ duration: AUTO_ROTATE_INTERVAL / 1000, ease: "linear" }}
                  className="h-full bg-black"
                />
              </div>
            )}

            <div className="space-y-2">
              <span className="text-xs font-outfit font-extrabold text-black/50 uppercase tracking-wider block">
                VERIFIED IMPACT METRIC
              </span>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-black uppercase">
                {current.metric}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-6">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? "w-8 bg-black" : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Magnetic strength={0.3}>
                  <button
                    onClick={handlePrev}
                    className="p-3.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
                    aria-label="Previous review"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <button
                    onClick={handleNext}
                    className="p-3.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
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
