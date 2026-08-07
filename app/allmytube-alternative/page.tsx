import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import YouTubeVideoForm from "@/components/YouTubeVideoForm";
import ContentBlock from "@/components/ContentBlock";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AllMyTube Alternative — Free, No Purchase Needed",
  description:
    "Looking for a free Wondershare AllMyTube alternative? Download YouTube video and audio without buying a license.",
  alternates: { canonical: "/allmytube-alternative" },
  openGraph: {
    title: "AllMyTube Alternative — Free",
    description: "A free way to download YouTube video and audio.",
    url: "https://www.savefromnet.fun/allmytube-alternative",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why look for an AllMyTube alternative?",
    a: "Wondershare AllMyTube is a paid desktop application — free trials are typically limited, with a paid license needed for full use. SaveFromNet is free with no purchase and no license to manage.",
  },
  {
    q: "Is SaveFromNet affiliated with Wondershare?",
    a: "No — it's an independent, unaffiliated web-based tool.",
  },
  {
    q: "Do I need to install anything?",
    a: "No — it runs entirely in your browser, no desktop software required.",
  },
  {
    q: "Is it really free, with no trial limits?",
    a: "Yes — no sign-up, no subscription, no per-download limits.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.savefromnet.fun" },
    {
      "@type": "ListItem",
      position: 2,
      name: "AllMyTube Alternative",
      item: "https://www.savefromnet.fun/allmytube-alternative",
    },
  ],
};

export default function AllMyTubeAlternativePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No License · No Install"
        title="AllMyTube Alternative"
        subtitle="Download YouTube video and audio for free — no purchase, no license, no install."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="Free, Without the License"
        paragraphs={[
          "Wondershare AllMyTube is a capable desktop tool, but it's paid software — a free trial gets you limited use before a license purchase is needed. For downloading a video now and then, that's a lot of commitment.",
          "SaveFromNet does the core job — download YouTube video or audio — for free, from any browser, with nothing to buy.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="AllMyTube Alternative FAQ"
        description="Common questions about switching from AllMyTube."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          See the{" "}
          <Link href="/clipgrab-alternative" className="text-green-600 underline">
            ClipGrab Alternative
          </Link>{" "}
          too, or check the{" "}
          <Link href="/best-youtube-video-downloader" className="text-green-600 underline">
            Best YouTube Video Downloader
          </Link>{" "}
          breakdown.
        </div>
      </section>

      <CTA
        heading="Try It Free, No License Needed"
        description="Paste any public YouTube link above and download it, free."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
