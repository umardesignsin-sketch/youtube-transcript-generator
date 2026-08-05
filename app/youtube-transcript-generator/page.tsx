import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import GeneratorHero from "@/components/GeneratorHero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Free YouTube Transcript Generator | Generate & Download Transcripts",
  description:
    "Generate accurate YouTube transcripts instantly. Copy, search and download transcripts from any public YouTube video for free. No login required.",
  alternates: {
    canonical: "/youtube-transcript-generator",
  },
  openGraph: {
    title: "Free YouTube Transcript Generator",
    description:
      "Generate and download YouTube transcripts instantly for free.",
    url: "https://www.savefromnet.fun/youtube-transcript-generator",
    type: "website",
  },
};

export default function YouTubeTranscriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <GeneratorHero />

      <Features />

      <HowItWorks />

      <UseCases />

      <FAQ />

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Want the full breakdown of how to go from a{" "}
          <Link href="/youtube-to-transcript" className="text-violet-600 underline">
            YouTube video to transcript
          </Link>
          , including format options and FAQs? See our complete guide.
        </div>
      </section>

      <CTA />
    </main>
  );
}