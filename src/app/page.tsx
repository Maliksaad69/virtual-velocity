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
import { ClientPartners } from "@/components/sections/ClientPartners";
import { About } from "@/components/sections/About";
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

        {/* 3. GSAP 3D Revolving Services Spectrum */}
        <GSAPRevolvingServices />

        {/* 4. Case Studies Walkthrough */}
        <GSAPScrollGallery />

        {/* 5. Proven Impact & Metrics */}
        <LightStatsSection />

        {/* 6. Our Clients & Partners - central anchor with surrounding hexagon logos */}
        <ClientPartners />

        {/* 7. Client Testimonials */}
        <EditorialTestimonials />

        {/* 8. Agency Execution Process */}
        <Process />

        {/* 9. High-Impact Interactive ROI Estimator CTA Banner */}
        <InteractiveCTABanner />

        {/* 10. Project Estimator & Contact Form */}
        <Contact />

        {/* Global Studio Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
