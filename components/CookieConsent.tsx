"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={gaId} />}

      {ready && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-zinc-950/95 px-6 py-5 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm leading-6 text-zinc-300">
              We use cookies for basic usage analytics. No personal profile,
              no ads. See our{" "}
              <Link href="/privacy-policy" className="text-violet-400 underline hover:text-violet-300">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            <div className="flex shrink-0 gap-3">
              <Button
                onClick={() => choose("declined")}
                variant="outline"
                className="border-white/20 bg-transparent text-zinc-200 hover:bg-white/10"
              >
                Decline
              </Button>
              <Button
                onClick={() => choose("accepted")}
                className="bg-violet-600 text-white hover:bg-violet-700"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
