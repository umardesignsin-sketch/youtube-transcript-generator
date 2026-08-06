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
  title: "Pinterest Video Downloader — Free, No Watermark",
  description:
    "Download Pinterest videos and images in HD for free. Paste a Pinterest pin link and save the video or image instantly — no sign-up, no watermark.",
  alternates: { canonical: "/pinterest-video-downloader" },
  openGraph: {
    title: "Pinterest Video Downloader — Free, No Watermark",
    description:
      "Paste a Pinterest pin link and download the video or image instantly.",
    url: "https://www.savefromnet.fun/pinterest-video-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I download a Pinterest video?",
    a: "Copy the pin's URL from the Share button on Pinterest (or your browser's address bar), paste it above, and click Download. The video loads in a few seconds with a direct download button.",
  },
  {
    q: "Does this work on private boards or pins?",
    a: "No, only public pins can be downloaded — the tool reads publicly available pin data, the same as anyone browsing Pinterest can see.",
  },
  {
    q: "Can I download Pinterest images too, not just videos?",
    a: "Yes. If the pin is an image rather than a video, you'll get a direct image download instead.",
  },
  {
    q: "Is there a watermark on the downloaded video?",
    a: "No. The video is downloaded exactly as Pinterest stores it — no watermark is added.",
  },
  {
    q: "Can I download the audio from a Pinterest video separately?",
    a: "Yes, a separate MP3 download button is provided alongside the video download.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free with no sign-up and no limit on how many pins you download.",
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
      name: "Pinterest Video Downloader",
      item: "https://www.savefromnet.fun/pinterest-video-downloader",
    },
  ],
};

export default function PinterestDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Watermark · No Sign-Up"
        title="Pinterest Video Downloader"
        subtitle="Paste a Pinterest pin link and download the video or image in seconds — full quality, no watermark, completely free."
      >
        <MediaDownloadForm
          endpoint="/pinterest/download"
          placeholder="Paste a Pinterest pin URL..."
          buttonLabel="Download"
          kind="pinterest"
        />
      </PSeoHero>

      <ContentBlock
        heading="How to Download a Pinterest Video"
        paragraphs={[
          "Pinterest doesn't offer a built-in download button for most videos, so saving one usually means a screen recording — until now.",
        ]}
        listTitle="Steps"
        list={[
          "Open the pin on Pinterest and tap the Share icon, then Copy Link (or copy the URL from your browser).",
          "Paste the link into the box above and click Download.",
          "Preview the video, then click Download Video — or the music note icon for audio-only MP3.",
        ]}
      />

      <FAQ
        faqs={faqs}
        title="Pinterest Downloader FAQ"
        description="Common questions about downloading Pinterest videos and images."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Need Idea Pins too, or just images? See the full{" "}
          <Link href="/pinterest-downloader" className="text-green-600 underline">
            Pinterest Downloader
          </Link>{" "}
          or the dedicated{" "}
          <Link href="/pinterest-image-downloader" className="text-green-600 underline">
            Pinterest Image Downloader
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Ready to Download a Pinterest Video?"
        description="Paste any public Pinterest pin link and get the video or image in seconds — free, no watermark, no sign-up."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
