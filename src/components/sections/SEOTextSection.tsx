"use client";

import { motion } from "framer-motion";
import { Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FAQS = [
  {
    q: "Why is Virtual Velocity considered a leading digital marketing agency in Pakistan?",
    a: "Virtual Velocity combines high-ROI performance marketing (Google Ads PPC, Meta Ads, TikTok) with bespoke brand architecture, custom web engineering, and direct access to our proprietary media communities—including Rawalpindians, Islamabad Insider, and Sirf Chai. We deliver verified commercial impact, not superficial vanity metrics.",
  },
  {
    q: "Do you offer localized SEO and performance ads for Islamabad & Rawalpindi businesses?",
    a: "Yes. Our team specializes in hyper-targeted geo-location marketing, Technical SEO, and localized Google Maps & search ranking campaigns across Islamabad, Rawalpindi, Lahore, Karachi, and international markets (US, UK, UAE).",
  },
  {
    q: "What digital services does Virtual Velocity provide?",
    a: "We offer end-to-end growth solutions: Google Ads PPC, Paid Meta Social, Technical SEO, Conversion Rate Optimization (CRO), Custom Next.js & WebGL Web App Development, Brand Identity & Packaging, Commercial Videography, and Community Media Sponsorships.",
  },
  {
    q: "How does Virtual Velocity's proprietary media network benefit brands?",
    a: "Our owned digital channels—Rawalpindians, Islamabad Insider, and Sirf Chai—reach over 2.5 Million active monthly consumers. Partnering with us gives your brand immediate, authentic access to engaged local audiences without reliant third-party ad inflation.",
  },
];

export const SEOTextSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-zinc-50 text-zinc-900 border-t border-zinc-200 font-outfit select-none">
      <div className="max-w-[1700px] mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-0.5 bg-emerald-600 rounded-full" />
            <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-emerald-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              AGENCY DISCOVERY // PAKISTAN & GLOBAL GROWTH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-zinc-950 tracking-tight leading-[0.95]">
            Engineering Velocity for <span className="text-emerald-600">Ambitious Brands</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
            Discover how Virtual Velocity scales business revenue through data-backed Google Ads PPC, Technical SEO, Paid Social, and proprietary media reach across Pakistan and global markets.
          </p>
        </div>

        {/* 3 Column Detailed Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-zinc-200">
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Performance &amp; Paid PPC
            </div>
            <h3 className="text-lg font-bold text-zinc-900 uppercase">ROI-Driven Ad Engineering</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              We architect high-converting Google Search, Shopping, YouTube, and Meta ad funnels. Every rupee or dollar spent is tracked to verified commercial conversions, customer lifetime value, and immediate revenue velocity for B2B and e-commerce brands in Islamabad, Rawalpindi, and worldwide.
            </p>
          </div>

          <div className="space-y-3 bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Technical SEO &amp; Web
            </div>
            <h3 className="text-lg font-bold text-zinc-900 uppercase">Search Dominance &amp; Speed</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Our technical SEO specialists optimize Core Web Vitals, site architecture, canonicalization, and schema metadata to ensure your web pages rank at the top of Google search results for competitive keywords across Pakistan, North America, and Europe.
            </p>
          </div>

          <div className="space-y-3 bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Proprietary Ecosystem
            </div>
            <h3 className="text-lg font-bold text-zinc-900 uppercase">2.5M+ Media Network</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Unrivaled audience leverage through our owned media brands—Rawalpindians, Islamabad Insider, and Sirf Chai. We eliminate middlemen agencies by placing your brand directly in front of active local consumer communities with high engagement and trust.
            </p>
          </div>
        </div>

        {/* Agency FAQ Section */}
        <div className="pt-8 border-t border-zinc-200 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-2">
                <h4 className="text-base font-bold text-zinc-900 uppercase">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
