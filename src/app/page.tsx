import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { GSAPHeroTimeline } from "@/components/sections/GSAPHeroTimeline";

export const metadata: Metadata = {
  title: "Virtual Velocity | Digital Marketing & Growth Agency",
  description: "Scale your brand revenue with ROI-driven Google Ads PPC, Technical SEO, Paid Social, CRO, and Custom App Engineering.",
  openGraph: {
    title: "Virtual Velocity | Digital Marketing & Growth Agency",
    description: "Full-service performance marketing & tech agency scaling business revenue through Google Ads PPC, SEO, CRO, and Paid Social.",
  },
};
import { GSAPRevolvingServices } from "@/components/sections/GSAPRevolvingServices";
import { GSAPScrollGallery } from "@/components/sections/GSAPScrollGallery";
import { LightStatsSection } from "@/components/sections/LightStatsSection";
import { EditorialTestimonials } from "@/components/sections/EditorialTestimonials";
import { Process } from "@/components/sections/Process";
import { InteractiveCTABanner } from "@/components/sections/InteractiveCTABanner";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { ClientLogosMarquee } from "@/components/sections/ClientLogosMarquee";
import { About } from "@/components/sections/About";
import { CreativePunchline } from "@/components/sections/CreativePunchline";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        {/* Custom Award-Style Dynamic Cursor */}
        <CustomCursor />

        {/* Web Audio Ambient Sound Toggle */}
        <SoundToggle />

        {/* Global Floating Navigation Header */}
        <Navigation />

        {/* 1. GSAP Timeline Powered Hero Entrance */}
        <GSAPHeroTimeline />

        {/* 2. About Virtual Velocity Agency Section */}
        <About />

        {/* ── About → Services transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 3. GSAP 3D Revolving Services Spectrum */}
        <GSAPRevolvingServices />

        {/* 4. Creative Punchline Section */}
        <CreativePunchline />

        {/* ── Punchline → Case Studies transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 5. GSAP Down Stair-case Effect Case Studies Walkthrough */}
        <GSAPScrollGallery />

        {/* ── Case Studies → Metrics transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 6. Proven Impact & Metrics */}
        <LightStatsSection />

        {/* 7. Featured Client Logos - Two rows with opposite directions */}
        <ClientLogosMarquee />

        {/* ── Logos → Testimonials transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 8. Client Testimonials */}
        <EditorialTestimonials />

        {/* ── Testimonials → Process transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 9. Agency Execution Process */}
        <Process />

        {/* 10. High-Impact Interactive ROI Estimator CTA Banner */}
        <InteractiveCTABanner />

        {/* 11. Project Estimator & Contact Form */}
        <Contact />

        {/* Global Studio Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
