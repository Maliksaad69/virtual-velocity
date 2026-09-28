import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services Pakistan | SEO, PPC & Branding Islamabad",
  description: "Explore Virtual Velocity's performance marketing services in Pakistan: Google Ads PPC, Technical SEO Islamabad, Meta Advertising, Social Media Management, Branding, Photography, Videography & Software Development.",
  keywords: [
    "Digital Marketing Services Pakistan",
    "SEO Services Islamabad",
    "Google Ads PPC Pakistan",
    "Social Media Marketing Pakistan",
    "Branding Agency Pakistan",
    "Software Development Islamabad"
  ],
  openGraph: {
    title: "Digital Marketing Services & Growth Capabilities | Virtual Velocity Pakistan",
    description: "Full-service digital marketing, PPC, SEO, CRO, Branding and Custom Software Engineering in Pakistan.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
