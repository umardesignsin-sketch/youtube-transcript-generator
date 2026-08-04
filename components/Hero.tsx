import UrlForm from "./UrlForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
        <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-violet-700 shadow-md">
            🚀 Free • No Login • Unlimited Transcripts
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight leading-[1.05] text-slate-900 md:text-6xl">
            Free
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              YouTube Transcript Generator
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Generate, copy, search and download transcripts from any public
            YouTube video in seconds. Perfect for students, creators,
            researchers, marketers and developers who need accurate video
            transcripts for SEO, AI, learning and content creation.
          </p>

          <div className="mt-12">
            <UrlForm />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-slate-500">
            Paste any YouTube video URL above to instantly extract the full
            transcript. Copy the text, export it as TXT, or use it with your
            favorite AI tools like ChatGPT, Claude and Gemini.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
            <span>⚡ Instant Results</span>
            <span>🌍 100+ Languages</span>
            <span>📄 Copy & Download</span>
            <span>🤖 AI Ready</span>
            <span>🔒 No Sign-Up Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}