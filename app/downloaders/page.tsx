import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Free Downloaders — YouTube, Pinterest, Facebook, Reddit & More",
  description:
    "Free tools to download videos and images from YouTube, Pinterest, Facebook, Reddit and Dailymotion. No sign-up, no watermark.",
  alternates: { canonical: "/downloaders" },
};

const downloaders = [
  {
    href: "/youtube-video-downloader",
    title: "YouTube Video Downloader",
    description: "Download any public YouTube video as an MP4 file, free.",
  },
  {
    href: "/youtube-to-mp4",
    title: "YouTube to MP4",
    description: "Convert any public YouTube video to MP4 in multiple qualities, free.",
  },
  {
    href: "/youtube-audio-downloader",
    title: "YouTube Audio Downloader",
    description: "Download just the audio from a YouTube video as MP3, free.",
  },
  {
    href: "/youtube-to-mp3",
    title: "YouTube to MP3",
    description: "Convert any public YouTube video to MP3 audio, free.",
  },
  {
    href: "/y2mate-alternative",
    title: "Y2mate Alternative",
    description: "A simpler, ad-light way to download YouTube video and audio.",
  },
  {
    href: "/pinterest-downloader",
    title: "Pinterest Downloader",
    description: "Download any Pinterest pin — video, Idea Pin, or image — in one tool.",
  },
  {
    href: "/pinterest-video-downloader",
    title: "Pinterest Video Downloader",
    description: "Download Pinterest videos in full quality, no watermark, plus MP3 audio.",
  },
  {
    href: "/pinterest-image-downloader",
    title: "Pinterest Image Downloader",
    description: "Save Pinterest images in full resolution, no watermark.",
  },
  {
    href: "/facebook-video-downloader",
    title: "Facebook Video Downloader",
    description: "Download public Facebook videos and Reels as MP4, free.",
  },
  {
    href: "/reddit-video-downloader",
    title: "Reddit Video Downloader",
    description: "Download Reddit videos as MP4 with audio merged in, free.",
  },
  {
    href: "/dailymotion-downloader",
    title: "Dailymotion Downloader",
    description: "Download Dailymotion videos as MP4, up to 1080p, free.",
  },
];

export default function DownloadersHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Free Downloaders
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Download video, Idea Pin and image content from YouTube and
            Pinterest — free, no sign-up, no watermark.
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

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600">
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
