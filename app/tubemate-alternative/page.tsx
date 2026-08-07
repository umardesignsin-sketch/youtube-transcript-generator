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
  title: "TubeMate Alternative — No APK, Browser-Based",
  description:
    "Looking for a TubeMate alternative? Download YouTube video and audio right in your browser — no APK to install, no app permissions.",
  alternates: { canonical: "/tubemate-alternative" },
  openGraph: {
    title: "TubeMate Alternative — No APK Needed",
    description: "A browser-based way to download YouTube video and audio.",
    url: "https://www.savefromnet.fun/tubemate-alternative",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why look for a TubeMate alternative?",
    a: "TubeMate is an Android APK distributed outside the Google Play Store, since it isn't allowed there. Installing an APK from a third-party source means granting it broad permissions and trusting it wasn't tampered with — a browser-based tool skips that entirely, since nothing gets installed.",
  },
  {
    q: "Is SaveFromNet affiliated with TubeMate?",
    a: "No — it's an independent, unaffiliated web-based tool.",
  },
  {
    q: "Does this work on Android without installing anything?",
    a: "Yes — it runs in your phone's browser like any website, no APK or app install required.",
  },
  {
    q: "Can I download both video and audio?",
    a: "Yes — quality buttons for MP4 video plus a dedicated Audio (MP3) button appear on the same preview.",
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
      name: "TubeMate Alternative",
      item: "https://www.savefromnet.fun/tubemate-alternative",
    },
  ],
};

export default function TubeMateAlternativePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · No APK · Browser-Based"
        title="TubeMate Alternative"
        subtitle="Download YouTube video and audio right in your browser — no APK to install, no app permissions to grant."
      >
        <YouTubeVideoForm />
      </PSeoHero>

      <ContentBlock
        heading="A Browser-Based Way to Download YouTube"
        paragraphs={[
          "TubeMate has been a well-known name for downloading YouTube videos on Android for years, but it's distributed as an APK from outside the Play Store — which means sideloading it and granting it whatever permissions it asks for, with no app-store review in between.",
          "SaveFromNet works the same way any website does: open it in your phone's browser, paste a link, download. Nothing to install, nothing to grant permissions to, and it works on any device with a browser — not just Android.",
        ]}
      />

      <Citations />

      <FAQ
        faqs={faqs}
        title="TubeMate Alternative FAQ"
        description="Common questions about switching from TubeMate."
      />

      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          Check out the{" "}
          <Link href="/best-youtube-video-downloader" className="text-green-600 underline">
            Best YouTube Video Downloader
          </Link>{" "}
          breakdown, or see the{" "}
          <Link href="/y2mate-alternative" className="text-green-600 underline">
            Y2mate Alternative
          </Link>
          .
        </div>
      </section>

      <CTA
        heading="Try a Browser-Based Alternative"
        description="Paste any public YouTube link above — no app, no APK, no install."
        buttonLabel="Download Now ↑"
        href="#"
      />
    </main>
  );
}
