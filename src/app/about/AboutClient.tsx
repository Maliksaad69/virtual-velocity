"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { CreativeCTA } from "@/components/ui/CreativeCTA";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { FOUNDER, SERVICES, AGENCY_INFO } from "@/data/agencyData";
import { Zap, Sparkles, Users, Award, Clock, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AWARDS = [
  { title: "TOP PPC DIGITAL AGENCY", org: "CLUTCH LEADERS", year: "2024-2026" },
  { title: "BEST SEO CAMPAIGN ROI", org: "SEARCH ENGINE LAND", year: "2025" },
  { title: "EXCELLENCE IN CONVERSION RATE OPTIMIZATION", org: "MARKETING AWARDS", year: "2026" },
  { title: "TOP SOCIAL MEDIA STRATEGY", org: "DIGITAL MARKETING AWARDS", year: "2025" },
];

export function AboutClient() {
  const [times, setTimes] = useState({ delaware: "", lahore: "", london: "" });
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        delaware: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false }),
        lahore: now.toLocaleTimeString("en-US", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit", hour12: false }),
        london: now.toLocaleTimeString("en-US", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit", hour12: false }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-about-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );

      gsap.fromTo(
        ".gsap-clocks-panel",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-clocks-panel",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-award-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-awards-grid",
            start: "top 85%",
          },
        }
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
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.92] sm:leading-[0.9]">
              <SplitTextReveal text="WE ARE VIRTUAL VELOCITY" highlightWords={["VELOCITY"]} accentColor="#00aeac" />
            </h1>
            <p className="text-base sm:text-2xl text-zinc-700 max-w-3xl font-light leading-relaxed">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, and creative direction to fuel business growth.
            </p>
          </div>

          {/* 2. About Virtual Velocity Narrative */}
          <section className="space-y-8 sm:space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 01 // THE AGENCY STORY
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">7+ Years of Impact</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900 leading-tight">
                  A Creative House Built for Brands That Want to <span className="text-emerald-600">Move Forward.</span>
                </h2>
                <p className="text-base sm:text-xl text-zinc-700 font-light leading-relaxed">
                  Over the past seven years, Virtual Velocity has evolved from a boutique creative studio into an international growth powerhouse. We operate at the intersection of bold aesthetic design, high-converting digital advertising, and enterprise technical engineering.
                </p>
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  We don&apos;t build vanity campaigns that look pretty in pitch decks but fail in the market. Every visual identity, paid media funnel, and custom software solution we deploy is engineered with one clear objective: driving measurable, compounding revenue for our client partners.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">7+</span>
                  <h3 className="text-sm font-extrabold uppercase text-zinc-900">Years of Experience</h3>
                  <p className="text-xs text-zinc-600 font-light">Transforming ambitious brands globally.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-zinc-900">240+</span>
                  <h3 className="text-sm font-extrabold uppercase text-zinc-900">Campaigns Deployed</h3>
                  <p className="text-xs text-zinc-600 font-light">Across US, European &amp; Asian markets.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">1M+</span>
                  <h3 className="text-sm font-extrabold uppercase text-zinc-900">Community Reach</h3>
                  <p className="text-xs text-zinc-600 font-light">Proprietary digital media network.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-zinc-900">4.8x</span>
                  <h3 className="text-sm font-extrabold uppercase text-zinc-900">Average ROAS</h3>
                  <p className="text-xs text-zinc-600 font-light">Performance media return benchmark.</p>
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

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900 leading-tight">
                  Driving Attention, Culture &amp; <span className="text-emerald-600">Growth.</span>
                </h2>

                <p className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed">
                  {FOUNDER.bio}
                </p>

                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
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

          {/* 4. Our Capabilities — Numbered Format */}
          <section className="space-y-8 sm:space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 03 // OUR CAPABILITIES
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Full-Service Capabilities</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-black font-mono text-emerald-600 tracking-wider">
                      {service.number} {"//"} {service.category}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                      {service.description || service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <span key={item} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Live Operational Hub Clocks */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold">
              <Clock className="w-4 h-4" /> 04 // GLOBAL TIMEZONES
            </div>
            <div className="gsap-clocks-panel grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-outfit font-bold text-zinc-500 uppercase tracking-wider">HQ HUB 01</span>
                <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-zinc-900">WILMINGTON, DE (USA)</h3>
                <div className="text-3xl sm:text-4xl font-outfit font-black text-zinc-900">{times.delaware || "00:00"}</div>
                <p className="text-xs font-outfit font-medium text-zinc-500">EASTERN STANDARD TIME (EST)</p>
              </div>
              <div className="space-y-2 border-y md:border-y-0 md:border-x border-zinc-200 py-6 md:py-0 md:px-8">
                <span className="text-xs font-outfit font-bold text-zinc-500 uppercase tracking-wider">HQ HUB 02</span>
                <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-zinc-900">LAHORE, PK</h3>
                <div className="text-3xl sm:text-4xl font-outfit font-black text-zinc-900">{times.lahore || "00:00"}</div>
                <p className="text-xs font-outfit font-medium text-zinc-500">PAKISTAN STANDARD TIME (PKT)</p>
              </div>
              <div className="space-y-2 md:pl-4">
                <span className="text-xs font-outfit font-bold text-zinc-500 uppercase tracking-wider">HUB 03</span>
                <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-zinc-900">LONDON, UK</h3>
                <div className="text-3xl sm:text-4xl font-outfit font-black text-zinc-900">{times.london || "00:00"}</div>
                <p className="text-xs font-outfit font-medium text-zinc-500">GREENWICH MEAN TIME (GMT)</p>
              </div>
            </div>
          </section>

          {/* 6. Industry Recognition */}
          <section className="space-y-8 border-t border-zinc-200 pt-12 sm:pt-16">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> 05 // RECOGNITION &amp; HONORS
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-900 uppercase tracking-tight mt-1">
                  INDUSTRY RECOGNITION
                </h2>
              </div>
            </div>

            <div className="gsap-awards-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="gsap-award-row p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between hover:border-emerald-500 transition-all duration-300 shadow-xs">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-outfit font-extrabold text-zinc-900 uppercase">{award.title}</h3>
                    <p className="text-xs font-outfit text-zinc-600">{award.org}</p>
                  </div>
                  <span className="text-xs font-outfit font-extrabold text-zinc-900 border border-zinc-200 px-3 py-1 rounded-full bg-zinc-100 flex-shrink-0 ml-4">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. CTA Box */}
          <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-zinc-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-extrabold">COLLABORATE WITH US</span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                READY TO SCALE YOUR REVENUE?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
                Connect directly with our leadership team for a comprehensive growth audit and 12-hour roadmap proposal.
              </p>
            </div>
            <div className="w-full sm:w-auto relative z-10">
              <CreativeCTA href="/contact" text="PROPOSE A CAMPAIGN" variant="electric" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
