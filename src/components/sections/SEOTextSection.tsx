"use client";

import { motion } from "framer-motion";
import { Sparkles, HelpCircle, CheckCircle2, Building2, Utensils, Hotel, TrendingUp, Headphones } from "lucide-react";

const VERTICAL_SOLUTIONS = [
  {
    icon: Building2,
    tag: "DIGITAL MARKETING",
    title: "Digital Marketing Agency Pakistan & Islamabad",
    desc: "Top-tier Digital Marketing Company delivering localized & international growth strategies. Tailored Digital Marketing Services across Islamabad, Rawalpindi, and global markets.",
    keywords: [
      "Digital Marketing Agency",
      "Digital Marketing Company",
      "Digital Marketing Services",
      "Digital Marketing Agency Pakistan",
      "Digital Marketing Agency Islamabad",
    ],
  },
  {
    icon: Headphones,
    tag: "BPO & OUTSOURCING",
    title: "BPO Services & Customer Support Outsourcing",
    desc: "Enterprise BPO Services Pakistan and Business Outsourcing Services. Premier Outsourcing Company Pakistan for Customer Service Outsourcing, Customer Support Outsourcing, and Call Center Outsourcing Pakistan.",
    keywords: [
      "BPO Services",
      "BPO Services Pakistan",
      "Outsourcing Company Pakistan",
      "Outsourcing Services Pakistan",
      "Business Outsourcing Services",
      "Customer Service Outsourcing",
      "Customer Support Outsourcing",
      "Call Center Outsourcing Pakistan",
    ],
  },
  {
    icon: Hotel,
    tag: "HOSPITALITY MARKETING",
    title: "Hospitality & Hotel Marketing Agency",
    desc: "Full-scale Hospitality Marketing Agency specializing in direct room bookings. High-converting Hotel Marketing Agency campaigns, Hotel Social Media Marketing, Hospitality Digital Marketing, Hotel Advertising Agency ads, and Hotel SEO Services.",
    keywords: [
      "Hospitality Marketing Agency",
      "Hotel Marketing Agency",
      "Hotel Social Media Marketing",
      "Hospitality Digital Marketing",
      "Hotel Advertising Agency",
      "Hotel SEO Services",
    ],
  },
  {
    icon: Utensils,
    tag: "RESTAURANT MARKETING",
    title: "Restaurant Marketing Agency & Lead Generation",
    desc: "Dedicated Restaurant Marketing Agency filling dining rooms and driving delivery orders. Expertise in Restaurant Digital Marketing, Restaurant Social Media Marketing, Restaurant Advertising Agency campaigns, Restaurant SEO Services, and Restaurant Lead Generation.",
    keywords: [
      "Restaurant Marketing Agency",
      "Restaurant Digital Marketing",
      "Restaurant Social Media Marketing",
      "Restaurant Advertising Agency",
      "Restaurant Marketing Services",
      "Restaurant SEO Services",
      "Restaurant Lead Generation",
    ],
  },
  {
    icon: TrendingUp,
    tag: "PERFORMANCE MARKETING",
    title: "Performance Marketing Agency & Paid Ads",
    desc: "High-ROAS Performance Marketing Agency providing data-backed Performance Marketing Services, Paid Advertising Agency solutions, specialized Meta Ads Agency tactics, Google Ads Agency optimization, and high-velocity Lead Generation Agency systems.",
    keywords: [
      "Performance Marketing Agency",
      "Performance Marketing Services",
      "Paid Advertising Agency",
      "Meta Ads Agency",
      "Google Ads Agency",
      "Lead Generation Agency",
    ],
  },
];

