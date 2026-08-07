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
  title: "Reddit Video Downloader — Free, Audio Merged",
  description:
    "Download Reddit videos as MP4 with audio merged in, free — paste a post link and download in seconds, no sign-up, no software.",
  alternates: { canonical: "/reddit-video-downloader" },
  openGraph: {
    title: "Reddit Video Downloader — Free",
    description: "Paste a Reddit post link and download the video, free.",
    url: "https://www.savefromnet.fun/reddit-video-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a Reddit video?",
    a: "Paste the post's URL above and click Get Video. You'll see a preview, then a download button for the MP4 file.",
  },
  {
    q: "Why do some Reddit downloaders produce videos with no sound?",
    a: "Reddit stores video and audio as separate files (v.redd.it), so a downloader has to merge them — this tool does that automatically.",
  },
  {
    q: "Does this work on private subreddits?",
    a: "No, only posts from public subreddits that don't require login can be downloaded.",
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
      name: "Reddit Video Downloader",
      item: "https://www.savefromnet.fun/reddit-video-downloader",
    },
  ],
};

export default function RedditVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Sign-Up · Audio Merged"
        title="Reddit Video Downloader"
        subtitle="Paste a Reddit post link and download the video with audio merged in — free, no sign-up, no software."
      >
        <SocialVideoForm placeholder="Paste a Reddit post URL..." />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a Reddit Video"
        paragraphs={[
          "Reddit's own site doesn't offer a download button, and simply saving the video file directly usually gets you video with no audio track — Reddit stores them separately behind the scenes.",
        ]}
        listTitle="Steps"
        list={[
          "Copy the post's URL from the address bar or the Share button.",
          "Paste it above and click Get Video.",
          "Click the download button — audio is merged in automatically.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="Reddit Video Downloader FAQ"
        description="Common questions about downloading Reddit videos."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need another platform? Try the{" "}
          <Link href="/facebook-video-downloader" className="text-green-600 underline">
            Facebook Video Downloader
          </Link>{" "}
          or the{" "}
          <Link href="/downloaders" className="text-green-600 underline">
            full downloaders list
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Ready to Download a Reddit Video?"
        description="Paste any public Reddit post link and save it as MP4 in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
