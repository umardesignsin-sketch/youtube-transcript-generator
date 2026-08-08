import {
  Languages,
  FileText,
  Download,
  Zap,
  Search,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "./FadeIn";

export type FeatureItem = { title: string; description: string };

const icons = [
  <Zap key="zap" className="h-8 w-8 text-green-600" />,
  <Languages key="languages" className="h-8 w-8 text-blue-600" />,
  <Download key="download" className="h-8 w-8 text-green-600" />,
  <Search key="search" className="h-8 w-8 text-orange-500" />,
  <FileText key="filetext" className="h-8 w-8 text-pink-600" />,
  <ShieldCheck key="shield" className="h-8 w-8 text-cyan-600" />,
];

const defaultFeatures: FeatureItem[] = [
  {
    title: "Instant YouTube Transcript Generation",
    description:
      "Generate accurate transcripts from any public YouTube video in seconds with no waiting or complicated setup.",
  },
  {
    title: "Supports 100+ Languages",
    description:
      "Extract transcripts from YouTube videos in more than 100 languages, including both manually created and auto-generated captions.",
  },
  {
    title: "Copy & Download Transcripts",
    description:
      "Copy the transcript instantly or download it as a TXT file for studying, SEO, research, documentation or content creation.",
  },
  {
    title: "Search Long Videos Faster",
    description:
      "Quickly find important information inside lengthy YouTube videos without watching every minute.",
  },
  {
    title: "Perfect for AI Workflows",
    description:
      "Use YouTube transcripts with ChatGPT, Claude, Gemini and other AI tools for summarization, note taking and content generation.",
  },
  {
    title: "100% Free & No Sign-Up",
    description:
      "No registration, subscriptions or software installation required. Simply paste your YouTube URL and generate the transcript instantly.",
  },
];

export default function Features({
  label = "Features",
  heading = "Everything You Need to Generate YouTube Transcripts",
  subheading = "Our free YouTube Transcript Generator helps creators, students, researchers, marketers and developers generate, copy and download transcripts from YouTube videos in just a few seconds.",
  items = defaultFeatures,
}: {
  label?: string;
  heading?: string;
  subheading?: string;
  items?: FeatureItem[];
} = {}) {
  const features = items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            {label}
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            {heading}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            {subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}