"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/agencyData";
import { Layers, TrendingUp, ArrowUpRight, BarChart2 } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative bg-white text-zinc-900 overflow-hidden py-10 sm:py-16 lg:py-24 selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >
      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Bar without filter buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-200 pb-4 sm:pb-6 gap-3 z-10">
          <div>
            <span className="text-[10px] sm:text-xs font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600 animate-pulse" />
              FEATURED CASE STUDIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-950 uppercase tracking-tight mt-1">
              PROVEN RESULTS & BRAND ARCHIVES
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
            {PROJECTS.length} SELECTED WORKS
          </span>
        </div>

        {/* Case Studies Grid - 3 items per row on large screens */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 lg:mt-12 items-stretch"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className="case-study-card group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white border-2 border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-500 flex flex-col h-full"
              variants={cardVariants}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image */}
              <Link
                href={project.liveUrl}
                className="relative aspect-[16/10] overflow-hidden block flex-shrink-0"
                {...(project.liveUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
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
              </Link>

              {/* Content - flex-1 with mt-auto on CTA so all buttons in the row align on the exact same baseline */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <Link
                  href={project.liveUrl}
                  className="block group/title"
                  {...(project.liveUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-outfit font-black text-zinc-950 group-hover/title:text-emerald-600 transition-colors duration-300 uppercase tracking-tight leading-[1.15] min-h-[3.2rem] line-clamp-2">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-sm text-zinc-700 font-normal leading-relaxed line-clamp-3 mt-3 mb-4">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
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

                {/* CTA - pinned to bottom via mt-auto, guaranteeing 1-row alignment across all 3 cards in the grid row */}
                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center">
                  <Magnetic strength={0.3}>
                    <Link
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold font-outfit tracking-widest text-emerald-600 group-hover:translate-x-2 transition-transform duration-300 text-white"
                      {...(project.liveUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2 whitespace-nowrap" data-cursor-pointer>
                        VIEW CASE STUDY
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};