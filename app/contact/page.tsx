import type { Metadata } from "next";
import { Mail } from "lucide-react";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact SaveFromNet",
  description:
    "Get in touch with SaveFromNet — questions, bug reports, or takedown requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Contact Us
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Found a bug, have a question, or need to report a copyright
            concern? Reach out by email and we'll get back to you.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <a
              href="mailto:support@savefromnet.fun"
              className="inline-flex items-center gap-3 text-xl font-semibold text-violet-600 hover:text-violet-700"
            >
              <Mail className="h-6 w-6" />
              support@savefromnet.fun
            </a>

            <p className="mt-4 text-slate-600">
              For copyright or takedown requests, please include the specific
              URL in question and a description of the issue.
            </p>
          </div>
        </div>
      </section>

      <CTA
        heading="Have Another Question?"
        description="Check our FAQ on the About page, or reach out directly."
        buttonLabel="Visit About →"
        href="/about"
      />
    </main>
  );
}
