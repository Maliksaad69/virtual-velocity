"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface ReelItem {
  id: string;
  title: string;
  category: string;
  url: string;
  embedUrl: string;
}

const INSTA_REELS: ReelItem[] = [
  {
    id: "DcaoQoLI1P5",
    title: "Brand Production & Direction",
    category: "Commercial Shoot",
    url: "https://www.instagram.com/reel/DcaoQoLI1P5/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DcaoQoLI1P5/embed/",
  },
  {
    id: "DdG3dt9oMzU",
    title: "High-Impact Visual Narrative",
    category: "Creative Campaign",
    url: "https://www.instagram.com/reels/DdG3dt9oMzU/",
    embedUrl: "https://www.instagram.com/reel/DdG3dt9oMzU/embed/",
  },
  {
    id: "Dck-CDgoGwH",
    title: "Viral Aesthetic & Storytelling",
    category: "Social Production",
    url: "https://www.instagram.com/reels/Dck-CDgoGwH/",
    embedUrl: "https://www.instagram.com/reel/Dck-CDgoGwH/embed/",
  },
  {
    id: "DcWT4qBI0pX",
    title: "Cinematic Reel Showcase",
    category: "Brand Story",
    url: "https://www.instagram.com/reels/DcWT4qBI0pX/",
    embedUrl: "https://www.instagram.com/reel/DcWT4qBI0pX/embed/",
  },
  {
    id: "Db-za5DIF7i",
    title: "Dynamic Social Engagement",
    category: "Audience Scale",
    url: "https://www.instagram.com/reels/Db-za5DIF7i/",
    embedUrl: "https://www.instagram.com/reel/Db-za5DIF7i/embed/",
  },
];

export const InstaReelsGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-zinc-50 text-zinc-900 relative border-t border-zinc-200 select-none font-outfit overflow-hidden">
      <div className="max-w-[1700px] mx-auto space-y-8 sm:space-y-12">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 sm:pb-8">
          <div className="space-y-3">
            <span className="text-xs font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-emerald-600" />
              <span>FEATURED WORK // INSTAGRAM REELS &amp; MEDIA</span>
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black uppercase tracking-tight text-zinc-950">
              SOCIAL REELS &amp; <span className="text-emerald-600">GALLERY</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              Explore our latest commercial shoots, viral reels, and creative campaigns crafted for high engagement across digital channels.
            </p>
          </div>

          {/* Controls: Scroll Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous reels"
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next reels"
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reels Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INSTA_REELS.map((reel, idx) => (
            <div
              key={reel.id}
              className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 snap-start rounded-3xl bg-white border border-zinc-200 p-3 sm:p-3.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Top Meta */}
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    REEL 0{idx + 1}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                  {reel.category}
                </span>
              </div>

              {/* Embedded Instagram Reel Frame - Masked to crop out Instagram's top profile header and bottom "View more on Instagram" bar */}
              <div className="relative w-full h-[370px] sm:h-[390px] rounded-2xl overflow-hidden bg-black border border-zinc-200/80 shadow-inner">
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  className="w-full h-[510px] -mt-[54px] border-0"
                  scrolling="no"
                  allowFullScreen
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              {/* Card Footer - Clean Title Only */}
              <div className="mt-2.5 pt-2.5 border-t border-zinc-100 px-1">
                <h4 className="text-xs font-outfit font-extrabold text-zinc-900 uppercase truncate">
                  {reel.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
