"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS, Project } from "@/data/agencyData";
import { ArrowUpRight, TrendingUp, Layers, Filter, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = ["ALL", "RETAIL & E-COMMERCE", "FINANCIAL INFRASTRUCTURE", "HEALTHCARE & MEDTECH", "AUTOMOTIVE & HIGH-TECH"];

export const GSAPScrollGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects: Project[] = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.industry.toUpperCase() === activeCategory);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const cards = gsap.utils.toArray<HTMLElement>(".gsap-gallery-card");
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + (window.innerWidth < 640 ? 40 : 120));

      gsap.fromTo(
        ".gsap-stair-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 600}`,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const viewportCenter = window.innerWidth / 2;
            const isMobile = window.innerWidth < 640;

            cards.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const dist = cardCenter - viewportCenter;

              const maxDist = window.innerWidth * 0.5;
              const absDist = Math.abs(dist);
              const normalized = Math.min(absDist / maxDist, 1);
              const proximity = 1 - normalized;

              const minScale = isMobile ? 0.85 : 0.58;
              const maxScale = isMobile ? 1.0 : 1.18;
              const scale = minScale + proximity * (maxScale - minScale);
              const opacity = 0.35 + proximity * 0.65;

              let yOffset = 0;
              if (dist < -30) {
                const leftProgress = Math.min(-dist / maxDist, 1);
                yOffset = leftProgress * (isMobile ? 40 : 140);
              } else if (dist > 30) {
                const rightProgress = Math.min(dist / maxDist, 1);
                yOffset = -rightProgress * (isMobile ? 40 : 120);
              }

              const rotationX = dist < 0
                ? Math.min(-dist / maxDist, 1) * (isMobile ? 4 : 14)
                : -Math.min(dist / maxDist, 1) * (isMobile ? 3 : 10);

              gsap.set(card, {
                scale,
                y: yOffset,
                opacity,
                rotationX,
                filter: "none",
                transformOrigin: "center center",
                force3D: true,
              });

              if (proximity > 0.7) {
                card.classList.add("stair-card-active");
              } else {
                card.classList.remove("stair-card-active");
              }
            });
          },
        },
      });
    },
    { scope: sectionRef, dependencies: [activeCategory] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen h-screen bg-white text-zinc-900 overflow-hidden flex flex-col justify-between py-6 px-4 sm:px-10 selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >

      {/* Header Bar + Filter Pills */}
      <div className="gsap-stair-header max-w-[1700px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-200 pb-4 z-10 gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs sm:text-sm font-outfit font-extrabold text-zinc-950 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600 animate-pulse" />
            STAIRWAY CASE STUDY GALLERY
          </span>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-outfit font-bold text-zinc-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-600" /> FILTER:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-outfit px-3 py-1.5 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-emerald-600 border-emerald-600 text-white font-extrabold shadow-sm"
                  : "bg-emerald-50/60 border-emerald-200 text-zinc-800 hover:border-emerald-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Pin Track */}
      <div className="my-auto overflow-visible py-4" style={{ perspective: "1400px" }}>
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-16 items-center w-max px-6 sm:px-24"
        >
          {/* Introductory Stair Card */}
          <div className="gsap-gallery-card w-[88vw] sm:w-[50vw] lg:w-[35vw] h-[60vh] sm:h-[72vh] flex-shrink-0 flex flex-col justify-between p-6 sm:p-12 rounded-3xl bg-white border-2 border-zinc-300 space-y-6 select-none transition-all shadow-xl backdrop-blur-xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" /> CASE STUDY GALLERY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-[0.9]">
                STAIRCASE <br />
                <span className="text-emerald-600 font-black">SCREEN FILL</span> <br />
                <span className="text-zinc-400 font-light">WALKTHROUGH</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-md">
                As you scroll, each case study scales up smoothly to fill your viewport, revealing revenue metrics and campaign details.
              </p>
            </div>

            <div className="space-y-3 border-t border-zinc-200 pt-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-outfit text-emerald-600 font-extrabold">
                <ChevronRight className="w-4 h-4 animate-bounce-x text-emerald-600" />
                <span>SCROLL DOWN TO IMMERSE IN CASE STUDIES</span>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="gsap-gallery-card w-[88vw] sm:w-[68vw] lg:w-[56vw] h-[60vh] sm:h-[72vh] flex-shrink-0 group cursor-pointer transition-all duration-300"
              data-cursor-text="INSPECT"
            >
              <Link href={`/work/${project.id}`} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-3xl border-2 border-zinc-300 bg-zinc-100 shadow-xl transition-all duration-500 group-hover:border-emerald-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 sm:gap-3 text-xs font-outfit text-white bg-emerald-600/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500 shadow-lg">
                      <span className="text-white font-black">STEP 0{idx + 1}</span>
                      <span>• {project.year}</span>
                    </div>

                    <span className="text-xs font-outfit text-white bg-zinc-950/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-zinc-800 uppercase tracking-wider font-extrabold">
                      {project.industry}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 space-y-4 sm:space-y-6 z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((res, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-2 text-xs font-outfit text-white bg-emerald-600/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500 font-extrabold"
                        >
                          <TrendingUp className="w-3.5 h-3.5 text-white" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-zinc-700/60 pt-4">
                      <div className="space-y-2 max-w-xl">
                        <h3 className="text-2xl sm:text-5xl font-outfit font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight leading-none">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-300 font-light line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <Magnetic strength={0.3}>
                        <div className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-emerald-600 text-white font-outfit font-extrabold text-xs tracking-wider uppercase group-hover:bg-emerald-700 transition-all shadow-md flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                          <span>INSPECT CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between border-t border-zinc-200 pt-3 z-10 text-xs font-outfit font-medium text-zinc-500">
        <span>STAIRCASE GALLERY ACTIVE</span>
        <span className="hidden sm:inline-block">SCROLL DOWN TO STEP THROUGH PROJECTS</span>
      </div>
    </section>
  );
};