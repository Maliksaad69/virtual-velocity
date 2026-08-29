"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";

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
    <section ref={sectionRef} className="py-24 sm:py-36 px-6 sm:px-12 bg-white text-black border-y border-black/10 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto space-y-16">
        {/* Header */}
        <div className="gsap-stats-header flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/15 pb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono text-black/60 uppercase tracking-widest font-bold block">
              // MEASURABLE AGENCY IMPACT
            </span>
            <h2 className="text-4xl sm:text-7xl font-outfit font-black uppercase tracking-tighter leading-[0.9]">
              PROVEN RESULTS <span className="text-black/30 font-light">& METRICS</span>
            </h2>
          </div>

          <p className="text-sm text-black/70 max-w-md font-light leading-relaxed">
            We deliver data-backed outcomes across e-commerce growth, technical SEO scaling, paid search return, and custom web engineering.
          </p>
        </div>

        {/* Stats 4-Column Grid - Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="gsap-stats-card p-8 rounded-3xl bg-[#f8f9fa] border border-black/10 space-y-4 hover:border-black transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-xs text-black/40">
                <span>0{idx + 1} // METRIC</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>

              <div className="text-5xl sm:text-7xl font-outfit font-black tracking-tighter text-black">
                <AnimatedCounter rawValue={stat.value} />
              </div>

              <div className="space-y-1 pt-4 border-t border-black/10">
                <h3 className="font-outfit font-extrabold text-sm uppercase text-black">
                  {stat.label}
                </h3>
                <p className="text-xs text-black/60 font-light leading-snug">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};