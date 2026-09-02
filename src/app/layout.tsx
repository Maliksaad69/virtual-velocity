import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Virtual Velocity | Digital Marketing & Growth Agency",
  description: "Full-service digital marketing agency scaling business revenue through Google Ads PPC, Technical SEO, Social Media, and CRO.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-inter relative" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
