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
  title: "YouTube Audio Downloader — Free MP3, No Sign-Up",
  description:
    "Download the audio from any public YouTube video as an MP3 file — free, no sign-up, no software. Paste a link and get the audio in seconds.",
  alternates: { canonical: "/youtube-audio-downloader" },
  openGraph: {
    title: "YouTube Audio Downloader — Free MP3",
    description: "Paste a YouTube link and download just the audio as MP3.",
    url: "https://www.savefromnet.fun/youtube-audio-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download YouTube audio as MP3?",
    a: "Paste the video's URL above and click Get Video. Once the preview loads, click the Audio (MP3) button to download just the audio track.",
  },
  {
    q: "What audio quality do I get?",
    a: "The tool extracts the best available audio-only stream from YouTube and converts it to MP3, typically around 128kbps — enough for podcasts, lectures, music and voice content.",
  },
  {
    q: "Can I still download the video too?",
    a: "Yes — the same preview shows video quality buttons alongside the Audio (MP3) option, so you can grab either from one page.",
  },
  {
    q: "Is there a length limit?",
    a: "Yes, videos over 1 hour aren't supported, to keep extraction fast and reliable.",
  },
  {
    q: "Does this work on private or age-restricted videos?",
    a: "No, only public videos that don't require sign-in can be processed.",
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
      name: "YouTube Audio Downloader",
      item: "https://www.savefromnet.fun/youtube-audio-downloader",
    },
  ],
};

export default function YouTubeAudioDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · MP3"
        title="YouTube Audio Downloader"
        subtitle="Paste a YouTube link and download just the audio as an MP3 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="How to Download YouTube Audio"
        paragraphs={[
          "Sometimes you only need the sound — a podcast clip, a lecture, a song, a voiceover — not the video file. Extracting just the audio keeps the download small and easy to use in any music or podcast app.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the video's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Click Audio (MP3) to download the audio track.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="YouTube Audio Downloader FAQ"
        description="Common questions about downloading YouTube audio."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need the video file instead? Try the{" "}
          <Link href="/youtube-video-downloader" className="text-violet-600 underline">
            YouTube Video Downloader
          </Link>
          , or get a{" "}
          <Link href="/youtube-to-transcript" className="text-violet-600 underline">
            YouTube Transcript
          </Link>{" "}
          for the text instead.
        </div>
      </section>

      <CTA
        heading="Ready to Download YouTube Audio?"
        description="Paste any public YouTube link and save the audio as MP3 in seconds."
        buttonLabel="Download Audio ↑"
        href="#"
      />
    </main>
  );
}
