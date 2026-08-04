import UrlForm from "./UrlForm";

export default function GeneratorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
            🚀 Free Forever • No Sign-Up • Instant Results
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Free YouTube
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Transcript Generator
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Generate accurate transcripts from any public YouTube video in
            seconds. Copy, search and download transcripts for studying,
            research, SEO, AI prompts, content creation and more.
          </p>

          <div className="mt-12">
            <UrlForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              ⚡ Instant Generation
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              🌍 100+ Languages
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              📄 TXT Download
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              🤖 AI Ready
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              🔒 No Login Required
            </span>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Why use our YouTube Transcript Generator?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our tool lets you instantly extract transcripts from YouTube
              videos without installing software or creating an account.
              Whether you're a student taking notes, a creator repurposing
              videos, a marketer doing competitor research or a developer using
              AI, you can generate and download transcripts with just one click.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}