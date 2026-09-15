"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, CheckCircle2, Clock, ShieldCheck, ChevronDown, Globe } from "lucide-react";
import { CreativeCTA } from "@/components/ui/CreativeCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICE_OPTIONS = [
  "Branding",
  "Social Media",
  "Photography",
  "Videography",
  "Shopify Store",
  "Influencer Marketing",
  "Search Engine Optimization",
  "Meta Advertising",
  "Google Advertising",
  "Software Development",
];

const BUDGET_OPTIONS = ["$5k - $15k", "$15k - $50k", "$50k - $100k", "$100k+"];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "TikTok",
  "Facebook",
  "Instagram",
  "Client Referral",
  "Clutch / Awwwards",
  "Other",
];

const REGIONAL_HUBS = [
  {
    flag: "🇺🇸",
    country: "United States",
    city: "Washington, D.C.",
    timezone: "America/New_York",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    city: "London",
    timezone: "Europe/London",
  },
  {
    flag: "🇦🇪",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    timezone: "Asia/Dubai",
  },
  {
    flag: "🇵🇰",
    country: "Pakistan",
    city: "Islamabad",
    timezone: "Asia/Karachi",
  },
];

const getFormattedTime = (timezone: string) => {
  try {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  } catch {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }
};

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Google Advertising"]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hubTimes, setHubTimes] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
    const updateClocks = () => {
      const updated: Record<string, string> = {};
      REGIONAL_HUBS.forEach((hub) => {
        const time = getFormattedTime(hub.timezone);
        updated[hub.city] = time;
        updated[hub.country] = time;
      });
      setHubTimes(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

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
          scrollTrigger: { trigger: ".gsap-contact-offices", start: "top 90%" },
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
    <section ref={sectionRef} id="contact" className="relative py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto border-t border-zinc-200 overflow-hidden bg-white selection:bg-zinc-900 selection:text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-zinc-200/35 blur-[120px] sm:blur-[180px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
        {/* Left Column - Headline & Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div className="space-y-6">
            <div className="gsap-contact-headline space-y-3">
              <span className="text-xs sm:text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                INITIATE PARTNERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black text-zinc-900 uppercase tracking-tighter leading-[0.95]">
                LET&apos;S ENGINEER YOUR <span className="text-emerald-600">NEXT LEAP</span>
              </h2>
              <p className="text-sm sm:text-base font-outfit text-zinc-600 font-normal leading-relaxed">
                Scale your brand across high-growth international markets. Fill out your campaign brief and our senior strategists will formulate an ROI roadmap within 12 hours.
              </p>
            </div>

            <div className="gsap-contact-badges grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/80 flex items-center gap-3.5 shadow-xs">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="block text-xs sm:text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">12-HOUR RESPONSE</span>
                  <span className="text-[11px] sm:text-xs font-outfit font-medium text-zinc-700">DIRECT PROPOSAL</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/80 flex items-center gap-3.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="block text-xs sm:text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">NDA GUARANTEED</span>
                  <span className="text-[11px] sm:text-xs font-outfit font-medium text-zinc-700">CONFIDENTIALITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form - Frosted Glassmorphism Studio Card */}
        <div className="lg:col-span-7 bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,174,172,0.1),0_8px_30px_rgba(0,0,0,0.04)] p-6 sm:p-10 lg:p-12 rounded-3xl relative flex flex-col justify-between text-zinc-900 overflow-hidden group">
          {/* Ambient Glass Glow Orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-300/15 blur-3xl pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 my-auto text-center space-y-4 relative z-10"
            >
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-zinc-700 max-w-md mx-auto text-sm font-normal leading-relaxed">
                Thank you <span className="text-emerald-700 font-bold">{formData.name}</span>. Our team in Wilmington &amp; Lahore has received your request and will respond within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full border border-zinc-300 text-xs font-outfit font-extrabold text-zinc-900 bg-white/80 backdrop-blur-xs hover:bg-zinc-900 hover:text-white uppercase tracking-wider transition-all min-h-[44px] shadow-xs"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-6 sm:space-y-7 relative z-10">
              {/* Service Pills Grid */}
              <div className="gsap-form-field space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-outfit font-extrabold text-zinc-900 block uppercase tracking-wider">
                    1. SERVICES REQUIRED
                  </label>
                  <span className="text-[11px] font-mono text-zinc-700 font-medium">Select all that apply</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-2.5 px-3.5 rounded-xl border text-left text-xs font-outfit font-bold tracking-tight transition-all duration-200 flex items-center justify-between gap-1.5 min-h-[44px] cursor-pointer ${
                          isSelected
                            ? "bg-emerald-50/90 backdrop-blur-md border-2 border-emerald-600 text-emerald-950 shadow-xs"
                            : "bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:text-zinc-900"
                        }`}
                      >
                        <span className="truncate">{service}</span>
                        <span className={`w-4 h-4 rounded-xs border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-zinc-300 bg-white"}`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jennings"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl px-4 py-3.5 placeholder:text-zinc-400 transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl px-4 py-3.5 placeholder:text-zinc-400 transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl px-4 py-3.5 placeholder:text-zinc-400 transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">COMPANY NAME</label>
                  <input
                    type="text"
                    placeholder="Nexus Retail"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl px-4 py-3.5 placeholder:text-zinc-400 transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">JOB TITLE</label>
                  <input
                    type="text"
                    placeholder="VP of Marketing"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl px-4 py-3.5 placeholder:text-zinc-400 transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Budget Radios */}
              <div className="gsap-form-field space-y-2.5">
                <label className="text-xs font-outfit font-extrabold text-zinc-900 block uppercase tracking-wider">
                  2. MONTHLY AD BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {BUDGET_OPTIONS.map((b) => (
                    <label
                      key={b}
                      className={`py-3 px-3 rounded-xl border text-center text-xs font-outfit font-bold uppercase tracking-wide cursor-pointer transition-all duration-200 min-h-[46px] flex items-center justify-center ${
                        formData.budget === b
                          ? "bg-zinc-900 border-2 border-zinc-900 text-white font-extrabold shadow-md scale-[1.01]"
                          : "bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:text-zinc-900"
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

              {/* Dropdown Menu */}
              <div className="gsap-form-field space-y-1.5">
                <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">HOW DID YOU HEAR ABOUT US?</label>
                <div className="relative">
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    className="w-full appearance-none bg-white/60 backdrop-blur-xs border border-zinc-200/80 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 text-zinc-900 font-outfit font-bold text-sm px-4 py-3.5 rounded-xl cursor-pointer shadow-2xs transition-all outline-none min-h-[46px]"
                  >
                    {HEAR_ABOUT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-zinc-950 font-outfit font-bold py-2">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none transition-transform duration-200" />
                </div>
              </div>

              {/* Message Brief */}
              <div className="gsap-form-field space-y-1.5">
                <label className="text-xs font-outfit font-bold text-zinc-800 block uppercase tracking-wider">CAMPAIGN OBJECTIVES &amp; GOALS *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline your targets, monthly ad budget, website URL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/60 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 font-outfit font-medium text-sm focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/15 rounded-xl p-4 placeholder:text-zinc-400 transition-all resize-none shadow-2xs"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="gsap-form-field pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-outfit font-extrabold text-xs sm:text-sm py-4 px-6 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer min-h-[50px] group backdrop-blur-xs"
                >
                  <span>SUBMIT CAMPAIGN BRIEF</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Regional Operational Hubs - Full-Width (All 4 in the same row on desktop) */}
      <div className="gsap-contact-offices relative z-10 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-zinc-200 space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider">
              REGIONAL OPERATIONAL HUBS
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ACTIVE STANDARD TIME &bull; REAL-TIME SYNC
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {REGIONAL_HUBS.map((hub) => (
            <div
              key={hub.city}
              className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-lg bg-zinc-50/90 border border-zinc-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl flex-shrink-0 leading-none" role="img" aria-label={hub.country}>
                  {hub.flag}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-outfit font-black text-zinc-950 text-xs sm:text-[13px] tracking-tight block leading-tight truncate">
                    {hub.country}
                  </span>
                  {/* Row of capital name with live time */}
                  <div className="flex items-center justify-between gap-1.5 mt-0.5">
                    <span className="text-[10px] sm:text-[11px] font-outfit font-bold text-zinc-800 truncate">
                      {hub.city}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-emerald-600 tabular-nums shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {mounted ? (hubTimes[hub.city] || hubTimes[hub.country] || getFormattedTime(hub.timezone)) : "--:--:--"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
