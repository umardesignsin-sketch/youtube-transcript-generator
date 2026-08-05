import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import { comparisons } from "@/lib/data/compare";

export const metadata: Metadata = {
  title: "SaveFromNet vs Alternatives",
  description:
    "See how SaveFromNet's free YouTube transcript generator compares to Tactiq, NoteGPT, DownSub and YouTubeToTranscript.com.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            SaveFromNet vs Alternatives
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            An honest look at how our free YouTube transcript generator
            compares to other tools in the space.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-xl font-bold text-slate-900">
                  vs {c.competitor}
                </h2>

                <ArrowRight className="h-5 w-5 text-violet-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
