import Link from "next/link";

import LogoMark from "./Logo";
import { useCases } from "@/lib/data/use-cases";
import { languages } from "@/lib/data/languages";
import { tools } from "@/lib/data/tools";
import { comparisons } from "@/lib/data/compare";
import { homepageLocales, homepageLocaleCodes } from "@/lib/data/i18n/homepage";

const siteLocales = homepageLocaleCodes.map((code) => ({
  href: `/${code}`,
  label: homepageLocales[code].name,
}));

const downloaders = [
  { href: "/youtube-video-downloader", label: "YouTube Video" },
  { href: "/youtube-to-mp4", label: "YouTube to MP4" },
  { href: "/youtube-audio-downloader", label: "YouTube Audio" },
  { href: "/youtube-to-mp3", label: "YouTube to MP3" },
  { href: "/y2mate-alternative", label: "Y2mate Alternative" },
  { href: "/best-youtube-video-downloader", label: "Best Downloader" },
  { href: "/pinterest-downloader", label: "Pinterest Downloader" },
  { href: "/pinterest-video-downloader", label: "Pinterest Video" },
  { href: "/pinterest-image-downloader", label: "Pinterest Image" },
  { href: "/facebook-video-downloader", label: "Facebook Video" },
  { href: "/reddit-video-downloader", label: "Reddit Video" },
  { href: "/dailymotion-downloader", label: "Dailymotion" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark />
              <span className="text-lg font-bold text-white">SFN Tools</span>
            </Link>

            <p className="mt-4 text-sm leading-6">
              Free video &amp; transcript tools. No sign-up, no software,
              instant results.
            </p>

            <Link
              href="/youtube-to-transcript"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-400 hover:text-green-300"
            >
              YouTube to Transcript →
            </Link>
          </div>

          <FooterColumn
            title="Downloaders"
            links={downloaders.slice(0, 6)}
            moreHref="/downloaders"
          />

          <FooterColumn
            title="Use Cases"
            links={useCases.slice(0, 6).map((u) => ({
              href: `/youtube-transcript-for/${u.slug}`,
              label: u.audience,
            }))}
            moreHref="/youtube-transcript-for"
          />

          <FooterColumn
            title="Languages"
            links={languages.slice(0, 6).map((l) => ({
              href: `/youtube-transcript-in/${l.slug}`,
              label: l.name,
            }))}
            moreHref="/youtube-transcript-in"
          />

          <FooterColumn
            title="Tools"
            links={tools.map((t) => ({
              href: `/tools/${t.slug}`,
              label: t.title,
            }))}
            moreHref="/tools"
          />

          <FooterColumn
            title="Compare"
            links={comparisons.map((c) => ({
              href: `/compare/${c.slug}`,
              label: `vs ${c.competitor}`,
            }))}
            moreHref="/compare"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-white/10 pt-6 text-xs text-zinc-500">
          <span>Also available in:</span>
          {siteLocales.map((l, i) => (
            <span key={l.href} className="flex items-center gap-2">
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
              {i < siteLocales.length - 1 && <span className="text-zinc-700">·</span>}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>&copy; {new Date().getFullYear()} SaveFromNet. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  moreHref,
}: {
  title: string;
  links: { href: string; label: string }[];
  moreHref: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
        {title}
      </h3>

      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href={moreHref} className="font-medium text-green-400 hover:text-green-300">
            View all →
          </Link>
        </li>
      </ul>
    </div>
  );
}
