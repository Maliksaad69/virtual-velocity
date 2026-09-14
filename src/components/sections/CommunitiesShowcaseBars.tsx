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
  logo: string;
  featured?: boolean;
}

export const PROPRIETARY_COMMUNITIES: CommunityBarData[] = [
  {
    id: "islamabad_insider",
    name: "Islamabad Insider",
    handle: "IslamabadInsider",
    followerCount: "24K",
    logo: "/images/communities/islamabad_insider.png",
  },
  {
    id: "islamabad_reels",
    name: "Islamabad Reels",
    handle: "islamabad_reels",
    followerCount: "54.1K",
    logo: "/images/communities/islamabad_reels.png",
  },
  {
    id: "snapseedpak",
    name: "SnapSeedpak",
    handle: "SnapSeedpak",
    followerCount: "40K",
    logo: "/images/communities/snapseedpak.png",
  },
  {
    id: "rawalpindians",
    name: "Rawalpindians",
    handle: "Rawalpindians",
    followerCount: "180K",
    logo: "/images/communities/rawalpindians.png",
    featured: true,
  },
  {
    id: "sirfchai",
    name: "Sirf Chai",
    handle: "sirfchai_",
    followerCount: "118K",
    logo: "/images/communities/sirfchai.png",
  },
  {
    id: "lifeofislamabad",
    name: "Life of Islamabad",
    handle: "lifeofislamabad",
    followerCount: "89K",
    logo: "/images/communities/lifeofislamabad.png",
  },
  {
    id: "lahorians",
    name: "Lahorians",
    handle: "Lahorians",
    followerCount: "56.9K",
    logo: "/images/communities/lahorians.png",
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
      // 1. Smoothly pop up bars from bottom to top on height (buttery smooth curve)
      gsap.fromTo(
        ".gsap-community-bar",
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

      // 2. Smoothly reveal the circular logo orbs at top center
      gsap.fromTo(
        ".gsap-community-logo",
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

      // 3. Smooth fade-in of text content inside each bar
      gsap.fromTo(
        ".gsap-community-content",
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
      <div className="relative w-full rounded-3xl p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#029e92] via-[#028b80] to-[#01685f] shadow-2xl border border-teal-400/30 overflow-hidden">
        {/* Subtle decorative background watermark/mesh */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-300/10 blur-3xl pointer-events-none" />

        {/* Responsive Horizontal Scroll / Desktop 7-Column Grid (Bottom Aligned for Mountain Wave) */}
        <div className="relative z-10 flex items-end lg:grid lg:grid-cols-7 gap-3 sm:gap-3.5 xl:gap-4 overflow-x-auto pb-4 pt-14 sm:pt-16 no-scrollbar snap-x snap-mandatory">
          {PROPRIETARY_COMMUNITIES.map((comm, idx) => {
            const isFeatured = comm.featured;
            const heightClass = BAR_HEIGHT_CLASSES[idx];

            return (
              <div
                key={comm.id}
                style={{ transformOrigin: "bottom center" }}
                className={`gsap-community-bar shrink-0 w-[190px] sm:w-[210px] lg:w-auto snap-center flex flex-col justify-between rounded-2xl sm:rounded-3xl border transition-all duration-300 ${heightClass} ${
                  isFeatured
                    ? "bg-[#c4f2eb] border-white shadow-2xl ring-2 ring-white/70 z-20"
                    : "bg-[#dbfaf6]/95 hover:bg-white border-white/80 shadow-lg hover:shadow-xl z-10"
                } p-3 sm:p-4 pt-11 sm:pt-13 relative group`}
              >
                {/* Top Center Logo Wrapper (Guaranteed exact center on top edge) */}
                <div
                  className={`absolute ${
                    isFeatured ? "-top-9 sm:-top-11" : "-top-7 sm:-top-9"
                  } inset-x-0 flex justify-center pointer-events-none z-30`}
                >
                  <div
                    className={`gsap-community-logo pointer-events-auto rounded-full p-1 bg-white shadow-xl ring-2 ring-white/90 transition-transform duration-300 group-hover:scale-105 ${
                      isFeatured
                        ? "w-16 h-16 sm:w-20 sm:h-20"
                        : "w-14 h-14 sm:w-16 sm:h-16"
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

                {/* Content wrapper with smooth fade in */}
                <div className="gsap-community-content flex flex-col justify-between h-full pt-1">
                  {/* 1 ROW: Full Name & Verified Badge (Never wraps, exactly like SnapSeedpak) */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 flex-nowrap whitespace-nowrap px-0.5">
                      <span className="font-black text-[12px] sm:text-[13px] lg:text-[13.5px] xl:text-[14px] text-zinc-950 tracking-tight whitespace-nowrap">
                        {comm.handle}
                      </span>
                      <VerifiedBadge className="w-3.5 h-3.5 shrink-0" />
                    </div>
                  </div>

                  {/* Followers Highlight: Digits in Line 1, Word Followers in Line 2 */}
                  <div className="my-auto text-center py-2 space-y-0.5">
                    <div className="text-xl sm:text-2xl xl:text-3xl font-black text-zinc-950 font-outfit tracking-tight leading-none whitespace-nowrap">
                      {comm.followerCount}
                    </div>
                    <div className="text-xs sm:text-[13px] font-extrabold text-teal-950/80 uppercase tracking-wider whitespace-nowrap">
                      Followers
                    </div>
                  </div>

                  {/* Clean Bottom Anchor (Single Row) */}
                  <div className="pt-2 border-t border-teal-900/10 text-center">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-teal-950/70 uppercase whitespace-nowrap">
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
