import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function PrivacyPolicyPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 px-6 sm:px-12 max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 border-b border-zinc-200 pb-8">
            <span className="text-meta text-zinc-900 uppercase tracking-widest block font-bold">
              // LEGAL COMPLIANCE
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black text-zinc-900 uppercase tracking-tight">
              PRIVACY POLICY
            </h1>
            <p className="text-xs font-mono text-zinc-500">LAST REVISED: AUGUST 29, 2026</p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-zinc-900 uppercase">1. INFORMATION WE COLLECT</h2>
              <p>
                VIRTUAL VELOCITY collects contact details provided directly by users when transmitting project inquiries through our interactive forms, including full names, work email addresses, phone numbers, and project briefs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-zinc-900 uppercase">2. HOW WE USE YOUR DATA</h2>
              <p>
                We use collected information strictly to evaluate project scope requirements, prepare technical proposals, communicate regarding scheduled strategy consultations, and manage long-term client engagements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-outfit font-bold text-zinc-900 uppercase">3. DATA SECURITY & REGIONAL COMPLIANCE</h2>
              <p>
                We maintain enterprise security controls across our Wilmington, USA and Lahore, Pakistan operational hubs to safeguard client data against unauthorized access, adhering to GDPR, CCPA, and international data protection standards.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
