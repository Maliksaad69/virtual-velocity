import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Digital Marketing Agency Islamabad Pakistan | Virtual Velocity",
  description: "Get in touch with Virtual Velocity's marketing strategists in Islamabad, Pakistan (+92 332 529 6693), US & UK. Guaranteed 12-hour proposal response time for SEO, PPC, Social Media & Web Development campaigns.",
  keywords: [
    "Contact Digital Marketing Agency Pakistan",
    "Digital Agency Islamabad Contact",
    "Marketing Agency Rawalpindi Phone Number",
    "Virtual Velocity Islamabad Office"
  ],
  openGraph: {
    title: "Contact & Proposal Inquiry | Virtual Velocity Pakistan",
    description: "Get in touch with our marketing strategists in Islamabad, Pakistan, US & UK.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}