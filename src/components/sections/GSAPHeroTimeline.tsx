"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

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
  { src: "/Vv.png", alt: "Virtual Velocity Digital Agency Banner" },
  { src: "/Banner 2.png", alt: "Virtual Velocity Performance Banner" },
];

export const GSAPHeroTimeline = () => {
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTickerIndex((p) => (p + 1) % TICKER_ITEMS.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSliderIndex((p) => (p + 1) % SLIDER_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const outer = videoScrollRef.current;
    const wrapper = videoWrapperRef.current;
    if (!outer || !wrapper) return;

    // Initial: clip-path polygon gives the signature slanted/tilted quadrilateral shape
    // Identical on both PC and mobile
    gsap.set(wrapper, {
      width: "60%",
      height: "55vh",
      clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
      borderRadius: "0px",
    });

    // Pinned scroll timeline:
    // 1. Video arrives in center and pins to viewport with GSAP pin: true
    // 2. Starts enlarging and becoming straight only once centered
    // 3. When about to complete, more scroll is required to complete so user stays on video
    // 4. Stays on full-screen straight video, then unpins cleanly with zero blank space
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        start: "top top",      // Pins when section fills viewport (video in center)
        end: "+=120%",         // Scroll depth for the animation & hold
        pin: true,             // GSAP native pin
        pinSpacing: true,      // Automatically manages layout spacing, NO blank space
        anticipatePin: 1,      // Prevents jump on fast scroll
        scrub: 1.2,            // Smooth natural inertia
        invalidateOnRefresh: true,
      },
    });

    // Phase 1 (0% -> 12% scroll): Video rests in center as tilted quadrilateral before enlarging
    tl.to(wrapper, {
      width: "60%",
      height: "55vh",
      clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
      duration: 0.12,
    });

    // Phase 2 (12% -> 42% scroll): Starts enlarging & straightening toward 86% width
    tl.to(wrapper, {
      width: "86%",
      height: "82vh",
      clipPath: "polygon(6% 0.3%, 96% 12%, 99.5% 99.5%, 0% 88%)",
      ease: "power1.inOut",
      duration: 0.3,
    });

    // Phase 3 (42% -> 88% scroll — 46% of total scroll distance!):
    // Stretches to full screen and straightens
    tl.to(wrapper, {
      width: "100%",
      height: "100vh",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.out",
      duration: 0.46,
    });

    // Phase 4 (88% -> 100% scroll): User stays on the video full screen and straight
    tl.to({}, { duration: 0.12 });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full bg-white select-none font-outfit">

      {/* ─── Hero Banner Slider: Complete uncropped photo on mobile, full-bleed on desktop ─── */}
      <div
        className="relative w-full overflow-hidden aspect-[16/8.5] sm:aspect-auto sm:min-h-[calc(100vh-80px)]"
        style={{ marginTop: "80px" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={sliderIndex}
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={SLIDER_IMAGES[sliderIndex].src}
              alt={SLIDER_IMAGES[sliderIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none z-10" />

        {/* Hero Content (Badge, Headlines, Ticker, Indicators) - Directly ON the image */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-3 xs:px-4 sm:px-8 lg:px-12 pb-3 xs:pb-4 sm:pb-14">
          <div className="max-w-[1700px] mx-auto w-full">
            <div className="flex items-center gap-1.5 xs:gap-2 text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 font-extrabold mb-1 sm:mb-5">
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
              <span>VIRTUAL VELOCITY • DIGITAL &amp; GROWTH HOUSE</span>
            </div>

            <h1 className="text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5.2rem] font-black tracking-tighter text-white uppercase leading-none sm:leading-[0.92] drop-shadow-md sm:drop-shadow-lg">
              LEADING FULL-SERVICE
            </h1>

            <div className="mt-0.5 sm:mt-1.5 text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5.2rem] font-black tracking-tighter uppercase leading-none">
              <div className="relative h-[24px] xs:h-[28px] sm:h-[60px] md:h-[72px] lg:h-[88px] xl:h-[104px] overflow-hidden">
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
                      className="h-[24px] xs:h-[28px] sm:h-[60px] md:h-[72px] lg:h-[88px] xl:h-[104px] flex items-center whitespace-nowrap"
                    >
                      <span className="text-emerald-400 drop-shadow-md sm:drop-shadow-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 sm:mt-8 flex items-center gap-1.5 sm:gap-2">
              {SLIDER_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSliderIndex(idx)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-400 ${
                    sliderIndex === idx ? "w-6 sm:w-8 bg-emerald-400" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Video scroll section: native GSAP pinned h-screen container ─── */}
      <div
        ref={videoScrollRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <div
          ref={videoWrapperRef}
          className="relative overflow-hidden bg-zinc-950 shadow-2xl"
          style={{
            width: "60%",
            height: "55vh",
            clipPath: "polygon(19.17% 0.96%, 88.5% 38.33%, 99.04% 99.04%, 0% 75.08%)",
            willChange: "clip-path, width, height",
          }}
        >
          <video
            ref={videoRef}
            src="/VV%20website%20video%20.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute top-4 right-4 sm:top-auto sm:bottom-3 sm:right-3 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            data-cursor-pointer
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-zinc-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
