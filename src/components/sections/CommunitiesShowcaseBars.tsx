"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface CommunityBarData {
  id: string;
  name: string;
  handle: string;
  followerCount: string;
  followerNum: number;
  logo: string;
  featured?: boolean;
  colorBg: string;
  colorBorder: string;
}

export const PROPRIETARY_COMMUNITIES: CommunityBarData[] = [
  {
    id: "islamabad_insider",
    name: "Islamabad Insider",
    handle: "IslamabadInsider",
    followerCount: "24K",
    followerNum: 24000,
    logo: "/images/communities/islamabad_insider.png",
    colorBg: "bg-gradient-to-b from-indigo-100/95 via-purple-100/90 to-indigo-200/95 hover:from-indigo-50 hover:to-purple-50",
    colorBorder: "border-indigo-300 hover:border-indigo-400 shadow-indigo-950/10",
  },
  {
    id: "islamabad_reels",
    name: "Islamabad Reels",
    handle: "islamabad_reels",
    followerCount: "54.1K",
    followerNum: 54100,
    logo: "/images/communities/islamabad_reels.png",
    colorBg: "bg-gradient-to-b from-rose-100/95 via-pink-100/90 to-rose-200/95 hover:from-rose-50 hover:to-pink-50",
    colorBorder: "border-rose-300 hover:border-rose-400 shadow-rose-950/10",
  },
  {
    id: "snapseedpak",
    name: "SnapSeedpak",
    handle: "SnapSeedpak",
    followerCount: "40K",
    followerNum: 40000,
    logo: "/images/communities/snapseedpak.png",
    colorBg: "bg-gradient-to-b from-amber-100/95 via-yellow-100/90 to-amber-200/95 hover:from-amber-50 hover:to-yellow-50",
    colorBorder: "border-amber-300 hover:border-amber-400 shadow-amber-950/10",
  },
  {
    id: "rawalpindians",
    name: "Rawalpindians",
    handle: "Rawalpindians",
    followerCount: "180K",
    followerNum: 180000,
    logo: "/images/communities/rawalpindians.png",
    featured: true,
    colorBg: "bg-gradient-to-b from-[#c4f2eb] via-[#a3ede0] to-[#7ee0d0] hover:from-[#d1f7f1] hover:to-[#91ebd9]",
    colorBorder: "border-white shadow-2xl ring-2 ring-white/90",
  },
  {
    id: "sirfchai",
    name: "Sirf Chai",
    handle: "sirfchai_",
    followerCount: "118K",
    followerNum: 118000,
    logo: "/images/communities/sirfchai.png",
    colorBg: "bg-gradient-to-b from-orange-100/95 via-amber-100/90 to-orange-200/95 hover:from-orange-50 hover:to-amber-50",
    colorBorder: "border-orange-300 hover:border-orange-400 shadow-orange-950/10",
  },
  {
    id: "lifeofislamabad",
    name: "Life of Islamabad",
    handle: "lifeofislamabad",
    followerCount: "89K",
    followerNum: 89000,
    logo: "/images/communities/lifeofislamabad.png",
    colorBg: "bg-gradient-to-b from-sky-100/95 via-cyan-100/90 to-sky-200/95 hover:from-sky-50 hover:to-cyan-50",
    colorBorder: "border-sky-300 hover:border-sky-400 shadow-sky-950/10",
  },
  {
    id: "lahorians",
    name: "Lahorians",
    handle: "Lahorians",
    followerCount: "56.9K",
    followerNum: 56900,
    logo: "/images/communities/lahorians.png",
    colorBg: "bg-gradient-to-b from-red-100/95 via-rose-100/90 to-red-200/95 hover:from-red-50 hover:to-rose-50",
    colorBorder: "border-red-300 hover:border-red-400 shadow-red-950/10",
  },
];

