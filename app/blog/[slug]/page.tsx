import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { getPostSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

async function loadPost(slug: string) {
  try {
    return await import(`@/data/blog/${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};

  const url = `https://www.savefromnet.fun/blog/${slug}`;

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return notFound();

  const Content = post.default;
  const { meta } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "SaveFromNet" },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={jsonLd} />

      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium text-green-600">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-5 text-xl leading-8 text-slate-500">
            {meta.description}
          </p>

          <div className="mt-10 border-t border-slate-100 pt-10">
            <Content />
          </div>
        </div>
      </article>

      <CTA />
    </main>
  );
}
