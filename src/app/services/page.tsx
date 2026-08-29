"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/data/agencyData";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQS = [
  {
    q: "WHAT IS YOUR TYPICAL CAMPAIGN ONBOARDING TIMELINE?",
    a: "Campaign audits, technical SEO setup, Google Ads structuring, and initial creative ad production take 7 to 14 business days before live launch.",
  },
  {
    q: "HOW DO YOU REPORT CAMPAIGN ROAS & CONVERSIONS?",
    a: "We build custom Looker Studio dashboards linked to Google Analytics 4, Meta Business Manager, and Google Ads for real-time tracking.",
  },
  {
    q: "DO YOU MANAGE MONTHLY AD SPEND BUDGETS?",
    a: "Yes. We manage and optimize monthly digital ad spend budgets ranging from $5,000 to $250,000+ across Google, Meta, TikTok, and LinkedIn.",
  },
  {
    q: "WHAT ARE YOUR AGENCY ENGAGEMENT MODELS?",
    a: "We offer performance-backed monthly retainers ($3.5k - $25k+/mo) or dedicated growth studio partnerships.",
  },
];

export default function ServicesPage() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // — Hero header stagger —
      gsap.fromTo(
        ".gsap-service-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

      // — Service cards staggered entrance with clip-path reveal —
      gsap.fromTo(
        ".gsap-service-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-services-grid",
            start: "top 80%",
          },
        }
      );

      // — FAQ cards staggered in from opposite sides (alternating) —
      gsap.fromTo(
        ".gsap-faq-card",
        { opacity: 0, x: (i) => (i % 2 === 0 ? -30 : 30), filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-faq-grid",
            start: "top 85%",
          },
        }
      );

      // — CTA box floats up —
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
          <div className="gsap-service-title space-y-6 border-b border-white/10 pb-16">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // ROI-DRIVEN MARKETING DISCIPLINES
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              <SplitTextReveal text="SERVICES & STRATEGY" highlightWords={["STRATEGY"]} accentColor="#00f0ff" />
            </h1>
            <p className="text-base sm:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              We execute high-converting Google Ads PPC, Technical SEO audits, Social Media marketing, and Conversion Rate Optimization (CRO) designed to scale business revenue.
            </p>
          </div>

          {/* Deep-Dive Service Cards with 3D tilt */}
          <div className="gsap-services-grid grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <TiltCard
                key={service.id}
                maxTilt={4}
                scale={1.005}
                className="gsap-service-card rounded-3xl bg-surface border border-white/10 overflow-hidden group hover:border-[#00f0ff] transition-all duration-500"
              >
                <div className="p-8 sm:p-12 space-y-8 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-outfit font-extrabold text-[#00f0ff]">{service.number}</span>
                    <span className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase">
                      {service.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-white group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-base text-white/70 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-meta text-white/40">// KEY DELIVERABLES</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* FAQ Section with alternating entrance */}
          <div className="space-y-12 border-t border-white/10 pt-20">
            <div className="space-y-2">
              <span className="text-meta text-[#00f0ff]">// FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white uppercase tracking-tight">
                CLEAR & TRANSPARENT ANSWERS
              </h2>
            </div>

            <div className="gsap-faq-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="gsap-faq-card p-8 rounded-2xl bg-surface/50 border border-white/10 space-y-3 hover:border-[#00f0ff]/50 transition-all duration-500">
                  <h3 className="font-outfit font-bold text-white text-lg uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="gsap-cta-box p-12 sm:p-20 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-meta text-[#00f0ff]">// HAVE QUESTIONS?</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                LET'S DISCUSS YOUR GROWTH GOALS
              </h3>
            </div>
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="px-8 py-5 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
              >
                <span>BOOK A MARKETING CALL</span>
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