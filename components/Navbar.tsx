"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500">
            <FileText className="h-5 w-5 text-white" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              SFN Tools
            </h2>

            <p className="text-xs text-zinc-400">
              YouTube Transcript Generator
            </p>
          </div>

        </Link>

        <div className="flex items-center gap-8">

          <Link href="/" className="text-zinc-300 hover:text-white">
            Home
          </Link>

          <Link href="#" className="text-zinc-300 hover:text-white">
            Blog
          </Link>

          <button className="rounded-xl bg-violet-600 px-5 py-2 text-white hover:bg-violet-500">
            Free
          </button>

        </div>

      </div>
    </header>
  );
}