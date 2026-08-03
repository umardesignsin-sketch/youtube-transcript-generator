import {
  Languages,
  FileText,
  Download,
  Zap,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-violet-600" />,
    title: "Instant Generation",
    description:
      "Generate transcripts from YouTube videos in seconds without waiting.",
  },
  {
    icon: <Languages className="h-8 w-8 text-blue-600" />,
    title: "100+ Languages",
    description:
      "Supports manually created and auto-generated subtitles in over 100 languages.",
  },
  {
    icon: <Download className="h-8 w-8 text-green-600" />,
    title: "Download Easily",
    description:
      "Copy or download transcripts for research, SEO, AI prompts, or study notes.",
  },
  {
    icon: <Search className="h-8 w-8 text-orange-500" />,
    title: "Perfect for Research",
    description:
      "Quickly find information from long YouTube videos without watching everything.",
  },
  {
    icon: <FileText className="h-8 w-8 text-pink-600" />,
    title: "AI Ready",
    description:
      "Use transcripts directly with ChatGPT, Claude, Gemini or any AI assistant.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-cyan-600" />,
    title: "Free Forever",
    description:
      "No registration. No login. No subscriptions. Just paste the URL and go.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything you need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Built for creators, students, marketers, researchers,
            developers and anyone who needs YouTube transcripts instantly.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}