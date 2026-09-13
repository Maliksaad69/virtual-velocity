"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, Project } from "@/data/agencyData";
import { Layers, Filter, TrendingUp, ArrowUpRight, BarChart2 } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = ["ALL", "RETAIL & E-COMMERCE", "FINANCIAL INFRASTRUCTURE", "HEALTHCARE & MEDTECH", "AUTOMOTIVE & HIGH-TECH"];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const GSAPScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects: Project[] =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry.toUpperCase() === activeCategory);

  // Scroll reveal animation for cards
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll(".case-study-card")
      );

      if (cards.length === 0) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        cards.forEach((card) => gsap.set(card, { autoAlpha: 1, y: 0, scale: 1 }));
        return;
      }

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef, dependencies: [filteredProjects] }
  );

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative bg-white text-zinc-900 overflow-hidden py-10 sm:py-16 lg:py-24 selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >
      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Bar + Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-4 sm:pb-6 gap-4 z-10">
          <span className="text-[10px] sm:text-xs font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600 animate-pulse" />
            FEATURED CASE STUDIES
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide py-1 max-w-full">
            <span className="text-[10px] sm:text-xs font-outfit font-bold text-zinc-700 mr-1 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-emerald-600" /> FILTER:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] sm:text-xs font-outfit font-extrabold px-3.5 sm:px-4 py-2 rounded-full border transition-all duration-300 whitespace-nowrap min-h-[40px] flex items-center flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                    : "bg-emerald-50 border-emerald-200 text-zinc-800 hover:border-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 lg:mt-12"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="case-study-card group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white border-2 border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-500 flex flex-col"
              variants={cardVariants}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-1.5 z-10">
                  <span className="text-[9px] sm:text-[10px] font-outfit font-extrabold text-white bg-emerald-600/90 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-full border border-emerald-500 shadow-md flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                    <BarChart2 className="w-2.5 h-2.5 flex-shrink-0" />
                    PROJECT {project.number}
                    <span className="hidden md:inline">• {project.year}</span>
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] font-outfit text-white bg-zinc-950/90 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-full border border-zinc-800 uppercase tracking-wide font-extrabold flex-shrink-0 whitespace-nowrap">
                    {project.industry}
                  </span>
                </div>

                {/* Results */}
                <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-2">
                    {project.results?.slice(0, 2).map((res, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-outfit text-white bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-emerald-500 font-extrabold"
                      >
                        <TrendingUp className="w-3 h-3 text-white" />
                        <span>{res}</span>
                      </div>
                    ))}
                    {(project.results?.length ?? 0) > 2 && (
                      <span className="text-[10px] sm:text-xs font-outfit text-white/80 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-zinc-700">
                        +{(project.results?.length ?? 0) - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-outfit font-black text-zinc-950 group-hover:text-emerald-600 transition-colors duration-300 uppercase tracking-tight leading-[1.15]">
                  {project.title}
                </h3>

                <p className="text-sm text-black font-normal leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 4).map((service, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs font-outfit font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 4 && (
                    <span className="text-[10px] sm:text-xs font-outfit font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500">
                      +{project.services.length - 4}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Magnetic strength={0.3}>
                  <div className="pt-2 flex items-center gap-2 text-[10px] sm:text-xs font-extrabold font-outfit tracking-widest text-emerald-600 group-hover:translate-x-2 transition-transform duration-300 text-white">
                    <span className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2 whitespace-nowrap" data-cursor-pointer>
                      VIEW CASE STUDY
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>
                </Magnetic>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-700">No case studies found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};