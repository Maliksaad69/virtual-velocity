"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/agencyData";
import { ArrowUpRight, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Parse a "240+" or "4.8x" string → { target, suffix, decimals } ─── */
function parseStatValue(raw: string): { target: number; suffix: string; decimals: number } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw, decimals: 0 };
  return {
    target: parseFloat(match[1]),
    suffix: match[2],
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

/* ─── Animated Counter Component ─── */
const AnimatedCounter = ({ rawValue, className }: { rawValue: string; className?: string }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { target, suffix, decimals } = parseStatValue(rawValue);
  const proxyRef = useRef({ val: 0 });

  useEffect(() => {
    const el = spanRef.current;
    const proxy = proxyRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        val: target,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          const formatted =
            decimals > 0
              ? proxy.val.toFixed(decimals)
              : Math.round(proxy.val);
          el.textContent = formatted + suffix;
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={spanRef} className={className}>
      0{suffix}
    </span>
  );
};

const PROVEN_STATS = [
  {
    value: "240+",
    line1: "Campaigns managed",
    line2: "& deployed globally",
  },
  {
    value: "4.8x",
    line1: "Average ROAS",
    line2: "across PPC & social",
  },
  {
    value: "320%",
    line1: "Organic traffic",
    line2: "growth for clients",
  },
  {
    value: "98%",
    line1: "Client retention &",
    line2: "long-term partners",
  },
];

/* ─── Section ─── */
export const LightStatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-stats-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-stats-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white text-zinc-900 border-t border-zinc-200 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="gsap-stats-header flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-200 pb-5 sm:pb-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> MEASURABLE AGENCY IMPACT
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-outfit font-black uppercase tracking-tighter leading-[0.95]">
              PROVEN RESULTS <span className="text-emerald-600 font-black">&amp; METRICS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-black max-w-md font-medium leading-relaxed">
            We deliver data-backed outcomes across e-commerce growth, technical SEO scaling, paid search return, and custom web engineering.
          </p>
        </div>

        {/* Minimalist Stats Row - Exactly 1 line on mobile, adjusted font & boldness */}
        <div className="grid grid-cols-4 gap-1.5 xs:gap-2.5 sm:gap-6 xl:gap-10 pb-8 sm:pb-14 border-b border-zinc-200">
          {PROVEN_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="gsap-stats-item flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-3.5 min-w-0 pr-1 sm:pr-0 border-r border-zinc-200/80 last:border-r-0 sm:border-r-0"
            >
              <div className="font-outfit font-black sm:font-bold text-lg xs:text-xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] text-zinc-950 tracking-tight leading-none shrink-0">
                <AnimatedCounter rawValue={stat.value} className="font-outfit font-black sm:font-bold" />
              </div>
              <div className="flex flex-col text-[8.5px] xs:text-[9.5px] sm:text-[13px] xl:text-sm text-zinc-600 font-normal leading-[1.15] sm:leading-[1.25] tracking-tight">
                <span className="truncate">{stat.line1}</span>
                <span className="truncate">{stat.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};