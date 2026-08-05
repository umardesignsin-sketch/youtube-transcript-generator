import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import MediaDownloadForm from "@/components/MediaDownloadForm";
import ContentBlock from "@/components/ContentBlock";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Instagram Reel & Video Downloader — Free, No Watermark",
  description:
    "Download Instagram Reels, posts and audio for free. Paste an Instagram link and save the video, photo, or MP3 audio instantly — no sign-up, no watermark.",
  alternates: { canonical: "/instagram-reel-downloader" },
  openGraph: {
    title: "Instagram Reel & Video Downloader — Free, No Watermark",
    description:
      "Paste an Instagram Reel or post link and download the video, image, or audio.",
    url: "https://www.savefromnet.fun/instagram-reel-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download an Instagram Reel?",
    a: "Copy the Reel's link from the Share (paper airplane) icon on Instagram, paste it above, and click Download. You'll get the video plus a separate MP3 audio download.",
  },
  {
    q: "Can I download from a private Instagram account?",
    a: "No. Only content from public accounts (or accounts the configured downloader account follows) can be downloaded.",
  },
  {
    q: "Does this work on regular posts, not just Reels?",
    a: "Yes, it works on Reels, regular photo/video posts, and IGTV links.",
  },
  {
    q: "Can I download just the audio from a Reel?",
    a: "Yes. Alongside the video download, a separate MP3 download button extracts the audio track.",
  },
  {
    q: "Why might a download fail?",
    a: "Instagram aggressively rate-limits automated access, so occasional failures can happen even for valid public links. If it fails, wait a moment and try again.",
  },
  {
    q: "Is there a watermark?",
    a: "No, downloads are the original file as stored by Instagram, with no watermark added.",
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
      name: "Instagram Reel Downloader",
      item: "https://www.savefromnet.fun/instagram-reel-downloader",
    },
  ],
};

export default function InstagramReelDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Watermark · Video + Audio"
        title="Instagram Reel & Video Downloader"
        subtitle="Paste an Instagram Reel or post link and download the video, image, or audio — free, no watermark, no sign-up."
      >
        <MediaDownloadForm
          endpoint="/instagram/download"
          placeholder="Paste an Instagram Reel or post URL..."
          buttonLabel="Download"
          kind="instagram-post"
        />
      </PSeoHero>

      <ContentBlock
        heading="How to Download an Instagram Reel"
        paragraphs={[
          "Instagram doesn't let you save most Reels directly to your device — this pulls the original video (and audio) from the link you paste.",
        ]}
        listTitle="Steps"
        list={[
          "Open the Reel or post on Instagram, tap the Share icon, then Copy Link.",
          "Paste the link into the box above and click Download.",
          "Preview it, then choose Download Video or the music note icon for MP3 audio only.",
        ]}
      />

      <FAQ
        faqs={faqs}
        title="Instagram Downloader FAQ"
        description="Common questions about downloading Instagram Reels, posts and audio."
      />

      <CTA
        heading="Ready to Download an Instagram Reel?"
        description="Paste any public Instagram Reel or post link and get the video, image, or audio in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
