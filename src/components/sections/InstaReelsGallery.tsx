"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface ReelItem {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
  hasVvIcon?: boolean;
}

const BRAND_REELS: ReelItem[] = [
  {
    id: "reel-01",
    number: "01",
    category: "ENTERTAINMENT & GAMING",
    title: "Warning: Boredom Isn't Allowed at Megazone!",
    client: "Megazone",
    year: "2026",
    thumbnail: "/images/reels/reel-01.jpg",
    videoUrl: "https://www.instagram.com/reel/Daz6TClqB8r/",
    hasVvIcon: true,
  },
  {
    id: "reel-02",
    number: "02",
    category: "LIFESTYLE & CAFE",
    title: "Adulting & Modern Coffee Culture",
    client: "Virtual Velocity",
    year: "2026",
    thumbnail: "/images/reels/reel-02.jpg",
    videoUrl: "https://www.instagram.com/reel/DW3yDsgoYOf/",
    hasVvIcon: true,
  },
  {
    id: "reel-03",
    number: "03",
    category: "BRAND CAMPAIGN",
    title: "POV: Finding the Ultimate Action Playground",
    client: "Megazone",
    year: "2026",
    thumbnail: "/images/reels/reel-03.jpg",
    videoUrl: "https://www.instagram.com/reel/DbxUokOqqsR/",
    hasVvIcon: true,
  },
  {
    id: "reel-04",
    number: "04",
    category: "PERFORMANCE & ATHLETICS",
    title: "No Blueprint for Greatness: Raw Grit & Focus",
    client: "Virtual Velocity",
    year: "2026",
    thumbnail: "/images/reels/reel-04.jpg",
    videoUrl: "https://www.instagram.com/reel/DLKfZ5xImaT/",
    hasVvIcon: true,
  },
  {
    id: "reel-05",
    number: "05",
    category: "FASHION & SPORTSWEAR",
    title: "Step into Comfort, Power & Unstoppable Style",
    client: "ANTA Pakistan",
    year: "2026",
    thumbnail: "/images/reels/reel-05.jpg",
    videoUrl: "https://www.instagram.com/reel/DNxaqZu0JxB/",
    hasVvIcon: true,
  },
  {
    id: "reel-06",
    number: "06",
    category: "HOSPITALITY & DINING",
    title: "Margalla Hills Backdrop & Iconic Baradari Views",
    client: "Andaz Restaurant",
    year: "2026",
    thumbnail: "/images/reels/reel-06.jpg",
    videoUrl: "https://www.instagram.com/reel/Dck9aXZtO1q/",
    hasVvIcon: true,
  },
  {
    id: "reel-07",
    number: "07",
    category: "CULINARY & FOOD",
    title: "Craving the Ultimate Live BBQ Experience?",
    client: "Desi Chapter",
    year: "2026",
    thumbnail: "/images/reels/reel-07.jpg",
    videoUrl: "https://www.instagram.com/reel/DbVKsyPsNew/",
    hasVvIcon: true,
  },
  {
    id: "reel-08",
    number: "08",
    category: "GOURMET DINING",
    title: "From Sizzling BBQ to Juicy Grilled Cuts",
    client: "Desi Chapter",
    year: "2026",
    thumbnail: "/images/reels/reel-08.jpg",
    videoUrl: "https://www.instagram.com/reel/DZxCBSysaQ1/",
    hasVvIcon: true,
  },
  {
    id: "reel-09",
    number: "09",
    category: "DESTINATION DINING",
    title: "Good Food, Cozy Ambiance & Perfect Escapes",
    client: "Pamir Restaurant",
    year: "2026",
    thumbnail: "/images/reels/reel-09.jpg",
    videoUrl: "https://www.instagram.com/reel/DYRcJS6IdvK/",
    hasVvIcon: true,
  },
  {
    id: "reel-10",
    number: "10",
    category: "CAFE & CULTURE",
    title: "Cozy Corners, Warm Lights & Coffee Comfort",
    client: "Chaaye Khana",
    year: "2026",
    thumbnail: "/images/reels/reel-10.jpg",
    videoUrl: "https://www.instagram.com/reel/DSCsMtkDUPm/",
    hasVvIcon: true,
  },
  {
    id: "reel-11",
    number: "11",
    category: "FOOD & HOSPITALITY",
    title: "Relationship Status? Fully Committed to Good Food",
    client: "Mughlai",
    year: "2026",
    thumbnail: "/images/reels/reel-11.jpg",
    videoUrl: "https://www.instagram.com/reel/DSXZwAsDZxY/",
    hasVvIcon: true,
  },
  {
    id: "reel-12",
    number: "12",
    category: "COUTURE & FASHION",
    title: "From Raw Threads to Sheer Elegance",
    client: "Virtual Velocity",
    year: "2026",
    thumbnail: "/images/reels/reel-12.jpg",
    videoUrl: "https://www.instagram.com/reel/DbN1UbgC7J2/",
    hasVvIcon: true,
  },
];

