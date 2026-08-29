"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS, Project } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";
import { CursorParallaxImage } from "@/components/ui/CursorParallaxImage";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const SelectedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-work-header",
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="work" className="pt-8 sm:pt-12 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto">
      {/* Section Header */}
      <div className="gsap-work-header flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-20">
        <div>
          <span className="text-meta text-[#00f0ff] uppercase tracking-widest block mb-2">
            // FEATURED CASE STUDIES
          </span>
          <h2 className="text-section-title font-outfit text-white">
            <SplitTextReveal text="SELECTED WORK" highlightWords={["WORK"]} accentColor="rgba(255,255,255,0.4)" />
          </h2>
        </div>
        <p className="mt-6 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-light">
          An editorial archive of high-converting Google Ads PPC campaigns, Technical SEO growth benchmarks, and ROI-driven digital marketing launches.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-32 sm:space-y-48">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: cardRef }
  );

  if (project.layoutType === "right-large") {
    return (
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center group cursor-pointer"
        data-cursor-text="VIEW CASE"
      >
        {/* Left Project Info */}
        <div className="md:col-span-5 space-y-6 order-2 md:order-1">
          <div className="flex items-center gap-4 text-xs font-mono text-white/40">
            <span className="text-2xl font-outfit font-extrabold text-[#00f0ff]">{project.number}</span>
            <span className="w-8 h-px bg-white/20"></span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white group-hover:text-[#00f0ff] transition-colors duration-500 uppercase tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.services.map((service, i) => (
              <span
                key={i}
                className="text-[10px] font-mono tracking-wider px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80"
              >
                {service}
              </span>
            ))}
          </div>

          <Magnetic strength={0.3}>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold font-outfit tracking-widest text-[#00f0ff] group-hover:translate-x-2 transition-transform duration-300">
              <span>EXPLORE PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Magnetic>
        </div>

        {/* Right Large Image */}
        <div className="md:col-span-7 order-1 md:order-2">
          <CursorParallaxImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/10]"
          />
        </div>
      </div>
    );
  }

  if (project.layoutType === "left-large") {
    return (
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center group cursor-pointer"
        data-cursor-text="VIEW CASE"
      >
        {/* Left Image */}
        <div className="md:col-span-7">
          <CursorParallaxImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/10]"
          />
        </div>

        {/* Right Project Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono text-white/40">
            <span className="text-2xl font-outfit font-extrabold text-[#ff2a6d]">{project.number}</span>
            <span className="w-8 h-px bg-white/20"></span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white group-hover:text-[#ff2a6d] transition-colors duration-500 uppercase tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.services.map((service, i) => (
              <span
                key={i}
                className="text-[10px] font-mono tracking-wider px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80"
              >
                {service}
              </span>
            ))}
          </div>

          <Magnetic strength={0.3}>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold font-outfit tracking-widest text-[#ff2a6d] group-hover:translate-x-2 transition-transform duration-300">
              <span>EXPLORE PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Magnetic>
        </div>
      </div>
    );
  }

  if (project.layoutType === "full-width") {
    return (
      <div
        ref={cardRef}
        className="space-y-8 group cursor-pointer"
        data-cursor-text="VIEW CASE"
      >
        <CursorParallaxImage
          src={project.image}
          alt={project.title}
          className="aspect-[21/9] w-full"
        />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
          <div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/60 mb-1">
              <span className="text-2xl font-outfit font-extrabold text-[#7000ff]">{project.number}</span>
              <span>// {project.industry}</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white group-hover:text-[#00f0ff] transition-colors duration-300 uppercase tracking-tighter">
              {project.title}
            </h3>
          </div>
          <Magnetic strength={0.3}>
            <div className="flex items-center gap-2 text-xs font-bold font-outfit tracking-widest text-white group-hover:text-[#00f0ff] transition-colors">
              <span>EXPLORE FULL CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Magnetic>
        </div>
      </div>
    );
  }

  // Overlap Layout
  return (
    <div
      ref={cardRef}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
      data-cursor-text="VIEW CASE"
    >
      <div className="md:col-span-8 relative z-10">
        <CursorParallaxImage
          src={project.image}
          alt={project.title}
          className="aspect-[16/10]"
        />
      </div>

      <div className="md:col-span-6 md:-ml-24 relative z-20 p-8 sm:p-12 rounded-2xl bg-[#121216]/90 backdrop-blur-xl border border-white/15 shadow-2xl space-y-6">
        <div className="flex items-center gap-4 text-xs font-mono text-white/40">
          <span className="text-2xl font-outfit font-extrabold text-[#00ff88]">{project.number}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-outfit font-black text-[#00ff88] group-hover:text-white transition-colors duration-300 uppercase tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-white/70 font-light leading-relaxed">
          {project.description}
        </p>

        <Magnetic strength={0.3}>
          <div className="flex items-center gap-2 text-xs font-bold font-outfit tracking-widest text-[#00ff88] group-hover:translate-x-2 transition-transform">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Magnetic>
      </div>
    </div>
  );
};
