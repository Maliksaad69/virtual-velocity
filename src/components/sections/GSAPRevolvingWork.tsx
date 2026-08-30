"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS, Project } from "@/data/agencyData";
import { ChevronLeft, ChevronRight, ArrowUpRight, Filter, ExternalLink, Trophy, TrendingUp } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = ["ALL", "RETAIL & E-COMMERCE", "FINANCIAL INFRASTRUCTURE", "HEALTHCARE & MEDTECH", "AUTOMOTIVE & HIGH-TECH"];

/* ─── Text Scramble Utility ─── */
function scrambleText(element: HTMLElement | null, text: string, duration = 0.8) {
  if (!element) return;
  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?~";
  const length = text.length;
  gsap.to(
    {},
    {
      duration: duration * 0.4,
      onUpdate: () => {
        let res = "";
        for (let i = 0; i < length; i++) res += chars[Math.floor(Math.random() * chars.length)];
        element.textContent = res;
      },
      onComplete: () => {
        gsap.to(
          {},
          {
            duration: duration * 0.6,
            ease: "power2.out",
            onUpdate: function () {
              const settled = Math.floor(this.progress() * length);
              let res = "";
              for (let i = 0; i < length; i++) {
                res += i < settled ? text[i] : chars[Math.floor(Math.random() * chars.length)];
              }
              element.textContent = res;
            },
            onComplete: () => {
              element.textContent = text;
            },
          }
        );
      },
    }
  );
}

