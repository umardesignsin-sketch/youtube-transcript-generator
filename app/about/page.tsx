import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About SaveFromNet",
  description:
    "SaveFromNet is a free suite of web tools for generating YouTube transcripts and downloading Pinterest video and image content — no sign-up, no watermark.",
  alternates: { canonical: "/about" },
};

const faqs = [
  {
    q: "What is SaveFromNet?",
    a: "SaveFromNet is a free website offering a set of single-purpose web tools: a YouTube transcript generator, and Pinterest video/image downloaders. Paste a link, get the result — no account required.",
  },
  {
    q: "Is SaveFromNet free?",
    a: "Yes, every tool on the site is free with no sign-up, no subscription, and no usage limits.",
  },
  {
    q: "Is SaveFromNet safe to use?",
    a: "The tools run entirely in your browser and don't require you to create an account, install software, or provide any personal information beyond the link you paste in.",
  },
  {
    q: "Does SaveFromNet store the videos or images I download?",
    a: "No. Requests are processed and returned directly — files aren't stored on our servers after your request completes.",
  },
  {
    q: "Why is it free?",
    a: "The tools are simple to run and the goal is to be useful, not to build a paid product — there's no catch or hidden tier.",
  },
  {
    q: "Is SaveFromNet down or having issues?",
    a: "If a tool isn't working, it's most often because the source platform (YouTube, Pinterest) changed something on their end — these things get fixed as they come up. Try again in a bit, or check a different link to confirm.",
  },
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SaveFromNet",
  url: "https://www.savefromnet.fun/about",
  mainEntity: {
    "@type": "Organization",
    name: "SaveFromNet",
    url: "https://www.savefromnet.fun",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={aboutPageJsonLd} />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            About SaveFromNet
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SaveFromNet is a small collection of free, single-purpose web
            tools. No accounts, no subscriptions, no dashboards — paste a
            link, get what you came for.
          </p>

          <div className="mt-10 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              It started with one tool: a{" "}
              <Link href="/youtube-to-transcript" className="text-green-600 underline">
                YouTube transcript generator
              </Link>{" "}
              for turning any public video into clean, searchable text. Since
              then it's grown to cover{" "}
              <Link href="/downloaders" className="text-green-600 underline">
                Pinterest video and image downloading
              </Link>{" "}
              too — the shared idea behind all of it is the same: get you the
              thing you actually want in one step, without a login wall or a
              paywall in the way.
            </p>
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              What's available right now
            </h2>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>
                <Link href="/youtube-to-transcript" className="font-medium text-green-600 underline">
                  YouTube to Transcript
                </Link>{" "}
                — generate, copy and download transcripts from any public
                YouTube video.
              </li>
              <li>
                <Link href="/pinterest-downloader" className="font-medium text-green-600 underline">
                  Pinterest Downloader
                </Link>{" "}
                — download Pinterest videos, Idea Pins, and images in full
                quality.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqs}
        title="Frequently Asked Questions"
        description="Common questions about SaveFromNet."
      />

      <CTA
        heading="Ready to Try SaveFromNet?"
        description="Pick a tool and get started — free, no sign-up."
        buttonLabel="See All Tools →"
        href="/downloaders"
      />
    </main>
  );
}
