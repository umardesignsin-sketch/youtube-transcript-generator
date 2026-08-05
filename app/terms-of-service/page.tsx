import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SaveFromNet's terms of service — acceptable use and disclaimers.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-slate-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Using SaveFromNet
              </h2>
              <p className="mt-3">
                By using savefromnet.fun, you agree to these terms. The tools
                are provided free of charge, as-is, without any account
                requirement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Acceptable Use
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Use the tools only on public content you have the right to
                  access and download for personal, non-infringing purposes.
                </li>
                <li>
                  Don't use the tools to bulk-scrape, redistribute, or resell
                  content in a way that infringes on the original creator's
                  rights.
                </li>
                <li>
                  Don't attempt to abuse, overload, or disrupt the service
                  (excessive automated requests, denial-of-service attempts,
                  etc.).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Copyright
              </h2>
              <p className="mt-3">
                We don't host or own the content our tools retrieve —
                transcripts, videos and images come directly from the
                platform you link to (YouTube, Pinterest), and remain the
                property of their original creators. You're responsible for
                how you use downloaded content. If you believe content
                accessed through our tools infringes your copyright, contact
                us at{" "}
                <a href="mailto:support@savefromnet.fun" className="text-violet-600 underline">
                  support@savefromnet.fun
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                No Warranty
              </h2>
              <p className="mt-3">
                The tools are provided "as is," without warranty of any kind.
                We don't guarantee uninterrupted availability or that every
                link will work — third-party platforms can change how their
                content is served at any time, which may affect a tool's
                functionality without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                We aren't liable for any damages arising from your use of, or
                inability to use, the tools, including reliance on downloaded
                content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of
                the site after changes are posted means you accept the
                updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Reach us at{" "}
                <a href="mailto:support@savefromnet.fun" className="text-violet-600 underline">
                  support@savefromnet.fun
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
