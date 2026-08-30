"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, Zap } from "lucide-react";
import { AGENCY_INFO } from "@/data/agencyData";
import { CreativeCTA } from "@/components/ui/CreativeCTA";

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
  "Social Media (LinkedIn / Instagram)",
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
      gsap.fromTo(
        ".gsap-contact-headline",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".gsap-contact-badges",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        ".gsap-contact-offices",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );

      gsap.fromTo(
        ".gsap-form-field",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
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
    <section ref={sectionRef} id="contact" className="relative py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto border-t border-white/10 overflow-hidden selection:bg-[#00f0ff] selection:text-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00f0ff]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#ff2a6d]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column - Headline & Offices */}
        <div className="lg:col-span-5 space-y-12">
          <div className="gsap-contact-headline space-y-4">
            <span className="text-sm font-outfit font-extrabold text-[#00f0ff] flex items-center gap-2 uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#00f0ff]" />
              START A CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black text-white uppercase tracking-tight leading-[0.92] drop-shadow-[0_0_35px_rgba(0,240,255,0.25)]">
              LET'S SCALE <br />
              <span className="text-[#00f0ff]">YOUR REVENUE</span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
              Have a PPC campaign, Technical SEO project, Paid Social launch, or CRO overhaul in mind? Submit your goals for a guaranteed response within 12 hours.
            </p>
          </div>

          <div className="gsap-contact-badges grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface/80 border border-white/10 flex items-center gap-3.5 shadow-lg">
              <Clock className="w-6 h-6 text-[#00f0ff] flex-shrink-0" />
              <div>
                <span className="block text-sm font-outfit font-black text-white uppercase tracking-wider">12-HOUR RESPONSE</span>
                <span className="text-xs font-outfit font-medium text-white/50">DIRECT PROPOSAL</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-surface/80 border border-white/10 flex items-center gap-3.5 shadow-lg">
              <ShieldCheck className="w-6 h-6 text-[#00f0ff] flex-shrink-0" />
              <div>
                <span className="block text-sm font-outfit font-black text-white uppercase tracking-wider">NDA GUARANTEED</span>
                <span className="text-xs font-outfit font-medium text-white/50">CONFIDENTIALITY</span>
              </div>
            </div>
          </div>

          <div className="gsap-contact-offices space-y-6 border-t border-white/10 pt-8">
            <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider block">
              REGIONAL OPERATIONAL HUBS
            </span>

            {AGENCY_INFO.offices.map((office, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-[#00f0ff]/50 transition-colors space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-outfit font-extrabold text-white text-lg uppercase tracking-tight">{office.city}</h3>
                  <span className="text-xs font-outfit font-bold text-[#00f0ff] border border-[#00f0ff]/30 px-3 py-1 rounded-full bg-[#00f0ff]/10">
                    OPERATIONAL HUB
                  </span>
                </div>
                <p className="text-sm text-white/75 font-light">{office.address}</p>
                <div className="flex flex-wrap gap-5 text-sm font-outfit font-medium text-white/60 pt-2 border-t border-white/10">
                  <a href={`tel:${office.phone}`} className="hover:text-[#00f0ff] flex items-center gap-2 transition-colors">
                    <Phone className="w-4 h-4 text-[#00f0ff]" />
                    <span>{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="hover:text-[#00f0ff] flex items-center gap-2 transition-colors">
                    <Mail className="w-4 h-4 text-[#00f0ff]" />
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form - Professional Outfit Typography & Comfortable Sizing */}
        <div className="lg:col-span-7 bg-surface/90 border border-white/15 p-8 sm:p-14 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6"
            >
              <CheckCircle2 className="w-16 h-16 text-[#00f0ff] mx-auto animate-bounce" />
              <h3 className="text-3xl sm:text-4xl font-outfit font-black text-white uppercase tracking-tight">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-white/80 max-w-md mx-auto text-base font-light leading-relaxed">
                Thank you {formData.name}. Our campaign directors in Wilmington and Lahore have received your request and will provide a detailed proposal within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-4 rounded-full border border-white/20 text-sm font-outfit font-extrabold text-white hover:bg-white hover:text-black uppercase tracking-wider transition-all"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Checkboxes for Services */}
              <div className="gsap-form-field space-y-3">
                <label className="text-sm font-outfit font-extrabold text-[#00f0ff] block uppercase tracking-wider">
                  1. SERVICES REQUIRED (SELECT ALL THAT APPLY)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-4 rounded-xl border text-left text-sm font-outfit font-bold tracking-wide transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? "bg-gradient-to-r from-[#00f0ff]/20 to-[#7000ff]/20 border-[#00f0ff] text-white shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                            : "bg-surface/80 border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <span>{service}</span>
                        <span className={`w-4 h-4 rounded-sm border transition-colors ${isSelected ? "bg-[#00f0ff] border-[#00f0ff]" : "border-white/30"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                  <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jennings"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light"
                  />
                </div>

                <div className="space-y-2.5 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                  <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light"
                  />
                </div>
              </div>

              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2.5 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                  <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light"
                  />
                </div>

                <div className="space-y-2.5 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                  <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">COMPANY NAME</label>
                  <input
                    type="text"
                    placeholder="Nexus Retail"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light"
                  />
                </div>

                <div className="space-y-2.5 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                  <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">JOB TITLE</label>
                  <input
                    type="text"
                    placeholder="VP of Marketing"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light"
                  />
                </div>
              </div>

              {/* Budget Radios */}
              <div className="gsap-form-field space-y-3">
                <label className="text-sm font-outfit font-extrabold text-[#00f0ff] block uppercase tracking-wider">
                  2. MONTHLY AD BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {BUDGET_OPTIONS.map((b) => (
                    <label
                      key={b}
                      className={`p-4 rounded-xl border text-center text-sm font-outfit font-extrabold uppercase tracking-wide cursor-pointer transition-all duration-300 ${
                        formData.budget === b
                          ? "bg-[#00f0ff] border-[#00f0ff] text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                          : "bg-surface/80 border-white/10 text-white/75 hover:border-white/30 hover:text-white"
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

              {/* How Did You Hear Select */}
              <div className="gsap-form-field space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] transition-colors">
                <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">HOW DID YOU HEAR ABOUT US?</label>
                <select
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none [&>option]:bg-[#08080a]"
                >
                  {HEAR_ABOUT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Brief */}
              <div className="gsap-form-field space-y-2 border-b border-white/20 pb-3 focus-within:border-[#00f0ff] focus-within:shadow-[0_4px_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                <label className="text-xs font-outfit font-bold text-white/60 block uppercase tracking-wider">CAMPAIGN OBJECTIVES & GOALS *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline your targets, monthly ad budget, current website URL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-white font-outfit font-medium text-base sm:text-lg focus:outline-none placeholder:text-white/30 placeholder:font-light resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="gsap-form-field pt-2">
                <CreativeCTA
                  type="submit"
                  text="PROPOSE MARKETING CAMPAIGN"
                  variant="electric"
                  fullWidth={true}
                  icon={<Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
