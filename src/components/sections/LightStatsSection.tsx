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
    <section ref={sectionRef} className="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-zinc-950 text-white border-y border-zinc-800/80 relative overflow-hidden select-none font-outfit">
      {/* Ambient glowing emerald background mesh */}
      <div className="absolute top-0 right-1/4 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-emerald-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1700px] mx-auto space-y-10 sm:space-y-14 relative z-10">
        {/* Header */}
        <div className="gsap-stats-header flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-800 pb-6 sm:pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> MEASURABLE AGENCY IMPACT
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-outfit font-black uppercase tracking-tighter leading-[0.95] text-white">
              PROVEN RESULTS <span className="text-emerald-400 font-black drop-shadow-[0_0_20px_rgba(0,174,172,0.4)]">&amp; METRICS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-normal leading-relaxed">
            We deliver data-backed outcomes across e-commerce growth, technical SEO scaling, paid search return, and custom web engineering.
          </p>
        </div>

        {/* Dark Obsidian Glassmorphism Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-8 pb-4 sm:pb-8">
          {PROVEN_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="gsap-stats-item p-4 sm:p-6 lg:p-7 rounded-2xl bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_12px_40px_rgba(0,174,172,0.15)] hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold text-emerald-300 uppercase tracking-widest px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60">
                  METRIC 0{idx + 1}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              <div className="mt-5 font-outfit font-black text-2xl xs:text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.2rem] text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 tracking-tight leading-none font-mono drop-shadow-[0_0_15px_rgba(0,174,172,0.3)]">
                <AnimatedCounter rawValue={stat.value} className="font-outfit font-black" />
              </div>

              <div className="mt-4 pt-3.5 border-t border-zinc-800/80 flex flex-col text-xs sm:text-sm text-zinc-200 font-semibold leading-snug">
                <span>{stat.line1}</span>
                <span className="text-zinc-400 font-normal">{stat.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};