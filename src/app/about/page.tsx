"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/ui/TiltCard";
import { CursorParallaxImage } from "@/components/ui/CursorParallaxImage";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TEAM = [
  {
    name: "MARCUS CHEN",
    role: "VP OF DIGITAL MARKETING",
    bio: "Pioneered Google Ads search structuring and omnichannel e-commerce PPC scaling for global brands.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "SARAH JENNINGS",
    role: "HEAD OF TECHNICAL SEO",
    bio: "Ex-Enterprise search engineer specializing in schema markup, Core Web Vitals, and B2B topic hubs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "KAI HARADA",
    role: "CREATIVE & BRAND DIRECTOR",
    bio: "Crafted brand positioning, visual identity systems, and conversion-optimized ad creatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

const AWARDS = [
  { title: "TOP PPC DIGITAL AGENCY", org: "CLUTCH LEADERS", year: "2024-2026" },
  { title: "BEST SEO CAMPAIGN ROI", org: "SEARCH ENGINE LAND", year: "2025" },
  { title: "EXCELLENCE IN CONVERSION RATE OPTIMIZATION", org: "MARKETING AWARDS", year: "2026" },
  { title: "TOP SOCIAL MEDIA STRATEGY", org: "DIGITAL MARKETING AWARDS", year: "2025" },
];

export default function AboutPage() {
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
      // — Hero header —
      gsap.fromTo(
        ".gsap-about-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

      // — Live clocks section entrance (blur-to-clear + scale) —
      gsap.fromTo(
        ".gsap-clocks-panel",
        { opacity: 0, scale: 0.95, filter: "blur(4px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-clocks-panel",
            start: "top 85%",
          },
        }
      );

      // — Clock hub items stagger in —
      gsap.fromTo(
        ".gsap-clock-hub",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-clocks-panel",
            start: "top 80%",
          },
        }
      );

      // — Team cards staggered entrance —
      gsap.fromTo(
        ".gsap-team-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-team-grid",
            start: "top 80%",
          },
        }
      );

      // — Awards staggered from opposite sides —
      gsap.fromTo(
        ".gsap-award-row",
        { opacity: 0, x: (i) => (i % 2 === 0 ? -24 : 24) },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-awards-grid",
            start: "top 85%",
          },
        }
      );

      // — CTA box float up —
      gsap.fromTo(
        ".gsap-cta-box",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-cta-box",
            start: "top 88%",
          },
        }
      );
    },
    { scope: scopeRef }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-24">
          {/* Header */}
          <div className="gsap-about-title space-y-6 border-b border-white/10 pb-16">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // AGENCY MANIFESTO & CULTURE
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              <SplitTextReveal text="WE ARE AURA LABS" highlightWords={["LABS"]} accentColor="#00f0ff" />
            </h1>
            <p className="text-base sm:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              A full-service digital marketing & creative strategy agency scaling client revenue through Google Ads PPC, Technical SEO, Social Media, and Conversion Rate Optimization.
            </p>
          </div>

          {/* Live Operational Hub Clocks Grid */}
          <div className="gsap-clocks-panel grid grid-cols-1 md:grid-cols-3 gap-8 p-8 sm:p-12 rounded-3xl bg-surface border border-white/10">
            <div className="gsap-clock-hub space-y-2">
              <span className="text-meta text-white/40">// HQ HUB 01</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">WILMINGTON, DE (USA)</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.delaware || "00:00"}</div>
              <p className="text-xs font-mono text-white/50">EASTERN STANDARD TIME (EST)</p>
            </div>
            <div className="gsap-clock-hub space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
              <span className="text-meta text-white/40">// HQ HUB 02</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">LAHORE, PK</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.lahore || "00:00"}</div>
              <p className="text-xs font-mono text-white/50">PAKISTAN STANDARD TIME (PKT)</p>
            </div>
            <div className="gsap-clock-hub space-y-2 md:pl-4">
              <span className="text-meta text-white/40">// HUB 03</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">LONDON, UK</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.london || "00:00"}</div>
              <p className="text-xs font-mono text-white/50">GREENWICH MEAN TIME (GMT)</p>
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="space-y-12 border-t border-white/10 pt-20">
            <div className="space-y-2">
              <span className="text-meta text-[#00f0ff]">// LEADERSHIP & CRAFT</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                MEET THE MARKETING STRATEGISTS
              </h2>
            </div>

            <div className="gsap-team-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM.map((member, idx) => (
                <TiltCard key={idx} className="gsap-team-card group space-y-6" maxTilt={4} scale={1.005}>
                  {/* Distortion reveal on team images */}
                  <CursorParallaxImage
                    src={member.image}
                    alt={member.name}
                    className="aspect-[3/4]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-outfit font-extrabold text-white uppercase group-hover:text-[#00f0ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#00f0ff]">{member.role}</p>
                    <p className="text-sm text-white/70 font-light leading-relaxed pt-1">{member.bio}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Awards & Honors */}
          <div className="space-y-12 border-t border-white/10 pt-20">
            <div className="space-y-2">
              <span className="text-meta text-[#00f0ff]">// RECOGNITION & HONORS</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                INDUSTRY RECOGNITION
              </h2>
            </div>

            <div className="gsap-awards-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="gsap-award-row p-8 rounded-2xl bg-surface border border-white/10 flex items-center justify-between hover:border-[#00f0ff]/50 transition-all duration-500">
                  <div className="space-y-1">
                    <h3 className="text-xl font-outfit font-extrabold text-white uppercase">{award.title}</h3>
                    <p className="text-xs font-mono text-white/50">{award.org}</p>
                  </div>
                  <span className="text-xs font-mono text-[#00f0ff] border border-[#00f0ff]/30 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="gsap-cta-box p-12 sm:p-20 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-meta text-[#00f0ff]">// COLLABORATE WITH US</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                READY TO SCALE YOUR REVENUE?
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