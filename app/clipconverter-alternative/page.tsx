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
  title: "ClipConverter Alternative — Free YouTube Downloader",
  description:
    "Looking for a ClipConverter alternative? Download YouTube video and audio from one simple, ad-light page — free, no sign-up.",
  alternates: { canonical: "/clipconverter-alternative" },
  openGraph: {
    title: "ClipConverter Alternative — Free",
    description: "A simpler way to download YouTube video and audio.",
    url: "https://www.savefromnet.fun/clipconverter-alternative",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why look for a ClipConverter alternative?",
    a: "Older converter sites tend to carry more ads and redirect steps between pasting a link and getting an actual file. SaveFromNet keeps that down to one page: paste, preview, download.",
  },
  {
    q: "Is SaveFromNet affiliated with ClipConverter?",
    a: "No — it's an independent, unaffiliated tool.",
  },
  {
    q: "Can I convert to both MP4 and MP3?",
    a: "Yes — video quality buttons and a dedicated Audio (MP3) button both appear on the same preview.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free with no sign-up required.",
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
      name: "ClipConverter Alternative",
      item: "https://www.savefromnet.fun/clipconverter-alternative",
    },
  ],
};

export default function ClipConverterAlternativePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · Less Ads"
        title="ClipConverter Alternative"
        subtitle="Download YouTube video and audio from one simple page — free, no sign-up, no redirect chains."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="A Simpler Conversion Flow"
        paragraphs={[
          "Converter sites that have been around a long time tend to accumulate more ad placements over the years. SaveFromNet is built the other way around: one page, a real preview with the actual title and duration, and quality buttons that go straight to a file.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="ClipConverter Alternative FAQ"
        description="Common questions about switching from ClipConverter."
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
        heading="Try a Cleaner Way to Convert"
        description="Paste any public YouTube link above and see the difference."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
