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
  title: "YouTube Shorts Downloader — Free, HD, No Watermark",
  description:
    "Download YouTube Shorts as MP4 in HD, free — paste a Shorts link and save it in seconds, no sign-up, no software.",
  alternates: { canonical: "/youtube-shorts-downloader" },
  openGraph: {
    title: "YouTube Shorts Downloader — Free, HD",
    description: "Paste a YouTube Shorts link and download the MP4, free.",
    url: "https://www.savefromnet.fun/youtube-shorts-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a YouTube Short?",
    a: "Paste the Short's URL above and click Get Video. You'll see a preview, then quality buttons to download the MP4.",
  },
  {
    q: "Is the same tool used for regular YouTube videos and Shorts?",
    a: "Yes — a Short is just a YouTube video at a /shorts/ URL, so the same downloader handles both without any separate mode.",
  },
  {
    q: "Can I download just the audio from a Short?",
    a: "Yes — an Audio (MP3) button appears alongside the video quality options when available.",
  },
  {
    q: "What quality can I expect?",
    a: "Shorts are usually uploaded vertically at up to 1080x1920 — you'll see whatever resolutions the specific Short actually has, not a generic fixed list.",
  },
  {
    q: "Does this work on private videos?",
    a: "No, only public Shorts that don't require sign-in can be downloaded.",
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
      name: "YouTube Shorts Downloader",
      item: "https://www.savefromnet.fun/youtube-shorts-downloader",
    },
  ],
};

export default function YouTubeShortsDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · HD"
        title="YouTube Shorts Downloader"
        subtitle="Paste a YouTube Shorts link and download it as an MP4 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a YouTube Short"
        paragraphs={[
          "Shorts don't have a native download button, whether you're watching in the app or the browser. Saving one for offline use needs a separate tool, just like a regular YouTube video.",
        ]}
        listTitle="Steps"
        list={[
          "Open the Short and copy its link from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Pick a quality (or Audio for MP3) to download it.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="YouTube Shorts Downloader FAQ"
        description="Common questions about downloading YouTube Shorts."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need a regular YouTube video instead? Try the{" "}
          <Link href="/youtube-video-downloader" className="text-green-600 underline">
            YouTube Video Downloader
          </Link>
          , or read our full guide on{" "}
          <Link href="/blog/how-to-download-youtube-shorts" className="text-green-600 underline">
            how to download YouTube Shorts
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Ready to Download a YouTube Short?"
        description="Paste any public YouTube Shorts link and save it as MP4 in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
