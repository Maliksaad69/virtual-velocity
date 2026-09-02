"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Phone, MapPin, Compass } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { AGENCY_INFO } from "@/data/agencyData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-900 pt-20 pb-12 px-6 sm:px-12">
      <div className="max-w-[1700px] mx-auto space-y-16">
        {/* Top Branding & Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-200">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-outfit font-black text-3xl tracking-tighter text-zinc-900 uppercase"
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600"></span>
              </span>
              <span>VIRTUAL VELOCITY</span>
            </Link>

            <p className="text-sm text-zinc-600 font-light max-w-md leading-relaxed">
              {AGENCY_INFO.tagline}. We combine strategic performance marketing, web app engineering, mobile app development, and WebGL graphics to fuel business growth.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>US & PK FULL-SERVICE OFFICES</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-meta text-emerald-600 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-600" /> SITE NAVIGATION
            </span>
            <ul className="space-y-2 text-sm font-outfit uppercase text-zinc-600">
              <li>
                <Link href="/work" className="hover:text-zinc-900 transition-colors">
                  PORTFOLIO & WORK
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-zinc-900 transition-colors">
                  SERVICES & CAPABILITIES
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zinc-900 transition-colors">
                  ABOUT STUDIO
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-zinc-900 transition-colors">
                  BLOG & THOUGHT LEADERSHIP
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-zinc-900 transition-colors">
                  CAREERS & HIRING
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-900 transition-colors">
                  CONTACT & GET A QUOTE
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Portfolio Network */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-meta text-emerald-600 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> CONNECT & FOLLOW
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-700">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-between"
              >
                <span>BEHANCE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-between"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-between"
              >
                <span>INSTAGRAM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-between"
              >
                <span>X / TWITTER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Real Address Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-zinc-200">
          {AGENCY_INFO.offices.map((office, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-zinc-900 font-bold">
                <span>{office.city}</span>
                <span className="text-zinc-700">{office.phone}</span>
              </div>
              <p className="text-zinc-600 font-light">{office.address}</p>
              <a href={`mailto:${office.email}`} className="text-zinc-900 hover:underline block pt-1 font-semibold">
                {office.email}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} VIRTUAL VELOCITY DIGITAL AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-of-use" className="hover:text-zinc-900 transition-colors">
              TERMS OF USE
            </Link>
            <span className="text-zinc-800 font-semibold">POWERED BY VIRTUAL VELOCITY ENGINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
