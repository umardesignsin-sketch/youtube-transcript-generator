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
  title: "YouTube Video Downloader — Free MP4 Download",
  description:
    "Download any public YouTube video as MP4 up to 1080p, or extract MP3 audio — free, no sign-up, no fake quality options. See exactly what's downloadable before you click.",
  alternates: { canonical: "/youtube-video-downloader" },
  openGraph: {
    title: "YouTube Video Downloader — Free, Real Quality Options",
    description: "Paste a YouTube link and download the video as MP4 or MP3.",
    url: "https://www.savefromnet.fun/youtube-video-downloader",
    type: "website",
  },
};

const lastUpdated = "August 2026";

const howToSteps = [
  {
    name: "Copy the video's URL",
    text: "Copy the YouTube video's link from the address bar or the Share button — works for regular videos and Shorts.",
  },
  {
    name: "Paste it and click Get Video",
    text: "Paste the URL into the box above and click Get Video. The tool reads the video's actual available formats directly from YouTube.",
  },
  {
    name: "Pick a quality and download",
    text: "Choose a resolution (or Audio for MP3) from the buttons shown — only qualities that genuinely exist for that video are listed.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download a YouTube Video",
  description:
    "Download any public YouTube video as an MP4 file in the quality of your choice, or extract the audio as MP3.",
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YouTube Video Downloader",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  url: "https://www.savefromnet.fun/youtube-video-downloader",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "How do I download a YouTube video?",
    a: "Paste the video's URL above and click Get Video. You'll see a preview with the title, channel and duration, plus a row of quality buttons — click the one you want to download it.",
  },
  {
    q: "What quality options are available?",
    a: "Whatever resolutions the source video actually has — typically up to 1080p, sometimes less for older or lower-quality uploads. Only qualities that genuinely exist for that specific video are shown.",
  },
  {
    q: "Can I download just the audio?",
    a: "Yes — an Audio (MP3) button appears alongside the video quality options when available.",
  },
  {
    q: "Is there a video length limit?",
    a: "Yes, videos over 1 hour aren't supported, to keep the tool fast and reliable for everyone.",
  },
  {
    q: "Does this work on private or age-restricted videos?",
    a: "No, only public videos that don't require sign-in can be downloaded.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free with no sign-up required.",
  },
  {
    q: "Can I get a transcript instead of the video?",
    a: "Yes — see our YouTube to Transcript tool for clean, downloadable text instead.",
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
      name: "YouTube Video Downloader",
      item: "https://www.savefromnet.fun/youtube-video-downloader",
    },
  ],
};

export default function YouTubeVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={howToJsonLd} />
      <JsonLd data={softwareAppJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · MP4"
        title="YouTube Video Downloader"
        subtitle="Paste a YouTube link and download the video as an MP4 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <div className="bg-white text-center text-xs text-slate-400">
        Last updated {lastUpdated}
      </div>

      <ContentBlock
        heading="How to Download a YouTube Video"
        paragraphs={[
          "YouTube doesn't offer a native download button on the web, so saving a video for offline use needs a separate tool.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the video's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Pick a quality (or Audio for MP3) to download it.",
        ]}
      />

      <ContentBlock
        heading="How This Downloader Actually Works"
        paragraphs={[
          "YouTube doesn't serve one single video file — for most resolutions above 480p, the video track and audio track are separate streams (this is called adaptive bitrate streaming, the same technique YouTube's own player uses to adjust quality as your connection changes). A downloader that just grabs \"the video\" without accounting for this either fails on higher resolutions or hands you a silent file.",
          "When you paste a link here, the tool reads the video's real format list directly from YouTube — every resolution that actually exists for that specific upload, not a generic fixed menu. If the resolution you pick needs its audio merged in separately (true for 720p and above on most videos), that merge happens automatically before the file reaches you, using ffmpeg on the server side. That's why the quality buttons you see are never a guess — they're pulled from the video itself.",
          "For audio-only downloads, the tool deliberately picks a standard ~128kbps audio stream rather than the highest-bitrate one available. Testing showed YouTube's highest-bitrate audio formats are frequently gated behind checks that fail for third-party access — the standard-bitrate stream is the one that's reliably accessible.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="YouTube Video Downloader FAQ"
        description="Common questions about downloading YouTube videos."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Only need the audio? Try the{" "}
          <Link href="/youtube-audio-downloader" className="text-green-600 underline">
            YouTube Audio Downloader
          </Link>
          , or want text instead of video? Try{" "}
          <Link href="/youtube-to-transcript" className="text-green-600 underline">
            YouTube to Transcript
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Ready to Download a YouTube Video?"
        description="Paste any public YouTube link and save it as MP4 in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
