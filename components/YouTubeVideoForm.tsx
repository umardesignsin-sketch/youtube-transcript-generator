"use client";

import { useState } from "react";
import { Loader2, Link2, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type VideoInfo = {
  video_id: string;
  title: string;
  channel: string;
  duration: number;
  thumbnail: string;
  resolution?: string;
};

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s}s`;
}

export default function YouTubeVideoForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<VideoInfo | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setLoading(true);
    setError("");
    setInfo(null);

    try {
      const res = await fetch(`${API_URL}/youtube/info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setInfo(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  const downloadHref = info
    ? `${API_URL}/youtube/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(
        `${info.title || "video"}.mp4`
      )}`
    : "";

  return (
    <>
      <div className="mx-auto max-w-4xl rounded-[30px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Link2 className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste a YouTube video URL..."
              className="h-16 rounded-2xl border-0 bg-slate-100 pl-14 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-violet-500"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading || !url}
            className="h-16 rounded-2xl bg-violet-600 px-10 text-white transition hover:bg-violet-700"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Fetching...
              </>
            ) : (
              "Get Video"
            )}
          </Button>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}
      </div>

      {info && (
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="grid md:grid-cols-[280px_1fr]">
              <img
                src={info.thumbnail}
                alt={info.title}
                className="h-full w-full object-cover"
              />

              <div className="flex flex-col justify-between p-8">
                <div>
                  <h2 className="text-2xl font-bold leading-tight text-slate-900">
                    {info.title}
                  </h2>

                  {info.channel && (
                    <p className="mt-3 text-slate-500">{info.channel}</p>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-slate-600">
                    <Clock className="h-4 w-4" />
                    {formatDuration(info.duration)}
                    {info.resolution && (
                      <span className="ml-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                        {info.resolution}
                      </span>
                    )}
                  </div>
                </div>

                <a href={downloadHref} className="mt-6">
                  <Button className="w-full bg-violet-600 text-white hover:bg-violet-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Video
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
