"use client";

import { Download, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function downloadHref(url: string, filename: string) {
  return `${API_URL}/download-file?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
}

function audioHref(url: string, filename: string) {
  return `${API_URL}/extract-audio?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
}

export type MediaItem = {
  is_video: boolean;
  video?: string | null;
  image?: string | null;
};

export default function MediaResultCard({
  title,
  subtitle,
  thumbnail,
  items,
  baseName,
}: {
  title?: string;
  subtitle?: string;
  thumbnail?: string | null;
  items: MediaItem[];
  baseName: string;
}) {
  return (
    <div className="mx-auto mt-14 max-w-4xl space-y-8">
      {(title || subtitle) && (
        <div className="text-center">
          {title && (
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          )}
          {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const mediaUrl = item.is_video ? item.video : item.image;
          if (!mediaUrl) return null;

          const filename = `${baseName}-${i + 1}.${item.is_video ? "mp4" : "jpg"}`;

          return (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              <div className="relative aspect-[9/16] w-full bg-slate-100">
                {item.is_video ? (
                  <video
                    src={item.video!}
                    poster={thumbnail || undefined}
                    controls
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={mediaUrl}
                    alt="Downloaded media"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="flex gap-2 p-4">
                <a
                  href={downloadHref(mediaUrl, filename)}
                  className="flex-1"
                >
                  <Button className="w-full bg-violet-600 text-white hover:bg-violet-700">
                    <Download className="mr-2 h-4 w-4" />
                    {item.is_video ? "Download Video" : "Download Image"}
                  </Button>
                </a>

                {item.is_video && (
                  <a
                    href={audioHref(item.video!, `${baseName}-${i + 1}.mp3`)}
                    title="Download audio only (MP3)"
                  >
                    <Button
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:bg-slate-50"
                    >
                      <Music className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
