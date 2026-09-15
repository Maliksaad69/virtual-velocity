"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ChevronUp,
} from "lucide-react";
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
  { label: "Home", href: "/" },
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#work" },
  { label: "Blog & Journal", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_ANCHORS = [
  { label: "Google Ads PPC", href: "/services" },
  { label: "Technical SEO", href: "/services" },
  { label: "Paid Social", href: "/services" },
  { label: "Conversion Rate Opt.", href: "/services" },
  { label: "View All Services", href: "/services" },
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
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative font-outfit bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 text-white pt-10 sm:pt-14 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-emerald-700/50">
      <div className="max-w-[1700px] mx-auto space-y-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-outfit font-black text-xl sm:text-2xl tracking-tighter uppercase group"
            >
              <Image
                src="/VV png.png"
                alt="Virtual Velocity Logo"
                width={40}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              <span>VIRTUAL VELOCITY</span>
            </Link>

            <p className="text-xs sm:text-[13px] text-white/85 font-normal leading-relaxed max-w-sm">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, and creative direction to fuel business growth across global markets.
            </p>

            {/* Offices in 2 separate rows with animated location icons */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-white/95">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 animate-bounce" style={{ animationDuration: "2.2s" }} />
                <div>
                  <span className="font-bold text-white block">Islamabad, Pakistan</span>
                  <a href="tel:+923325296693" className="text-[11px] text-emerald-200/90 font-mono hover:text-white transition-colors">
                    +92 332 529 6693
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/95">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 animate-bounce" style={{ animationDuration: "2.2s", animationDelay: "1.1s" }} />
                <div>
                  <span className="font-bold text-white block">Birmingham, UK</span>
                  <a href="tel:+447756557500" className="text-[11px] text-emerald-200/90 font-mono hover:text-white transition-colors">
                    +44 7756 557500
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-outfit font-black uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs sm:text-[13px]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 py-1 text-zinc-200 hover:text-white transition-all duration-200 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-outfit font-black uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-1 text-xs sm:text-[13px]">
              {SERVICES_ANCHORS.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 py-1 text-zinc-200 hover:text-white transition-all duration-200 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get In Touch (Shifted towards left with expanded 4-col room) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-outfit font-black uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-medium text-white/90">
              <li>
                <a
                  href="mailto:info@thevirtualvelocity.com"
                  className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span className="truncate">
                    info@thevirtualvelocity.com <span className="text-[11px] text-emerald-200/90 font-mono">(BDO)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@thevirtualvelocity.com"
                  className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span className="truncate">
                    admin@thevirtualvelocity.com <span className="text-[11px] text-emerald-200/90 font-mono">(General Queries)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923325296693"
                  className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>+92 332 529 6693 <span className="text-[11px] text-emerald-300/80 font-mono">(Islamabad, PK)</span></span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447756557500"
                  className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>+44 7756 557500 <span className="text-[11px] text-emerald-300/80 font-mono">(Birmingham, UK)</span></span>
                </a>
              </li>
            </ul>

            {/* Social Media Icons (Round with wave animation, strictly 1 row, constant size) */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5 flex-nowrap overflow-visible py-3 px-1">
                {SOCIALS.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.18,
                    }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.18 },
                    }}
                    className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-emerald-950 border border-white/20 hover:border-white shadow-md hover:shadow-emerald-400/20 transition-colors duration-300 cursor-pointer"
                  >
                    <SocialIcon label={social.label} className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 text-center sm:text-left">
          <div>
            <span>© {currentYear} Virtual Velocity. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          {/* Back to top button matching reference design */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-md bg-white/15 hover:bg-white text-white hover:text-emerald-950 flex items-center justify-center transition-all border border-white/20 shadow-xs cursor-pointer hover:scale-105"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
