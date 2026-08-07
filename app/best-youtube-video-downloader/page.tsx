import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import YouTubeVideoForm from "@/components/YouTubeVideoForm";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best YouTube Video Downloader (2026) — Free, No Ads",
  description:
    "What actually makes a YouTube downloader good, and why SaveFromNet's is built to avoid the redirect pop-ups and fake download buttons common on older tools.",
  alternates: { canonical: "/best-youtube-video-downloader" },
  openGraph: {
    title: "Best YouTube Video Downloader (2026)",
    description: "What to look for, and why SaveFromNet keeps it simple.",
    url: "https://www.savefromnet.fun/best-youtube-video-downloader",
    type: "website",
  },
};

const criteria = [
  {
    title: "No forced redirects or pop-ups",
    description: "Click download and get the file — not three ad tabs first.",
  },
  {
    title: "Real quality options",
    description: "Buttons for resolutions that actually exist for that specific video, not a fixed list that fails half the time.",
  },
  {
    title: "Audio-only option",
    description: "A dedicated MP3 button, not a separate site or app.",
  },
  {
    title: "No account required",
    description: "Paste a link and go — no sign-up wall before you can download anything.",
  },
  {
    title: "Works on mobile",
    description: "No desktop-only software or browser extension requirement.",
  },
];

const faqs = [
  {
    q: "What makes a YouTube downloader \"good\" vs. a scam?",
    a: "Legitimate tools show a real preview (title, thumbnail, duration) before you download, and the download button goes straight to a file — not a chain of ad redirects or a fake \"Download\" button that's actually an ad.",
  },
  {
    q: "Why do some YouTube downloaders feel unreliable?",
    a: "Many older tools list quality options that don't actually exist for a given video, so the download fails or silently falls back to a lower quality. Showing only qualities the video genuinely has avoids that.",
  },
  {
    q: "Is SaveFromNet completely free?",
    a: "Yes — no sign-up, no subscription, no per-download limits.",
  },
  {
    q: "Does it work for YouTube Shorts?",
    a: "Yes, as long as the video is public.",
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
      name: "Best YouTube Video Downloader",
      item: "https://www.savefromnet.fun/best-youtube-video-downloader",
    },
  ],
};

export default function BestYouTubeVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Ads · No Sign-Up"
        title="Best YouTube Video Downloader"
        subtitle="What actually separates a good downloader from a frustrating one — and a tool built around those points."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            What to Look For in a YouTube Downloader
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A lot of YouTube downloader sites look similar at a glance. The
            real differences show up once you actually try to download
            something.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {criteria.map((c) => (
              <div key={c.title} className="flex gap-3 rounded-2xl border border-slate-200 p-5">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Other Downloaders You've Probably Seen
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Names like Y2mate and SaveFrom.net (unaffiliated with this site,
            despite the similar name) come up constantly in search results
            for this keyword. They generally work, but tend to carry more ad
            load and redirect-style navigation than a purpose-built,
            single-page tool. See our{" "}
            <Link href="/compare/y2mate" className="text-green-600 underline">
              SaveFromNet vs Y2mate comparison
            </Link>{" "}
            for specifics.
          </p>
        </div>
      </section>

      <Citations />

      <FAQ
        faqs={faqs}
        title="FAQ"
        description="Common questions about choosing a YouTube downloader."
      />

      <CTA
        heading="Try It on Your Next Video"
        description="Paste any public YouTube link above and see the difference."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
