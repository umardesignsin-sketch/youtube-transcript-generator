import Link from "next/link";
import { Zap, Globe2, FileDown, Bot, Lock } from "lucide-react";

import UrlForm from "./UrlForm";
import FadeIn from "./FadeIn";

const chips = [
  { icon: Zap, label: "Instant Results" },
  { icon: Globe2, label: "100+ Languages" },
  { icon: FileDown, label: "TXT · SRT · Copy" },
  { icon: Bot, label: "AI Ready" },
  { icon: Lock, label: "No Sign-Up" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="absolute inset-0 -z-10 grid-texture" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/15 blur-[140px]" />
        <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-emerald-400/15 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-lime-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-green-700 shadow-md shadow-slate-200/50">
              🚀 Free · No Login · Unlimited Transcripts
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight leading-[1.05] text-slate-900 md:text-6xl">
              Free
              <br />
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
                YouTube Transcript Generator
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Convert{" "}
              <Link
                href="/youtube-to-transcript"
                className="font-medium text-green-600 underline decoration-green-300 underline-offset-2 hover:text-green-700"
              >
                YouTube to transcript
              </Link>{" "}
              in seconds — copy, search and download the text of any public
              YouTube video. Perfect for students, creators, researchers,
              marketers and developers who need accurate video transcripts
              for SEO, AI, learning and content creation.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12">
              <UrlForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60 ring-1 ring-slate-100"
                >
                  <chip.icon className="h-4 w-4 text-green-600" />
                  {chip.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
