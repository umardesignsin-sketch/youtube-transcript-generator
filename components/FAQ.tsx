export default function FAQ() {
  const faqs = [
    {
      q: "Is this YouTube Transcript Generator free?",
      a: "Yes. It is completely free and requires no account.",
    },
    {
      q: "Does it work with YouTube Shorts?",
      a: "Yes. It works with Shorts as long as transcripts are available.",
    },
    {
      q: "Which languages are supported?",
      a: "More than 100 languages depending on the subtitles available for each video.",
    },
    {
      q: "Can I copy the transcript?",
      a: "Yes. One click is all it takes.",
    },
    {
      q: "Do I need to install anything?",
      a: "No. Everything works directly in your browser.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know.
          </p>
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

              <p className="mt-3 leading-7 text-slate-600">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}