import type { Metadata } from "next";
import { OwnedMediaClient } from "./OwnedMediaClient";

export const metadata: Metadata = {
  title: "Owned Media Network Pakistan | Rawalpindians, Islamabad Insider & Sirf Chai",
  description:
    "Virtual Velocity's proprietary media network in Pakistan: 1M+ organic reach across Rawalpindians (450K+), Islamabad Insider (380K+), Sirf Chai (200K+), driving viral regional reach, youth culture, and high-affinity brand placement.",
  keywords: [
    "Rawalpindians Community Pakistan",
    "Islamabad Insider Media Network",
    "Sirf Chai Digital Platform",
    "Digital Media Network Pakistan",
    "Social Media Communities Islamabad Rawalpindi",
    "Viral Media Channels Pakistan"
  ],
  openGraph: {
    title: "Proprietary Media Network Pakistan | Virtual Velocity",
    description:
      "1M+ direct organic reach across Rawalpindians, Islamabad Insider, and Sirf Chai — premier digital communities in Pakistan.",
  },
};

export default function OwnedMediaPage() {
  return <OwnedMediaClient />;
}
