"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { CursorParallaxImage } from "@/components/ui/CursorParallaxImage";
import { CreativeCTA } from "@/components/ui/CreativeCTA";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Zap } from "lucide-react";

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
      gsap.fromTo(
        ".gsap-about-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

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
      <main ref={scopeRef} className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative selection:bg-[#00f0ff] selection:text-black font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="gsap-about-title space-y-6 border-b border-white/10 pb-12">
            <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00f0ff]" />
              AGENCY MANIFESTO & CULTURE
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-white tracking-tight uppercase leading-[0.9]">
              <SplitTextReveal text="WE ARE VIRTUAL VELOCITY" highlightWords={["VELOCITY"]} accentColor="#00f0ff" />
            </h1>
            <p className="text-base sm:text-2xl text-white/75 max-w-3xl font-light leading-relaxed">
              A full-service digital marketing & creative strategy agency scaling client revenue through Google Ads PPC, Technical SEO, Social Media, and Conversion Rate Optimization.
            </p>
          </div>

          {/* Live Operational Hub Clocks Grid */}
          <div className="gsap-clocks-panel grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:p-12 rounded-3xl bg-surface border border-white/15 shadow-xl">
            <div className="gsap-clock-hub space-y-2">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider">HQ HUB 01</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">WILMINGTON, DE (USA)</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.delaware || "00:00"}</div>
              <p className="text-xs font-outfit font-medium text-white/60">EASTERN STANDARD TIME (EST)</p>
            </div>
            <div className="gsap-clock-hub space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider">HQ HUB 02</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">LAHORE, PK</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.lahore || "00:00"}</div>
              <p className="text-xs font-outfit font-medium text-white/60">PAKISTAN STANDARD TIME (PKT)</p>
            </div>
            <div className="gsap-clock-hub space-y-2 md:pl-4">
              <span className="text-xs font-outfit font-bold text-white/50 uppercase tracking-wider">HUB 03</span>
              <h3 className="text-xl font-outfit font-extrabold text-white">LONDON, UK</h3>
              <div className="text-3xl sm:text-4xl font-outfit font-black text-[#00f0ff]">{times.london || "00:00"}</div>
              <p className="text-xs font-outfit font-medium text-white/60">GREENWICH MEAN TIME (GMT)</p>
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="space-y-10 border-t border-white/10 pt-16">
            <div className="space-y-2">
              <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">LEADERSHIP & CRAFT</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                MEET THE MARKETING STRATEGISTS
              </h2>
            </div>

            <div className="gsap-team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {TEAM.map((member, idx) => (
                <TiltCard key={idx} className="gsap-team-card group space-y-6" maxTilt={4} scale={1.005}>
                  <CursorParallaxImage
                    src={member.image}
                    alt={member.name}
                    className="aspect-[3/4]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-outfit font-black text-white uppercase group-hover:text-[#00f0ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">{member.role}</p>
                    <p className="text-sm text-white/75 font-light leading-relaxed pt-1">{member.bio}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Awards & Honors */}
          <div className="space-y-10 border-t border-white/10 pt-16">
            <div className="space-y-2">
              <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">RECOGNITION & HONORS</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                INDUSTRY RECOGNITION
              </h2>
            </div>

            <div className="gsap-awards-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="gsap-award-row p-6 sm:p-8 rounded-2xl bg-surface border border-white/10 flex items-center justify-between hover:border-[#00f0ff]/50 transition-all duration-500 shadow-md">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-white uppercase">{award.title}</h3>
                    <p className="text-xs font-outfit text-white/50">{award.org}</p>
                  </div>
                  <span className="text-xs font-outfit font-extrabold text-[#00f0ff] border border-[#00f0ff]/30 px-3 py-1 rounded-full bg-[#00f0ff]/10">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="gsap-cta-box p-8 sm:p-16 rounded-3xl bg-surface border-2 border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3">
              <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">COLLABORATE WITH US</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                READY TO SCALE YOUR REVENUE?
              </h3>
            </div>
            <div className="w-full sm:w-auto">
              <CreativeCTA href="/contact" text="PROPOSE A CAMPAIGN" variant="electric" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}