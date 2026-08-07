import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import SocialVideoForm from "@/components/SocialVideoForm";
import ContentBlock from "@/components/ContentBlock";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dailymotion Downloader — Free, Up to 1080p",
  description:
    "Download Dailymotion videos as MP4 in the best available quality, free — paste a link and download in seconds, no sign-up, no software.",
  alternates: { canonical: "/dailymotion-downloader" },
  openGraph: {
    title: "Dailymotion Downloader — Free",
    description: "Paste a Dailymotion video link and download the MP4, free.",
    url: "https://www.savefromnet.fun/dailymotion-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a Dailymotion video?",
    a: "Paste the video's URL above and click Get Video. You'll see a preview with quality buttons — pick one to download the MP4 file.",
  },
  {
    q: "What quality options are available?",
    a: "Whatever resolutions the source video actually has — often up to 1080p for higher-quality uploads.",
  },
  {
    q: "Does this work on private videos?",
    a: "No, only public videos that don't require login can be downloaded.",
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
      name: "Dailymotion Downloader",
      item: "https://www.savefromnet.fun/dailymotion-downloader",
    },
  ],
};

export default function DailymotionDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · Up to 1080p"
        title="Dailymotion Downloader"
        subtitle="Paste a Dailymotion video link and download it as an MP4 file — free, no sign-up, no software."
      >
        <SocialVideoForm placeholder="Paste a Dailymotion video URL..." />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a Dailymotion Video"
        paragraphs={[
          "Dailymotion doesn't offer a native download button on the web, so saving a video for offline use needs a separate tool.",
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
        title="Dailymotion Downloader FAQ"
        description="Common questions about downloading Dailymotion videos."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need another platform? Try the{" "}
          <Link href="/reddit-video-downloader" className="text-green-600 underline">
            Reddit Video Downloader
          </Link>{" "}
          or the{" "}
          <Link href="/downloaders" className="text-green-600 underline">
            full downloaders list
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Ready to Download a Dailymotion Video?"
        description="Paste any public Dailymotion video link and save it as MP4 in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
