import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import PSeoHero from "@/components/PSeoHero";
import MediaDownloadForm from "@/components/MediaDownloadForm";
import ContentBlock from "@/components/ContentBlock";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Instagram Story Downloader — Free, Anonymous",
  description:
    "Download Instagram Stories for free before they expire. Paste a profile's story link and save photos and videos — no sign-up, no watermark.",
  alternates: { canonical: "/instagram-story-downloader" },
  openGraph: {
    title: "Instagram Story Downloader — Free, Anonymous",
    description:
      "Download active Instagram Stories from a public profile before they expire.",
    url: "https://www.savefromnet.fun/instagram-story-downloader",
    type: "website",
  },
};

const faqs = [
  {
    q: "What URL do I paste in?",
    a: "Use the profile's stories link in the format https://www.instagram.com/stories/username/ — replace \"username\" with the account's Instagram handle.",
  },
  {
    q: "Can I download expired stories?",
    a: "No. Instagram Stories only exist for 24 hours after posting, and once they expire they're gone — this only works on currently active stories.",
  },
  {
    q: "Does the account know I viewed their story?",
    a: "This fetches stories through a separate account configured on our server, not your own Instagram account, so your personal account is not used to view it.",
  },
  {
    q: "Can I download stories from a private account?",
    a: "Only if the account configured on our server follows that private account. Public accounts' stories work without any follow relationship.",
  },
  {
    q: "Why did I get an error?",
    a: "A few reasons: the account may have no active stories right now, the profile may be private and not followed, or Instagram may be temporarily rate-limiting requests — try again shortly.",
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
      name: "Instagram Story Downloader",
      item: "https://www.savefromnet.fun/instagram-story-downloader",
    },
  ],
};

export default function InstagramStoryDownloaderPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <JsonLd data={breadcrumbJsonLd} />

      <PSeoHero
        badge="Free · Anonymous · Before They Expire"
        title="Instagram Story Downloader"
        subtitle="Paste a profile's stories link to save their currently active Instagram Stories — free, no sign-up, and without notifying the account."
      >
        <MediaDownloadForm
          endpoint="/instagram/story"
          placeholder="https://www.instagram.com/stories/username/"
          buttonLabel="Fetch Stories"
          kind="instagram-story"
        />
      </PSeoHero>

      <ContentBlock
        heading="How to Download an Instagram Story"
        paragraphs={[
          "Stories only last 24 hours, so this only works while a story is still live on the account.",
        ]}
        listTitle="Steps"
        list={[
          "Go to https://www.instagram.com/stories/username/, replacing \"username\" with the account's handle.",
          "Paste that link into the box above and click Fetch Stories.",
          "Every currently active story item loads with its own download button.",
        ]}
      />

      <FAQ
        faqs={faqs}
        title="Instagram Story Downloader FAQ"
        description="Common questions about downloading Instagram Stories."
      />

      <CTA
        heading="Ready to Save an Instagram Story?"
        description="Paste a profile's stories link and download their active stories before they disappear."
        buttonLabel="Fetch Stories ↑"
        href="#"
      />
    </main>
  );
}
