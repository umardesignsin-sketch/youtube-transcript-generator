import {
  GraduationCap,
  PenSquare,
  Search,
  Brain,
  Briefcase,
  Globe,
} from "lucide-react";
import FadeIn from "./FadeIn";

const useCases = [
  {
    icon: <GraduationCap className="h-8 w-8 text-green-600" />,
    title: "Students",
    description:
      "Take notes faster from lectures, tutorials and educational videos without watching them repeatedly.",
  },
  {
    icon: <PenSquare className="h-8 w-8 text-blue-600" />,
    title: "Content Creators",
    description:
      "Repurpose YouTube videos into blogs, newsletters, social media posts and scripts in minutes.",
  },
  {
    icon: <Search className="h-8 w-8 text-green-600" />,
    title: "SEO Professionals",
    description:
      "Extract valuable keywords, FAQs and content ideas from high-performing YouTube videos.",
  },
  {
    icon: <Brain className="h-8 w-8 text-pink-600" />,
    title: "AI Workflows",
    description:
      "Use transcripts with ChatGPT, Claude and Gemini to summarize, rewrite or analyze videos instantly.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-orange-500" />,
    title: "Researchers",
    description:
      "Quickly search long interviews, podcasts and webinars without manually watching every minute.",
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-600" />,
    title: "Everyone",
    description:
      "Anyone who needs a fast, free and accurate YouTube transcript can use this tool from any device.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Use Cases
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Who Uses Our YouTube Transcript Generator?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Thousands of people use YouTube transcripts every day to study,
            create content, perform research, improve SEO and work more
            efficiently with AI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}