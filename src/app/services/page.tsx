import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Capabilities | Virtual Velocity",
  description: "Explore Virtual Velocity's performance marketing, custom web engineering, technical SEO, and brand creative services built to scale business revenue.",
  openGraph: {
    title: "Services & Capabilities | Virtual Velocity Agency",
    description: "Full-service performance marketing, PPC, SEO, CRO, and custom e-commerce engineering services.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
