"use client";

import { Copy, Clock, Languages, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function pad(n: number, size = 2) {
  return String(Math.floor(n)).padStart(size, "0");
}

function toSrtTimestamp(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.round((seconds - Math.floor(seconds)) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(s)},${pad(ms, 3)}`;
}

function toTimestamp(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${pad(m)}:${pad(s)}`;
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function TranscriptCard({
  data,
}: {
  data: any;
}) {
  const transcript = data.transcript || [];

  const text = transcript.map((t: any) => t.text).join(" ");
  const baseName = (data.video_id || "youtube-transcript") as string;

  async function copyTranscript() {
    await navigator.clipboard.writeText(text);
    alert("Transcript copied!");
  }

  function downloadTxt() {
    downloadFile(`${baseName}.txt`, text, "text/plain");
  }

  function downloadTimestampedTxt() {
    const content = transcript
      .map((t: any) => `[${toTimestamp(t.start)}] ${t.text}`)
      .join("\n");
    downloadFile(`${baseName}-timestamped.txt`, content, "text/plain");
  }

  function downloadSrt() {
    const content = transcript
      .map((t: any, i: number) => {
        const start = toSrtTimestamp(t.start);
        const end = toSrtTimestamp(t.start + (t.duration || 2));
        return `${i + 1}\n${start} --> ${end}\n${t.text}\n`;
      })
      .join("\n");
    downloadFile(`${baseName}.srt`, content, "text/plain");
  }

  const durationSource =
    data.duration ||
    (transcript.length
      ? transcript[transcript.length - 1].start +
        (transcript[transcript.length - 1].duration || 0)
      : 0);

  const mins = Math.floor(durationSource / 60);
  const secs = Math.round(durationSource % 60);

  return (
    <div className="mx-auto mt-14 max-w-6xl">

      {/* VIDEO CARD */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

        <div className="grid md:grid-cols-[340px_1fr]">

          <div className="aspect-video w-full self-start overflow-hidden bg-slate-100">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between p-8">

            <div>

              <h2 className="text-4xl font-bold leading-tight text-slate-900">
                {data.title || "YouTube Video Transcript"}
              </h2>

              {data.channel && (
                <p className="mt-4 text-lg text-slate-500">
                  {data.channel}
                </p>
              )}

            </div>

            <div className="mt-8 flex flex-wrap gap-8 text-slate-600">

              <div className="flex items-center gap-2">
                <Languages size={20} />
                {data.selected_language}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={20} />
                {mins}m {secs}s
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TRANSCRIPT */}

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-8 py-6">

          <h2 className="text-3xl font-bold text-slate-900">
            Transcript
          </h2>

          <div className="flex flex-wrap gap-3">

            <Button
              onClick={copyTranscript}
              className="bg-violet-600 text-white hover:bg-violet-700"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>

            <Button
              onClick={downloadTxt}
              variant="outline"
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Download className="mr-2 h-4 w-4" />
              TXT
            </Button>

            <Button
              onClick={downloadTimestampedTxt}
              variant="outline"
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Clock className="mr-2 h-4 w-4" />
              TXT + Timestamps
            </Button>

            <Button
              onClick={downloadSrt}
              variant="outline"
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <FileDown className="mr-2 h-4 w-4" />
              SRT
            </Button>

          </div>

        </div>

        <div className="px-10 py-10">

          <p className="whitespace-pre-wrap text-lg leading-10 text-slate-700">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}