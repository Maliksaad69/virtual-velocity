"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BLOG_POSTS } from "@/data/agencyData";
import { ArrowUpRight, Clock, Zap } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function BlogClient() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "E-COMMERCE & MARKETING", "SEO & MARKETING", "BRAND MARKETING"];

  const filteredPosts = activeCategory === "ALL" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category.toUpperCase() === activeCategory.toUpperCase());

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-blog-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
      );

      gsap.fromTo(
        ".gsap-blog-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-blog-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: scopeRef, dependencies: [activeCategory] }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-28 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="gsap-blog-title space-y-6 border-b border-zinc-200 pb-10 sm:pb-12">
            <span className="text-xs sm:text-sm font-outfit font-extrabold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              THOUGHT LEADERSHIP &amp; ARTICLES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-outfit font-black text-zinc-900 tracking-tighter uppercase leading-[0.88] select-none">
              THE DIGITAL <span className="text-zinc-500">JOURNAL</span>
            </h1>
            <p className="text-base sm:text-2xl text-zinc-700 max-w-3xl font-light leading-relaxed">
              Insights on Google Search PPC, Technical SEO audits, paid social conversion rates, and brand positioning strategies.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap min-h-[36px] flex items-center ${
                    activeCategory === cat
                      ? "bg-emerald-600 text-white border-emerald-600 font-extrabold shadow-sm"
                      : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-emerald-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid - sm:grid-cols-2 lg:grid-cols-3 */}
          <div className="gsap-blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="gsap-blog-card group p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 flex flex-col justify-between space-y-6 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-outfit font-bold text-zinc-700">
                    <span className="text-emerald-700 font-extrabold uppercase bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-outfit font-black text-zinc-900 group-hover:text-emerald-600 transition-colors uppercase leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-zinc-300"
                      loading="lazy"
                    />
                    <div className="text-xs font-outfit">
                      <span className="text-zinc-900 font-extrabold block">{post.author.name}</span>
                      <span className="text-zinc-500">{post.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-3 rounded-full border border-zinc-200 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white text-zinc-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={`Read ${post.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
