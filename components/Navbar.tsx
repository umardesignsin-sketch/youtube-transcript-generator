"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoMark from "./Logo";

const links = [
  { href: "/youtube-to-transcript", label: "YouTube to Transcript" },
  { href: "/downloaders", label: "Downloaders" },
  { href: "/youtube-transcript-for", label: "Use Cases" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />

          <div>
            <h2 className="text-lg font-bold leading-tight text-white">
              SFN Tools
            </h2>
            <p className="hidden text-xs text-zinc-400 sm:block">
              Free Video & Transcript Tools
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/youtube-transcript-generator"
            className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
          >
            Free
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/youtube-transcript-generator"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-violet-500"
            >
              Generate a Transcript — Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
