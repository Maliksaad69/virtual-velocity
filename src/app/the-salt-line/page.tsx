import type { Metadata } from "next";
import { SaltLineClient } from "./SaltLineClient";

export const metadata: Metadata = {
  title: "The Salt Line Hospitality & Organic Growth Case Study | Virtual Velocity",
  description:
    "Discover how Virtual Velocity took The Salt Line from 0 digital presence to 1.3M+ organic reach, 9,300+ followers, and sold-out weekend Qawwali nights in F9 Park Islamabad with $0 paid ad spend.",
  keywords: [
    "The Salt Line Case Study",
    "Hospitality Digital Marketing",
    "Restaurant Social Media Growth",
    "Organic Content Strategy",
    "Viral Reels Case Study",
    "Qawwali Night Marketing",
    "F9 Park Islamabad Restaurant",
    "Virtual Velocity Case Studies",
  ],
  openGraph: {
    title: "The Salt Line — Organic Growth & Community Case Study | Virtual Velocity",
    description:
      "Good food. Great music. Real people. How storytelling turned weekend Qawwali nights into a sold-out culinary and cultural destination in Islamabad.",
    url: "https://virtualvelocity.agency/the-salt-line",
    siteName: "Virtual Velocity Digital Agency",
    images: [
      {
        url: "https://res.cloudinary.com/nudghwmz/image/upload/v1790186939/1.png",
        width: 1920,
        height: 1080,
        alt: "The Salt Line Case Study - Virtual Velocity",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Salt Line Case Study | Virtual Velocity",
    description:
      "1.3M+ organic reach and 0 to 9,341 followers in 3-4 months with zero ad budget.",
    images: ["https://res.cloudinary.com/nudghwmz/image/upload/v1790186939/1.png"],
  },
};

export default function SaltLinePage() {
  return <SaltLineClient />;
}
