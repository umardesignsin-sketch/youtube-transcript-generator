import Link from "next/link";

import LogoMark from "./Logo";
import { useCases } from "@/lib/data/use-cases";
import { languages } from "@/lib/data/languages";
import { tools } from "@/lib/data/tools";
import { comparisons } from "@/lib/data/compare";

const downloaders = [
  { href: "/pinterest-downloader", label: "Pinterest Downloader" },
  { href: "/pinterest-video-downloader", label: "Pinterest Video" },
  { href: "/pinterest-image-downloader", label: "Pinterest Image" },
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
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              YouTube to Transcript →
            </Link>
          </div>

          <FooterColumn
            title="Downloaders"
            links={downloaders}
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>&copy; {new Date().getFullYear()} SaveFromNet. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/youtube-to-transcript" className="hover:text-white">
              YouTube to Transcript
            </Link>
            <Link href="/youtube-transcript-generator" className="hover:text-white">
              Transcript Generator
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
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
          <Link href={moreHref} className="font-medium text-violet-400 hover:text-violet-300">
            View all →
          </Link>
        </li>
      </ul>
    </div>
  );
}
