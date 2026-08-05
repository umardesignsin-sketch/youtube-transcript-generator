import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import ContentBlock from "@/components/ContentBlock";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { languages, getLanguage } from "@/lib/data/languages";

export function generateStaticParams() {
  return languages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) return {};

  const url = `https://www.savefromnet.fun/youtube-transcript-in/${lang.slug}`;

  return {
    title: lang.metaTitle,
    description: lang.metaDescription,
    alternates: { canonical: `/youtube-transcript-in/${lang.slug}` },
    openGraph: {
      title: lang.metaTitle,
      description: lang.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <PSeoHero
        badge={`${lang.name} · ${lang.nativeName}`}
        title={lang.heading}
        subtitle={lang.intro[0]}
      />

      <ContentBlock
        heading={`${lang.name} YouTube Transcripts`}
        paragraphs={lang.intro.slice(1)}
      />

      <Features />

      <FAQ
        faqs={lang.faqs}
        title={`${lang.name} Transcript FAQ`}
        description={`Common questions about extracting ${lang.name} transcripts from YouTube.`}
      />

      <CTA />
    </main>
  );
}
