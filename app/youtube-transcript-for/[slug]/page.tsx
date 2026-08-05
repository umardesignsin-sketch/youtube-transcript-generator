import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import ContentBlock from "@/components/ContentBlock";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { useCases, getUseCase } from "@/lib/data/use-cases";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  const url = `https://www.savefromnet.fun/youtube-transcript-for/${useCase.slug}`;

  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    alternates: { canonical: `/youtube-transcript-for/${useCase.slug}` },
    openGraph: {
      title: useCase.metaTitle,
      description: useCase.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <PSeoHero
        badge={`For ${useCase.audience}`}
        title={useCase.heading}
        subtitle={useCase.intro[0]}
      />

      <ContentBlock
        heading={`Getting the Most Out of YouTube Transcripts as a ${useCase.audience.replace(/s$/, "")}`}
        paragraphs={useCase.intro.slice(1)}
        listTitle="Tips"
        list={useCase.tips}
      />

      <Features />

      <FAQ
        faqs={useCase.faqs}
        title={`${useCase.audience} FAQ`}
        description={`Common questions from ${useCase.audience.toLowerCase()} using our YouTube transcript generator.`}
      />

      <CTA />
    </main>
  );
}
