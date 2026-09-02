"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PROJECTS } from "@/data/agencyData";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export const HorizontalScrollSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(Math.max(0, totalWidth - viewportWidth + 40));
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 120,
    mass: 0.1,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const idx = Math.min(
        PROJECTS.length,
        Math.max(1, Math.ceil(latest * PROJECTS.length))
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section ref={targetRef} className="relative h-[160vh] bg-white">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-10 px-6 sm:px-12">
        {/* Top Header & Progress Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 z-10">
          <div className="flex items-center gap-4">
            <span className="text-meta text-emerald-600 uppercase tracking-widest font-extrabold">
              // CURATED PORTFOLIO
            </span>
            <span className="text-xs font-outfit font-bold text-zinc-500">
              [PROJECT 0{Math.min(activeIndex, PROJECTS.length)} OF 0{PROJECTS.length}]
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs font-outfit font-bold text-zinc-500">SCROLL EXPLORATION</span>
            <div className="w-32 h-1 bg-zinc-200 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-emerald-600 origin-left"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="my-auto overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 sm:gap-12 items-center w-max"
          >
            {/* Introductory Card */}
            <div className="w-[85vw] sm:w-[42vw] lg:w-[30vw] flex-shrink-0 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-zinc-50 border-2 border-zinc-300 space-y-6 select-none shadow-md">
              <div className="space-y-3">
                <span className="text-meta text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-600" /> PORTFOLIO GALLERY
                </span>
                <h2 className="text-3xl sm:text-5xl font-outfit font-black text-zinc-950 uppercase tracking-tighter leading-[0.9]">
                  CURATED <br />
                  <span className="text-emerald-600 font-extrabold">GALLERY</span> <br />
                  <span className="text-emerald-600 font-extrabold">ARCHIVE</span>
                </h2>
              </div>

              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Scroll down to slide through our high-converting PPC campaigns, SEO strategies, and custom digital platforms.
              </p>

              <div className="flex items-center gap-3 text-xs font-outfit font-extrabold text-emerald-600 border-t border-zinc-200 pt-4">
                <span className="animate-pulse">●</span>
                <span>SCROLL TO EXPLORE →</span>
              </div>
            </div>

            {/* Project Cards */}
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="w-[85vw] sm:w-[50vw] lg:w-[38vw] flex-shrink-0 group cursor-pointer"
                data-cursor-text="VIEW"
              >
                <Link href={`/work/${project.id}`} className="block space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-2 border-zinc-300 bg-zinc-100 shadow-xl group-hover:border-emerald-600 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

                    <div className="absolute top-6 left-6 flex items-center gap-3 text-xs font-outfit text-white bg-emerald-600/90 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500 shadow-sm">
                      <span className="text-white font-bold">0{idx + 1}</span>
                      <span>• {project.year}</span>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-outfit text-emerald-300 font-extrabold block uppercase tracking-wider">
                          {project.industry}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-outfit font-black text-white group-hover:text-emerald-200 transition-colors uppercase tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      <Magnetic strength={0.3}>
                        <div className="p-3.5 rounded-full bg-emerald-600 text-white group-hover:bg-emerald-700 transition-colors shadow-lg">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </Magnetic>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="flex items-center justify-between border-t border-zinc-200 pt-3 z-10 text-xs font-outfit font-bold text-zinc-500">
          <span>EXPLORE CASE STUDIES</span>
          <span className="hidden sm:inline-block">VIRTUAL VELOCITY STUDIO</span>
        </div>
      </div>
    </section>
  );
};
