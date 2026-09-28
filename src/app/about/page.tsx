import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Virtual Velocity Pakistan | Founded by Tauseef Alam",
  description: "Virtual Velocity is Pakistan's premier digital media house & marketing agency founded by Tauseef Alam (12+ years experience, founder of Rawalpindians, Islamabad Insider, Sirf Chai). Operational hubs in Islamabad, Pakistan, US & UK.",
  keywords: [
    "About Virtual Velocity Pakistan",
    "Tauseef Alam Virtual Velocity",
    "Digital Media Agency Islamabad",
    "Creative Agency Rawalpindi",
    "Rawalpindians Founder Tauseef Alam",
    "Islamabad Insider Media Agency"
  ],
  openGraph: {
    title: "About Virtual Velocity | Digital Marketing Agency Pakistan & Global Hubs",
    description: "Learn about Virtual Velocity's manifesto, founder Tauseef Alam, and operational hubs in Islamabad, Pakistan, US & UK.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}