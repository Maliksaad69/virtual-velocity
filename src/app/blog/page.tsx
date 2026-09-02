"use client";

import { useRef } from "react";
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

export default function BlogPage() {
  const scopeRef = useRef<HTMLDivElement>(null);

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
    { scope: scopeRef }
  );

  return (
    <SmoothScrollProvider>
      <main ref={scopeRef} className="min-h-screen bg-white text-zinc-900 relative selection:bg-zinc-900 selection:text-white font-outfit">
        <CustomCursor />
        <Navigation />

        <div className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="gsap-blog-title space-y-6 border-b border-zinc-200 pb-12">
            <span className="text-sm font-outfit font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-zinc-900" />
              THOUGHT LEADERSHIP & ARTICLES
            </span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-outfit font-black text-zinc-900 tracking-tight uppercase leading-[0.9]">
              THE DIGITAL <span className="text-zinc-500">JOURNAL</span>
            </h1>
            <p className="text-base sm:text-2xl text-zinc-600 max-w-3xl font-light leading-relaxed">
              Insights on Google Search PPC, Technical SEO audits, paid social conversion rates, and brand positioning strategies.
            </p>
          </div>

          {/* Article Grid */}
          <div className="gsap-blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="gsap-blog-card group p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 flex flex-col justify-between space-y-8 hover:border-zinc-900 transition-all duration-500 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-outfit font-bold text-zinc-500">
                    <span className="text-zinc-900 font-extrabold uppercase">{post.category}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-900" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-outfit font-black text-zinc-900 group-hover:text-emerald-600 transition-colors uppercase leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-zinc-300"
                    />
                    <div className="text-xs font-outfit">
                      <span className="text-zinc-900 font-extrabold block">{post.author.name}</span>
                      <span className="text-zinc-500">{post.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-3 rounded-full border border-zinc-200 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white text-zinc-900 transition-colors"
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
