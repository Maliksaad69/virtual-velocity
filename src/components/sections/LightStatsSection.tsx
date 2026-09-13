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

/* ─── Section ─── */
export const LightStatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-stats-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-stats-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 bg-white text-zinc-900 border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="gsap-stats-header flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-300 pb-5 sm:pb-6">
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

        {/* Stats 4-Column Grid - Compact Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {STATS.map((stat, idx) => {
            const isGreenTheme = idx === 0 || idx === 3;
            return (
              <div
                key={idx}
                className={`gsap-stats-card p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-3 transition-colors shadow-xs ${
                  isGreenTheme
                    ? "bg-emerald-500/10 border border-emerald-400/40 hover:border-emerald-600"
                    : "bg-zinc-50 border border-zinc-200 hover:border-zinc-900"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] font-bold">
                  <span className={isGreenTheme ? "text-emerald-700 font-extrabold" : "text-black"}>
                    0{idx + 1} {"//"} METRIC
                  </span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isGreenTheme ? "text-emerald-700" : "text-black"}`} />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black tracking-tight text-black">
                  <AnimatedCounter rawValue={stat.value} />
                </div>

                <div className={`space-y-0.5 pt-2.5 border-t ${isGreenTheme ? "border-emerald-500/25" : "border-zinc-200"}`}>
                  <h3 className="font-outfit font-bold text-xs uppercase text-black tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-black font-medium leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};