// Mountain arch: Ascending order from 1 to 4 (Peak), Descending order from 4 to 7
const BAR_HEIGHT_CLASSES = [
  "h-[220px] sm:h-[235px] lg:h-[250px] xl:h-[265px]", // 1: Lowest
  "h-[260px] sm:h-[275px] lg:h-[295px] xl:h-[315px]", // 2: Ascending
  "h-[305px] sm:h-[325px] lg:h-[350px] xl:h-[370px]", // 3: Ascending
  "h-[355px] sm:h-[385px] lg:h-[415px] xl:h-[435px]", // 4: Peak (Rawalpindians)
  "h-[305px] sm:h-[325px] lg:h-[350px] xl:h-[370px]", // 5: Descending
  "h-[260px] sm:h-[275px] lg:h-[295px] xl:h-[315px]", // 6: Descending
  "h-[220px] sm:h-[235px] lg:h-[250px] xl:h-[265px]", // 7: Lowest (symmetric to 1)
];

// Mobile horizontal widths: Ascending order from 1 to 4 (Peak), Descending order from 4 to 7
const BAR_MOBILE_WIDTH_CLASSES = [
  "w-[76%] sm:w-[78%]", // 1: Lowest
  "w-[84%] sm:w-[85%]", // 2: Ascending
  "w-[92%] sm:w-[93%]", // 3: Ascending
  "w-full",             // 4: Peak (Rawalpindians)
  "w-[92%] sm:w-[93%]", // 5: Descending
  "w-[84%] sm:w-[85%]", // 6: Descending
  "w-[76%] sm:w-[78%]", // 7: Lowest
];

function VerifiedBadge({ className = "w-3.5 h-3.5 sm:w-4 sm:h-4" }: { className?: string }) {
  return (
    <svg className={`${className} inline-block shrink-0 fill-[#0095f6]`} viewBox="0 0 24 24">
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.95-4.95 1.41 1.41-6.36 6.37z" />
    </svg>
  );
}

