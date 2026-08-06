import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import MediaDownloadForm from "@/components/MediaDownloadForm";
import ContentBlock from "@/components/ContentBlock";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pinterest Image Downloader — Full Resolution, Free",
  description:
    "Download Pinterest images in full resolution for free. Paste a pin link and save the original photo — no watermark, no sign-up.",
  alternates: { canonical: "/pinterest-image-downloader" },
  openGraph: {
    title: "Pinterest Image Downloader — Full Resolution, Free",
    description: "Paste a Pinterest pin link and download the original image.",
    url: "https://www.savefromnet.fun/pinterest-image-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "What resolution do I get?",
    a: "The original resolution as uploaded to Pinterest — this doesn't downscale or compress the image.",
  },
  {
    q: "Can I download an image from someone else's board?",
    a: "Yes, as long as the pin itself is public — it doesn't matter whose board it's saved to.",
  },
  {
    q: "Does this work on Pinterest collages or multi-image pins?",
    a: "It downloads the pin's primary image. For multi-page Idea Pins, use the full Pinterest Downloader tool instead, which handles each page.",
  },
  {
    q: "Is there a watermark on the image?",
    a: "No — you get the image exactly as Pinterest stores it, no watermark added.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free with no sign-up and no limit on downloads.",
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
      name: "Pinterest Image Downloader",
      item: "https://www.savefromnet.fun/pinterest-image-downloader",
    },
  ],
};

export default function PinterestImageDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · Full Resolution · No Watermark"
        title="Pinterest Image Downloader"
        subtitle="Paste a Pinterest pin link and save the original image in full resolution — free, no watermark, no sign-up."
      >
        <MediaDownloadForm
          endpoint="/pinterest/download"
          placeholder="Paste a Pinterest pin URL..."
          buttonLabel="Download"
          kind="pinterest"
        />
      </PSeoHero>

      <ContentBlock
        heading="How to Save a Pinterest Image"
        paragraphs={[
          "Pinterest's own site makes saving the full-size image harder than it should be — right-click often only gives you a low-res preview.",
        ]}
        listTitle="Steps"
        list={[
          "Open the pin on Pinterest, tap Share, then Copy Link.",
          "Paste the link into the box above and click Download.",
          "Click Download Image to save the full-resolution file.",
        ]}
      />

      <FAQ
        faqs={faqs}
        title="Pinterest Image Downloader FAQ"
        description="Common questions about downloading full-resolution images from Pinterest."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Looking for a video pin instead? Try the{" "}
          <Link href="/pinterest-video-downloader" className="text-green-600 underline">
            Pinterest Video Downloader
          </Link>
          , or see everything this tool supports on the{" "}
          <Link href="/pinterest-downloader" className="text-green-600 underline">
            main Pinterest Downloader
          </Link>{" "}
          page.
        </div>
      </section>

      <CTA
        heading="Ready to Save a Pinterest Image?"
        description="Paste any pin link and download the full-resolution image in seconds."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
