import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/agencyData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thevirtualvelocity.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/branding",
    "/the-salt-line",
    "/owned-media",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : route === "/services" || route === "/branding" ? 0.9 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
