import type { Metadata } from "next";
import { BrandingClient } from "./BrandingClient";

export const metadata: Metadata = {
  title: "Cresto Pizza Brand Identity & Packaging Case Study | Virtual Velocity",
  description:
    "Explore how Virtual Velocity crafted an end-to-end brand identity, 3D architectural signage, custom packaging ecosystem, and viral social campaigns for Cresto Pizza.",
  keywords: [
    "Cresto Pizza Branding",
    "Brand Identity Design",
    "Packaging Design Case Study",
    "Food and Beverage Branding",
    "Architectural Signage",
    "Virtual Velocity Portfolio",
    "Restaurant Brand Strategy",
    "Social Media Direction",
  ],
  openGraph: {
    title: "Cresto Pizza Brand Identity & Packaging | Virtual Velocity Agency",
    description:
      "A modern slice of tradition. Complete visual identity, custom packaging, 3D signage, and digital campaigns crafted by Virtual Velocity.",
    url: "https://virtualvelocity.agency/branding",
    siteName: "Virtual Velocity Digital Agency",
    images: [
      {
        url: "https://res.cloudinary.com/nudghwmz/image/upload/v1790005642/Artboard_1.png",
        width: 1596,
        height: 897,
        alt: "Cresto Pizza Brand Identity Mockup",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cresto Pizza Brand Identity Case Study | Virtual Velocity",
    description:
      "Modern culinary branding, custom packaging engineering, and architectural signage for Cresto Pizza.",
    images: ["https://res.cloudinary.com/nudghwmz/image/upload/v1790005642/Artboard_1.png"],
  },
};

export default function BrandingPage() {
  return <BrandingClient />;
}
