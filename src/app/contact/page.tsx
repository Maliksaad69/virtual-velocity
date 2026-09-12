import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Initiate Campaign",
  description: "Schedule a digital marketing consultation or propose a campaign with Virtual Velocity. Guaranteed 12-hour response time.",
  openGraph: {
    title: "Contact & Proposal Inquiry | Virtual Velocity",
    description: "Get in touch with our marketing strategists in Wilmington, DE and Lahore, PK.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}