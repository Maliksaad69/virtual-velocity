import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Outfit for headings – premium grotesk
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "900"],
});

// Inter for body copy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "900"],
});

export const viewport: Viewport = {
  themeColor: "#00aeac",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualvelocity.agency"),
  title: {
    default: "Virtual Velocity | Digital Marketing & Growth Agency",
    template: "%s | Virtual Velocity Agency",
  },
  description:
    "Virtual Velocity is a full-service performance marketing & tech agency scaling client revenue through Google Ads PPC, Technical SEO, Paid Social, CRO, and custom Web Development.",
  keywords: [
    "Digital Marketing Agency",
    "Google Ads PPC Agency",
    "Technical SEO Agency",
    "Conversion Rate Optimization",
    "CRO Agency",
    "Paid Social Media Ads",
    "E-commerce PPC Growth",
    "B2B Performance Marketing",
    "Web App Development",
    "Virtual Velocity Agency",
  ],
  authors: [{ name: "Virtual Velocity Team", url: "https://virtualvelocity.agency" }],
  creator: "Virtual Velocity",
  publisher: "Virtual Velocity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Virtual Velocity | Digital Marketing & Growth Agency",
    description:
      "Scale your brand revenue with ROI-driven Google Ads PPC, Technical SEO, Paid Social, and Conversion Rate Optimization.",
    url: "https://virtualvelocity.agency",
    siteName: "Virtual Velocity Digital Agency",
    images: [
      {
        url: "/VV png.png",
        width: 1200,
        height: 630,
        alt: "Virtual Velocity Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Velocity | Digital Marketing & Growth Agency",
    description:
      "Scale your brand revenue with ROI-driven Google Ads PPC, Technical SEO, and Growth Solutions.",
    images: ["/VV png.png"],
    creator: "@virtualvelocity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/VV png.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://virtualvelocity.agency/#organization",
      "name": "Virtual Velocity",
      "founder": {
        "@type": "Person",
        "name": "Tauseef Alam"
      },
      "url": "https://virtualvelocity.agency",
      "logo": "https://virtualvelocity.agency/VV%20png.png",
      "sameAs": [
        "https://www.linkedin.com/company/virtualvelocitypk/",
        "https://www.facebook.com/virtualvelocitypk/",
        "https://www.instagram.com/virtualvelocity_/",
        "https://www.tiktok.com/@virtualvelocitypk",
        "https://www.pinterest.com/thevirtualvelocity/",
        "https://www.behance.net/thevirtualvelocity"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1 (800) 555-0199",
          "contactType": "customer service",
          "email": "us@virtualvelocity.agency",
          "availableLanguage": "English"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://virtualvelocity.agency/#service",
      "name": "Virtual Velocity Digital Marketing Agency",
      "url": "https://virtualvelocity.agency",
      "image": "https://virtualvelocity.agency/VV%20png.png",
      "priceRange": "$$$",
      "founder": {
        "@type": "Person",
        "name": "Tauseef Alam"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "1209 NORTH ORANGE ST, SUITE 400",
          "addressLocality": "WILMINGTON",
          "addressRegion": "DE",
          "postalCode": "19801",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "COMMERCIAL ZONE, PHASE 5 DHA",
          "addressLocality": "LAHORE",
          "addressRegion": "PUNJAB",
          "postalCode": "54000",
          "addressCountry": "PK"
        }
      ],
      "description":
        "Full-service digital marketing agency scaling client revenue through Google Ads PPC, Technical SEO, Paid Social, and Conversion Rate Optimization."
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-inter relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
