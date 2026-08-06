import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import MediaDownloadForm from "@/components/MediaDownloadForm";
import ContentBlock from "@/components/ContentBlock";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pinterest Downloader — Videos & Images, Free, No Watermark",
  description:
    "Download anything from Pinterest — videos, idea pins, and images — in one paste-a-link step. Free, no sign-up, no watermark, full quality.",
  alternates: { canonical: "/pinterest-downloader" },
  openGraph: {
    title: "Pinterest Downloader — Videos & Images, Free",
    description:
      "Paste any Pinterest pin link and download the video or image instantly.",
    url: "https://www.savefromnet.fun/pinterest-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "What can I download from Pinterest with this tool?",
    a: "Regular video pins, image pins, and Idea Pins (Pinterest's multi-page story format) — paste any pin link and the tool detects whether it's a video or image automatically.",
  },
  {
    q: "Do I need a Pinterest account?",
    a: "No. You don't need to be logged into Pinterest, and the pin you're downloading just needs to be public.",
  },
  {
    q: "What's the difference between this and the Pinterest video downloader page?",
    a: "Same underlying tool — this page covers the full picture (video, image, and Idea Pins together), while the video downloader page focuses specifically on video pins.",
  },
  {
    q: "Is the quality reduced?",
    a: "No, you get the same file Pinterest itself serves — no re-encoding or compression on our end.",
  },
  {
    q: "Can I download an Idea Pin (multi-page story pin)?",
    a: "Yes. Idea Pins store video differently in Pinterest's data than regular pins, and the tool handles both automatically.",
  },
  {
    q: "Is there a limit on how many pins I can download?",
    a: "No limit, and it's completely free.",
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
      name: "Pinterest Downloader",
      item: "https://www.savefromnet.fun/pinterest-downloader",
    },
  ],
};

export default function PinterestDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · Video + Image + Idea Pins · No Watermark"
        title="Pinterest Downloader"
        subtitle="Paste any Pinterest pin link — video, image, or Idea Pin — and get the file back in seconds. Free, no sign-up, no watermark."
      >
        <MediaDownloadForm
          endpoint="/pinterest/download"
          placeholder="Paste any Pinterest pin URL..."
          buttonLabel="Download"
          kind="pinterest"
        />
      </PSeoHero>

      <ContentBlock
        heading="Every Pinterest Pin Type, One Tool"
        paragraphs={[
          "Pinterest stores video differently depending on the pin type, which is why most downloaders only handle one format. This tool reads both structures automatically:",
        ]}
        listTitle="What's supported"
        list={[
          "Standard video pins — the classic single video pin format.",
          "Idea Pins (story pins) — Pinterest's multi-page format, which nests video data differently under the hood.",
          "Image pins — high-resolution photo downloads when the pin isn't a video.",
        ]}
      />

      <Citations />

      <ContentBlock
        heading="How to Download from Pinterest"
        paragraphs={["Works the same way regardless of pin type:"]}
        listTitle="Steps"
        list={[
          "Open the pin on Pinterest, tap Share, then Copy Link.",
          "Paste it into the box above and click Download.",
          "Download the video or image directly, or grab MP3 audio from a video pin with the music note button.",
        ]}
      />

      <FAQ
        faqs={faqs}
        title="Pinterest Downloader FAQ"
        description="Common questions about downloading videos, images and Idea Pins from Pinterest."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Only need video pins? Try the dedicated{" "}
          <Link href="/pinterest-video-downloader" className="text-green-600 underline">
            Pinterest Video Downloader
          </Link>
          , or the{" "}
          <Link href="/pinterest-image-downloader" className="text-green-600 underline">
            Pinterest Image Downloader
          </Link>{" "}
          for photo pins only.
        </div>
      </section>

      <CTA
        heading="Ready to Download From Pinterest?"
        description="Paste any pin link and get the video, image, or Idea Pin content in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