export function CommunitiesShowcaseBars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(containerRef);

      // Desktop: Vertical mountain wave
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          ".gsap-community-bar-desktop",
          {
            scaleY: 0,
            opacity: 0,
          },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1.15,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".gsap-community-logo-desktop",
          {
            scale: 0.7,
            opacity: 0,
            y: 15,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.07,
            delay: 0.15,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".gsap-community-content-desktop",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.07,
            delay: 0.25,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Mobile & Tablet: Horizontal responsive bars
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".gsap-community-bar-mobile",
          {
            x: -25,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold block">
            Proprietary Media Communities (~1M+ Direct Audience)
          </span>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium">
            In-house media network driving organic culture, viral reach &amp; regional attention.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
            VERIFIED NETWORK
          </span>
        </div>
      </div>

      {/* Main Teal Showcase Container */}
      <div className="relative w-full rounded-3xl p-3.5 sm:p-6 lg:p-8 bg-gradient-to-b from-[#029e92] via-[#028b80] to-[#01685f] shadow-2xl border border-teal-400/30 overflow-hidden">
        {/* Subtle decorative background watermark/mesh */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-300/10 blur-3xl pointer-events-none" />

        {/* ── MOBILE & TABLET VIEW: Responsive Horizontal Bars (< 1024px) ── */}
        <div className="relative z-10 flex flex-col items-start gap-2.5 sm:gap-3 lg:hidden w-full">
          {PROPRIETARY_COMMUNITIES.map((comm, idx) => {
            const isFeatured = comm.featured;
            const widthClass = BAR_MOBILE_WIDTH_CLASSES[idx];

            return (
              <div
                key={`mobile-${comm.id}`}
                className={`gsap-community-bar-mobile relative overflow-hidden rounded-2xl border transition-all duration-300 p-3 sm:p-4 ${widthClass} ${comm.colorBg} ${comm.colorBorder} shadow-lg`}
              >
                {/* Main Horizontal Content Row */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  {/* Left: Community Orb Logo + Identity */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`shrink-0 rounded-full p-0.5 bg-white shadow-md ring-2 ring-white/90 ${
                        isFeatured ? "w-11 h-11 sm:w-12 sm:h-12" : "w-10 h-10 sm:w-11 sm:h-11"
                      }`}
                    >
                      <img
                        src={comm.logo}
                        alt={comm.name}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-1.5 flex-nowrap">
                        <span className="font-black text-[13px] sm:text-[15px] text-zinc-950 tracking-tight truncate">
                          {comm.handle}
                        </span>
                        <VerifiedBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        {isFeatured && (
                          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black uppercase bg-teal-800 text-white tracking-widest leading-none shrink-0">
                            PEAK
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold text-teal-950/70 uppercase tracking-wide mt-0.5">
                        <span className="shrink-0">Virtual Velocity</span>
                        <span className="text-teal-950/30 shrink-0">•</span>
                        <span className="truncate font-semibold normal-case text-teal-900/85">{comm.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Followers Count */}
                  <div className="text-right shrink-0 pl-2">
                    <div className="text-xl sm:text-2xl font-black text-zinc-950 font-outfit tracking-tight leading-none">
                      {comm.followerCount}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-teal-950/80 uppercase tracking-wider mt-0.5">
                      Followers
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP VIEW: 7-Column Mountain Wave Vertical Bars (>= 1024px) ── */}
        <div className="relative z-10 hidden lg:grid lg:grid-cols-7 gap-3 xl:gap-4 items-end pb-2 pt-16">
          {PROPRIETARY_COMMUNITIES.map((comm, idx) => {
            const isFeatured = comm.featured;
            const heightClass = BAR_HEIGHT_CLASSES[idx];

            return (
              <div
                key={`desktop-${comm.id}`}
                style={{ transformOrigin: "bottom center" }}
                className={`gsap-community-bar-desktop shrink-0 flex flex-col justify-between rounded-3xl border transition-all duration-300 ${heightClass} ${comm.colorBg} ${comm.colorBorder} ${
                  isFeatured ? "z-20 shadow-2xl scale-[1.02]" : "z-10 shadow-lg hover:shadow-2xl hover:scale-[1.03]"
                } p-4 pt-13 relative group`}
              >
                {/* Top Center Logo Wrapper */}
                <div
                  className={`absolute ${
                    isFeatured ? "-top-10 xl:-top-11" : "-top-8 xl:-top-9"
                  } inset-x-0 flex justify-center pointer-events-none z-30`}
                >
                  <div
                    className={`gsap-community-logo-desktop pointer-events-auto rounded-full p-1 bg-white shadow-xl ring-2 ring-white/90 transition-transform duration-300 group-hover:scale-105 ${
                      isFeatured
                        ? "w-18 h-18 xl:w-20 xl:h-20"
                        : "w-15 h-15 xl:w-16 xl:h-16"
                    }`}
                  >
                    <img
                      src={comm.logo}
                      alt={comm.name}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content wrapper */}
                <div className="gsap-community-content-desktop flex flex-col justify-between h-full pt-1">
                  {/* 1 ROW: Full Name & Verified Badge */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 flex-nowrap whitespace-nowrap px-0.5">
                      <span className="font-black text-[13px] lg:text-[13.5px] xl:text-[14px] text-zinc-950 tracking-tight whitespace-nowrap">
                        {comm.handle}
                      </span>
                      <VerifiedBadge className="w-3.5 h-3.5 shrink-0" />
                    </div>
                  </div>

                  {/* Followers Highlight: Digits in Line 1, Word Followers in Line 2 */}
                  <div className="my-auto text-center py-2 space-y-0.5">
                    <div className="text-2xl xl:text-3xl font-black text-zinc-950 font-outfit tracking-tight leading-none whitespace-nowrap">
                      {comm.followerCount}
                    </div>
                    <div className="text-[12px] xl:text-[13px] font-extrabold text-teal-950/80 uppercase tracking-wider whitespace-nowrap">
                      Followers
                    </div>
                  </div>

                  {/* Clean Bottom Anchor */}
                  <div className="pt-2 border-t border-teal-900/10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-teal-950/70 uppercase whitespace-nowrap">
                      Virtual Velocity
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
