import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";
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
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="space-y-6 border-b border-white/10 pb-16">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // JOIN OUR STUDIO
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              CAREERS AT <span className="text-[#00f0ff]">AURA LABS</span>
            </h1>
            <p className="text-base sm:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              We are hiring world-class web developers, performance marketers, UI/UX designers, and shader engineers across our Wilmington, USA and Lahore, Pakistan hubs.
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="space-y-6">
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#00f0ff] transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#00f0ff]">
                    <span>[{job.dept}]</span>
                    <span>// {job.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-white uppercase">
                    {job.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-2xl">{job.desc}</p>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-widest uppercase hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <span>APPLY NOW</span>
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
