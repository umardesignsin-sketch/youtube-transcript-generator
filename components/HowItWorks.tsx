import { Link2, FileText, Download } from "lucide-react";
import JsonLd from "./JsonLd";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: <Link2 className="h-10 w-10 text-green-600" />,
    title: "Paste Your YouTube Video URL",
    description:
      "Copy the URL of any public YouTube video and paste it into our free YouTube Transcript Generator.",
  },
  {
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    title: "Generate the Transcript",
    description:
      "Our tool instantly extracts the transcript, captions and video information, making it easy to read, search and copy.",
  },
  {
    icon: <Download className="h-10 w-10 text-green-600" />,
    title: "Copy or Download",
    description:
      "Copy the transcript or download it as a TXT file for studying, SEO, AI prompts, research, documentation or content creation.",
  },
];

export default function HowItWorks() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a YouTube Transcript",
    description:
      "Paste a YouTube video link, generate the transcript instantly and copy or download it for free.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <section className="bg-white py-24">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Generate a YouTube Transcript in 3 Simple Steps
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Paste a YouTube video link, generate the transcript instantly and
            copy or download it for free. No registration or software
            installation required.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="mt-6 flex justify-center">{step.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}