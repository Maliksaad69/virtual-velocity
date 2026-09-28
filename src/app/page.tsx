import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/Navigation";
import { GSAPHeroTimeline } from "@/components/sections/GSAPHeroTimeline";
import { About } from "@/components/sections/About";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { GSAPScrollGallery } from "@/components/sections/GSAPScrollGallery";
import { LightStatsSection } from "@/components/sections/LightStatsSection";
import { EditorialTestimonials } from "@/components/sections/EditorialTestimonials";
import { SEOTextSection } from "@/components/sections/SEOTextSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

// Dynamic imports for heavy interactive components to boost Mobile PageSpeed Insights & reducing main thread TBT
const InstaReelsGallery = dynamic(
  () => import("@/components/sections/InstaReelsGallery").then((mod) => mod.InstaReelsGallery)
);

const BrandPhysicsBalls = dynamic(
  () => import("@/components/sections/BrandPhysicsBalls").then((mod) => mod.BrandPhysicsBalls)
);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thevirtualvelocity.com"),
  alternates: {
    canonical: "https://www.thevirtualvelocity.com",
  },
  title: "Virtual Velocity | Best Digital Marketing Agency Pakistan",
  description:
    "Pakistan's premier digital marketing & performance agency in Islamabad & Rawalpindi. Scale your business with Google Ads PPC, Technical SEO, Meta Paid Social, CRO, and Proprietary Media Channels (Rawalpindians, Islamabad Insider, Sirf Chai).",
  keywords: [
    "Digital Marketing Agency Pakistan",
    "Best Digital Marketing Agency Islamabad",
    "Performance Marketing Agency Rawalpindi",
    "Social Media Marketing Agency Pakistan",
    "SEO Agency Islamabad Pakistan",
    "Virtual Velocity Agency Pakistan",
  ],
  openGraph: {
    title: "Virtual Velocity | Top Digital Marketing Agency Pakistan",
    description: "Full-service performance marketing & digital media agency scaling business revenue in Pakistan and worldwide.",
    url: "https://www.thevirtualvelocity.com",
  },
};

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        {/* Custom Award-Style Dynamic Cursor */}
        <CustomCursor />

        {/* Global Floating Navigation Header */}
        <Navigation />

        {/* 1. GSAP Timeline Powered Hero Entrance */}
        <GSAPHeroTimeline />

        {/* 2. About Virtual Velocity Agency Section */}
        <About />

        {/* 3. Who We Are — Creative House Manifesto */}
        <WhoWeAre />

        {/* 4. Case Studies Walkthrough */}
        <GSAPScrollGallery />

        {/* 5. Instagram Reels & Social Media Gallery */}
        <InstaReelsGallery />

        {/* 6. Brand Physics Balls Drop */}
        <BrandPhysicsBalls />

        {/* 7. Proven Impact & Metrics */}
        <LightStatsSection />

        {/* 8. Agency Discovery & FAQ Text Section (Optimized for Text to Code Ratio) */}
        <SEOTextSection />

        {/* 9. Client Testimonials */}
        <EditorialTestimonials />

        {/* 10. Project Estimator & Contact Form */}
        <Contact />

        {/* Global Studio Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
