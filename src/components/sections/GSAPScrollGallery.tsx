"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS, Project } from "@/data/agencyData";
import { Layers, Filter, TrendingUp, ArrowUpRight, ChevronRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

const CATEGORIES = ["ALL", "RETAIL & E-COMMERCE", "FINANCIAL INFRASTRUCTURE", "HEALTHCARE & MEDTECH", "AUTOMOTIVE & HIGH-TECH"];

export const GSAPScrollGallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects: Project[] =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry.toUpperCase() === activeCategory);

  // Reset the carousel + active step whenever the filter changes.
  useEffect(() => {
    setActiveIndex(0);
    const track = trackRef.current;
    if (track) track.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeCategory]);

  // Keep the card closest to the viewport center highlighted as the "active step".
  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>(".gsap-slide"));
    const viewCenter = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.getBoundingClientRect().width / 2;
      const dist = Math.abs(cardCenter - viewCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = idx;
      }
    });
    if (best !== activeIndex) setActiveIndex(best);
  }, [activeIndex]);

  // Vertical wheel gestures scroll the horizontal track sideways.
  const onWheel = useCallback((e: WheelEvent) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
    e.preventDefault();
    track.scrollBy({ left: e.deltaY < 0 ? -420 : 420, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  // Simple click-and-drag to scroll.
  const drag = useRef<{ down: boolean; startX: number; startScroll: number }>({
    down: false,
    startX: 0,
    startScroll: 0,
  });

  const onDragStart = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { down: true, startX: e.clientX, startScroll: track.scrollLeft };
  };
  const onDragMove = (e: React.MouseEvent) => {
    const track = trackRef.current;
    const d = drag.current;
    if (d.down && track) track.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };
  const onDragEnd = () => {
    drag.current.down = false;
  };

  const totalSteps = filteredProjects.length + 1; // + the intro step
  return (
    <section
      id="work"
      className="relative bg-white text-zinc-900 overflow-hidden py-16 sm:py-20 lg:py-24 selection:bg-zinc-900 selection:text-white font-outfit border-t border-zinc-200"
    >
      <div className="max-w-[1700px] w-full mx-auto">
        {/* Header Bar + Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-200 pb-6 gap-4 z-10">
          <span className="text-xs sm:text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600 animate-pulse" />
            STAIRWAY CASE STUDY GALLERY
          </span>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-outfit font-bold text-zinc-700 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-600" /> FILTER:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-outfit px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald-600 border-emerald-600 text-white font-extrabold shadow-sm"
                    : "bg-emerald-50 border-emerald-200 text-zinc-800 hover:border-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Staircase Scroller - native snap carousel with drag + wheel support */}
        <div className="relative mt-8 sm:mt-12">
          <div
            ref={trackRef}
            onScroll={() => syncActive()}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            className="gsap-track snap-x snap-mandatory scroll-smooth overflow-x-auto overflow-y-hidden py-10 flex gap-6 sm:gap-12 items-start px-4 cursor-grab active:cursor-grabbing select-none"
          >
            {/* Introductory Step */}
            <div className="gsap-slide w-[88vw] sm:w-[56vw] lg:w-[40vw] flex-shrink-0 snap-start flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-white border-2 border-zinc-300 shadow-xl space-y-6 relative overflow-hidden select-none">
              <div className="space-y-4">
                <span className="text-xs font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" /> CASE STUDY GALLERY
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-[0.9]">
                  STAIRCASE <br />
                  <span className="text-emerald-600 font-black">CASE STUDY</span> <br />
                  <span className="text-zinc-700 font-light">WALKTHROUGH</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed max-w-md">
                  Drag, swipe, or scroll - each project steps into focus with its full revenue story and campaign metrics.
                </p>
              </div>

              <div className="space-y-3 border-t border-zinc-200 pt-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-outfit text-emerald-600 font-extrabold">
                  <ChevronRight className="w-4 h-4 animate-bounce-x text-emerald-600" />
                  <span>STEP THROUGH THE WORK</span>
                </div>
              </div>
            </div>

            {/* Project Steps */}
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                data-index={idx}
                style={idx % 2 === 1 ? { marginTop: "2.25rem" } : undefined}
                className={`gsap-slide w-[88vw] sm:w-[68vw] lg:w-[56vw] flex-shrink-0 snap-start group transition-all duration-500 ${
                  activeIndex === idx + 1
                    ? "opacity-100 scale-100"
                    : "opacity-70 scale-95"
                }`}
              >
                <div
                  className={`relative h-[58vh] sm:h-[70vh] overflow-hidden rounded-3xl border-2 shadow-xl transition-all duration-500 ${
                    activeIndex === idx + 1 ? "border-emerald-600" : "border-zinc-300"
                  }`}
                >
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
                        <h3 className="text-2xl sm:text-4xl font-outfit font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight leading-none">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-300 font-light line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <Magnetic strength={0.3}>
                        <div className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-emerald-600 text-white font-outfit font-extrabold text-xs tracking-wider uppercase group-hover:bg-emerald-700 transition-all shadow-md flex items-center gap-2 whitespace-nowrap flex-shrink-0" data-cursor-pointer>
                          <span>FEATURED CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-4 z-10 text-xs font-outfit font-medium text-zinc-700">
          <span className="flex items-center gap-2">
            STAIRCASE GALLERY
            <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-white font-extrabold tracking-wider">
              {activeIndex + 1} / {totalSteps}
            </span>
          </span>
          <span className="hidden sm:inline-block">DRAG, SWIPE, OR SCROLL TO STEP THROUGH PROJECTS</span>
        </div>
      </div>
    </section>
  );
};
