import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Studio & Manifesto",
  description: "Virtual Velocity is a full-service digital marketing & creative strategy agency scaling client revenue across global hubs.",
  openGraph: {
    title: "About Virtual Velocity | Performance Marketing Agency",
    description: "Learn about Virtual Velocity's manifesto, leadership team, and global operational hubs in the US & PK.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}