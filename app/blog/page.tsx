import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — YouTube Transcript Tips & Guides",
  description:
    "Guides on extracting, using and repurposing YouTube transcripts for studying, SEO, content creation and AI workflows.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Blog
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Guides on extracting, using and repurposing YouTube transcripts.
          </p>

          <div className="mt-14 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-medium text-green-600">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {post.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-green-600">
                  Read post
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
