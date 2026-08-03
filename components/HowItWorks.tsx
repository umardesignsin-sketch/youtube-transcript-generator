import { Link2, FileText, Download } from "lucide-react";

const steps = [
  {
    icon: <Link2 className="h-10 w-10 text-violet-600" />,
    title: "Paste YouTube URL",
    description:
      "Copy any YouTube video URL and paste it into the transcript generator.",
  },
  {
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    title: "Generate Transcript",
    description:
      "Our tool instantly extracts the transcript and video information.",
  },
  {
    icon: <Download className="h-10 w-10 text-green-600" />,
    title: "Copy or Download",
    description:
      "Copy the transcript or download it for SEO, research, AI or study.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Get your transcript in seconds
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Three simple steps. No signup required.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center"
            >

              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-violet-600 text-white font-bold">
                {index + 1}
              </div>

              <div className="mt-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}