const N = BRAND_REELS.length;
// 3 identical sets of 6 reels for smooth infinite repeating track
const CLONED_REELS = [...BRAND_REELS, ...BRAND_REELS, ...BRAND_REELS];

export const InstaReelsGallery = () => {
  // Start in middle set at index N + 1 = 7 (reel-02)
  const [currentIndex, setCurrentIndex] = useState(N + 1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentDrag = useRef(0);
  const hasMoved = useRef(false);
  const lastWheelTime = useRef(0);

  // Real active index (0 to N-1) for pagination dots
  const realActiveIndex = ((currentIndex % N) + N) % N;

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // CRITICAL: Handle seamless boundary jump without any visual glitch
  const handleTransitionEnd = useCallback((e: React.TransitionEvent<HTMLDivElement>) => {
    // Strictly ignore bubbling transitionend events from child elements (cards, images, text)
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;

    if (currentIndex >= N * 2) {
      // Reached the end clone set -> silently jump to middle set without animation
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      // Reached the start clone set -> silently jump to middle set without animation
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + N);
    }
  }, [currentIndex]);

  // Re-enable smooth transition immediately after silent jump is rendered
  useEffect(() => {
    if (!isTransitioning) {
      if (trackRef.current) {
        // Force synchronous DOM reflow so browser commits the silent jump instantly
        void trackRef.current.offsetHeight;
      }
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Infinite repeating autoplay: continually loops smoothly
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (!isDragging.current) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Helper to reset track to current index transform
  const resetTrackPosition = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 500ms cubic-bezier(0.2, 0.9, 0.3, 1)";
      trackRef.current.style.transform = `translateX(calc(-1 * (${currentIndex} * var(--step) + var(--card-w) / 2))) translateZ(0)`;
    }
  }, [currentIndex]);

  // Mouse Drag Handlers for PC (direct DOM transform for 120fps silky smoothness)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    startX.current = e.clientX;
    currentDrag.current = 0;
    hasMoved.current = false;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    currentDrag.current = diff;
    if (Math.abs(diff) > 8) {
      hasMoved.current = true;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc(-1 * (${currentIndex} * var(--step) + var(--card-w) / 2) + ${diff}px)) translateZ(0)`;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = currentDrag.current;
    if (hasMoved.current && Math.abs(diff) > 35) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      resetTrackPosition();
    }
    setTimeout(() => {
      hasMoved.current = false;
    }, 100);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      const diff = currentDrag.current;
      if (hasMoved.current && Math.abs(diff) > 35) {
        if (diff < 0) nextSlide();
        else prevSlide();
      } else {
        resetTrackPosition();
      }
      setTimeout(() => {
        hasMoved.current = false;
      }, 100);
    }
  };

  // Touch Swipe Handlers for Mobile (direct DOM transform for native 60/120fps fluid response)
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    currentDrag.current = 0;
    hasMoved.current = false;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    currentDrag.current = diff;
    if (Math.abs(diff) > 8) {
      hasMoved.current = true;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc(-1 * (${currentIndex} * var(--step) + var(--card-w) / 2) + ${diff}px)) translateZ(0)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = currentDrag.current;
    if (hasMoved.current && Math.abs(diff) > 35) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      resetTrackPosition();
    }
    setTimeout(() => {
      hasMoved.current = false;
    }, 100);
  };

  // PC Wheel / Trackpad Horizontal Scroll
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 300) return;

    if (Math.abs(e.deltaX) > 25) {
      if (e.deltaX > 0) nextSlide();
      else prevSlide();
      lastWheelTime.current = now;
    }
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 relative bg-white text-zinc-900 select-none font-outfit overflow-hidden border-t border-zinc-200"
    >
      {/* Soft emerald ambient glow radiating behind header */}
      <div className="absolute top-0 inset-x-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1700px] mx-auto space-y-7 sm:space-y-9 relative z-10">
        {/* Header: Kept on the LEFT with agency emerald branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-zinc-200 pb-5 sm:pb-6">
          <div className="text-left space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-emerald-600 rounded-full" />
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-emerald-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                FEATURED WORKS // REELS &amp; MEDIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[0.92] text-zinc-950">
              Brand <span className="text-emerald-600 font-black">Gallery</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-zinc-600 max-w-xl font-normal leading-relaxed pt-0.5">
              Premium video storytelling that connects, converts, and builds brand loyalty.
            </p>
          </div>

          {/* Top-Right Navigation Controls on Desktop */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous reel"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 hover:border-emerald-600 bg-white hover:bg-emerald-600 hover:text-white flex items-center justify-center text-zinc-800 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next reel"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 hover:border-emerald-600 bg-white hover:bg-emerald-600 hover:text-white flex items-center justify-center text-zinc-800 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Seamless Centered Horizontal Carousel Track */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className="relative w-full h-[340px] sm:h-[365px] md:h-[390px] overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none flex items-center"
        >
          {/* Soft Left & Right Edge Vignettes */}
          <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
          <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          {/* Sliding Continuous Track: Centered on screen, glitch-free */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              position: "absolute",
              left: "50%",
              transform: `translateX(calc(-1 * (${currentIndex} * var(--step) + var(--card-w) / 2))) translateZ(0)`,
              transition: isTransitioning ? "transform 500ms cubic-bezier(0.2, 0.9, 0.3, 1)" : "none",
            }}
            className="flex items-center gap-4 sm:gap-5 md:gap-6 [--card-w:180px] [--step:196px] sm:[--card-w:205px] sm:[--step:225px] md:[--card-w:225px] md:[--step:249px] py-4 will-change-transform"
          >
            {CLONED_REELS.map((reel, idx) => {
              const isActive = idx === currentIndex;
              const isNeighbor = Math.abs(idx - currentIndex) === 1;

              const cardContent = (
                <>
                  {/* Background Reel Cover Image: 100% Crisp, High-Contrast, No Blur */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-all duration-300 ${
                      isActive ? "brightness-100 contrast-105" : "brightness-95 contrast-100"
                    }`}
                    loading="lazy"
                  />

                  {/* Gentle Top Shadow for Meta Readability */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none" />

                  {/* Card Top Row: Clean VV Badge + FEATURED Pill */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      {reel.hasVvIcon && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-emerald-400/50 shadow-xs">
                          <img src="/icon.png" alt="VV" className="w-3 h-3 object-contain rounded-full" />
                          <span className="text-[8.5px] font-mono font-black text-emerald-300 uppercase tracking-widest leading-none">
                            VV
                          </span>
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <span className="text-[8.5px] font-mono font-black tracking-widest text-emerald-300 uppercase px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-emerald-400/50 shadow-xs">
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Overlay with Emerald Theme */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 pt-12 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end space-y-1 z-10 pointer-events-none">
                    <h3 className="text-[11.5px] sm:text-xs font-black text-white leading-snug tracking-tight line-clamp-2">
                      {reel.title}
                    </h3>

                    <p className="text-[9.5px] sm:text-[10px] font-mono text-zinc-300/90 font-medium tracking-wide">
                      {reel.client} · {reel.year}
                    </p>
                  </div>
                </>
              );

              // Middle 1 box is larger (scale-110) and 100% crisp without blur, with decreased height overall
              const cardClasses = `relative flex-shrink-0 w-[180px] sm:w-[205px] md:w-[225px] aspect-[9/13.8] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-out cursor-pointer block select-none transform-gpu ${
                isActive
                  ? "scale-110 ring-2 ring-emerald-500 shadow-[0_16px_40px_rgba(16,185,129,0.3)] ring-offset-2 ring-offset-white z-30 opacity-100 hover:brightness-105"
                  : isNeighbor
                  ? "scale-95 opacity-75 hover:opacity-90 z-20 shadow-md"
                  : "scale-90 opacity-50 hover:opacity-75 z-10 shadow-sm"
              }`;

              // Active card is a native link that directly opens reel in new tab on Instagram
              if (isActive) {
                return (
                  <a
                    key={`${reel.id}-${idx}`}
                    href={reel.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (hasMoved.current) {
                        e.preventDefault();
                      }
                    }}
                    className={cardClasses}
                    title={`Play ${reel.title} on Instagram`}
                  >
                    {cardContent}
                  </a>
                );
              }

              // Inactive cards: clicking smoothly centers that card
              return (
                <div
                  key={`${reel.id}-${idx}`}
                  onClick={() => {
                    if (!hasMoved.current) {
                      setIsTransitioning(true);
                      setCurrentIndex(idx);
                    }
                  }}
                  className={cardClasses}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Pagination: Looping Indicator Dots with Emerald Active Pill */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-1">
          {BRAND_REELS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(N + dotIdx);
              }}
              aria-label={`Go to reel ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === realActiveIndex
                  ? "w-6 sm:w-7 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 shadow-xs"
                  : "w-1.5 h-1.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
