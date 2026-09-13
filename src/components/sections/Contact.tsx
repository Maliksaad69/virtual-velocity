"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, CheckCircle2, Mail, Clock, ShieldCheck, ChevronDown, Globe } from "lucide-react";
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
  "Social Media (LinkedIn / Instagram)",
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

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Google Advertising"]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hubTimes, setHubTimes] = useState<Record<string, string>>({});
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
    const updateClocks = () => {
      const now = new Date();
      const updated: Record<string, string> = {};
      REGIONAL_HUBS.forEach((hub) => {
        updated[hub.city] = now.toLocaleTimeString("en-US", {
          timeZone: hub.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
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
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3.5 shadow-xs">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="block text-xs sm:text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">12-HOUR RESPONSE</span>
                  <span className="text-[11px] sm:text-xs font-outfit font-medium text-zinc-700">DIRECT PROPOSAL</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="block text-xs sm:text-sm font-outfit font-black text-zinc-900 uppercase tracking-wider">NDA GUARANTEED</span>
                  <span className="text-[11px] sm:text-xs font-outfit font-medium text-zinc-700">CONFIDENTIALITY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-outfit font-medium text-zinc-700">
            <a href="mailto:us@virtualvelocity.agency" className="hover:text-emerald-600 flex items-center gap-2.5 transition-colors min-h-[40px] bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-xl shadow-xs">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>Global Inquiries: us@virtualvelocity.agency</span>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg relative flex flex-col justify-between">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 my-auto text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-black max-w-md mx-auto text-sm font-normal leading-relaxed">
                Thank you {formData.name}. Our team in Wilmington &amp; Lahore has received your request and will respond within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full border border-zinc-300 text-xs font-outfit font-extrabold text-zinc-900 hover:bg-zinc-900 hover:text-white uppercase tracking-wider transition-all min-h-[44px]"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-4 sm:space-y-5">
              {/* Service Pills Grid */}
              <div className="gsap-form-field space-y-2">
                <label className="text-xs font-outfit font-extrabold text-zinc-800 block uppercase tracking-wider">
                  1. SERVICES REQUIRED
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-2.5 px-3 rounded-xl border text-left text-xs font-outfit font-bold tracking-tight transition-all duration-200 flex items-center justify-between gap-1.5 min-h-[44px] ${
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

              {/* Personal Details */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jennings"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light py-1"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light py-1"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="gsap-form-field grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light py-1"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">COMPANY NAME</label>
                  <input
                    type="text"
                    placeholder="Nexus Retail"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light py-1"
                  />
                </div>

                <div className="space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                  <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">JOB TITLE</label>
                  <input
                    type="text"
                    placeholder="VP of Marketing"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light py-1"
                  />
                </div>
              </div>

              {/* Budget Radios */}
              <div className="gsap-form-field space-y-1.5">
                <label className="text-xs font-outfit font-extrabold text-zinc-800 block uppercase tracking-wider">
                  2. MONTHLY AD BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <label
                      key={b}
                      className={`py-2.5 px-3 rounded-xl border text-center text-xs font-outfit font-extrabold uppercase tracking-wide cursor-pointer transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                        formData.budget === b
                          ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                          : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-emerald-300 hover:text-zinc-900"
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
              <div className="gsap-form-field space-y-1">
                <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">HOW DID YOU HEAR ABOUT US?</label>
                <div className="relative">
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    className="w-full appearance-none bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 font-outfit font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl cursor-pointer shadow-xs transition-all outline-none min-h-[44px]"
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

              {/* Message Brief */}
              <div className="gsap-form-field space-y-1 border-b border-zinc-200 pb-2 focus-within:border-emerald-600 transition-colors">
                <label className="text-[10px] font-outfit font-extrabold text-zinc-700 block uppercase tracking-wider">CAMPAIGN OBJECTIVES &amp; GOALS *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Outline your targets, monthly ad budget, website URL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-zinc-900 font-outfit font-medium text-sm focus:outline-none placeholder:text-zinc-500 placeholder:font-light resize-none py-1"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="gsap-form-field pt-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {REGIONAL_HUBS.map((hub) => (
            <div
              key={hub.city}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all shadow-xs flex flex-col justify-between gap-3 group"
            >
              {/* Top: Flag + Full Country Name & Capital */}
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0 leading-none mt-0.5" role="img" aria-label={hub.country}>
                  {hub.flag}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-outfit font-black text-zinc-900 text-sm sm:text-[15px] tracking-tight block leading-snug">
                    {hub.country}
                  </span>
                  <span className="text-xs font-outfit font-semibold text-zinc-600 block mt-0.5">
                    {hub.city}
                  </span>
                </div>
              </div>

              {/* Bottom: Live Clock */}
              <div className="pt-2.5 border-t border-zinc-200/80 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                  ACTIVE TIME
                </span>
                <span className="font-mono text-xs sm:text-sm font-black text-emerald-600 group-hover:text-emerald-500 transition-colors flex-shrink-0">
                  {hubTimes[hub.city] || "--:--:--"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
