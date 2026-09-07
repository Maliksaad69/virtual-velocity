import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Digital Journal & Thought Leadership",
  description: "Insights on Google Search PPC, Technical SEO audits, paid social conversion rates, and brand positioning strategies.",
  openGraph: {
    title: "Digital Journal & Growth Articles | Virtual Velocity",
    description: "Read performance marketing insights and technical growth guides from Virtual Velocity.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
