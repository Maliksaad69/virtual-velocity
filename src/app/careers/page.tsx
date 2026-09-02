"use client";

import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const JOBS = [
  {
    title: "SENIOR FULL-STACK NEXT.JS DEVELOPER",
    type: "FULL-TIME // REMOTE / USA or LAHORE",
    dept: "ENGINEERING",
    desc: "Build high-performance Next.js 14 web applications, Shopify Storefront integrations, and serverless Node APIs.",
  },
  {
    title: "SEO & PERFORMANCE MARKETING SPECIALIST",
    type: "FULL-TIME // LAHORE HUB",
    dept: "DIGITAL MARKETING",
    desc: "Manage Google Ads PPC budgets, execute technical SEO audits, and scale organic organic traffic for enterprise B2B and e-commerce clients.",
  },
  {
    title: "LEAD UI/UX & PRODUCT DESIGNER",
    type: "FULL-TIME // HYBRID",
    dept: "DESIGN",
    desc: "Craft high-converting mobile app interfaces, web design systems, and responsive Figma prototypes for global clients.",
  },
  {
    title: "THREE.JS & SHADER DEVELOPER",
    type: "CONTRACT / FULL-TIME",
    dept: "EXPERIMENTAL LABS",
    desc: "Author custom WebGL GLSL shaders, 3D product configurators, and interactive GPU canvas animations.",
  },
];

export default function CareersPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="space-y-6 border-b border-zinc-200 pb-12">
            <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-zinc-900" />
              JOIN OUR TALENT NETWORK
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.9]">
              CAREERS AT <span className="text-zinc-500">VIRTUAL VELOCITY</span>
            </h1>
            <p className="text-base sm:text-2xl text-zinc-600 max-w-3xl font-light leading-relaxed">
              We are hiring world-class web developers, performance marketers, UI/UX designers, and shader engineers across our Wilmington, USA and Lahore, Pakistan hubs.
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="space-y-6">
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-3xl bg-white border border-zinc-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-zinc-900 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-outfit font-extrabold text-zinc-900 uppercase tracking-wider">
                    <span>{job.dept}</span>
                    <span>• {job.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 font-light max-w-2xl leading-relaxed">{job.desc}</p>
                </div>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-emerald-600 text-white font-outfit font-extrabold text-xs tracking-wider uppercase hover:bg-emerald-700 transition-colors flex items-center gap-2 whitespace-nowrap shadow-md shadow-emerald-600/20"
                >
                  <span>APPLY FOR POSITION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
