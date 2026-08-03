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
            ✨ Free • No Login Required
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight leading-[1.05] text-slate-900 md:text-6xl">

            YouTube

            <br />

            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Transcript Generator
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">

            Instantly generate transcripts from any YouTube video.

            Copy, search, download and use them for

            SEO, AI, studying, research and content creation.

          </p>

          <div className="mt-12">
            <UrlForm />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-10 text-sm font-medium text-slate-500">

            <span>⚡ Instant</span>

            <span>🌍 100+ Languages</span>

            <span>📄 TXT Export</span>

            <span>🤖 AI Ready</span>

            <span>💯 Free Forever</span>

          </div>

        </div>

      </div>

    </section>
  );
}