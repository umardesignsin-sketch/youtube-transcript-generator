import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import { languages } from "@/lib/data/languages";

export const metadata: Metadata = {
  title: "YouTube Transcript Generator — By Language",
  description:
    "Extract YouTube transcripts in Spanish, French, German, Hindi, Portuguese, Japanese, Korean, Arabic, Italian and Russian, free.",
  alternates: { canonical: "/youtube-transcript-in" },
};

export default function LanguageHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            YouTube Transcripts in Your Language
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Extract transcripts in the language the video was captioned in —
            no translation, just the original text.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {languages.map((l) => (
              <Link
                key={l.slug}
                href={`/youtube-transcript-in/${l.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {l.name}
                  </h2>
                  <p className="text-slate-500">{l.nativeName}</p>
                </div>

                <ArrowRight className="h-5 w-5 text-green-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
