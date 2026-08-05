import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Free Video Downloaders — Pinterest & Instagram",
  description:
    "Free tools to download Pinterest videos and Instagram Reels, posts, audio and Stories. No sign-up, no watermark.",
  alternates: { canonical: "/downloaders" },
};

const downloaders = [
  {
    href: "/pinterest-video-downloader",
    title: "Pinterest Video Downloader",
    description: "Download Pinterest videos and images in full quality, no watermark.",
  },
  {
    href: "/instagram-reel-downloader",
    title: "Instagram Reel & Video Downloader",
    description: "Download Instagram Reels, posts and audio (MP3) from any public account.",
  },
  {
    href: "/instagram-story-downloader",
    title: "Instagram Story Downloader",
    description: "Save a public profile's active Instagram Stories before they expire.",
  },
];

export default function DownloadersHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Free Video Downloaders
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Download video, photo and audio content from Pinterest and
            Instagram — free, no sign-up, no watermark.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {downloaders.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {d.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {d.description}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600">
                  Use tool
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Also Need a YouTube Transcript?"
        description="Convert any public YouTube video into a clean, downloadable transcript — free."
        buttonLabel="Try YouTube to Transcript →"
        href="/youtube-to-transcript"
      />
    </main>
  );
}