const FAQS = [
  {
    q: "Why is Virtual Velocity the leading Digital Marketing Agency in Pakistan and Islamabad?",
    a: "Virtual Velocity is a full-service Digital Marketing Agency in Pakistan and Islamabad providing end-to-end Digital Marketing Services, Google Ads PPC, Meta Ads Agency campaigns, Technical SEO, and proprietary media reach across 2.5M+ active regional consumers.",
  },
  {
    q: "What BPO Services and Call Center Outsourcing solutions do you offer in Pakistan?",
    a: "As a premier Outsourcing Company Pakistan, we deliver complete Business Outsourcing Services including BPO Services Pakistan, Customer Service Outsourcing, Customer Support Outsourcing, and Call Center Outsourcing Pakistan with dedicated multilingual teams.",
  },
  {
    q: "How does your Hospitality Marketing Agency boost hotel bookings and direct revenue?",
    a: "Our Hospitality Marketing Agency provides targeted Hotel Marketing Agency solutions, Hotel Social Media Marketing, Hospitality Digital Marketing, Hotel Advertising Agency campaigns, and Hotel SEO Services designed to drive direct online bookings and maximize RevPAR.",
  },
  {
    q: "What Restaurant Marketing Services and Restaurant Lead Generation strategies do you deploy?",
    a: "We operate as a specialized Restaurant Marketing Agency providing Restaurant Digital Marketing, Restaurant Social Media Marketing, food brand reels, Restaurant Advertising Agency ads, Restaurant SEO Services for Google Maps, and high-converting Restaurant Lead Generation.",
  },
  {
    q: "Why partner with Virtual Velocity for Performance Marketing, Meta Ads & Google Ads Agency services?",
    a: "We are an elite Performance Marketing Agency, Meta Ads Agency, and Google Ads Agency. As a full-scale Lead Generation Agency & Paid Advertising Agency, we scale ROAS, lower customer acquisition costs, and maximize revenue velocity.",
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
              SEARCH ENGINE DIRECTORY // PAKISTAN &amp; GLOBAL GROWTH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-zinc-950 tracking-tight leading-[0.95]">
            Industry Verticals &amp; <span className="text-emerald-600">Digital Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
            Explore how Virtual Velocity powers commercial growth through specialized Digital Marketing, BPO &amp; Outsourcing, Hospitality &amp; Hotel Marketing, Restaurant Marketing, and ROI-driven Performance Advertising in Islamabad, Rawalpindi, Pakistan, and worldwide.
          </p>
        </div>

        {/* Detailed Descriptive Agency Narrative Prose to Boost Text-to-Code Ratio */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-xs space-y-4 text-zinc-800 text-sm leading-relaxed font-normal">
          <h3 className="text-xl font-bold uppercase text-zinc-950">
            Pakistan Premier Digital Marketing Agency &amp; BPO Outsourcing Partner
          </h3>
          <p>
            Virtual Velocity is a full-service Digital Marketing Agency in Pakistan and a leading Digital Marketing Company operating out of Islamabad. We specialize in comprehensive Digital Marketing Services tailored for ambitious regional brands and international enterprises. From performance-driven Search Engine Optimization (SEO) to custom web engineering and social media management, our multidisciplinary team architects data-backed campaigns that move businesses forward.
          </p>
          <p>
            As a reliable BPO Services provider and Outsourcing Company Pakistan, Virtual Velocity delivers end-to-end Business Outsourcing Services, Customer Service Outsourcing, Customer Support Outsourcing, and Call Center Outsourcing Pakistan. We empower organizations in North America, Europe, and Asia to scale operational capacity, handle high-volume inquiries, and reduce customer service overhead with dedicated, trained support specialists.
          </p>
          <p>
            In hospitality and food service, Virtual Velocity operates as a boutique Hospitality Marketing Agency, Hotel Marketing Agency, and Restaurant Marketing Agency. We craft bespoke Hotel Social Media Marketing, Hospitality Digital Marketing, Hotel Advertising Agency campaigns, and Hotel SEO Services designed to drive direct online bookings and eliminate third-party commission dependency. For dining venues and cloud kitchens, our Restaurant Digital Marketing, Restaurant Social Media Marketing, Restaurant Advertising Agency creatives, Restaurant SEO Services, and targeted Restaurant Lead Generation turn food enthusiasts into lifelong loyal patrons.
          </p>
          <p>
            Our core growth engine is built on elite Performance Marketing Agency practices. As a specialized Paid Advertising Agency, Meta Ads Agency, and Google Ads Agency, we manage high-velocity PPC search, shopping, and retargeting funnels. Partnering with Virtual Velocity as your Lead Generation Agency guarantees measurable return on ad spend (ROAS), lower customer acquisition costs (CAC), and sustainable revenue acceleration.
          </p>
        </div>

        {/* Multi-Vertical Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-zinc-200">
          {VERTICAL_SOLUTIONS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase font-mono bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <IconComp className="w-4 h-4" />
                      {item.tag}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Keyword Pills */}
                <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {item.keywords.map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[10px] font-mono bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-md border border-zinc-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency FAQ Section */}
        <div className="pt-8 border-t border-zinc-200 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS // ADVANCED SEARCH INDEX
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-2">
                <p className="text-base font-bold text-zinc-900 uppercase flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


