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

        <div className="pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-28 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto space-y-20 sm:space-y-28">
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
                <p className="text-base sm:text-xl text-black font-normal leading-relaxed">
                  Over the past seven years, Virtual Velocity has evolved from a boutique creative studio into an international growth powerhouse. We operate at the intersection of bold aesthetic design, high-converting digital advertising, and enterprise technical engineering.
                </p>
                <p className="text-sm sm:text-base text-black font-normal leading-relaxed">
                  We don&apos;t build vanity campaigns that look pretty in pitch decks but fail in the market. Every visual identity, paid media funnel, and custom software solution we deploy is engineered with one clear objective: driving measurable, compounding revenue for our client partners.
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Founder Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-2xl bg-zinc-100">
                  <img
                    src={FOUNDER.image}
                    alt={FOUNDER.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold">
                      {FOUNDER.experience} in Digital Media
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                      {FOUNDER.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium">
                      {FOUNDER.role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Founder Narrative & Communities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-7 space-y-6"
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

                {/* Communities Showcase */}
                <div className="pt-4 border-t border-zinc-200 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold block">
                    Proprietary Media Communities (~1M Audience)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {FOUNDER.communities.map((comm) => (
                      <div key={comm.name} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                        <span className="text-xl font-black font-mono text-emerald-600 block">{comm.followers}</span>
                        <h4 className="text-xs font-extrabold uppercase text-zinc-900">{comm.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
