import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function TermsOfUsePage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 px-6 sm:px-12 max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 border-b border-zinc-200 pb-8">
            <span className="text-meta text-zinc-900 uppercase tracking-widest block font-bold">
              // LEGAL FRAMEWORK
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
              TERMS OF USE
            </h1>
            <p className="text-xs font-mono text-zinc-500">LAST REVISED: AUGUST 29, 2026</p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-zinc-900 uppercase">1. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing or navigating the VIRTUAL VELOCITY digital platform, you agree to comply with these Terms of Use and all applicable regional laws across the United States and Pakistan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-zinc-900 uppercase">2. INTELLECTUAL PROPERTY</h2>
              <p>
                All visual design systems, custom user interface components, and digital assets published on this platform remain the exclusive property of VIRTUAL VELOCITY unless contractually assigned under client Master Services Agreements.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
