"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { FOUNDER, AGENCY_INFO } from "@/data/agencyData";
import { Zap, Sparkles, Users, ShieldCheck } from "lucide-react";
import { CommunitiesShowcaseBars } from "@/components/sections/CommunitiesShowcaseBars";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutClient() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-about-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
    },
    { scope: scopeRef }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-28 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto space-y-20 sm:space-y-28">
          {/* 1. Hero Header */}
          <div className="gsap-about-title space-y-6 border-b border-zinc-200 pb-10 sm:pb-14">
            <span className="text-xs sm:text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              AGENCY MANIFESTO &amp; CULTURE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-outfit font-black text-zinc-900 tracking-tighter uppercase leading-[0.88] select-none">
              <SplitTextReveal text="WE ARE VIRTUAL VELOCITY" highlightWords={["VELOCITY"]} accentColor="#00aeac" />
            </h1>
            <p className="text-base sm:text-2xl text-black max-w-3xl font-normal leading-relaxed">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, and creative direction to fuel business growth.
            </p>
          </div>

          {/* 2. About Virtual Velocity Narrative */}
          <section className="space-y-8 sm:space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 01 // THE AGENCY STORY
              </span>
              <span className="text-xs font-mono text-black font-bold uppercase tracking-wider">7+ Years of Impact</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                  A Creative House Built for Brands That Want to <span className="text-emerald-600">Move Forward.</span>
                </h2>
                <p className="text-base sm:text-lg text-black font-normal leading-relaxed">
                  We are a creative house where strategy meets storytelling, bringing together digital marketing, content creation, commercial shoots, social media, SEO, influencer marketing, graphic design, paid advertising, and AI-powered solutions.
                </p>
                <p className="text-base sm:text-lg text-black font-normal leading-relaxed">
                  We believe great brands are not built by simply posting more. They are built through ideas that connect, visuals that stand out, and strategies that create real impact.
                </p>
                <p className="text-base sm:text-lg text-black font-normal leading-relaxed">
                  From hospitality and food to lifestyle, beauty, retail, and beyond, we work with brands to build a stronger digital presence and turn their vision into something people can see, feel, and remember.
                </p>
                <p className="text-base sm:text-lg text-black font-semibold leading-relaxed">
                  7+ years of experience. One creative house. Endless ways to make your brand move.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">7+</span>
                  <h3 className="text-sm font-extrabold uppercase text-black">Years of Experience</h3>
                  <p className="text-xs text-black font-medium">Transforming ambitious brands globally.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-black">240+</span>
                  <h3 className="text-sm font-extrabold uppercase text-black">Campaigns Deployed</h3>
                  <p className="text-xs text-black font-medium">Across United States, European &amp; Asian markets.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">1M+</span>
                  <h3 className="text-sm font-extrabold uppercase text-black">Community Reach</h3>
                  <p className="text-xs text-black font-medium">Proprietary digital media network.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-black">4.8x</span>
                  <h3 className="text-sm font-extrabold uppercase text-black">Average ROAS</h3>
                  <p className="text-xs text-black font-medium">Performance media return benchmark.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Meet the Founder — Tauseef Alam */}
          <section className="space-y-8 sm:space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-2">
                <Users className="w-4 h-4" /> 02 // LEADERSHIP
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Meet The Founder</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Founder Narrative & Communities (LEFT) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-8 space-y-6 order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 font-extrabold uppercase tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5" /> Founder &amp; Community Pioneer
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                  Driving Attention, Culture &amp; <span className="text-emerald-600">Growth.</span>
                </h2>

                {FOUNDER.bioParagraphs ? (
                  FOUNDER.bioParagraphs.map((para, i) => (
                    <p key={i} className="text-base sm:text-lg text-black font-normal leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-base sm:text-lg text-black font-normal leading-relaxed">
                    {FOUNDER.bio}
                  </p>
                )}

                <p className="text-base sm:text-lg text-black font-normal leading-relaxed">
                  {FOUNDER.vision}
                </p>

              </motion.div>

              {/* Founder Photo (RIGHT, scaled down) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-4 relative order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[4/4.8] rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-xl bg-zinc-100">
                  <img
                    src={FOUNDER.image}
                    alt={FOUNDER.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                      {FOUNDER.experience} in Digital Media
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                      {FOUNDER.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium">
                      {FOUNDER.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Proprietary Media Communities Showcase (Full width reference design) */}
            <div className="mt-14 sm:mt-18 pt-10 border-t border-zinc-200">
              <CommunitiesShowcaseBars />
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
