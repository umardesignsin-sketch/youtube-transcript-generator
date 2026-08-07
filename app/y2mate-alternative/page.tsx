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
  title: "Y2mate Alternative — Free YouTube Downloader, Less Ads",
  description:
    "Looking for a Y2mate alternative? SaveFromNet downloads YouTube video and audio from one ad-light page, with no redirect pop-ups.",
  alternates: { canonical: "/y2mate-alternative" },
  openGraph: {
    title: "Y2mate Alternative — Free YouTube Downloader",
    description: "A simpler way to download YouTube video and audio.",
    url: "https://www.savefromnet.fun/y2mate-alternative",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why look for a Y2mate alternative?",
    a: "Y2mate works, but its mirror domains are known for heavy ad load and redirect pop-ups that can make the actual download button hard to find. SaveFromNet is a single ad-light page with direct quality buttons.",
  },
  {
    q: "Is SaveFromNet affiliated with Y2mate?",
    a: "No — it's an independent, unaffiliated tool built from scratch.",
  },
  {
    q: "Can I download both video and audio here?",
    a: "Yes — quality buttons for MP4 video plus a dedicated Audio (MP3) button appear on the same preview.",
  },
  {
    q: "Is it free and sign-up-free?",
    a: "Yes, completely free with no account required.",
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
      name: "Y2mate Alternative",
      item: "https://www.savefromnet.fun/y2mate-alternative",
    },
  ],
};

export default function Y2mateAlternativePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · Less Ads"
        title="Y2mate Alternative"
        subtitle="Download YouTube video and audio from one simple page — no redirect pop-ups, no mirror domains."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="A Simpler Way to Download YouTube"
        paragraphs={[
          "Y2mate has been around a long time and generally gets the job done, but its many mirror domains are known for aggressive ad placement — pop-ups, fake download buttons, and redirect chains before you reach a real file.",
          "SaveFromNet is a single page: paste a link, see a preview with the actual title and duration, pick a quality or grab the audio as MP3. No redirects in between.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="Y2mate Alternative FAQ"
        description="Common questions about switching from Y2mate."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          See the full{" "}
          <Link href="/compare/y2mate" className="text-green-600 underline">
            SaveFromNet vs Y2mate comparison
          </Link>
          , or check out the{" "}
          <Link href="/best-youtube-video-downloader" className="text-green-600 underline">
            Best YouTube Video Downloader
          </Link>{" "}
          breakdown.
        </div>
      </section>

      <CTA
        heading="Try a Cleaner Way to Download"
        description="Paste any public YouTube link above and see the difference."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
