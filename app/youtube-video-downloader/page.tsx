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
  title: "YouTube Video Downloader — Free, No Sign-Up",
  description:
    "Download any public YouTube video as an MP4 file for free. Paste a link and save it directly — no sign-up, no software.",
  alternates: { canonical: "/youtube-video-downloader" },
  openGraph: {
    title: "YouTube Video Downloader — Free, No Sign-Up",
    description: "Paste a YouTube link and download the video as MP4.",
    url: "https://www.savefromnet.fun/youtube-video-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a YouTube video?",
    a: "Paste the video's URL above and click Get Video. You'll see a preview with the title, channel and duration — click Download Video to save the MP4.",
  },
  {
    q: "What quality do I get?",
    a: "This tool uses YouTube's standard combined video+audio format, which is typically 360p. YouTube's higher resolutions are served as separate video-only and audio-only streams behind additional anti-bot checks, so we intentionally stick to the reliable format rather than a higher quality that might silently fail.",
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
    q: "Can I also get just the audio, or a transcript instead?",
    a: "Yes — see our YouTube to Transcript tool for text, or download the video here and use a converter for audio-only.",
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

      <PSeoHero
        badge="Free · No Sign-Up · MP4"
        title="YouTube Video Downloader"
        subtitle="Paste a YouTube link and download the video as an MP4 file — free, no sign-up, no software."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a YouTube Video"
        paragraphs={[
          "YouTube doesn't offer a native download button on the web, so saving a video for offline use needs a separate tool.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the video's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Review the preview, then click Download Video to save the MP4.",
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
          Want text instead of video? Try{" "}
          <Link href="/youtube-to-transcript" className="text-violet-600 underline">
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
