import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import { tools } from "@/lib/data/tools";

export const metadata: Metadata = {
  title: "Free YouTube Transcript Tools",
  description:
    "Free tools to convert YouTube videos into SRT subtitles, timestamped transcripts, plain text and PDF, no sign-up required.",
  alternates: { canonical: "/tools" },
};

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Free YouTube Transcript Tools
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every format you need from a single YouTube transcript: SRT
            subtitles, timestamped text, plain text and PDF.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {t.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {t.metaDescription}
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

      <CTA />
    </main>
  );
}
