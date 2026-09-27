import type { Metadata } from "next";
import { OwnedMediaClient } from "./OwnedMediaClient";

export const metadata: Metadata = {
  title: "Owned Media Network | Virtual Velocity",
  description:
    "Virtual Velocity's in-house owned media network: 2.95M+ direct organic reach across 7 owned portals driving urban youth culture, viral regional reach, and high-affinity demographic resonance.",
  openGraph: {
    title: "Owned Media Network | Virtual Velocity",
    description:
      "2.95M+ direct reach across 7 in-house owned media portals — audited live Q2 2025, zero synthetic bots.",
  },
};

export default function OwnedMediaPage() {
  return <OwnedMediaClient />;
}
