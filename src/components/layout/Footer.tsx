"use client";

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
  { label: "BEHANCE", href: "https://behance.net" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "X / TWITTER", href: "https://twitter.com" },
];

const NAV_LINKS = [
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/#services" },
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-white pt-20 pb-10 px-6 sm:px-12 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-emerald-600/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto space-y-16">
        {/* Top CTA Band */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 border border-emerald-400/30 shadow-xl shadow-emerald-900/30 overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="space-y-3 relative z-10">
            <span className="inline-flex items-center gap-2 text-sm font-outfit font-semibold text-emerald-100 tracking-wide">
              <Zap className="w-4 h-4" /> Ready to scale?
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black uppercase tracking-tight leading-[0.95]">
              Let&apos;s build your <span className="text-white/90">revenue engine</span>
            </h3>
            <p className="text-sm sm:text-base text-emerald-50/80 font-light max-w-xl leading-relaxed">
              Get a personalized growth roadmap and guaranteed 12-hour campaign proposal.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 w-full sm:w-auto">
              <Mail className="w-5 h-5 text-emerald-100 flex-shrink-0" />
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="bg-transparent text-white text-sm font-outfit font-semibold uppercase placeholder:text-emerald-100/60 focus:outline-none w-full"
              />
              <span className="hidden sm:block h-5 w-px bg-white/25" />
              <Send className="w-5 h-5 text-emerald-100 flex-shrink-0 cursor-pointer" />
            </div>
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-emerald-800 font-outfit font-black text-sm tracking-wider uppercase hover:bg-emerald-50 transition-colors shadow-lg"
              >
                GET A QUOTE
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-outfit font-black text-3xl tracking-tighter uppercase group"
            >
              <Image
                src="/VV png.png"
                alt="Virtual Velocity Logo"
                width={48}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              <span>VIRTUAL VELOCITY</span>
            </Link>

            <p className="text-sm text-zinc-400 font-light max-w-md leading-relaxed">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, and creative direction to fuel business growth.
            </p>

            <div className="flex items-center gap-3 text-sm font-outfit font-semibold text-emerald-300 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>US &amp; PK full-service offices</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-400 text-xs font-outfit font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
                >
                  {social.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-meta text-emerald-400 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-400" /> EXPLORE
            </span>
            <ul className="space-y-2.5 text-sm font-outfit text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span className="uppercase">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Highlights */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-meta text-emerald-400 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> OUR DISCIPLINES
            </span>
            <ul className="space-y-2.5 text-sm font-outfit text-zinc-400">
              {SERVICES_ANCHORS.map((service) => (
                <li key={service}>
                  <Link href="/#services" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500 group-hover:text-emerald-300 transition-colors" />
                    <span className="uppercase">{service}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/#services" className="inline-flex items-center gap-2 text-emerald-400 font-extrabold uppercase tracking-wider hover:text-emerald-300 transition-colors">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 border-b border-white/10">
          {AGENCY_INFO.offices.map((office, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs font-mono">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="uppercase">{office.city}</span>
                  </div>
                  <p className="text-zinc-400 font-light">{office.address}</p>
                </div>
                <span className="flex items-center gap-1.5 text-emerald-300 whitespace-nowrap">
                  <Phone className="w-3.5 h-3.5" /> {office.phone}
                </span>
              </div>
              <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors pt-1 font-semibold">
                <Mail className="w-3.5 h-3.5" /> {office.email}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>© {currentYear} VIRTUAL VELOCITY DIGITAL AGENCY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors uppercase tracking-wide">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/terms-of-use" className="hover:text-white transition-colors uppercase tracking-wide">
              Terms of Use
            </Link>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 font-semibold uppercase tracking-wide">
              Powered by Virtual Velocity Engine
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
