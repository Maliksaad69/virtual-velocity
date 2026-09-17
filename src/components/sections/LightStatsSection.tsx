"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function parseStatValue(raw: string): { target: number; suffix: string; decimals: number } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw, decimals: 0 };
  return {
    target: parseFloat(match[1]),
    suffix: match[2],
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

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
        duration: 2,
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
  }, [target, suffix, decimals]);

  return (
    <span ref={spanRef} className={className}>
      0{suffix}
    </span>
  );
};

const STATS_DATA = [
  {
    value: "240+",
    label: "Campaigns Deployed",
    detail: "Across US, European & Asian markets",
  },
  {
    value: "4.8x",
    label: "Average ROAS",
    detail: "Across PPC, social & performance ads",
  },
  {
    value: "320%",
    label: "Organic Growth",
    detail: "Compounding search & audience reach",
  },
  {
    value: "98%",
    label: "Client Retention",
    detail: "Long-term client trust & brand retention",
  },
];

export const LightStatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-compact-stat",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 bg-white text-zinc-900 select-none font-outfit border-t border-zinc-200"
    >
      <div className="max-w-[1700px] mx-auto space-y-6 sm:space-y-8">
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-zinc-200 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-extrabold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              PROVEN METRICS & IMPACT
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
              AGENCY IMPACT <span className="text-emerald-600">IN NUMBERS</span>
            </h2>
          </div>
          <p className="text-xs text-zinc-600 max-w-sm font-normal leading-relaxed">
            Data-backed performance across paid media, search scaling, and custom web engineering.
          </p>
        </div>

        {/* Compact Elegant Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="gsap-compact-stat p-4 sm:p-5 rounded-2xl bg-zinc-50 hover:bg-white border border-zinc-200/90 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-zinc-400 group-hover:text-emerald-600 transition-colors">
                  0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 group-hover:text-emerald-600 transition-colors tracking-tight font-outfit">
                  <AnimatedCounter rawValue={stat.value} />
                </div>
                <h3 className="mt-1 text-xs font-extrabold uppercase tracking-wider text-zinc-900">
                  {stat.label}
                </h3>
              </div>

              <p className="text-[11px] text-zinc-500 font-medium leading-tight border-t border-zinc-200/70 pt-2">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};