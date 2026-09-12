import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Hiring Openings",
  description: "Join Virtual Velocity. We are hiring Next.js developers, SEO specialists, UI/UX designers, and WebGL engineers in Wilmington, DE and Lahore, PK.",
  openGraph: {
    title: "Careers & Open Positions | Virtual Velocity",
    description: "Explore career opportunities across software engineering, digital marketing, and UI/UX design.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
