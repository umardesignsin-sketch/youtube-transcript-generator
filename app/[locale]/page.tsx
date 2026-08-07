import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import LocalizedHero from "@/components/LocalizedHero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import { homepageLocales, homepageLocaleCodes } from "@/lib/data/i18n/homepage";

export function generateStaticParams() {
  return homepageLocaleCodes.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: code } = await params;
  const locale = homepageLocales[code];
  if (!locale) return {};

  const languages: Record<string, string> = { "x-default": "/", en: "/" };
  for (const c of homepageLocaleCodes) {
    languages[c] = `/${c}`;
  }

  return {
    title: locale.metaTitle,
    description: locale.metaDescription,
    alternates: {
      canonical: `/${code}`,
      languages,
    },
    openGraph: {
      title: locale.metaTitle,
      description: locale.metaDescription,
      url: `https://www.savefromnet.fun/${code}`,
      type: "website",
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: code } = await params;
  const locale = homepageLocales[code];
  if (!locale) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <LocalizedHero locale={locale} />
      <Features />
      <HowItWorks />
      <Citations />
      <FAQ faqs={locale.faqs} title={locale.faqTitle} description={locale.faqDescription} />
    </main>
  );
}
