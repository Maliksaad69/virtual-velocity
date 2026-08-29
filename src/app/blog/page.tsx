"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BLOG_POSTS } from "@/data/agencyData";
import { ArrowUpRight, Clock } from "lucide-react";
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
      <main ref={scopeRef} className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <div className="pt-36 pb-24 sm:pb-36 px-6 sm:px-12 max-w-[1700px] mx-auto space-y-20">
          {/* Header */}
          <div className="gsap-blog-title space-y-6 border-b border-white/10 pb-16">
            <span className="text-meta text-[#00f0ff] uppercase tracking-widest block">
              // THOUGHT LEADERSHIP & ARTICLES
            </span>
            <h1 className="text-hero font-outfit text-white tracking-tighter uppercase leading-[0.9]">
              THE DIGITAL <span className="text-[#00f0ff]">JOURNAL</span>
            </h1>
            <p className="text-base sm:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              Insights on Google Search PPC, Technical SEO audits, paid social conversion rates, and brand positioning strategies.
            </p>
          </div>

          {/* Article Grid */}
          <div className="gsap-blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="gsap-blog-card group p-8 rounded-3xl bg-surface border border-white/10 flex flex-col justify-between space-y-8 hover:border-[#00f0ff] transition-all duration-500"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-white/40">
                    <span className="text-[#00f0ff] font-bold">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-outfit font-extrabold text-white group-hover:text-[#00f0ff] transition-colors uppercase leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-white/20"
                    />
                    <div className="text-[10px] font-mono">
                      <span className="text-white font-bold block">{post.author.name}</span>
                      <span className="text-white/40">{post.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-2.5 rounded-full border border-white/10 group-hover:border-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black text-white transition-colors"
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
