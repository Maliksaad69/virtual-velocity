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
  metadataBase: new URL("https://www.thevirtualvelocity.com"),
  alternates: {
    canonical: "https://www.thevirtualvelocity.com",
  },
  title: {
    default: "Virtual Velocity | Best Digital Marketing & Growth Agency Pakistan",
    template: "%s | Virtual Velocity Agency Pakistan",
  },
  description:
    "Virtual Velocity is Pakistan's premier full-service digital marketing, performance ads, branding & web app development agency in Islamabad & Rawalpindi. Scale revenue with Google Ads, Technical SEO, Meta Ads, and proprietary media communities (Rawalpindians, Islamabad Insider, Sirf Chai).",
  keywords: [
    "Digital Marketing Agency Pakistan",
    "Best Digital Marketing Agency Islamabad",
    "Performance Marketing Agency Rawalpindi",
    "Social Media Marketing Agency Pakistan",
    "SEO Agency Islamabad Pakistan",
    "Top Marketing Agency Pakistan",
    "Branding & Creative Agency Pakistan",
    "Digital Media Agency Islamabad",
    "Meta Ads Specialist Pakistan",
    "Google Ads Agency Pakistan",
    "Web Development Agency Pakistan",
    "E-commerce PPC Growth Pakistan",
    "B2B Performance Marketing Pakistan",
    "Rawalpindians Community Marketing",
    "Islamabad Insider Media",
    "Sirf Chai Digital Network",
    "Virtual Velocity Agency",
    "Tauseef Alam Founder Virtual Velocity"
  ],
  authors: [{ name: "Tauseef Alam & Virtual Velocity Team", url: "https://thevirtualvelocity.com" }],
  creator: "Virtual Velocity",
  publisher: "Virtual Velocity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Virtual Velocity | Top Digital Marketing Agency Islamabad Pakistan",
    description:
      "Scale your brand in Pakistan and global markets with ROI-driven Google Ads PPC, Technical SEO, Social Media Marketing, and Proprietary Media Channels.",
    url: "https://thevirtualvelocity.com",
    siteName: "Virtual Velocity Digital Agency Pakistan",
    images: [
      {
        url: "/VV png.png",
        width: 1200,
        height: 630,
        alt: "Virtual Velocity Digital Marketing Agency Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Velocity | Digital Marketing Agency Pakistan",
    description:
      "Pakistan's leading digital media house & performance marketing agency. Google Ads, Meta Ads, SEO, and Brand Development in Islamabad & Rawalpindi.",
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
      "@id": "https://thevirtualvelocity.com/#organization",
      "name": "Virtual Velocity",
      "founder": {
        "@type": "Person",
        "name": "Tauseef Alam",
        "jobTitle": "Founder & Creative Director",
        "sameAs": [
          "https://www.linkedin.com/in/tauseefalam/"
        ]
      },
      "url": "https://thevirtualvelocity.com",
      "logo": "https://thevirtualvelocity.com/VV%20png.png",
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
          "telephone": "+923325296693",
          "contactType": "customer service",
          "email": "info@thevirtualvelocity.com",
          "areaServed": ["Pakistan", "United States", "United Kingdom", "Worldwide"],
          "availableLanguage": ["English", "Urdu"]
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://thevirtualvelocity.com/#service",
      "name": "Virtual Velocity Digital Marketing Agency Pakistan",
      "url": "https://thevirtualvelocity.com",
      "image": "https://thevirtualvelocity.com/VV%20png.png",
      "priceRange": "$$$",
      "founder": {
        "@type": "Person",
        "name": "Tauseef Alam"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Pakistan"
        },
        {
          "@type": "City",
          "name": "Islamabad"
        },
        {
          "@type": "City",
          "name": "Rawalpindi"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Rawalpindi",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "GB"
        }
      ],
      "description":
        "Pakistan's premier digital marketing & media agency specializing in Google Ads PPC, Technical SEO, Social Media Campaigns, Branding, and Proprietary Media Channels (Rawalpindians, Islamabad Insider, Sirf Chai)."
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://www.thevirtualvelocity.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-inter relative" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
