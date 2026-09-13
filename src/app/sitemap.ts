import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/agencyData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://virtualvelocity.agency";

  const routes = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/services",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
