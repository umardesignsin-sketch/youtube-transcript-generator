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
  title: "YouTube to MP3 — Free Converter, No Sign-Up",
  description:
    "Convert any public YouTube video to MP3 audio, free — paste a link and download in seconds, no sign-up, no software.",
  alternates: { canonical: "/youtube-to-mp3" },
  openGraph: {
    title: "YouTube to MP3 — Free Converter",
    description: "Paste a YouTube link and get an MP3 file, free.",
    url: "https://www.savefromnet.fun/youtube-to-mp3",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I convert a YouTube video to MP3?",
    a: "Paste the video's URL above and click Get Video. Once the preview loads, click the Audio (MP3) button to download the audio track as an MP3 file.",
  },
  {
    q: "What bitrate does the MP3 come out at?",
    a: "Typically around 128kbps — a good balance of file size and quality for music, podcasts, lectures and voice content.",
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
  {
    q: "Can I get the video file instead?",
    a: "Yes — the same preview also shows MP4 video quality options alongside the MP3 button.",
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
      name: "YouTube to MP3",
      item: "https://www.savefromnet.fun/youtube-to-mp3",
    },
  ],
};

export default function YouTubeToMp3Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · MP3"
        title="YouTube to MP3"
        subtitle="Paste a YouTube link and convert it to an MP3 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="How to Convert YouTube to MP3"
        paragraphs={[
          "MP3 is the most universally supported audio format — every phone, car stereo, media player and app can play it without extra codecs. Converting a YouTube video to MP3 is the fastest way to pull out just the audio for offline listening.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the video's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Click Audio (MP3) to download the MP3 file.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="YouTube to MP3 FAQ"
        description="Common questions about converting YouTube videos to MP3."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need the video file instead? Try{" "}
          <Link href="/youtube-to-mp4" className="text-green-600 underline">
            YouTube to MP4
          </Link>
          , or get a{" "}
          <Link href="/youtube-to-transcript" className="text-green-600 underline">
            YouTube Transcript
          </Link>{" "}
          for the text instead.
        </div>
      </section>

      <CTA
        heading="Ready to Convert YouTube to MP3?"
        description="Paste any public YouTube link and save the audio as MP3 in seconds."
        buttonLabel="Convert Now ↑"
        href="#"
      />
    </main>
  );
}
