import JsonLd from "./JsonLd";

export type FaqItem = { q: string; a: string };

const defaultFaqs: FaqItem[] = [
  {
    q: "Is this YouTube Transcript Generator free?",
    a: "Yes. Our YouTube Transcript Generator is completely free to use. There are no subscriptions, hidden fees or account requirements.",
  },
  {
    q: "How do I get a transcript from a YouTube video?",
    a: "Simply paste any public YouTube video URL into the input box and click Generate. The transcript will be extracted in seconds, allowing you to copy, search or download it.",
  },
  {
    q: "Can I download YouTube transcripts?",
    a: "Yes. You can copy the transcript, or download it as a plain TXT file, a timestamped TXT file, or an SRT subtitle file for studying, content creation, research or AI workflows.",
  },
  {
    q: "Does it work with YouTube Shorts?",
    a: "Yes. It supports YouTube Shorts as long as the video has captions or transcripts available.",
  },
  {
    q: "Which languages are supported?",
    a: "The tool supports more than 100 languages, depending on the subtitles or captions available for the original YouTube video.",
  },
  {
    q: "Can I use the transcript with ChatGPT or other AI tools?",
    a: "Absolutely. You can copy the generated transcript and use it with ChatGPT, Claude, Gemini or any other AI assistant to summarize videos, create notes, generate articles or perform research.",
  },
  {
    q: "Do I need to install any software?",
    a: "No. Everything works directly in your browser. No extensions, downloads or software installation are required.",
  },
  {
    q: "Does this work with private or members-only YouTube videos?",
    a: "No. The tool only works with public YouTube videos that have transcripts or captions available.",
  },
];

export default function FAQ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  description = "Learn how our free YouTube Transcript Generator works and find answers to the most common questions.",
}: {
  faqs?: FaqItem[];
  title?: string;
  description?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="bg-slate-50 py-24">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">{title}</h2>

          <p className="mt-4 text-slate-600">{description}</p>
        </div>

        <div className="mt-14 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.q}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
