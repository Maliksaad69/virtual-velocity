import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function TermsOfUsePage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 px-6 sm:px-12 max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 border-b border-white/10 pb-8">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // LEGAL FRAMEWORK
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black text-white uppercase tracking-tight">
              TERMS OF USE
            </h1>
            <p className="text-xs font-mono text-white/40">LAST REVISED: AUGUST 29, 2026</p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-white/80 font-light leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-white uppercase">1. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing or navigating the AURA LABS digital platform, you agree to comply with these Terms of Use and all applicable regional laws across the United States and Pakistan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-white uppercase">2. INTELLECTUAL PROPERTY</h2>
              <p>
                All visual design systems, WebGL shader codebases, custom user interface components, and digital assets published on this platform remain the exclusive property of AURA LABS unless contractually assigned under client Master Services Agreements.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
