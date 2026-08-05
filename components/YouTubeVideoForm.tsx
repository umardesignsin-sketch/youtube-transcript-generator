"use client";

import { useState } from "react";
import { Loader2, Link2, Download, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Quality = { label: string; format_id: string };

type VideoInfo = {
  video_id: string;
  title: string;
  channel: string;
  duration: number;
  thumbnail: string;
  qualities: Quality[];
  has_audio_option: boolean;
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

  function buildDownloadHref(formatId: string, ext: "mp4" | "mp3") {
    const name = `${info?.title || "video"}.${ext}`;
    return `${API_URL}/youtube/download?url=${encodeURIComponent(url)}&format_id=${encodeURIComponent(
      formatId
    )}&filename=${encodeURIComponent(name)}`;
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
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-slate-500">
                    Choose a quality
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {info.qualities.map((q) => (
                      <a key={q.format_id} href={buildDownloadHref(q.format_id, "mp4")}>
                        <Button
                          variant="outline"
                          className="border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          {q.label}
                        </Button>
                      </a>
                    ))}

                    {info.has_audio_option && (
                      <a href={buildDownloadHref("audio", "mp3")}>
                        <Button
                          variant="outline"
                          className="border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                        >
                          <Music className="mr-2 h-4 w-4" />
                          Audio (MP3)
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
