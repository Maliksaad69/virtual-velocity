import { PROJECTS } from "@/data/agencyData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next project for smooth continuity
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        {/* Hero Banner */}
        <section className="pt-36 pb-16 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-[#00f0ff] transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL WORK</span>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40">
              <span className="text-[#00f0ff] font-extrabold text-xl">{project.number}</span>
              <span>// {project.industry}</span>
              <span>// {project.year}</span>
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-8xl font-outfit font-black text-white uppercase tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
          </div>

          {/* Project Details Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-white/40 block">CLIENT</span>
              <span className="text-white font-bold text-sm">{project.client}</span>
            </div>
            <div className="space-y-1">
              <span className="text-white/40 block">YEAR</span>
              <span className="text-white font-bold text-sm">{project.year}</span>
            </div>
            <div className="space-y-1">
              <span className="text-white/40 block">INDUSTRY</span>
              <span className="text-white font-bold text-sm">{project.industry}</span>
            </div>
            <div className="space-y-1">
              <span className="text-white/40 block">LIVE URL</span>
              <a href="#" className="text-[#00f0ff] font-bold text-sm flex items-center gap-1 hover:underline">
                <span>VIEW LIVE SITE</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Main Visual */}
        <section className="px-6 sm:px-12 max-w-[1700px] mx-auto mb-24">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Case Study Deep Dive Narrative */}
        <section className="px-6 sm:px-12 max-w-[1700px] mx-auto pb-24 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-20">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-meta text-[#00f0ff]">// 01 THE CHALLENGE</span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-white uppercase tracking-tight">
                REDEFINING BENCHMARKS FOR {project.client.toUpperCase()}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-xl text-white/80 font-light leading-relaxed">
              <p>{project.description}</p>
              <p>
                To achieve industry leadership, we architected a custom web experience incorporating real-time WebGL shaders, sub-second edge routing, and a modern design system tailored specifically for high-speed engagement.
              </p>
            </div>
          </div>

          {/* Delivered Services Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-20">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-meta text-[#00f0ff]">// 02 DISCIPLINE & SCOPE</span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-white uppercase tracking-tight">
                SERVICES & DELIVERABLES
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.services.map((service, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00f0ff]" />
                    <h3 className="font-outfit font-bold text-white uppercase text-base">{service}</h3>
                  </div>
                  <p className="text-xs font-mono text-white/50">
                    Bespoke implementation tailored to client's global strategy.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Case Study Bar */}
          <div className="p-12 sm:p-20 rounded-3xl bg-surface border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-meta text-white/40">// NEXT CASE STUDY</span>
              <h3 className="text-3xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tight">
                {nextProject.title}
              </h3>
            </div>
            <Link
              href={`/work/${nextProject.id}`}
              className="px-8 py-5 rounded-full bg-[#00f0ff] text-black font-outfit font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
            >
              <span>EXPLORE NEXT CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
