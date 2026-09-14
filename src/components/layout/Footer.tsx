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

function SocialIcon({ label, className = "w-4 h-4" }: { label: string; className?: string }) {
  switch (label.toUpperCase()) {
    case "BEHANCE":
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M7.799 10.748c.78-.344 1.258-1.026 1.258-1.92 0-1.636-1.254-2.528-3.155-2.528H0v11.4h5.99c2.091 0 3.447-.999 3.447-2.825 0-1.633-1.012-2.484-2.228-2.677l.59-.45zm-4.79-2.61h2.38c1.077 0 1.704.47 1.704 1.34 0 .907-.655 1.39-1.704 1.39H3.01V8.138zm2.55 7.674H3.01v-3.08h2.55c1.196 0 1.905.512 1.905 1.517 0 1.057-.737 1.563-1.905 1.563zm11.399-5.112c-2.829 0-4.802 2.05-4.802 4.957 0 2.946 1.95 4.975 4.887 4.975 2.19 0 3.737-1.127 4.398-2.996h-2.12c-.378.84-1.228 1.272-2.278 1.272-1.42 0-2.47-.962-2.564-2.428h7.106c.038-.27.057-.59.057-.866 0-2.894-1.848-4.914-4.684-4.914zm-2.464 4.024c.189-1.325 1.154-2.235 2.445-2.235 1.275 0 2.217.91 2.387 2.235h-4.832zm.178-5.352h4.57v1.275h-4.57V10.67z" />
        </svg>
      );
    case "LINKEDIN":
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "FACEBOOK":
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case "INSTAGRAM":
      return (
        <svg className={`${className} fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round`} viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "TIKTOK":
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.32 0 .62.06.9.15V9.41a6.32 6.32 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.28 8.28 0 0 0 4.88 1.55v-3.45a4.86 4.86 0 0 1-1.11-.16z" />
        </svg>
      );
    case "PINTEREST":
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.238-.19.289-.438.174-1.63-.759-2.65-3.142-2.65-5.057 0-4.116 2.991-7.899 8.628-7.899 4.528 0 8.047 3.227 8.047 7.54 0 4.5-2.837 8.122-6.774 8.122-1.323 0-2.566-.688-2.991-1.501l-.814 3.105c-.295 1.137-1.094 2.562-1.63 3.428C9.917 23.864 10.938 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
}

export const Footer = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (emailInput && emailInput.value) {
      setEmailSubmitted(true);
      window.location.href = `mailto:info@thevirtualvelocity.com?subject=Proposal Request&body=Email: ${encodeURIComponent(emailInput.value)}`;
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

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-emerald-800 border border-white/20 hover:border-white transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                >
                  <SocialIcon label={social.label} className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
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
              href="mailto:info@thevirtualvelocity.com"
              className="group p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3 transition-all hover:bg-white/15 hover:border-white/40"
            >
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 text-emerald-200" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200/90 whitespace-nowrap">
                  Business Development Officer (BDO)
                </span>
                <span className="text-xs sm:text-sm font-outfit font-black lowercase tracking-wide text-white block mt-0.5 truncate group-hover:text-emerald-200 transition-colors">
                  info@thevirtualvelocity.com
                </span>
              </div>
            </a>

            {/* General Inquiries */}
            <a
              href="mailto:admin@thevirtualvelocity.com"
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
                  admin@thevirtualvelocity.com
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
