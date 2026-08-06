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
  title: "YouTube to MP4 — Free Converter & Downloader",
  description:
    "Convert and download any public YouTube video to MP4, free — multiple quality options, no sign-up, no software.",
  alternates: { canonical: "/youtube-to-mp4" },
  openGraph: {
    title: "YouTube to MP4 — Free Converter & Downloader",
    description: "Paste a YouTube link and get an MP4 file, free.",
    url: "https://www.savefromnet.fun/youtube-to-mp4",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I convert a YouTube video to MP4?",
    a: "Paste the video's URL above and click Get Video. You'll see a preview with quality buttons — click one to download the video as an MP4 file.",
  },
  {
    q: "Is the output always MP4?",
    a: "Yes, video downloads are delivered as standard MP4 files, playable on virtually any device or media player.",
  },
  {
    q: "What quality options are available?",
    a: "Whatever resolutions the source video actually has — typically up to 1080p. Only qualities that genuinely exist for that specific video are shown.",
  },
  {
    q: "Is there a video length limit?",
    a: "Yes, videos over 1 hour aren't supported, to keep conversion fast and reliable for everyone.",
  },
  {
    q: "Does this work on private or age-restricted videos?",
    a: "No, only public videos that don't require sign-in can be converted.",
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
      name: "YouTube to MP4",
      item: "https://www.savefromnet.fun/youtube-to-mp4",
    },
  ],
};

export default function YouTubeToMp4Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · MP4"
        title="YouTube to MP4"
        subtitle="Paste a YouTube link and convert it to an MP4 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="How to Convert YouTube to MP4"
        paragraphs={[
          "MP4 is the most widely supported video format, playable on phones, TVs, media players and every major operating system without extra codecs. Converting a YouTube video to MP4 makes it easy to save for offline viewing.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the video's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Pick a quality to download the MP4 file.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="YouTube to MP4 FAQ"
        description="Common questions about converting YouTube videos to MP4."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Only need the audio? Try the{" "}
          <Link href="/youtube-audio-downloader" className="text-green-600 underline">
            YouTube Audio Downloader
          </Link>
          , or get a{" "}
          <Link href="/youtube-to-transcript" className="text-green-600 underline">
            YouTube Transcript
          </Link>{" "}
          for the text instead.
        </div>
      </section>

      <CTA
        heading="Ready to Convert YouTube to MP4?"
        description="Paste any public YouTube link and save it as MP4 in seconds."
        buttonLabel="Convert Now ↑"
        href="#"
      />
    </main>
  );
}
