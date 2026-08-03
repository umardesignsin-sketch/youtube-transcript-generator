"use client";

import { Copy, Clock, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TranscriptCard({
  data,
}: {
  data: any;
}) {
  const transcript = data.transcript || [];

  const text = transcript.map((t: any) => t.text).join(" ");

  async function copyTranscript() {
    await navigator.clipboard.writeText(text);
    alert("Transcript copied!");
  }

  const mins = Math.floor((data.duration || 0) / 60);
  const secs = (data.duration || 0) % 60;

  return (
    <div className="mx-auto mt-14 max-w-6xl">

      {/* VIDEO CARD */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

        <div className="grid md:grid-cols-[340px_1fr]">

          <img
            src={data.thumbnail}
            alt={data.title}
            className="h-full w-full object-cover"
          />

          <div className="flex flex-col justify-between p-8">

            <div>

              <h2 className="text-4xl font-bold leading-tight text-slate-900">
                {data.title}
              </h2>

              <p className="mt-4 text-lg text-slate-500">
                {data.channel}
              </p>

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

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <h2 className="text-3xl font-bold text-slate-900">
            Transcript
          </h2>

          <Button
            onClick={copyTranscript}
            className="bg-violet-600 text-white hover:bg-violet-700"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Transcript
          </Button>

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