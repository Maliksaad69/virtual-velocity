import { Navigation } from "@/components/layout/Navigation";
import { GSAPHeroTimeline } from "@/components/sections/GSAPHeroTimeline";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { InteractiveServicesGrid } from "@/components/sections/InteractiveServicesGrid";
import { GSAPScrollGallery } from "@/components/sections/GSAPScrollGallery";
import { LightStatsSection } from "@/components/sections/LightStatsSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { EditorialTestimonials } from "@/components/sections/EditorialTestimonials";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { ParticleBurst } from "@/components/ui/ParticleBurst";

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
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative selection:bg-[#00f0ff] selection:text-black">
        {/* Scroll-triggered ambient particle burst layer */}
        <ParticleBurst />

        {/* Custom Award-Style Dynamic Cursor */}
        <CustomCursor />

        {/* Web Audio Ambient Sound Toggle */}
        <SoundToggle />

        {/* Global Floating Navigation Header */}
        <Navigation />

        {/* 1. GSAP Timeline Powered Hero Entrance */}
        <GSAPHeroTimeline />

        {/* 2. Kinetic Marquee Ticker (Stark White Contrast Ribbon) */}
        <MarqueeTicker items={MARQUEE_ITEMS} lightMode={true} speed={30} />

        {/* ── Marquee (white) → Services (dark) transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#050507" heightRem={6} />

        {/* 3. GSAP Horizontal Scroll Service Spectrum (cinematic pin + reveal) */}
        <InteractiveServicesGrid />

        {/* 4. GSAP ScrollTrigger Pinned Horizontal Portfolio Showcase */}
        <GSAPScrollGallery />

        {/* ── Dark → White transition ── */}
        <GradientDivider fromColor="#050507" toColor="#ffffff" heightRem={6} />

        {/* 5. Proven Impact & Metrics (Stark White Counter Section) */}
        <LightStatsSection />

        {/* ── White → Dark transition ── */}
        <GradientDivider fromColor="#ffffff" toColor="#08080a" heightRem={6} />

        {/* 6. Selected Work Portfolio Showcase */}
        <SelectedWork />

        {/* ── Dark → Light transition ── */}
        <GradientDivider fromColor="#08080a" toColor="#f4f4f6" heightRem={6} />

        {/* 7. Client Testimonials (Off-White Review Carousel) */}
        <EditorialTestimonials />

        {/* ── Light → Dark transition ── */}
        <GradientDivider fromColor="#f4f4f6" toColor="#08080a" heightRem={6} />

        {/* 8. Agency Execution Process */}
        <Process />

        {/* 9. High-Converting Project Estimator & Contact Form */}
        <Contact />

        {/* Global Studio Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
