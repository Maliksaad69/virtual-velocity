"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/data/agencyData";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const EditorialTestimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TESTIMONIALS[activeIdx];
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section ref={sectionRef} className="py-24 sm:py-36 px-6 sm:px-12 bg-[#f4f4f6] text-black relative border-t border-black/10">
      <div className="max-w-[1700px] mx-auto space-y-16">
        {/* Header */}
        <div className="gsap-testimonial-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/15 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-black/60 uppercase tracking-widest font-bold block">
              // VERIFIED CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-6xl font-outfit font-black uppercase tracking-tighter">
              CLIENT <span className="text-black/30">ENDORSEMENTS</span>
            </h2>
          </div>

          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-xs font-mono text-black/60 ml-2 font-bold">5.0 RATING</span>
          </div>
        </div>

        {/* Main Editorial Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Quote Content */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
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
                    className="w-14 h-14 rounded-full object-cover border-2 border-black/10"
                  />
                  <div>
                    <span className="font-outfit font-black text-lg uppercase text-black block">
                      {current.author}
                    </span>
                    <span className="text-xs font-mono text-black/60 block">
                      {current.role} // {current.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Metric Box & Controls */}
          <div className="gsap-testimonial-card lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-white border border-black/10 space-y-8 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-mono text-black/50 uppercase tracking-widest block font-bold">
                VERIFIED IMPACT METRIC
              </span>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-black uppercase">
                {current.metric}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-6">
              <span className="text-xs font-mono text-black/40">
                0{activeIdx + 1} / 0{TESTIMONIALS.length}
              </span>

              <div className="flex items-center gap-3">
                <Magnetic strength={0.3}>
                  <button
                    onClick={handlePrev}
                    className="p-3.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <button
                    onClick={handleNext}
                    className="p-3.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
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
