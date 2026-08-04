import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Ready to Generate Your YouTube Transcript?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
          Generate accurate YouTube transcripts in seconds. Free forever, no
          sign-up required, and works directly in your browser.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-violet-700 shadow-lg transition hover:scale-105"
          >
            Generate Transcript Now →
          </Link>
        </div>

        <p className="mt-6 text-sm text-violet-200">
          ⚡ Free • No Login • Instant Results
        </p>
      </div>
    </section>
  );
}