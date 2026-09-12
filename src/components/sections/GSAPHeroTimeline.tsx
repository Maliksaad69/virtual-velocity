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
      className="relative min-h-[50vh] sm:min-h-[70vh] lg:min-h-screen max-h-[500px] sm:max-h-[750px] lg:max-h-[1050px] overflow-hidden select-none font-outfit bg-white"
    >
      {/* Hero Visual - full-bleed image */}
      <div className="gsap-hero-image absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Virtual Velocity"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority={true}
          className="object-cover object-center"
        />
        {/* Subtle gradient overlay at bottom for depth and smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 sm:opacity-40" />
      </div>
    </section>
  );
};
