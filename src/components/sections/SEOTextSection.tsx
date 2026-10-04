"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, CheckCircle2, ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "faq-1",
    q: "Why is Virtual Velocity the leading Digital Marketing Agency in Pakistan and Islamabad?",
    a: "Virtual Velocity is a full-service Digital Marketing Agency in Pakistan and Islamabad providing end-to-end Digital Marketing Services, Google Ads PPC, Meta Ads Agency campaigns, Technical SEO, and proprietary media reach across 2.5M+ active regional consumers.",
  },
  {
    id: "faq-2",
    q: "What BPO Services and Call Center Outsourcing solutions do you offer in Pakistan?",
    a: "As a premier Outsourcing Company Pakistan, we deliver complete Business Outsourcing Services including BPO Services Pakistan, Customer Service Outsourcing, Customer Support Outsourcing, and Call Center Outsourcing Pakistan with dedicated multilingual teams.",
  },
  {
    id: "faq-3",
    q: "How does your Hospitality Marketing Agency boost hotel bookings and direct revenue?",
    a: "Our Hospitality Marketing Agency provides targeted Hotel Marketing Agency solutions, Hotel Social Media Marketing, Hospitality Digital Marketing, Hotel Advertising Agency campaigns, and Hotel SEO Services designed to drive direct online bookings and maximize RevPAR.",
  },
  {
    id: "faq-4",
    q: "What Restaurant Marketing Services and Restaurant Lead Generation strategies do you deploy?",
    a: "We operate as a specialized Restaurant Marketing Agency providing Restaurant Digital Marketing, Restaurant Social Media Marketing, food brand reels, Restaurant Advertising Agency ads, Restaurant SEO Services for Google Maps, and high-converting Restaurant Lead Generation.",
  },
  {
    id: "faq-5",
    q: "Why partner with Virtual Velocity for Performance Marketing, Meta Ads & Google Ads Agency services?",
    a: "We are an elite Performance Marketing Agency, Meta Ads Agency, and Google Ads Agency. As a full-scale Lead Generation Agency & Paid Advertising Agency, we scale ROAS, lower customer acquisition costs, and maximize revenue velocity.",
  },
];

export const SEOTextSection = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-zinc-50 text-zinc-900 border-t border-zinc-200 font-outfit select-none overflow-x-hidden">
      <div className="max-w-[1700px] mx-auto flex flex-col items-center">
        {/* Centered Agency FAQ Section */}
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Centered Header */}
          <div className="text-center space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-600">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-zinc-950 tracking-tight leading-[0.95]">
              Everything You Need to <span className="text-emerald-600">Know</span>
            </h2>
            <p className="text-xs sm:text-base text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed">
              Clear answers regarding our Digital Marketing, BPO &amp; Outsourcing, Hospitality, Restaurant Lead Generation, and Performance Advertising capabilities.
            </p>
          </div>

          {/* Centered Dropdown Accordion List */}
          <div className="space-y-3 w-full pt-2">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20" : "border-zinc-200 shadow-xs hover:border-zinc-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none min-h-[52px]"
                  >
                    <span className="text-sm sm:text-base font-bold text-zinc-900 uppercase flex items-center gap-2.5 leading-snug">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-emerald-600" : "text-zinc-400"}`} />
                      <span>{faq.q}</span>
                    </span>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-emerald-50 text-emerald-600" : "bg-zinc-100 text-zinc-500"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${faq.id}-content`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed pl-10 sm:pl-11 border-t border-zinc-100 text-left">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};




