import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thevirtualvelocity.com"),
  alternates: {
    canonical: "https://www.thevirtualvelocity.com/contact",
  },
  title: "Contact Virtual Velocity | Digital Marketing & BPO Agency",
  description: "Get in touch with Virtual Velocity — premier Digital Marketing Agency, BPO Services Provider, Hotel & Restaurant Marketing Agency, and Performance Marketing Agency in Islamabad (+92 332 529 6693), US & UK.",
  keywords: [
    "Digital Marketing Agency Pakistan",
    "Digital Marketing Agency Islamabad",
    "Digital Marketing Company",
    "BPO Services Pakistan",
    "Customer Support Outsourcing",
    "Hospitality Marketing Agency",
    "Restaurant Marketing Agency",
    "Performance Marketing Agency",
    "Meta Ads Agency",
    "Google Ads Agency",
    "Lead Generation Agency",
    "Virtual Velocity Contact",
  ],
  openGraph: {
    title: "Contact & Strategy Session | Virtual Velocity Agency Pakistan",
    description: "Connect with our marketing specialists in Islamabad, US, and UK for Digital Marketing, BPO, Hotel, and Restaurant growth.",
    url: "https://www.thevirtualvelocity.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}