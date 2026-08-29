"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, Zap } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { AGENCY_INFO } from "@/data/agencyData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICE_OPTIONS = [
  "Google Ads PPC",
  "Technical SEO Audits",
  "Meta & TikTok Paid Social",
  "Conversion Rate Optimization (CRO)",
  "Brand Strategy & Positioning",
  "Email Marketing & Klaviyo",
  "Video Reel Production",
  "Landing Page Copywriting",
];

const BUDGET_OPTIONS = ["$5k - $15k", "$15k - $50k", "$50k - $100k", "$100k+"];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Social Media (LinkedIn/Instagram)",
  "Client Referral",
  "Clutch / Awwwards",
  "Other",
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Google Ads PPC"]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    budget: "$15k - $50k",
    hearAbout: "Google Search",
    message: "",
  });

  useGSAP(
    () => {
      // Left column staggered entrance: headline → badges → offices
      gsap.fromTo(
        ".gsap-contact-headline",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-contact-badges",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-contact-offices",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Right form: per-field staggered entrance
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
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto border-t border-white/10 overflow-hidden">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f0ff]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ff2a6d]/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column - Contact Info & Real Offices */}
        <div className="lg:col-span-5 space-y-12">
          {/* Headline block */}
          <div className="gsap-contact-headline space-y-4">
            <span className="text-meta text-[#00f0ff] flex items-center gap-2 uppercase tracking-widest block font-bold">
              <Zap className="w-3.5 h-3.5 text-[#00f0ff]" />
              // START A CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-7xl font-outfit font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              LET'S SCALE <br />
              <span className="text-[#00f0ff]">YOUR REVENUE</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Have a PPC campaign, Technical SEO project, Paid Social launch, or CRO overhaul in mind? Submit your goals for a guaranteed response within 12 hours.
            </p>
          </div>

          {/* Key Guarantee Badges */}
          <div className="gsap-contact-badges grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface/80 border border-white/10 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#00f0ff]" />
              <div>
                <span className="block text-xs font-outfit font-bold text-white uppercase">12-HOUR RESPONSE</span>
                <span className="text-[10px] font-mono text-white/40">DIRECT PROPOSAL</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface/80 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00f0ff]" />
              <div>
                <span className="block text-xs font-outfit font-bold text-white uppercase">NDA GUARANTEED</span>
                <span className="text-[10px] font-mono text-white/40">STRICT CONFIDENTIALITY</span>
              </div>
            </div>
          </div>

          {/* Real Office Addresses */}
          <div className="gsap-contact-offices space-y-6 border-t border-white/10 pt-8">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // REGIONAL OPERATIONAL HUBS
            </span>

            {AGENCY_INFO.offices.map((office, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-[#00f0ff]/50 transition-colors space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-outfit font-extrabold text-white text-base">{office.city}</h3>
                  <span className="text-[10px] font-mono text-[#00f0ff] border border-[#00f0ff]/30 px-2 py-0.5 rounded-full bg-[#00f0ff]/5">
                    OPERATIONAL HUB
                  </span>
                </div>
                <p className="text-xs text-white/70 font-light">{office.address}</p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-white/50 pt-2 border-t border-white/10">
                  <a href={`tel:${office.phone}`} className="hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form - Practical High-Converting UX */}
        <div className="lg:col-span-7 bg-surface/70 border border-white/15 p-8 sm:p-14 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6"
            >
              <CheckCircle2 className="w-16 h-16 text-[#00f0ff] mx-auto animate-bounce" />
              <h3 className="text-3xl font-outfit font-black text-white uppercase">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-white/70 max-w-md mx-auto text-sm font-light">
                Thank you {formData.name}. Our campaign directors in Wilmington and Lahore have received your request and will provide a detailed proposal within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono text-white/70 hover:text-white uppercase"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Checkboxes for Service Interest */}
              <div className="gsap-form-field space-y-3">
                <label className="text-meta text-[#00f0ff] block uppercase font-bold">
                  1. SERVICES REQUIRED (SELECT ALL THAT APPLY) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? "bg-[#00f0ff]/15 border-[#00f0ff] text-white font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                            : "bg-surface/80 border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        <span>{service}</span>
                        <span className={`w-3.5 h-3.5 rounded-sm border ${isSelected ? "bg-[#00f0ff] border-[#00f0ff]" : "border-white/30"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                  <label className="text-meta text-white/40 block">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jennings"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                  <label className="text-meta text-white/40 block">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                  <label className="text-meta text-white/40 block">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                  <label className="text-meta text-white/40 block">COMPANY NAME</label>
                  <input
                    type="text"
                    placeholder="Nexus Retail"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                  <label className="text-meta text-white/40 block">JOB TITLE / DESIGNATION</label>
                  <input
                    type="text"
                    placeholder="VP of Marketing"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Budget Radio Buttons */}
              <div className="gsap-form-field space-y-3">
                <label className="text-meta text-[#00f0ff] block uppercase font-bold">
                  2. MONTHLY AD BUDGET RANGE *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {BUDGET_OPTIONS.map((b) => (
                    <label
                      key={b}
                      className={`p-3.5 rounded-xl border text-center text-xs font-mono cursor-pointer transition-all duration-300 ${
                        formData.budget === b
                          ? "bg-[#00f0ff] border-[#00f0ff] text-black font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                          : "bg-surface/80 border-white/10 text-white/70 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={b}
                        checked={formData.budget === b}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="sr-only"
                      />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How Did You Hear Combobox */}
              <div className="gsap-form-field space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                <label className="text-meta text-white/40 block">HOW DID YOU HEAR ABOUT US?</label>
                <select
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className="w-full bg-transparent text-white font-outfit text-base focus:outline-none [&>option]:bg-[#08080a]"
                >
                  {HEAR_ABOUT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Brief */}
              <div className="gsap-form-field space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                <label className="text-meta text-white/40 block">CAMPAIGN OBJECTIVES & GOALS *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline your targets, monthly ad budget, current website URL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-white font-outfit text-base focus:outline-none placeholder:text-white/20 resize-none"
                />
              </div>

              <Magnetic strength={0.4} className="gsap-form-field w-full">
                <button
                  type="submit"
                  className="w-full py-5 rounded-full bg-[#00f0ff] text-black font-outfit font-black text-xs tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
                  data-cursor-pointer
                >
                  <span>PROPOSE MARKETING CAMPAIGN</span>
                  <Send className="w-4 h-4" />
                </button>
              </Magnetic>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
