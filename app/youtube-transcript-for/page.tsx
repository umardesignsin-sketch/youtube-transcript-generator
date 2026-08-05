import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import { useCases } from "@/lib/data/use-cases";

export const metadata: Metadata = {
  title: "YouTube Transcript Generator — By Use Case",
  description:
    "Free YouTube transcript generator guides for students, creators, researchers, marketers, teachers, podcasters and developers.",
  alternates: { canonical: "/youtube-transcript-for" },
};

export default function UseCaseHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            YouTube Transcripts for Every Use Case
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            See how students, creators, researchers, marketers, teachers,
            podcasters and developers use our free YouTube transcript
            generator.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <Link
                key={u.slug}
                href={`/youtube-transcript-for/${u.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {u.audience}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {u.metaDescription}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600">
                  Read guide
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
