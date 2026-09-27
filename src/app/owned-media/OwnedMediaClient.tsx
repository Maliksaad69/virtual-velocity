"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Magnetic } from "@/components/ui/Magnetic";
import {
  ArrowUpRight,
  Download,
  Eye,
  Lock,
  Radio,
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";

type MetricKey = "followers" | "views" | "share";

/* ── Per-bar colour tones with rich vibrant hover states ── */
const TONES = {
  emerald: {
    bar: "bg-gradient-to-b from-white via-emerald-50/90 to-emerald-100/90",
    border: "border-emerald-300 group-hover:border-emerald-500",
    num: "text-emerald-700 group-hover:text-emerald-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-emerald-500 to-teal-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(16,185,129,0.25)]",
    ring: "ring-emerald-500/40 group-hover:ring-emerald-500",
  },
  amber: {
    bar: "bg-gradient-to-b from-white via-amber-50/90 to-amber-100/90",
    border: "border-amber-300 group-hover:border-amber-500",
    num: "text-amber-700 group-hover:text-amber-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-amber-500 to-orange-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)]",
    ring: "ring-amber-500/40 group-hover:ring-amber-500",
  },
  sky: {
    bar: "bg-gradient-to-b from-white via-sky-50/90 to-sky-100/90",
    border: "border-sky-300 group-hover:border-sky-500",
    num: "text-sky-700 group-hover:text-sky-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-sky-500 to-blue-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(14,165,233,0.25)]",
    ring: "ring-sky-500/40 group-hover:ring-sky-500",
  },
  rose: {
    bar: "bg-gradient-to-b from-white via-rose-50/90 to-rose-100/90",
    border: "border-rose-300 group-hover:border-rose-500",
    num: "text-rose-700 group-hover:text-rose-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-rose-500 to-pink-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(244,63,94,0.25)]",
    ring: "ring-rose-500/40 group-hover:ring-rose-500",
  },
  violet: {
    bar: "bg-gradient-to-b from-white via-violet-50/90 to-violet-100/90",
    border: "border-violet-300 group-hover:border-violet-500",
    num: "text-violet-700 group-hover:text-violet-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-violet-500 to-purple-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(139,92,246,0.25)]",
    ring: "ring-violet-500/40 group-hover:ring-violet-500",
  },
  orange: {
    bar: "bg-gradient-to-b from-white via-orange-50/90 to-orange-100/90",
    border: "border-orange-300 group-hover:border-orange-500",
    num: "text-orange-700 group-hover:text-orange-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-orange-500 to-amber-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(249,115,22,0.25)]",
    ring: "ring-orange-500/40 group-hover:ring-orange-500",
  },
  indigo: {
    bar: "bg-gradient-to-b from-white via-indigo-50/90 to-indigo-100/90",
    border: "border-indigo-300 group-hover:border-indigo-500",
    num: "text-indigo-700 group-hover:text-indigo-600",
    head: "text-zinc-950 font-black",
    fill: "bg-gradient-to-r from-indigo-500 to-violet-400",
    glow: "group-hover:shadow-[0_20px_45px_rgba(99,102,241,0.25)]",
    ring: "ring-indigo-500/40 group-hover:ring-indigo-500",
  },
} as const;

type ToneKey = keyof typeof TONES;

interface Channel {
  id: string;
  brand: string;
  handle: string;
  niche: string;
  index: string;
  iconSrc: string;
  followersK: number;
  viewsM?: number;
  featured?: boolean;
  tone: ToneKey;
  heightClass: string;
}

const H = {
  core: "h-[390px] sm:h-[440px] lg:h-[470px] xl:h-[510px]",
  step1: "h-[350px] sm:h-[395px] lg:h-[420px] xl:h-[455px]",
  step2: "h-[320px] sm:h-[360px] lg:h-[388px] xl:h-[418px]",
  step3: "h-[290px] sm:h-[328px] lg:h-[350px] xl:h-[376px]",
  step4: "h-[270px] sm:h-[306px] lg:h-[326px] xl:h-[348px]",
};

const CHANNELS: Channel[] = [
  {
    id: "lahorians",
    brand: "Lahorians",
    handle: "@lahorians",
    niche: "Heritage",
    index: "01",
    iconSrc: "/images/communities/lahorians.png",
    followersK: 230,
    tone: "orange",
    heightClass: H.step3,
  },
  {
    id: "islamabad_insider",
    brand: "Islamabad Insider",
    handle: "@islamabadinsider",
    niche: "Civic News",
    index: "02",
    iconSrc: "/images/communities/islamabad_insider.png",
    followersK: 440,
    tone: "violet",
    heightClass: H.step2,
  },
  {
    id: "sirfchai",
    brand: "Sirf Chai",
    handle: "@sirfchai_",
    niche: "Lifestyle",
    index: "03",
    iconSrc: "/images/communities/sirfchai.png",
    followersK: 670,
    tone: "amber",
    heightClass: H.step1,
  },
  {
    id: "rawalpindians",
    brand: "Rawalpindians",
    handle: "@rawalpindians",
    niche: "Urban Culture",
    index: "04",
    iconSrc: "/images/communities/rawalpindians.png",
    followersK: 750,
    viewsM: 45,
    featured: true,
    tone: "emerald",
    heightClass: H.core,
  },
  {
    id: "lifeofislamabad",
    brand: "Life of Islamabad",
    handle: "@lifeofislamabad",
    niche: "Metro Guide",
    index: "05",
    iconSrc: "/images/communities/lifeofislamabad.png",
    followersK: 620,
    tone: "sky",
    heightClass: H.step1,
  },
  {
    id: "islamabad_reels",
    brand: "Islamabad Reels",
    handle: "@islamabad_reels",
    niche: "Cinematics",
    index: "06",
    iconSrc: "/images/communities/islamabad_reels.png",
    followersK: 200,
    tone: "rose",
    heightClass: H.step4,
  },
  {
    id: "snapseedpak",
    brand: "SnapSeedPak",
    handle: "@snapseedpak",
    niche: "Visual Guild",
    index: "07",
    iconSrc: "/images/communities/snapseedpak.png",
    followersK: 40,
    tone: "indigo",
    heightClass: H.step4,
  },
];

const TOTAL_FOLLOWERS_K = CHANNELS.reduce((sum, c) => sum + c.followersK, 0);

const BAR_WIDTH =
  "mx-auto w-full max-w-[124px] sm:max-w-[140px] lg:max-w-[155px] xl:max-w-[175px]";

const formatFollowers = (thousands: number) =>
  thousands >= 1000 ? `${(thousands / 1000).toFixed(2)}M` : `${thousands}K`;

const formatShare = (thousands: number) => `${((thousands / TOTAL_FOLLOWERS_K) * 100).toFixed(1)}%`;

const HERO_METRICS = [
  {
    label: "Aggregated Followers",
    value: "2.95M+",
    sub: "Direct Social Audience",
    icon: Users,
  },
  {
    label: "Owned Portals",
    value: "7 Channels",
    sub: "100% In-House Editorial",
    icon: Radio,
  },
  {
    label: "Reach Authenticity",
    value: "100%",
    sub: "Organic Engagement",
    icon: ShieldCheck,
  },
  {
    label: "Monthly Impressions",
    value: "85M+",
    sub: "Meta & TikTok Graph",
    icon: Eye,
  },
];

const METRIC_TOGGLES: { key: MetricKey; label: string }[] = [
  { key: "followers", label: "Followers" },
  { key: "views", label: "Monthly Views" },
  { key: "share", label: "Network Share %" },
];

const VALUE_CARDS = [
  {
    num: "01",
    title: "Native Cultural Clout",
    body:
      "Our channels are deeply ingrained urban lifestyle fixtures shaping regional slang, foodie trends, and social dialogue.",
  },
  {
    num: "02",
    title: "High Affinity Demographics",
    body:
      "Over 82% of audiences are aged 18–34 with high disposable income across the Twin Cities and Lahore metropolitan regions.",
  },
  {
    num: "03",
    title: "Guaranteed Virality Index",
    body:
      "Coordinated multi-channel distribution creates an omnipresence effect, sparking compounding algorithmic lift across reels.",
  },
];

export function OwnedMediaClient() {
  const [metric, setMetric] = useState<MetricKey>("followers");

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        {/* ───────────────────────── 1. HERO OVERVIEW ───────────────────────── */}
        <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-zinc-200 overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            <div className="absolute -top-32 -right-24 w-[300px] sm:w-[520px] h-[300px] sm:h-[520px] rounded-full bg-emerald-100/60 blur-[150px]" />
            <div className="absolute top-1/3 -left-32 w-[320px] sm:w-[560px] h-[320px] sm:h-[560px] rounded-full bg-zinc-100/80 blur-[160px]" />
          </div>

          <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 sm:pt-4 max-w-5xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-outfit font-black text-zinc-900 tracking-tighter uppercase leading-[0.9] select-none">
                Owned Media Network <span className="text-emerald-600">— 2.95M+ Direct Reach</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-zinc-700 font-normal leading-relaxed max-w-3xl">
                In-house digital media network driving organic urban youth culture, viral regional
                reach, and unmatched demographic resonance across primary metropolitan hubs.
              </p>
            </motion.div>

            {/* Metric Grid */}
            <div className="pt-8 sm:pt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {HERO_METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <span className="text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-[0.18em] text-zinc-600">
                      {m.label}
                    </span>
                    <m.icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  </div>
                  <span className="relative z-10 mt-4 block font-outfit font-black text-3xl sm:text-4xl leading-none text-zinc-950">
                    {m.value}
                  </span>
                  <span className="relative z-10 mt-2.5 block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    {m.sub}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── 2. DEMOGRAPHIC DISTRIBUTION MATRIX WITH ANIMATED BARS ───────────────── */}
        <section className="relative px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto py-10 sm:py-16 border-b border-zinc-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-600 font-extrabold block mb-1">
                Media Ecosystem
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-tight">
                Proprietary Channels <span className="text-emerald-600">Overview</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200">
                {METRIC_TOGGLES.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setMetric(t.key)}
                    aria-pressed={metric === t.key}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      metric === t.key
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-white/70"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── ANIMATED BAR-CHART MATRIX ── */}
          <div className="mt-8 relative">
            <div className="relative rounded-3xl border border-zinc-200 bg-[#f8fafb] overflow-hidden shadow-xs">
              {/* Subtle Animated Background Matrix Dots */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(16,185,129,0.25)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

              <div className="relative z-10 overflow-x-auto scrollbar-hide pt-8 sm:pt-12">
                <div className="min-w-[900px] lg:min-w-0 grid grid-cols-7 items-end gap-3 sm:gap-5 lg:gap-6 xl:gap-8 px-4 sm:px-8 pb-0">
                  {CHANNELS.map((c, i) => {
                    const tone = TONES[c.tone];
                    const centerDist = Math.abs(i - (CHANNELS.length - 1) / 2);
                    const share = (c.followersK / TOTAL_FOLLOWERS_K) * 100;
                    const isDisclosed = metric !== "views" || Boolean(c.viewsM);

                    const displayValue =
                      metric === "followers"
                        ? formatFollowers(c.followersK)
                        : metric === "views"
                        ? c.viewsM
                          ? `${c.viewsM}M+`
                          : ""
                        : formatShare(c.followersK);

                    const displayLabel =
                      metric === "followers"
                        ? "Followers"
                        : metric === "views"
                        ? c.viewsM
                          ? "Monthly Views"
                          : "Restricted"
                        : "Network Share";

                    return (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 50, scaleY: 0.3 }}
                        whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
                        whileHover={{ y: -10, scale: 1.04 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: centerDist * 0.06,
                        }}
                        style={{ transformOrigin: "bottom center" }}
                        className={`group relative flex flex-col ${BAR_WIDTH} ${c.heightClass} rounded-t-2xl rounded-b-md px-2.5 pt-4 pb-3 transition-shadow duration-300 ${tone.bar} ${tone.glow} ${
                          c.featured
                            ? "border-2 border-emerald-500 ring-4 ring-emerald-500/20 shadow-lg z-20"
                            : `border ${tone.border} shadow-xs`
                        }`}
                      >
                        {/* Animated Shimmer Top Crown Bar */}
                        <span
                          className={`absolute inset-x-2 -top-[6px] h-1.5 rounded-full ${tone.fill} animate-pulse`}
                          aria-hidden="true"
                        />

                        {/* Interactive Avatar Orb with Spring Tilt & Scale */}
                        <div className="mt-1 flex flex-col items-center text-center gap-1.5">
                          <motion.div
                            whileHover={{ scale: 1.14, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white shrink-0 transition-all duration-300 ${
                              c.featured
                                ? "ring-3 ring-emerald-500 shadow-md"
                                : `ring-2 ${tone.ring} shadow-xs`
                            }`}
                          >
                            <Image
                              src={c.iconSrc}
                              alt={c.brand}
                              fill
                              sizes="56px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </motion.div>

                          {/* PROMINENT BRAND NAME */}
                          <span className="font-outfit font-black text-xs sm:text-sm lg:text-base text-zinc-950 tracking-tight leading-tight pt-1 group-hover:text-emerald-600 transition-colors">
                            {c.brand}
                          </span>

                          {/* CLEAR HANDLE */}
                          <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-700 leading-none">
                            {c.handle}
                          </span>
                        </div>

                        {/* Animated Metric Readout */}
                        <div className="mt-auto pt-3 text-center">
                          {isDisclosed ? (
                            <>
                              <motion.span
                                key={displayValue}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`block font-outfit font-black leading-none tracking-tight text-zinc-950 group-hover:scale-108 transition-transform duration-300 ${tone.num} ${
                                  c.featured
                                    ? "text-[1.8rem] sm:text-[2.1rem]"
                                    : "text-[1.4rem] sm:text-[1.65rem]"
                                }`}
                              >
                                {displayValue}
                              </motion.span>
                              <span className="mt-1.5 block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600">
                                {displayLabel}
                              </span>
                            </>
                          ) : (
                            <>
                              <Lock className="mx-auto w-4 h-4 text-zinc-400" />
                              <span className="mt-2 block text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                Restricted
                              </span>
                            </>
                          )}

                          {/* Animated Progress Bar */}
                          <div className="mt-2.5">
                            <div className="h-1.5 w-full rounded-full bg-zinc-200 overflow-hidden relative">
                              <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: `${share}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 + centerDist * 0.05, ease: "easeOut" }}
                                className={`block h-full rounded-full ${tone.fill} relative overflow-hidden`}
                              />
                            </div>
                          </div>
                        </div>

                        {c.featured ? (
                          <Sparkles className="absolute top-3 right-2 w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                        ) : (
                          <TrendingUp className="absolute top-3 right-2 w-3.5 h-3.5 text-zinc-300 group-hover:text-emerald-600 transition-colors" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Chart baseline */}
                <div className="min-w-[900px] lg:min-w-0 px-4 sm:px-8 pb-5">
                  <div className="h-px w-full bg-zinc-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── 3. VALUE PROPOSITION & CALL TO ACTION ───────────────── */}
        <section className="px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {VALUE_CARDS.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300 flex flex-col"
              >
                <span className="relative z-10 font-mono font-black text-3xl sm:text-4xl text-emerald-600">
                  {v.num}
                </span>
                <h3 className="relative z-10 mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-outfit font-black text-zinc-950 uppercase tracking-tight">
                  {v.title}
                </h3>
                <p className="relative z-10 mt-3 text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Brand Amplification Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 sm:mt-12 rounded-3xl overflow-hidden border border-zinc-200 shadow-md bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"
          >
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(rgba(255,255,255,0.35)_1.2px,transparent_1.2px)] [background-size:22px_22px] pointer-events-none" />

            <div className="relative z-10 p-7 sm:p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-[0.22em] text-white">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  Brand Amplification
                </span>
                <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-outfit font-black text-white uppercase tracking-tight leading-tight">
                  Amplify Your Brand Across 2.95M+ Audience
                </h2>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-white leading-relaxed font-normal">
                  Tap into Virtual Velocity&apos;s influential regional media network for native brand
                  integrations, viral reels, and targeted reach.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-3 shrink-0">
                <Magnetic strength={0.05}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white text-emerald-800 font-outfit font-black text-[10px] sm:text-[11px] uppercase tracking-[0.18em] shadow-md hover:bg-zinc-950 hover:text-white transition-colors duration-300 active:scale-[0.98]"
                    data-cursor-pointer
                  >
                    <span>Inquire for Collaborations</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>

                <a
                  href="/Virtual%20Velocity%20Profile%20(1).pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-transparent border border-white/60 text-white font-outfit font-black text-[10px] sm:text-[11px] uppercase tracking-[0.18em] hover:bg-white/15 hover:border-white transition-colors duration-300 active:scale-[0.98]"
                  data-cursor-pointer
                >
                  <span>Download Media Kit</span>
                  <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
