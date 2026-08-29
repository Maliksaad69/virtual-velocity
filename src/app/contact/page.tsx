"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "WEBGL & WEB APP",
    budget: "$50K - $100K",
    timeline: "1 - 3 MONTHS",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useGSAP(
    () => {
      // — Header entrance —
      gsap.fromTo(
        ".gsap-contact-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );

      // — Left column staggered: email → hubs → availability —
      gsap.fromTo(
        ".gsap-email-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-email-block",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-hubs-block",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-hubs-block",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-availability-block",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-availability-block",
            start: "top 70%",
          },
        }
      );

      // — Right form: per-field staggered entrance —
      gsap.fromTo(
        ".gsap-form-field",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".gsap-form-fields",
            start: "top 75%",
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

        <div className="pt-36 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="gsap-contact-header space-y-6 border-b border-white/10 pb-16">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // START A CONVERSATION
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              <SplitTextReveal text="INITIATE PROJECT" highlightWords={["PROJECT"]} accentColor="#00f0ff" />
            </h1>
            <p className="text-base sm:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              We collaborate with visionary brands globally. Tell us about your vision, timeline, and objectives below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Studio Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="gsap-email-block space-y-4">
                <span className="text-meta text-[#00f0ff]">// DIRECT EMAIL</span>
                <a
                  href="mailto:hello@auralabs.agency"
                  className="text-2xl sm:text-4xl font-outfit font-extrabold text-white hover:text-[#00f0ff] transition-colors block"
                >
                  hello@auralabs.agency
                </a>
              </div>

              {/* Studio Hub Locations */}
              <div className="gsap-hubs-block space-y-6 border-t border-white/10 pt-8">
                <span className="text-meta text-white/40">// GLOBAL HUBS</span>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-outfit font-bold text-white text-lg">WILMINGTON, DE (USA) // HEADQUARTERS</h3>
                    <p className="text-sm font-light text-white/70">1209 North Orange St, Suite 400, Wilmington, DE 19801</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-outfit font-bold text-white text-lg">LAHORE, PK // CREATIVE LAB</h3>
                    <p className="text-sm font-light text-white/70">Commercial Zone, Phase 5 DHA, Lahore 54000</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-outfit font-bold text-white text-lg">LONDON, UK // STRATEGY HUB</h3>
                    <p className="text-sm font-light text-white/70">42 Shoreditch High St, London E1 6JJ</p>
                  </div>
                </div>
              </div>

              <div className="gsap-availability-block p-6 rounded-2xl bg-surface border border-white/10 space-y-2 hover:border-[#00f0ff]/50 transition-colors">
                <span className="text-xs font-mono text-[#00f0ff]">● CURRENT AVAILABILITY</span>
                <p className="text-sm text-white/80">Accepting 2 new flagship client projects for Q3/Q4 2026.</p>
              </div>
            </div>

            {/* Right Interactive Form Portal */}
            <div className="gsap-form-fields lg:col-span-7 bg-surface/50 border border-white/10 p-8 sm:p-14 rounded-3xl backdrop-blur-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <CheckCircle className="w-16 h-16 text-[#00f0ff] mx-auto" />
                  <h2 className="text-3xl font-outfit font-extrabold text-white uppercase">
                    BRIEF TRANSMITTED
                  </h2>
                  <p className="text-white/70 max-w-md font-light text-base">
                    Thank you {formData.name}. Our partner team will analyze your project brief and reply within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono text-white/70 hover:text-white uppercase"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">FULL NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        placeholder="Solaris Motors"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">PRIMARY DISCIPLINE</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none [&>option]:bg-[#08080a]"
                      >
                        <option value="WEBGL & WEB APP">WEBGL & WEB APP</option>
                        <option value="BRAND ARCHITECTURE">BRAND ARCHITECTURE</option>
                        <option value="AI PRODUCT DESIGN">AI PRODUCT DESIGN</option>
                        <option value="3D MOTION & CINEMATICS">3D MOTION & CINEMATICS</option>
                      </select>
                    </div>
                  </div>

                  <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">ESTIMATED BUDGET</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none [&>option]:bg-[#08080a]"
                      >
                        <option value="$30K - $50K">$30K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K - $250K">$100K - $250K</option>
                        <option value="$250K+">$250K+</option>
                      </select>
                    </div>

                    <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                      <label className="text-meta text-white/40 block">TARGET TIMELINE</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none [&>option]:bg-[#08080a]"
                      >
                        <option value="IMMEDIATE (< 1 MONTH)">IMMEDIATE (&lt; 1 MONTH)</option>
                        <option value="1 - 3 MONTHS">1 - 3 MONTHS</option>
                        <option value="3 - 6 MONTHS">3 - 6 MONTHS</option>
                      </select>
                    </div>
                  </div>

                  <div className="gsap-form-field space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                    <label className="text-meta text-white/40 block">PROJECT BRIEF & VISION *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your goals, reference sites, and key deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent text-white font-outfit text-lg focus:outline-none placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <Magnetic strength={0.4} className="gsap-form-field w-full">
                    <button
                      type="submit"
                      className="w-full py-5 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#00f0ff]/10"
                      data-cursor-pointer
                    >
                      <span>TRANSMIT PROJECT BRIEF</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}