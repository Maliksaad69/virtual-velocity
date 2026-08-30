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
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative selection:bg-[#00f0ff] selection:text-black font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="space-y-6 border-b border-white/10 pb-12">
            <span className="text-sm font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00f0ff]" />
              JOIN OUR TALENT NETWORK
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-white tracking-tight uppercase leading-[0.9]">
              CAREERS AT <span className="text-[#00f0ff]">VIRTUAL VELOCITY</span>
            </h1>
            <p className="text-base sm:text-2xl text-white/75 max-w-3xl font-light leading-relaxed">
              We are hiring world-class web developers, performance marketers, UI/UX designers, and shader engineers across our Wilmington, USA and Lahore, Pakistan hubs.
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="space-y-6">
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#00f0ff] transition-all duration-300 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-outfit font-extrabold text-[#00f0ff] uppercase tracking-wider">
                    <span>{job.dept}</span>
                    <span>• {job.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-outfit font-black text-white uppercase tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/75 font-light max-w-2xl leading-relaxed">{job.desc}</p>
                </div>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(0,240,255,0.3)]"
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
