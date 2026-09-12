"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS, Project } from "@/data/agencyData";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { CursorParallaxImage } from "@/components/ui/CursorParallaxImage";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const SelectedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-work-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
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
    <section ref={sectionRef} id="work" className="pt-6 sm:pt-10 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12 max-w-[1700px] mx-auto">
      {/* Section Header */}
      <div className="gsap-work-header flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-8 sm:pb-12 mb-12 sm:mb-20 gap-6">
        <div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-600 uppercase tracking-widest mb-2 font-extrabold flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> FEATURED CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-[0.95]">
            <SplitTextReveal text="SELECTED WORK" highlightWords={["WORK"]} accentColor="#00aeac" />
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm sm:text-base text-zinc-700 max-w-md font-light leading-relaxed">
          An editorial archive of high-converting Google Ads PPC campaigns, Technical SEO growth benchmarks, and ROI-driven digital marketing launches.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16 lg:space-y-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index: _index, isMobile }: { project: Project; index: number; isMobile: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: cardRef.current,
          start: "top 85%",
          onEnter: () => setIsInView(true),
          once: true,
        });
      }, cardRef);
      return () => ctx.revert();
    },
    { scope: cardRef, dependencies: [isMobile] }
  );

  const cardAnimation = {
    initial: { opacity: 0, y: isMobile ? 40 : 60, scale: isMobile ? 0.98 : 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: isMobile ? 0.7 : 1, ease: "easeOut" as const },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" as const, delay: 0.2 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  const renderProjectInfo = () => (
    <motion.div
      className="space-y-4 sm:space-y-6"
      variants={contentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-outfit font-bold text-zinc-700"
        variants={itemVariants}
      >
        <span className="text-xl sm:text-2xl font-outfit font-extrabold text-emerald-600">{project.number}</span>
        <span className="w-6 sm:w-8 h-px bg-zinc-300"></span>
        <span>{project.year}</span>
      </motion.div>

      <motion.h3
        className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-950 group-hover:text-emerald-600 transition-colors duration-500 uppercase tracking-tight leading-[1.1]"
        variants={itemVariants}
      >
        {project.title}
      </motion.h3>

      <motion.p
        className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed"
        variants={itemVariants}
      >
        {project.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 pt-1"
        variants={itemVariants}
      >
        {project.services.map((service, i) => (
          <motion.span
            key={i}
            className="text-[10px] sm:text-xs font-outfit font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,174,172,0.15)" }}
          >
            {service}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="pt-2 sm:pt-4"
        variants={itemVariants}
      >
        <Magnetic strength={0.3}>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold font-outfit tracking-widest text-emerald-600 group-hover:translate-x-2 transition-transform duration-300">
            <span>EXPLORE PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </Magnetic>
      </motion.div>
    </motion.div>
  );

  if (project.layoutType === "right-large") {
    return (
      <motion.div
        ref={cardRef}
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 items-center group cursor-pointer"
        data-cursor-text="VIEW CASE"
        initial={cardAnimation.initial}
        animate={cardAnimation.animate}
        transition={cardAnimation.transition}
      >
        {/* Left Project Info */}
        <div className="order-2 lg:order-1">
          {renderProjectInfo()}
        </div>

        {/* Right Large Image */}
        <motion.div className="order-1 lg:order-2 w-full" initial={imageAnimation.initial} animate={imageAnimation.animate} transition={imageAnimation.transition}>
          <CursorParallaxImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/10] sm:aspect-[16/10] w-full"
            disableParallax={isMobile}
          />
        </motion.div>
      </motion.div>
    );
  }

  if (project.layoutType === "left-large") {
    return (
      <motion.div
        ref={cardRef}
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 items-center group cursor-pointer"
        data-cursor-text="VIEW CASE"
        initial={cardAnimation.initial}
        animate={cardAnimation.animate}
        transition={cardAnimation.transition}
      >
        {/* Left Image */}
        <motion.div className="w-full" initial={imageAnimation.initial} animate={imageAnimation.animate} transition={imageAnimation.transition}>
          <CursorParallaxImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/10] sm:aspect-[16/10] w-full"
            disableParallax={isMobile}
          />
        </motion.div>

        {/* Right Project Info */}
        <div className="order-2 lg:order-1">
          {renderProjectInfo()}
        </div>
      </motion.div>
    );
  }

  if (project.layoutType === "full-width") {
    return (
      <motion.div
        ref={cardRef}
        className="space-y-6 sm:space-y-8 group cursor-pointer"
        data-cursor-text="VIEW CASE"
        initial={cardAnimation.initial}
        animate={cardAnimation.animate}
        transition={cardAnimation.transition}
      >
        <motion.div initial={imageAnimation.initial} animate={imageAnimation.animate} transition={imageAnimation.transition}>
          <CursorParallaxImage
            src={project.image}
            alt={project.title}
            className="aspect-[21/9] w-full rounded-2xl"
            disableParallax={isMobile}
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 px-2 sm:px-4"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <motion.div
              className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-outfit font-bold text-zinc-700 mb-1"
              variants={itemVariants}
            >
              <span className="text-xl sm:text-2xl font-outfit font-extrabold text-emerald-600">{project.number}</span>
              <span>{"//"} {project.industry}</span>
            </motion.div>
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-950 group-hover:text-emerald-600 transition-colors duration-300 uppercase tracking-tighter leading-[1.1]"
              variants={itemVariants}
            >
              {project.title}
            </motion.h3>
          </div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <Magnetic strength={0.3}>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold font-outfit tracking-widest text-emerald-600 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                <span>EXPLORE FULL CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Overlap Layout
  return (
    <motion.div
      ref={cardRef}
      className="relative grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 items-center group cursor-pointer"
      data-cursor-text="VIEW CASE"
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={cardAnimation.transition}
    >
      <motion.div className="lg:col-span-8 relative z-10 w-full" initial={imageAnimation.initial} animate={imageAnimation.animate} transition={imageAnimation.transition}>
        <CursorParallaxImage
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full"
          disableParallax={isMobile}
        />
      </motion.div>

      <motion.div
        className="lg:col-span-6 lg:-ml-16 lg:mt-0 mt-6 relative z-20 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-50 border-2 border-zinc-300 shadow-xl space-y-4 sm:space-y-6"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-outfit font-bold text-zinc-700"
          variants={itemVariants}
        >
          <span className="text-xl sm:text-2xl font-outfit font-extrabold text-emerald-600">{project.number}</span>
          <span>{project.year}</span>
        </motion.div>

        <motion.h3
          className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-black text-zinc-950 group-hover:text-emerald-600 transition-colors duration-300 uppercase tracking-tight leading-[1.1]"
          variants={itemVariants}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-sm text-zinc-700 font-light leading-relaxed"
          variants={itemVariants}
        >
          {project.description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Magnetic strength={0.3}>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold font-outfit tracking-widest text-emerald-600 group-hover:translate-x-2 transition-transform">
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </Magnetic>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
