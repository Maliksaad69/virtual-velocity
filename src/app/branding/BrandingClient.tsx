"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

// Cloudinary Hosted Images for Cresto Branding Portfolio
const CLOUDINARY_IMAGES = {
  page1: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916727/page-1.png",
  page2: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-2.png",
  page3: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-3.png",
  page4: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-4.png",
  page5: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-5.png",
  page6: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916729/page-6.png",
  page7: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916729/page-7.png",
  page8: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-8.png",
  page9: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916728/page-9.png",
  page10: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916730/page-10.png",
  page11: "https://res.cloudinary.com/nudghwmz/image/upload/v1789916729/page-11.png",
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
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

          {/* 5th Image: Overlays 6th image with rounded bottom edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mb-6 sm:-mb-10 md:-mb-14 lg:-mb-20 rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src={CLOUDINARY_IMAGES.page5}
              alt="Cresto Pizza Portfolio - Slide 05"
              width={3325}
              height={1869}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 6th Image */}
          <div className="relative w-full m-0 p-0 leading-none z-0">
            <Image
              src={CLOUDINARY_IMAGES.page6}
              alt="Cresto Pizza Portfolio - Slide 06"
              width={3325}
              height={1869}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>

          {/* 7th Image: Overlays 6th image with rounded top edges */}
          <div className="relative w-full m-0 p-0 leading-none z-10 -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20 rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[2.5rem] lg:rounded-t-[3.5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src={CLOUDINARY_IMAGES.page7}
              alt="Cresto Pizza Portfolio - Slide 07"
              width={3325}
              height={1869}
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
              className="absolute bottom-8 sm:bottom-14 md:bottom-20 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none"
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
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
              width={3325}
              height={1869}
              unoptimized
              sizes="100vw"
              className="w-full h-auto block m-0 p-0 select-none pointer-events-auto"
            />
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
