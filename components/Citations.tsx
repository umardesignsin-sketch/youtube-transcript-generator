export default function Citations() {
  return (
    <section className="bg-white pb-4">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-base leading-7 text-slate-500">
          The captions this tool reads come directly from{" "}
          <a
            href="https://support.google.com/youtube/answer/6373554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 underline"
          >
            YouTube&apos;s own automatic captioning system
          </a>
          . Captions and transcripts are also a core part of web
          accessibility — see the{" "}
          <a
            href="https://www.w3.org/WAI/media/av/captions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 underline"
          >
            W3C Web Accessibility Initiative&apos;s guidance on captions
          </a>{" "}
          for why they matter beyond just convenience.
        </p>
      </div>
    </section>
  );
}
