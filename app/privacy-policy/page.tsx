import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SaveFromNet's privacy policy — what data is collected and how it's used.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              <p className="mt-3">
                SaveFromNet ("we", "us") provides free web tools at
                savefromnet.fun. This page explains what information we
                collect and how it's used. We don't require accounts, so we
                don't collect names, passwords, or personal profiles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Information We Collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Links you submit.</strong> When you paste a URL into
                  one of our tools, it's sent to our server to fetch the
                  result (transcript, video, or image) and returned to your
                  browser. We don't store these links or their results after
                  your request completes.
                </li>
                <li>
                  <strong>Basic analytics.</strong> We use Google Analytics to
                  understand overall site usage (pages visited, approximate
                  location, device type). This is aggregate usage data, not
                  tied to a personal profile you've created with us.
                </li>
                <li>
                  <strong>Standard server logs.</strong> Like most websites,
                  our infrastructure may log basic request data (IP address,
                  timestamp, requested page) for security and troubleshooting
                  purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How We Use Information
              </h2>
              <p className="mt-3">
                Solely to operate and improve the tools: processing your
                requests, understanding which features are used, and
                diagnosing issues. We don't sell personal data or share it
                with third parties for advertising purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Cookies</h2>
              <p className="mt-3">
                Analytics cookies are only set if you accept them via the
                cookie banner shown on your first visit — declining means
                Google Analytics never loads. You can also disable cookies
                in your browser settings at any time; the tools will still
                work without them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Third-Party Content
              </h2>
              <p className="mt-3">
                Our tools fetch publicly available content from third-party
                platforms (YouTube, Pinterest) based on the link you provide.
                We aren't responsible for those platforms' own privacy
                practices — see their respective privacy policies for details
                on how they handle your interactions with their services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Children's Privacy
              </h2>
              <p className="mt-3">
                Our tools aren't directed at children, and we don't knowingly
                collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Changes</h2>
              <p className="mt-3">
                We may update this policy from time to time. Continued use of
                the site after changes are posted means you accept the
                updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
              <p className="mt-3">
                Questions about this policy? Reach us at{" "}
                <a href="mailto:support@savefromnet.fun" className="text-green-600 underline">
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
