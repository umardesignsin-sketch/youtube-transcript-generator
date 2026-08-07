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
  title: "Facebook Video Downloader — Free, No Watermark",
  description:
    "Download public Facebook videos and Reels as MP4, free — paste a link and download in seconds, no sign-up, no software.",
  alternates: { canonical: "/facebook-video-downloader" },
  openGraph: {
    title: "Facebook Video Downloader — Free",
    description: "Paste a Facebook video link and download the MP4, free.",
    url: "https://www.savefromnet.fun/facebook-video-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a Facebook video?",
    a: "Paste the video's URL above and click Get Video. You'll see a preview, then a download button for the MP4 file.",
  },
  {
    q: "Does this work on Facebook Reels?",
    a: "Yes, as long as the Reel or video is public.",
  },
  {
    q: "Does this work on private videos or groups?",
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
      name: "Facebook Video Downloader",
      item: "https://www.savefromnet.fun/facebook-video-downloader",
    },
  ],
};

export default function FacebookVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · MP4"
        title="Facebook Video Downloader"
        subtitle="Paste a Facebook video or Reel link and download it as an MP4 file — free, no sign-up, no software."
      >
        <SocialVideoForm placeholder="Paste a Facebook video URL..." />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a Facebook Video"
        paragraphs={[
          "Facebook doesn't offer a native download button for videos on the web, so saving one for offline use needs a separate tool.",
        ]}
        listTitle="Steps"
        list={[
          "Open the video and copy its link from the address bar or the Share menu.",
          "Paste it above and click Get Video.",
          "Click the download button to save the MP4 file.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="Facebook Video Downloader FAQ"
        description="Common questions about downloading Facebook videos."
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
        heading="Ready to Download a Facebook Video?"
        description="Paste any public Facebook video link and save it as MP4 in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
