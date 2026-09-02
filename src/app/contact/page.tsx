"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Contact } from "@/components/sections/Contact";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactPage() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-contact-page-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
    },
    { scope: scopeRef }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-6 px-6 sm:px-12 max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="gsap-contact-page-header space-y-6 border-b border-zinc-200 pb-12">
            <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-zinc-900" />
              START A CONVERSATION
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.9]">
              <SplitTextReveal text="INITIATE PROJECT" highlightWords={["PROJECT"]} accentColor="#059669" />
            </h1>
            <p className="text-base sm:text-2xl text-zinc-600 max-w-3xl font-light leading-relaxed">
              We collaborate with visionary brands globally. Select your campaign goals and budget below for a guaranteed response within 12 hours.
            </p>
          </div>
        </div>

        {/* Unified High-Converting Form Component */}
        <Contact />

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}