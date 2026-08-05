import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import ContentBlock from "@/components/ContentBlock";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { tools, getTool } from "@/lib/data/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};

  const url = `https://www.savefromnet.fun/tools/${tool.slug}`;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return notFound();

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: tool.title,
    description: tool.metaDescription,
    step: tool.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={howToJsonLd} />

      <PSeoHero
        badge="Free Tool"
        title={tool.heading}
        subtitle={tool.intro[0]}
      />

      <ContentBlock
        heading="How It Works"
        paragraphs={tool.intro.slice(1)}
        listTitle="Steps"
        list={tool.steps}
      />

      <Features />

      <FAQ
        faqs={tool.faqs}
        title={`${tool.title} FAQ`}
        description={`Common questions about the ${tool.title.toLowerCase()}.`}
      />

      <CTA />
    </main>
  );
}
