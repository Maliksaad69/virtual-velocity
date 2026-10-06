import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thevirtualvelocity.com"),
  alternates: {
    canonical: "https://www.thevirtualvelocity.com/about",
  },
  title: "About Virtual Velocity | Premier Digital Marketing & BPO Agency",
  description: "Learn about Virtual Velocity, Pakistan's premier Digital Marketing Agency & BPO provider founded by Tauseef Alam in Islamabad.",
  keywords: [
    "Digital Marketing Agency Pakistan",
    "Digital Marketing Agency Islamabad",
    "Digital Marketing Company",
    "BPO Services Pakistan",
    "Outsourcing Company Pakistan",
    "Hospitality Marketing Agency",
    "Restaurant Marketing Agency",
    "Performance Marketing Agency",
    "Tauseef Alam Virtual Velocity",
    "Rawalpindians Founder Tauseef Alam",
    "Islamabad Insider Media Agency",
  ],
  openGraph: {
    title: "About Virtual Velocity | Digital Marketing Agency Pakistan & Global Hubs",
    description: "Learn about Virtual Velocity's manifesto, founder Tauseef Alam, and operational hubs in Islamabad, US, and UK.",
    url: "https://www.thevirtualvelocity.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}