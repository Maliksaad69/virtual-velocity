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
  title: "Digital Agency",
  description: "Award‑winning creative studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-inter" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
