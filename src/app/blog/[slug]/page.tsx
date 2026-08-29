import { BLOG_POSTS } from "@/data/agencyData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#08080a] text-[#f4f4f2] relative">
        <CustomCursor />
        <Navigation />

        <article className="pt-36 pb-24 px-6 sm:px-12 max-w-4xl mx-auto space-y-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-[#00f0ff] transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO JOURNAL</span>
          </Link>

          <div className="space-y-6 border-b border-white/10 pb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40">
              <span className="text-[#00f0ff] font-bold">{post.category}</span>
              <span>// {post.date}</span>
              <span>// {post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-outfit font-black text-white uppercase tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 pt-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <span className="text-white font-outfit font-bold uppercase text-base block">
                  {post.author.name}
                </span>
                <span className="text-xs font-mono text-white/40">{post.author.role}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-base sm:text-xl text-white/80 font-light leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
