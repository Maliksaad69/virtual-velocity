import { Navigation } from "@/components/layout/Navigation";
import { GSAPHeroTimeline } from "@/components/sections/GSAPHeroTimeline";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
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

const MARQUEE_ITEMS = [
  "FULL-SERVICE DIGITAL MARKETING AGENCY",
  "GOOGLE ADS PPC & SEM",
  "TECHNICAL SEO & ORGANIC GROWTH",
  "NATIVE MOBILE APP DEVELOPMENT",
  "SHOPIFY PLUS E-COMMERCE",
  "3D WEBGL BRAND CAMPAIGNS",
  "SOCIAL MEDIA MARKETING & CONTENT",
];

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

        {/* 2. Kinetic Marquee Ticker */}
        <MarqueeTicker items={MARQUEE_ITEMS} lightMode={true} speed={30} />

        {/* ── Marquee → Services transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 3. GSAP 3D Revolving Services Spectrum */}
        <GSAPRevolvingServices />

        {/* ── Services → Case Studies transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 4. GSAP Down Stair-case Effect Case Studies Walkthrough */}
        <GSAPScrollGallery />

        {/* ── Case Studies → Metrics transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 5. Proven Impact & Metrics */}
        <LightStatsSection />

        {/* ── Metrics → Testimonials transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 6. Client Testimonials */}
        <EditorialTestimonials />

        {/* ── Testimonials → Process transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#ffffff" heightRem={4} />

        {/* 7. Agency Execution Process */}
        <Process />

        {/* 8. High-Impact Interactive ROI Estimator CTA Banner */}
        <InteractiveCTABanner />

        {/* 9. Project Estimator & Contact Form */}
        <Contact />

        {/* Global Studio Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
