import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thevirtualvelocity.com"),
  alternates: {
    canonical: "https://www.thevirtualvelocity.com/services",
  },
  title: "Digital Marketing Services, BPO, Hotel & Restaurant Marketing",
  description:
    "Explore Virtual Velocity's complete agency capabilities: Digital Marketing Services, BPO Services Pakistan, Hospitality Marketing Agency, Hotel SEO, Restaurant Marketing Agency, Meta Ads Agency, and Google Ads Agency in Islamabad & worldwide.",
  keywords: [
    "Digital Marketing Agency",
    "Digital Marketing Company",
    "Digital Marketing Services",
    "Digital Marketing Agency Pakistan",
    "Digital Marketing Agency Islamabad",
    "BPO Services",
    "BPO Services Pakistan",
    "Outsourcing Company Pakistan",
    "Outsourcing Services Pakistan",
    "Business Outsourcing Services",
    "Customer Service Outsourcing",
    "Customer Support Outsourcing",
    "Call Center Outsourcing Pakistan",
    "Hospitality Marketing Agency",
    "Hotel Marketing Agency",
    "Hotel Social Media Marketing",
    "Hospitality Digital Marketing",
    "Hotel Advertising Agency",
    "Hotel SEO Services",
    "Restaurant Marketing Agency",
    "Restaurant Digital Marketing",
    "Restaurant Social Media Marketing",
    "Restaurant Advertising Agency",
    "Restaurant Marketing Services",
    "Restaurant SEO Services",
    "Restaurant Lead Generation",
    "Performance Marketing Agency",
    "Performance Marketing Services",
    "Paid Advertising Agency",
    "Meta Ads Agency",
    "Google Ads Agency",
    "Lead Generation Agency",
  ],
  openGraph: {
    title: "Digital Marketing Services, BPO & Performance Agency | Virtual Velocity",
    description:
      "Comprehensive Digital Marketing Services, BPO Services Pakistan, Hotel Marketing Agency growth, Restaurant Lead Generation, and high-ROAS Performance Marketing.",
    url: "https://www.thevirtualvelocity.com/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Virtual Velocity Agency Services Catalog",
  "description": "Enterprise Digital Marketing, BPO Services, Hospitality Marketing, Restaurant Lead Generation, and Performance Advertising.",
  "url": "https://www.thevirtualvelocity.com/services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Digital Marketing Services",
      "description": "Full-service Digital Marketing Company in Pakistan & Islamabad."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "BPO & Outsourcing Services",
      "description": "BPO Services Pakistan, Customer Support Outsourcing, Customer Service Outsourcing, & Call Center Outsourcing Pakistan."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Hospitality & Hotel Marketing",
      "description": "Hospitality Marketing Agency, Hotel Marketing Agency, Hotel Social Media Marketing, Hotel Advertising, & Hotel SEO Services."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Restaurant Marketing & Lead Generation",
      "description": "Restaurant Marketing Agency, Restaurant Digital Marketing, Restaurant Social Media, Restaurant SEO Services, & Restaurant Lead Generation."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Performance Marketing & Paid Advertising",
      "description": "Performance Marketing Agency, Meta Ads Agency, Google Ads Agency, Paid Advertising Agency, & Lead Generation Agency."
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
