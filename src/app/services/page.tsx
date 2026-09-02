"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GSAPRevolvingServices } from "@/components/sections/GSAPRevolvingServices";
import { CreativeCTA } from "@/components/ui/CreativeCTA";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQS = [
  {
    q: "HOW SOON CAN WE EXPECT MEASURABLE RESULTS?",
    a: "PPC ad campaigns and Paid Social start generating qualified leads within 48 hours of launch. Technical SEO and organic authority growth deliver measurable keyword rankings and traffic spikes within 60 to 90 days."
  },
  {
    q: "DO YOU REQUIRE LONG-TERM RETENTION CONTRACTS?",
    a: "We offer flexible 3-month growth sprints and month-to-month performance retainers. We earn your business every month through transparent ROI metrics."
  },
  {
    q: "WHAT AD SPEND BUDGETS DO YOU MANAGE?",
    a: "We manage ad spends ranging from $5,000/month for growing direct-to-consumer and B2B brands up to $250,000+/month for enterprise market leaders."
  },
  {
    q: "HOW IS REPORTING AND CAMPAIGN ATTRIBUTION HANDLED?",
    a: "You gain access to a 24/7 real-time ROI analytics dashboard tracking CAC, ROAS, conversions, organic rank velocity, and revenue generated down to the dollar."
  }
];

export default function ServicesPage() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-services-header",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

      gsap.fromTo(
        ".gsap-faq-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-faq-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-cta-box",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".gsap-cta-box",
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

        <div className="pt-32 sm:pt-40 pb-12 px-6 sm:px-12 max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="gsap-services-header space-y-6 border-b border-zinc-200 pb-12">
            <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-zinc-900" />
              DIGITAL MARKETING DISCIPLINES
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.9]">
              <SplitTextReveal text="MARKETING SERVICES" highlightWords={["SERVICES"]} accentColor="#059669" />
            </h1>
            <p className="text-base sm:text-2xl text-zinc-600 max-w-3xl font-light leading-relaxed">
              We execute high-converting Google Ads PPC, Technical SEO audits, Social Media marketing, and Conversion Rate Optimization (CRO) designed to scale business revenue.
            </p>
          </div>
        </div>

        {/* Interactive GSAP 3D Revolving Service Spectrum */}
        <GSAPRevolvingServices />

        <div className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* FAQ Section */}
          <div className="space-y-10 border-t border-zinc-200 pt-16">
            <div className="space-y-2">
              <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl sm:text-5xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                CLEAR & TRANSPARENT ANSWERS
              </h2>
            </div>

            <div className="gsap-faq-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="gsap-faq-card p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 space-y-3 hover:border-zinc-900 transition-all duration-500 shadow-sm">
                  <h3 className="font-outfit font-extrabold text-zinc-900 text-base sm:text-xl uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative CTA Box */}
          <div className="gsap-cta-box p-8 sm:p-16 rounded-3xl bg-white border-2 border-zinc-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider">HAVE QUESTIONS?</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                LET'S DISCUSS YOUR GROWTH GOALS
              </h3>
            </div>
            <div className="z-10 w-full sm:w-auto">
              <CreativeCTA href="/contact" text="BOOK A MARKETING CALL" variant="electric" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}