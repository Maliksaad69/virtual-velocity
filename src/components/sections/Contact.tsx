"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, Zap, ChevronDown } from "lucide-react";
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
    <section ref={sectionRef} id="contact" className="relative py-24 sm:py-36 px-6 sm:px-12 max-w-[1700px] mx-auto border-t border-zinc-200 overflow-hidden bg-white selection:bg-zinc-900 selection:text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zinc-200/40 blur-[180px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column - Headline & Offices */}
        <div className="lg:col-span-5 space-y-12">
          <div className="gsap-contact-headline space-y-4">
            <span className="text-sm font-outfit font-extrabold text-emerald-600 flex items-center gap-2 uppercase tracking-wider">
              <Zap className="w-4 h-4 text-emerald-600" />
              START A CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black text-zinc-900 uppercase tracking-tight leading-[0.92]">
              LET'S SCALE <br />
              <span className="text-emerald-600 font-black">YOUR REVENUE</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Have a PPC campaign, Technical SEO project, Paid Social launch, or CRO overhaul in mind? Submit your goals for a guaranteed response within 12 hours.
            </p>
          </div>

          <div className="gsap-contact-badges grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3.5 shadow-xs">
              <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="block text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">12-HOUR RESPONSE</span>
                <span className="text-xs font-outfit font-medium text-zinc-500">DIRECT PROPOSAL</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3.5 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="block text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">NDA GUARANTEED</span>
                <span className="text-xs font-outfit font-medium text-zinc-500">CONFIDENTIALITY</span>
              </div>
            </div>
          </div>

          <div className="gsap-contact-offices space-y-6 border-t border-zinc-200 pt-8">
            <span className="text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider block">
              REGIONAL OPERATIONAL HUBS
            </span>

            {AGENCY_INFO.offices.map((office, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-emerald-200 transition-colors space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-outfit font-extrabold text-zinc-900 text-lg uppercase tracking-tight">{office.city}</h3>
                  <span className="text-xs font-outfit font-bold text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full bg-emerald-50">
                    OPERATIONAL HUB
                  </span>
                </div>
                <p className="text-sm text-zinc-600 font-light">{office.address}</p>
                <div className="flex flex-wrap gap-5 text-sm font-outfit font-medium text-zinc-600 pt-2 border-t border-zinc-200">
                  <a href={`tel:${office.phone}`} className="hover:text-emerald-600 flex items-center gap-2 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="hover:text-emerald-600 flex items-center gap-2 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        {/* Right Form - Compact & High-Density */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 p-6 sm:p-8 rounded-3xl shadow-lg relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-zinc-600 max-w-md mx-auto text-sm font-light leading-relaxed">
                Thank you {formData.name}. Our team in Wilmington & Lahore has received your request and will respond within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full border border-zinc-300 text-xs font-outfit font-extrabold text-zinc-900 hover:bg-zinc-900 hover:text-white uppercase tracking-wider transition-all"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Pills Grid - Compact */}
              <div className="gsap-form-field space-y-2">
                <label className="text-xs font-outfit font-extrabold text-zinc-800 block uppercase tracking-wider">
                  1. SERVICES REQUIRED
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-2.5 px-3 rounded-xl border text-left text-xs font-outfit font-bold tracking-tight transition-all duration-200 flex items-center justify-between gap-1.5 ${
                          isSelected
                            ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                            : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
                        }`}
                      >
                        <span className="truncate">{service}</span>
                        <span className={`w-3.5 h-3.5 rounded-xs border flex-shrink-0 transition-colors ${isSelected ? "bg-white border-white" : "border-zinc-400"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details - Compact 2-Column */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jennings"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light"
                  />
                </div>
              </div>

              {/* Contact Info - Compact 3-Column */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">COMPANY NAME</label>
                  <input
                    type="text"
                    placeholder="Nexus Retail"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">JOB TITLE</label>
                  <input
                    type="text"
                    placeholder="VP of Marketing"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light"
                  />
                </div>
              </div>

              {/* Budget Radios - Compact 4-Column */}
              <div className="gsap-form-field space-y-1.5">
                <label className="text-xs font-outfit font-extrabold text-zinc-800 block uppercase tracking-wider">
                  2. MONTHLY AD BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <label
                      key={b}
                      className={`py-2 px-3 rounded-xl border text-center text-xs font-outfit font-extrabold uppercase tracking-wide cursor-pointer transition-all duration-200 ${
                        formData.budget === b
                          ? "bg-zinc-900 border-zinc-900 text-white shadow-xs"
                          : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
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

              {/* Beautiful Custom Dropdown Menu */}
              <div className="gsap-form-field space-y-1">
                <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">HOW DID YOU HEAR ABOUT US?</label>
                <div className="relative">
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    className="w-full appearance-none bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 font-outfit font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl cursor-pointer shadow-xs transition-all outline-none"
                  >
                    {HEAR_ABOUT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-zinc-900 font-outfit font-medium py-2">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 pointer-events-none transition-transform duration-200" />
                </div>
              </div>

              {/* Message Brief - Compact */}
              <div className="gsap-form-field space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                <label className="text-[10px] font-outfit font-extrabold text-zinc-500 block uppercase tracking-wider">CAMPAIGN OBJECTIVES & GOALS *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Outline your targets, monthly ad budget, website URL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-400 placeholder:font-light resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="gsap-form-field pt-1">
                <CreativeCTA
                  type="submit"
                  text="PROPOSE MARKETING CAMPAIGN"
                  variant="electric"
                  fullWidth={true}
                  icon={<Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
