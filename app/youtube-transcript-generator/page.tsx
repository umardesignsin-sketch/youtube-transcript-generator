import type { Metadata } from "next";

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

      <CTA />
    </main>
  );
}