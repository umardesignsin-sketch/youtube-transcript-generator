"use client";

import { useState } from "react";
import { Loader2, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MediaResultCard, { MediaItem } from "./MediaResultCard";

type ParsedResult = {
  items: MediaItem[];
  title?: string;
  subtitle?: string;
  thumbnail?: string | null;
  baseName: string;
};

type ResultKind = "pinterest";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function parseResult(kind: ResultKind, data: any): ParsedResult {
  switch (kind) {
    case "pinterest":
      return {
        items: [{ is_video: data.is_video, video: data.video, image: data.image }],
        title: data.title,
        thumbnail: data.thumbnail,
        baseName: `pinterest-${data.pin_id}`,
      };
  }
}

export default function MediaDownloadForm({
  endpoint,
  placeholder,
  buttonLabel = "Download",
  kind,
}: {
  endpoint: string;
  placeholder: string;
  buttonLabel?: string;
  kind: ResultKind;
}) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ParsedResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setResult(parseResult(kind, data));
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="mx-auto max-w-4xl rounded-[30px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Link2 className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholder}
              className="h-16 rounded-2xl border-0 bg-slate-100 pl-14 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-green-500"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading || !url}
            className="h-16 rounded-2xl bg-green-600 px-10 text-white transition hover:bg-green-700"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Fetching...
              </>
            ) : (
              buttonLabel
            )}
          </Button>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}
      </div>

      {result && (
        <MediaResultCard
          title={result.title}
          subtitle={result.subtitle}
          thumbnail={result.thumbnail}
          items={result.items}
          baseName={result.baseName}
        />
      )}
    </>
  );
}
