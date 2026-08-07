import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import YouTubeVideoForm from "@/components/YouTubeVideoForm";
import ContentBlock from "@/components/ContentBlock";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "ClipGrab Alternative — No Install, Works in Browser",
  description:
    "Looking for a ClipGrab alternative that doesn't need installing? Download YouTube video and audio directly in your browser — free, no sign-up.",
  alternates: { canonical: "/clipgrab-alternative" },
  openGraph: {
    title: "ClipGrab Alternative — No Install Needed",
    description: "A browser-based way to download YouTube video and audio.",
    url: "https://www.savefromnet.fun/clipgrab-alternative",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why look for a ClipGrab alternative?",
    a: "ClipGrab is a desktop application you have to download and install separately for Windows or Mac. A browser-based tool skips the install step entirely — nothing to download except the video itself.",
  },
  {
    q: "Is SaveFromNet affiliated with ClipGrab?",
    a: "No — it's an independent, unaffiliated web-based tool.",
  },
  {
    q: "Does this work on any operating system?",
    a: "Yes — since it runs in the browser, it works the same on Windows, Mac, Linux, Chromebook, or mobile, without a separate build for each.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free with no sign-up required.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.savefromnet.fun" },
    {
      "@type": "ListItem",
      position: 2,
      name: "ClipGrab Alternative",
      item: "https://www.savefromnet.fun/clipgrab-alternative",
    },
  ],
};

export default function ClipGrabAlternativePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No Install · Any OS"
        title="ClipGrab Alternative"
        subtitle="Download YouTube video and audio right in your browser — no desktop app to install."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="Skip the Install"
        paragraphs={[
          "ClipGrab does the job, but it's a separate desktop program you have to download, install, and keep updated. For a one-off download, that's a lot of setup for something a browser tab can do just as well.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="ClipGrab Alternative FAQ"
        description="Common questions about switching from ClipGrab."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          See the{" "}
          <Link href="/clipconverter-alternative" className="text-green-600 underline">
            ClipConverter Alternative
          </Link>{" "}
          too, or check the{" "}
          <Link href="/allmytube-alternative" className="text-green-600 underline">
            AllMyTube Alternative
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Try It Without Installing Anything"
        description="Paste any public YouTube link above — no download, no setup."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
