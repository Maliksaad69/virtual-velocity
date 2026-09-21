"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

// Cloudinary Hosted Images for Cresto Branding Portfolio (Optimized Artboards)
const CLOUDINARY_IMAGES = {
  page1: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005642/Artboard_1.png",
  page2: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005642/Artboard_2.png",
  page3: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005643/Artboard_3.png",
  page4: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005643/Artboard_4.png",
  page5: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005644/Artboard_5.png",
  page7: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005644/Artboard_7.png",
  page8: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005644/Artboard_8.png",
  page9: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005644/Artboard_9.png",
  page10: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005644/Artboard_10.png",
  page11: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005642/Artboard_11.png",
};

export function BrandingClient() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navigation />

      {/* Main container joining all Cresto images end-to-end from top to bottom */}
      <main className="w-full bg-[#0a0a0a] m-0 p-0 overflow-x-hidden">
        <section className="w-full m-0 p-0 flex flex-col">
          {/* 1st Image: Overlays 2nd image with rounded bottom edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mb-6 sm:-mb-10 md:-mb-14 lg:-mb-20 rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src={CLOUDINARY_IMAGES.page1}
              alt="Cresto Pizza Portfolio - Slide 01"
              width={1596}
              height={897}
              priority
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 2nd Image */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page2}
              alt="Cresto Pizza Portfolio - Slide 02"
              width={1596}
              height={897}
              priority
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />

            {/* Animated Pizza Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 sm:bottom-14 md:bottom-20 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#fab730] animate-ping" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#fab730] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  WOODFIRE CRUST • STONE-HEARTH FIRED
                </span>
              </div>
              <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[0.95]">
                FRESH OUT OF THE OVEN. <br />
                <span className="text-[#fab730]">DELIVERED AT PEAK CRISP.</span>
              </h2>
            </motion.div>
          </div>

          {/* 3rd Image */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page3}
              alt="Cresto Pizza Portfolio - Slide 03"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 4th Image: Overlays 3rd image with rounded top edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20 rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[2.5rem] lg:rounded-t-[3.5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src={CLOUDINARY_IMAGES.page4}
              alt="Cresto Pizza Portfolio - Slide 04"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />

            {/* Animated Pizza Text Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-8 sm:top-14 md:top-20 right-6 sm:right-12 lg:right-16 text-right z-20 pointer-events-none"
            >
              <span className="inline-block font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#00aeac] font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                AUTHENTIC ARTISANAL RECIPE
              </span>
              <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[0.95]">
                48-HOUR FERMENTED DOUGH. <br />
                <span className="text-[#00aeac]">SAN MARZANO DOP SAUCE.</span>
              </h2>
              <p className="font-mono text-[10px] sm:text-xs text-white/80 uppercase tracking-widest mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                100% WHOLE MILK MOZZARELLA • FIRED AT 450°C
              </p>
            </motion.div>
          </div>

          {/* 5th Image: Overlays 7th image with rounded bottom edges */}
          <div className="relative w-full m-0 p-0 leading-none z-20 -mb-6 sm:-mb-10 md:-mb-14 lg:-mb-20 rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src={CLOUDINARY_IMAGES.page5}
              alt="Cresto Pizza Portfolio - Slide 05"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 6th Image on page (Slide 07): Overlays next image with prominent rounded bottom edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mb-8 sm:-mb-14 md:-mb-20 lg:-mb-28 rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <Image
              src={CLOUDINARY_IMAGES.page7}
              alt="Cresto Pizza Portfolio - Slide 07"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />

            {/* Animated Pizza Text Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-12 sm:bottom-16 md:bottom-24 lg:bottom-28 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none"
            >
              <span className="inline-block font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#fab730] font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                HEAT-LOCKING CARTON ARCHITECTURE
              </span>
              <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[0.95]">
                STEAM-VENTED CORNERS. <br />
                <span className="text-[#00aeac]">ZERO SOGGY PIZZA.</span>
              </h2>
            </motion.div>
          </div>

          {/* 8th Image */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page8}
              alt="Cresto Pizza Portfolio - Slide 08"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 9th Image: Full width from left to right, overlaying 10% on 8th and 10% on 10th image with rounded edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mt-[5.6vw] -mb-[5.6vw] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
            <Image
              src={CLOUDINARY_IMAGES.page9}
              alt="Cresto Pizza Portfolio - Slide 09"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />

            {/* Animated Pizza Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 sm:bottom-14 md:bottom-20 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none"
            >
              <span className="inline-block font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#fab730] font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                HOT DELIVERY TO YOUR HANDS
              </span>
              <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[0.95]">
                MAGIC IN EVERY SLICE.
              </h2>
            </motion.div>
          </div>

          {/* 10th Image */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page10}
              alt="Cresto Pizza Portfolio - Slide 10"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 11th Image: Joined end-to-end after 10th */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page11}
              alt="Cresto Pizza Portfolio - Slide 11"
              width={1596}
              height={897}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
            {/* Smooth gradient fade over bottom of 11th image into dark background */}
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 md:h-56 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a] pointer-events-none" />
          </div>
        </section>

        {/* Seamless transitional gradient bridging dark portfolio into vibrant teal footer */}
        <div className="relative w-full h-24 sm:h-32 md:h-44 bg-gradient-to-b from-[#0a0a0a] to-[#00AEAC] pointer-events-none overflow-hidden">
          {/* Ambient teal glow accent */}
          <div className="absolute inset-0 bg-radial-[at_50%_100%] from-[#00AEAC]/30 via-transparent to-transparent" />
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
