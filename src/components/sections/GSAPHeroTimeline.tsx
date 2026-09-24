"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const TICKER_ITEMS = [
  "Digital Agency",
  "Performance Marketing",
  "Tech & Web Agency",
  "PPC & Growth Engine",
  "SEO & CRO Specialists",
  "Creative Brand House",
  "Digital Agency",
];

const SLIDER_IMAGES = [
  { src: "/banner-2.webp", alt: "Virtual Velocity Performance Banner" },
  { src: "/Vv.webp", alt: "Virtual Velocity Digital Agency Banner" },
];

export const GSAPHeroTimeline = () => {
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    SLIDER_IMAGES.forEach((img) => {
      if (typeof window !== "undefined") {
        const i = new window.Image();
        i.src = img.src;
      }
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTickerIndex((p) => (p + 1) % TICKER_ITEMS.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlideCount((p) => p + 1), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const outer = videoScrollRef.current;
    const wrapper = videoWrapperRef.current;
    if (!outer || !wrapper) return;

    const mm = gsap.matchMedia();

    // ─── Mobile (width < 768px): Responsive edge-to-edge scaling without letterboxing gaps ───
    mm.add("(max-width: 767px)", () => {
      gsap.set(wrapper, {
        y: 0,
        width: "90%",
        height: "46vh",
        clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
        borderRadius: "16px",
        willChange: "transform, clip-path",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "+=75%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Smoothly expand to fill 100% width and 100% container height on mobile
      tl.to(wrapper, {
        y: 0,
        width: "100%",
        height: "100%",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0px",
        ease: "power2.out",
        duration: 0.7,
      });

      tl.to({}, { duration: 0.1 });
    });

    // ─── Desktop & Tablet (width >= 768px): Full-bleed widescreen viewport ───
    mm.add("(min-width: 768px)", () => {
      gsap.set(wrapper, {
        y: "-16vh",
        width: "60%",
        height: "55vh",
        clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
        borderRadius: "0px",
        willChange: "transform, clip-path",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "+=120%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1 (0% -> 14% scroll): Video smoothly settles to y: 0 in center before enlarging
      tl.to(wrapper, {
        y: 0,
        width: "60%",
        height: "55vh",
        clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
        ease: "power1.out",
        duration: 0.14,
      });

      // Phase 2 (14% -> 44% scroll): Starts enlarging & straightening toward 86% width
      tl.to(wrapper, {
        y: 0,
        width: "86%",
        height: "82vh",
        clipPath: "polygon(6% 0.3%, 96% 12%, 99.5% 99.5%, 0% 88%)",
        ease: "power1.inOut",
        duration: 0.3,
      });

      // Phase 3 (44% -> 88% scroll): Stretches to full screen and straightens
      tl.to(wrapper, {
        y: 0,
        width: "100%",
        height: "100vh",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",
        duration: 0.44,
      });

      // Phase 4 (88% -> 100% scroll): User stays on the video full screen and straight
      tl.to({}, { duration: 0.12 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full bg-white select-none font-outfit pt-16 sm:pt-20">

      {/* ─── Hero Banner Slider: Positioned below top navbar ─── */}
      <div className="relative w-full overflow-hidden h-[58vh] min-h-[420px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[720px] bg-zinc-950">
        {/* Persistently Mounted Slider Images: Permanently in DOM tree to eliminate unmounting & blank frame flicker */}
        <div className="absolute inset-0 w-full h-full">
          {SLIDER_IMAGES.map((img, idx) => {
            const activeIdx = ((slideCount % SLIDER_IMAGES.length) + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={img.src}
                initial={false}
                animate={{
                  x: isActive ? "0%" : "-8%",
                  scale: isActive ? 1 : 1.06,
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{
                  x: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                }}
                className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Soft top gradient to ensure transparent header is crisp and readable */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-white/60 via-white/15 to-transparent pointer-events-none z-10" />

        {/* Bottom gradient overlay for headline readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none z-10" />

        {/* Hero Content (Badge, Headlines, Ticker, Indicators) - Directly ON the image */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-3 xs:px-4 sm:px-8 lg:px-12 pb-5 xs:pb-6 sm:pb-10 lg:pb-12">
          <div className="max-w-[1700px] mx-auto w-full">
            <div className="flex items-center gap-1.5 xs:gap-2 text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 font-extrabold mb-1 sm:mb-3">
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
              <span>VIRTUAL VELOCITY • DIGITAL &amp; GROWTH HOUSE</span>
            </div>

            <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-black tracking-tighter text-white uppercase leading-none sm:leading-[0.92] drop-shadow-md sm:drop-shadow-lg">
              FULL-SERVICE DIGITAL
            </h1>

            <div className="mt-0.5 sm:mt-1.5 text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-black tracking-tighter uppercase leading-none">
              <div className="relative h-[24px] xs:h-[28px] sm:h-[48px] md:h-[60px] lg:h-[72px] xl:h-[84px] overflow-hidden">
                <div
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `translateY(-${(tickerIndex * 100) / TICKER_ITEMS.length}%)`,
                    height: `${TICKER_ITEMS.length * 100}%`,
                  }}
                >
                  {TICKER_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="h-[24px] xs:h-[28px] sm:h-[48px] md:h-[60px] lg:h-[72px] xl:h-[84px] flex items-center whitespace-nowrap"
                    >
                      <span className="text-emerald-400 drop-shadow-md sm:drop-shadow-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 sm:mt-4 flex items-center gap-1.5 sm:gap-2">
              {SLIDER_IMAGES.map((_, idx) => {
                const isActive = ((slideCount % SLIDER_IMAGES.length) + SLIDER_IMAGES.length) % SLIDER_IMAGES.length === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlideCount((prev) => {
                        const cur = ((prev % SLIDER_IMAGES.length) + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
                        if (cur === idx) return prev;
                        return prev + 1;
                      });
                    }}
                    className={`h-1 sm:h-1.5 rounded-full transition-all duration-400 ${
                      isActive ? "w-6 sm:w-8 bg-emerald-400" : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-3 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Button asChild variant="emerald" size="lg" className="font-bold tracking-wider">
                <Link href="/contact">
                  <span>FREE GROWTH AUDIT</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-black/40 text-white border-white/30 hover:bg-white hover:text-black font-bold tracking-wider backdrop-blur-md">
                <Link href="/services">OUR SERVICES</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Video scroll section: native GSAP pinned container ─── */}
      <div
        ref={videoScrollRef}
        className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden bg-white select-none font-outfit"
      >
        <div
          ref={videoWrapperRef}
          className="relative overflow-hidden bg-zinc-950 shadow-2xl transform-gpu w-[90%] md:w-[60%] h-[46vh] md:h-[55vh]"
          style={{
            willChange: "transform, clip-path",
          }}
        >
          <video
            ref={videoRef}
            src="/vv-website-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
            data-cursor-pointer
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-zinc-300" />
            ) : (
              <Volume2 className="w-5 h-5 text-emerald-400 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
