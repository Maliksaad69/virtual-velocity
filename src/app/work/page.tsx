"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/agencyData";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { CursorParallaxImage } from "@/components/ui/CursorParallaxImage";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUpRight, Filter } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = ["ALL", "RETAIL & E-COMMERCE", "FINANCIAL INFRASTRUCTURE", "HEALTHCARE & MEDTECH", "AUTOMOTIVE & HIGH-TECH"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-work-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

      gsap.fromTo(
        ".gsap-work-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-work-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: scopeRef }
  );

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.industry.toUpperCase() === activeCategory);

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="gsap-work-title space-y-6 border-b border-white/10 pb-12">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // ARCHIVE & SELECTED CASE STUDIES
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              <SplitTextReveal text="FEATURED WORK" highlightWords={["WORK"]} accentColor="#00f0ff" />
            </h1>
            <p className="text-base sm:text-xl text-white/70 max-w-2xl font-light">
              Explore our portfolio of ROI-driven digital marketing campaigns, Technical SEO growth benchmarks, Google Ads PPC overhauls, and paid social activations.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 text-xs font-mono text-white/40">
              <Filter className="w-4 h-4 text-[#00f0ff]" />
              <span>FILTER BY INDUSTRY:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-mono px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#00f0ff] border-[#00f0ff] text-black font-bold"
                      : "bg-surface border-white/10 text-white/70 hover:border-white/30"
                  }`}
                  data-cursor-pointer
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Work */}
          <div className="gsap-work-grid grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="gsap-work-card group cursor-pointer space-y-6"
                data-cursor-text="VIEW CASE"
              >
                <Link href={`/work/${project.id}`}>
                  <CursorParallaxImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10]"
                  />
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-white/40">
                      <span className="text-[#00f0ff] font-bold">{project.number}</span>
                      <span>{project.industry} // {project.year}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl sm:text-4xl font-outfit font-extrabold text-white group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight">
                        {project.title}
                      </h2>
                      <Magnetic strength={0.3}>
                        <div className="p-3 rounded-full border border-white/10 group-hover:border-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black text-white transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </Magnetic>
                    </div>

                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.services.map((s, i) => (
                        <span key={i} className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-12 sm:p-20 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-meta text-[#00f0ff]">// NEXT STEPS</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                READY TO SCALE YOUR CAMPAIGN REVENUE?
              </h3>
            </div>
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="px-8 py-5 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
              >
                <span>PROPOSE A CAMPAIGN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
