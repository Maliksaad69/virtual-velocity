"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TICKER_ITEMS = [
  "Digital Agency",
  "Performance Marketing",
  "Tech & Web Agency",
  "PPC & Growth Engine",
  "SEO & CRO Specialists",
  "Creative Brand House",
  "Digital Agency",
];

export const GSAPHeroTimeline = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const stickyTrackRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Text ticker interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // GSAP ScrollTrigger: As user scrolls down, video straightens and expands.
  // When the video comes in center, it is straight and large.
  useGSAP(
    () => {
      if (!videoWrapperRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          videoWrapperRef.current,
          {
            width: "48%",
            height: "22vh",
            clipPath: "polygon(20% 1%, 88% 40%, 99% 99%, 0% 74%)",
            borderRadius: "14px",
          },
          {
            width: "100%",
            height: "68vh",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0px",
            ease: "power1.out",
            scrollTrigger: {
              trigger: scopeRef.current,
              start: "top top",
              end: "+=350",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          videoWrapperRef.current,
          {
            width: "30%",
            height: "26vh",
            clipPath: "polygon(20% 1%, 88% 40%, 99% 99%, 0% 74%)",
            borderRadius: "16px",
          },
          {
            width: "100%",
            height: "88vh",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0px",
            ease: "power1.out",
            scrollTrigger: {
              trigger: scopeRef.current,
              start: "top top",
              end: "+=400",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: scopeRef }
  );

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section ref={scopeRef} className="relative w-full bg-white select-none font-outfit">
      {/* 1. Hero Headline & Animated Text Ticker above video */}
      <div className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-emerald-600 font-extrabold mb-2.5 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 animate-pulse" />
          <span>VIRTUAL VELOCITY • DIGITAL & GROWTH HOUSE</span>
        </div>

        {/* Static Headline Prefix */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5.2rem] font-black tracking-tighter text-zinc-950 uppercase leading-[0.95] sm:leading-[0.92]">
          <span>LEADING FULL-SERVICE</span>
        </h1>

        {/* Vertical Sliding Text Ticker */}
        <div className="mt-1 sm:mt-1.5 text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5.2rem] font-black tracking-tighter uppercase leading-[0.95]">
          <div className="relative h-[42px] sm:h-[60px] md:h-[72px] lg:h-[88px] xl:h-[104px] overflow-hidden">
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
                  className="h-[42px] sm:h-[60px] md:h-[72px] lg:h-[88px] xl:h-[104px] flex items-center whitespace-nowrap"
                >
                  <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2 sm:decoration-4 underline-offset-6 sm:underline-offset-8">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Video Frame: Tilted 3D Video Frame expands to straight full screen as user scrolls down */}
      <div className="relative w-full flex items-center justify-center overflow-hidden pb-10 sm:pb-16">
        <div
          ref={videoWrapperRef}
          className="video-wrapper relative overflow-hidden bg-zinc-950 shadow-2xl transition-[filter] duration-300 mx-auto"
          style={{
            width: "30%",
            height: "26vh",
            clipPath: "polygon(20% 1%, 88% 40%, 99% 99%, 0% 74%)",
            borderRadius: "16px",
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

          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Sound Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            data-cursor-pointer
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
