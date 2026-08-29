"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, Service } from "@/data/agencyData";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export const Services = () => {
  const [activeService, setActiveService] = useState<string | null>("01");

  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16">
        <div>
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
            // CAPABILITIES & DISCIPLINE
          </span>
          <h2 className="text-section-title font-outfit text-white mt-2">
            EXPERIMENTAL <br />
            <span className="text-white/40 italic font-light">SERVICES</span>
          </h2>
        </div>
        <p className="mt-6 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-light">
          We operate at the precise intersection of brand art direction, creative software engineering, and artificial intelligence models.
        </p>
      </div>

      {/* Services Typographic Interactive Rows */}
      <div className="border-t border-white/10">
        {SERVICES.map((service) => {
          const isOpen = activeService === service.number;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveService(service.number)}
              className={`group border-b border-white/10 transition-colors duration-500 ${
                isOpen ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
              }`}
            >
              <div
                onClick={() => setActiveService(isOpen ? null : service.number)}
                className="py-10 sm:py-14 px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                data-cursor-pointer
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="text-xl sm:text-3xl font-outfit font-extrabold text-[#00f0ff] group-hover:translate-x-2 transition-transform duration-300">
                    {service.number}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white group-hover:text-[#00f0ff] transition-colors duration-300 uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Right Meta Indicator */}
                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="hidden sm:inline-block text-meta text-white/40 border border-white/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="p-3 rounded-full border border-white/10 group-hover:border-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black text-white transition-all duration-300">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Accordion Expansion */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 px-4 sm:px-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-white/5">
                      {/* Description & Deliverables */}
                      <div className="md:col-span-7 space-y-6">
                        <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3 pt-2">
                          <span className="text-meta text-[#00f0ff]">KEY DELIVERABLES:</span>
                          <div className="grid grid-cols-2 gap-3">
                            {service.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-white/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Floating Preview Image Thumbnail */}
                      <div className="md:col-span-5">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/15 shadow-2xl">
                          <img
                            src={service.previewImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                            <span className="text-xs font-mono text-white/80">// {service.category} PREVIEW</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
