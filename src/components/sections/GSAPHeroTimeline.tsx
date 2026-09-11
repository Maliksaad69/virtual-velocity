"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const GSAPHeroTimeline = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-hero-image",
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    },
    { scope: scopeRef }
  );

  return (
    <section
      ref={scopeRef}
      className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen max-h-[900px] sm:max-h-[1050px] overflow-hidden select-none font-outfit bg-white"
    >
      {/* Hero Visual - full-bleed image */}
      <div className="gsap-hero-image absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Virtual Velocity"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          preload={true}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