export const GSAPRevolvingWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.industry.toUpperCase() === activeCategory);

  const totalItems = filteredProjects.length;
  const stepAngle = 360 / Math.max(totalItems, 1);
  const rotationObj = useRef({ angle: 0 });
  const radius = 480;

  const revolveToIndex = useCallback(
    (index: number, duration = 0.9) => {
      if (totalItems === 0) return;
      const normalizedIndex = (index + totalItems) % totalItems;
      setActiveIndex(normalizedIndex);

      const targetAngle = -normalizedIndex * stepAngle;

      gsap.to(rotationObj.current, {
        angle: targetAngle,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (carouselRef.current) {
            gsap.set(carouselRef.current, { rotationY: rotationObj.current.angle });
          }
        },
      });

      if (titleRef.current && filteredProjects[normalizedIndex]) {
        scrambleText(titleRef.current, filteredProjects[normalizedIndex].title, 0.7);
      }
    },
    [filteredProjects, stepAngle, totalItems]
  );

  useEffect(() => {
    revolveToIndex(0, 0.5);
  }, [activeCategory, revolveToIndex]);

  const nextProject = () => revolveToIndex(activeIndex + 1);
  const prevProject = () => revolveToIndex(activeIndex - 1);

  // GSAP ScrollTrigger pinning and revolving scrub
  useGSAP(
    () => {
      const container = containerRef.current;
      const carousel = carouselRef.current;
      if (!container || !carousel) return;

      gsap.fromTo(
        ".gsap-revolve-work-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 80%" },
        }
      );

      ScrollTrigger.create({
        trigger: container,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: `+=1800`,
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalRotation = -360 * progress;
          rotationObj.current.angle = totalRotation;
          gsap.set(carousel, { rotationY: totalRotation });

          if (totalItems > 0) {
            const positiveAngle = (-totalRotation % 360 + 360) % 360;
            const currentIdx = Math.round(positiveAngle / stepAngle) % totalItems;
            setActiveIndex(currentIdx);
          }
        },
      });
    },
    { scope: containerRef, dependencies: [activeCategory, totalItems] }
  );

  const activeProject: Project = filteredProjects[activeIndex] || PROJECTS[0];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#08080a] text-[#f4f4f2] overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-8 lg:px-16 selection:bg-[#00f0ff] selection:text-black"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial from-[#00f0ff]/15 via-[#7000ff]/10 to-transparent blur-[160px] pointer-events-none" />

      {/* Section Header & Filters */}
      <div className="gsap-revolve-work-title max-w-[1700px] w-full mx-auto space-y-6 border-b border-white/10 pb-6 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#00f0ff] uppercase tracking-[0.25em] font-bold mb-2">
              <Trophy className="w-4 h-4 text-[#00f0ff]" />
              <span>// GSAP 3D REVOLVING PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-outfit font-black uppercase text-white tracking-tighter leading-none">
              REVOLVING <span className="text-[#00f0ff] italic font-light">CASE STUDIES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-surface border border-white/10 hover:border-[#00f0ff] hover:text-[#00f0ff] text-white transition-colors"
              aria-label="Previous Case Study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-surface border border-white/10 hover:border-[#00f0ff] hover:text-[#00f0ff] text-white transition-colors"
              aria-label="Next Case Study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-white/40">
            <Filter className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>FILTER BY INDUSTRY:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-mono px-4 py-1.5 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#00f0ff] border-[#00f0ff] text-black font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    : "bg-surface border-white/10 text-white/60 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 3D Revolving Stage + Active Spotlight HUD */}
      <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 z-10">
        {/* 3D Revolving Stage (7 Cols) */}
        <div
          className="lg:col-span-7 h-[440px] sm:h-[540px] relative flex items-center justify-center overflow-visible"
          style={{ perspective: "1400px" }}
        >
          <div
            ref={carouselRef}
            className="w-full h-full relative flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
            }}
          >
            {filteredProjects.map((project, idx) => {
              const angle = idx * stepAngle;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={project.id}
                  onClick={() => revolveToIndex(idx)}
                  className={`absolute w-[300px] sm:w-[380px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 select-none ${
                    isActive
                      ? "border-2 border-[#00f0ff] shadow-[0_0_60px_rgba(0,240,255,0.35)] z-30 opacity-100 scale-105"
                      : "border border-white/10 hover:border-white/30 z-10 opacity-35 hover:opacity-75 scale-90 blur-[0.5px]"
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative aspect-[16/11] bg-surface overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <span className="text-[#00f0ff] font-bold">{project.number}</span>
                      <span>// {project.year}</span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 space-y-1">
                      <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-wider block">
                        {project.industry}
                      </span>
                      <h3 className="text-xl font-outfit font-black text-white uppercase tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Spotlight Panel (5 Cols) */}
        {activeProject && (
          <div className="lg:col-span-5 space-y-6 bg-surface/80 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/10 pb-4">
              <span className="text-[#00f0ff] uppercase tracking-wider font-bold">
                // FEATURED CASE STUDY [{activeProject.number} / 0{totalItems}]
              </span>
              <span>{activeProject.client}</span>
            </div>

            {/* Active Title */}
            <h3
              ref={titleRef}
              className="text-2xl sm:text-4xl font-outfit font-black text-white uppercase tracking-tight leading-tight min-h-[64px]"
            >
              {activeProject.title}
            </h3>

            <p className="text-sm text-white/70 font-light leading-relaxed">
              {activeProject.description}
            </p>

            {/* Campaign Key Metric Results */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest block font-bold flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" />
                // CAMPAIGN GROWTH IMPACT
              </span>
              <div className="space-y-2">
                {activeProject.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-white font-bold flex items-center justify-between">
                    <span>{res}</span>
                    <span className="text-[#00f0ff]">✓ VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Delivered Pills */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                // DISCIPLINES EXECUTED
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.services.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono bg-white/5 text-white/80 border border-white/10 px-3 py-1 rounded-full uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to Case Study */}
            <div className="pt-4 border-t border-white/10">
              <Link
                href={`/work/${activeProject.id}`}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00f0ff] text-black font-outfit font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)]"
              >
                <span>EXPLORE CASE STUDY</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Control Bar */}
      <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between border-t border-white/10 pt-4 z-10 text-xs font-mono text-white/40">
        <div className="flex items-center gap-2">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => revolveToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-8 bg-[#00f0ff]" : "w-2 bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        <span>USE SCROLL OR CONTROLS TO REVOLVE 3D PORTFOLIO</span>
      </div>
    </section>
  );
};
