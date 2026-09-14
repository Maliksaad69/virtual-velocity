"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  MapPin,
  Compass,
  Sparkles,
  ArrowRight,
  Zap,
  MessageCircle,
  Send,
} from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { AGENCY_INFO } from "@/data/agencyData";

const SOCIALS = [
  { label: "BEHANCE", href: "https://www.behance.net/thevirtualvelocity" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/company/virtualvelocitypk/" },
  { label: "FACEBOOK", href: "https://www.facebook.com/virtualvelocitypk/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/virtualvelocity_/" },
  { label: "TIKTOK", href: "https://www.tiktok.com/@virtualvelocitypk" },
  { label: "PINTEREST", href: "https://www.pinterest.com/thevirtualvelocity/" },
];

const NAV_LINKS = [
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#work" },
  { label: "Blog & Journal", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_ANCHORS = [
  "Google Ads PPC",
  "Technical SEO",
  "Paid Social",
  "Conversion Rate Opt.",
];

export const Footer = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (emailInput && emailInput.value) {
      setEmailSubmitted(true);
      window.location.href = `mailto:admin@thevirtualvelocity.com?subject=Proposal Request&body=Email: ${encodeURIComponent(emailInput.value)}`;
      setTimeout(() => setEmailSubmitted(false), 4000);
    }
  };

  return (
    <footer className="relative font-calibri bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 text-white pt-14 sm:pt-20 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-emerald-300/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto space-y-12 sm:space-y-16">
        {/* Top CTA Band */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 border border-emerald-400/30 shadow-xl shadow-emerald-900/30 overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="space-y-3 relative z-10">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-outfit font-bold text-white tracking-wide">
              <Zap className="w-4 h-4" /> Ready to scale?
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-outfit font-black uppercase tracking-tight leading-[1] sm:leading-[0.95]">
              Let&apos;s build your <span className="text-white">revenue engine</span>
            </h3>
            <p className="text-xs sm:text-base text-white/90 font-medium max-w-xl leading-relaxed">
              Get a personalized growth roadmap and guaranteed 12-hour campaign proposal.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch gap-3">
            <form onSubmit={handleEmailSubmit} className="flex flex-col xs:flex-row items-stretch gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 w-full sm:w-auto min-h-[48px]">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="YOUR@EMAIL.COM"
                  className="bg-transparent text-white text-xs sm:text-sm font-outfit font-semibold uppercase placeholder:text-white/70 focus:outline-none w-full sm:w-60"
                />
                <button type="submit" aria-label="Send Inquiry" className="text-white hover:scale-110 transition-transform">
                  {emailSubmitted ? (
                    <Sparkles className="w-5 h-5 flex-shrink-0 text-emerald-200 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 flex-shrink-0 cursor-pointer" />
                  )}
                </button>
              </div>
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-emerald-800 font-outfit font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-emerald-50 transition-colors shadow-lg min-h-[48px]"
                >
                  GET A QUOTE
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Magnetic>
            </form>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-outfit font-black text-2xl sm:text-3xl tracking-tighter uppercase group"
            >
              <Image
                src="/VV png.png"
                alt="Virtual Velocity Logo"
                width={48}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              <span>VIRTUAL VELOCITY</span>
            </Link>

            <p className="text-xs sm:text-sm text-white/95 font-medium max-w-md leading-relaxed">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, and creative direction to fuel business growth.
            </p>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-white tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              <span>Islamabad, Pakistan full-service office</span>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-emerald-500 hover:border-emerald-400 text-[11px] sm:text-xs font-outfit font-bold uppercase tracking-wider text-white transition-all min-h-[38px]"
                >
                  {social.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <span className="text-meta text-white font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-white" /> EXPLORE
            </span>
            <ul className="space-y-3 text-xs sm:text-sm font-bold text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-emerald-100 transition-colors py-1">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span className="uppercase">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Highlights */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <span className="text-meta text-white font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" /> OUR DISCIPLINES
            </span>
            <ul className="space-y-3 text-xs sm:text-sm font-bold text-white">
              {SERVICES_ANCHORS.map((service) => (
                <li key={service}>
                  <Link href="/#services" className="group inline-flex items-center gap-2 hover:text-emerald-100 transition-colors py-1">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span className="uppercase">{service}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white font-extrabold uppercase tracking-wider hover:text-emerald-100 transition-colors py-1">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Details & Direct Connect */}
        <div className="pb-10 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {/* Location */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3 transition-colors hover:bg-white/15">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-emerald-200" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200/90">
                  Headquarters
                </span>
                <span className="text-xs sm:text-sm font-outfit font-black uppercase tracking-wide text-white block mt-0.5">
                  Islamabad, Pakistan
                </span>
              </div>
            </div>

            {/* Direct Phone / WhatsApp */}
            <a
              href="tel:+923325296693"
              className="group p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3 transition-all hover:bg-white/15 hover:border-white/40"
            >
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 text-emerald-200" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200/90">
                  Direct Call &amp; WhatsApp
                </span>
                <span className="text-xs sm:text-sm font-outfit font-black uppercase tracking-wide text-white block mt-0.5 group-hover:text-emerald-200 transition-colors">
                  +92 332 529 6693
                </span>
              </div>
            </a>

            {/* Business Development / BDO */}
            <a
              href="mailto:admin@thevirtualvelocity.com"
              className="group p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3 transition-all hover:bg-white/15 hover:border-white/40"
            >
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 text-emerald-200" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200/90">
                  Business Development (BDO)
                </span>
                <span className="text-xs sm:text-sm font-outfit font-black lowercase tracking-wide text-white block mt-0.5 truncate group-hover:text-emerald-200 transition-colors">
                  admin@thevirtualvelocity.com
                </span>
              </div>
            </a>

            {/* General Inquiries */}
            <a
              href="mailto:info@thevirtualvelocity.com"
              className="group p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3 transition-all hover:bg-white/15 hover:border-white/40"
            >
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 text-emerald-200" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200/90">
                  General Inquiries
                </span>
                <span className="text-xs sm:text-sm font-outfit font-black lowercase tracking-wide text-white block mt-0.5 truncate group-hover:text-emerald-200 transition-colors">
                  info@thevirtualvelocity.com
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-bold text-white text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <span>© {currentYear} VIRTUAL VELOCITY DIGITAL AGENCY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-emerald-100 transition-colors uppercase tracking-wide py-1">
              Privacy Policy
            </Link>
            <span className="text-white/70">•</span>
            <Link href="/terms-of-use" className="hover:text-emerald-100 transition-colors uppercase tracking-wide py-1">
              Terms of Use
            </Link>
            <span className="text-white/70">•</span>
            <span className="text-white font-extrabold uppercase tracking-wide">
              Powered by Virtual Velocity Engine
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
