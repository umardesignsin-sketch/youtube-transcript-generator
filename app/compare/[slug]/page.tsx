import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { comparisons, getComparison } from "@/lib/data/compare";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cmp = getComparison(slug);
  if (!cmp) return {};

  const url = `https://www.savefromnet.fun/compare/${cmp.slug}`;

  return {
    title: cmp.metaTitle,
    description: cmp.metaDescription,
    alternates: { canonical: `/compare/${cmp.slug}` },
    openGraph: {
      title: cmp.metaTitle,
      description: cmp.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmp = getComparison(slug);
  if (!cmp) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <PSeoHero
        badge={`SaveFromNet vs ${cmp.competitor}`}
        title={cmp.heading}
        subtitle={cmp.intro[0]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          {cmp.intro.slice(1).map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-8 text-slate-600">
              {p}
            </p>
          ))}

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  <th className="px-6 py-4 font-semibold">SaveFromNet</th>
                  <th className="px-6 py-4 font-semibold">{cmp.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {cmp.points.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.us}</td>
                    <td className="px-6 py-4 text-slate-600">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ
        faqs={cmp.faqs}
        title="Frequently Asked Questions"
        description={`Common questions comparing SaveFromNet and ${cmp.competitor}.`}
      />

      <CTA />
    </main>
  );
}
