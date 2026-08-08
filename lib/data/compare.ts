import type { FaqItem } from "@/components/FAQ";

export type ComparePage = {
  slug: string;
  competitor: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  points: { label: string; us: string; them: string }[];
  faqs: FaqItem[];
};

export const comparisons: ComparePage[] = [
  {
    slug: "tactiq",
    competitor: "Tactiq",
    metaTitle: "SaveFromNet vs Tactiq — Free Alternative",
    metaDescription:
      "Comparing SaveFromNet and Tactiq for generating YouTube transcripts. See the difference in setup, pricing model and export formats.",
    heading: "SaveFromNet vs Tactiq",
    intro: [
      "Tactiq is primarily built as a browser extension focused on live meeting transcription (Zoom, Google Meet, Teams) that also supports YouTube. SaveFromNet is a lightweight web tool built specifically for one job: pasting a YouTube link and getting a transcript back instantly.",
      "If you just need a fast, one-off YouTube transcript without installing an extension or setting up an account, a dedicated web tool is generally the faster path.",
    ],
    points: [
      { label: "Setup", us: "No install, use directly in browser", them: "Browser extension install required" },
      { label: "Account required", us: "No sign-up needed", them: "Account required for full features" },
      { label: "Focus", us: "Purpose-built for YouTube transcripts", them: "Meeting transcription first, YouTube as one use case" },
      { label: "Export formats", us: "TXT, timestamped TXT, SRT", them: "Varies by plan" },
    ],
    faqs: [
      {
        q: "Do I need to install anything to use SaveFromNet?",
        a: "No. It runs entirely in your browser — just paste a YouTube URL and generate the transcript.",
      },
      {
        q: "Is SaveFromNet free?",
        a: "Yes, it's free with no sign-up required for generating and downloading YouTube transcripts.",
      },
    ],
  },
  {
    slug: "notegpt",
    competitor: "NoteGPT",
    metaTitle: "SaveFromNet vs NoteGPT — Free Alternative",
    metaDescription:
      "Comparing SaveFromNet and NoteGPT for extracting YouTube transcripts. See the difference in pricing, sign-up and simplicity.",
    heading: "SaveFromNet vs NoteGPT",
    intro: [
      "NoteGPT bundles transcript extraction with AI summarization, note-taking and flashcard features. SaveFromNet keeps things simple: paste a link, get the transcript, copy or download it — no bundled AI features to navigate around.",
      "If you specifically want AI-generated summaries and study tools, a bundled product like NoteGPT adds more surface area. If you just want the raw transcript text fast, a single-purpose tool is more direct.",
    ],
    points: [
      { label: "Core purpose", us: "Transcript extraction only", them: "Transcript extraction plus AI summarization tools" },
      { label: "Account required", us: "No sign-up needed", them: "Account typically required for saving/history" },
      { label: "Export formats", us: "TXT, timestamped TXT, SRT", them: "Varies by plan" },
      { label: "Interface", us: "Single-page, paste-and-go", them: "Multi-feature dashboard" },
    ],
    faqs: [
      {
        q: "Does SaveFromNet offer AI summaries?",
        a: "Not built in — the focus is on fast, accurate transcript extraction. You can paste the output into any AI tool yourself for summarization.",
      },
      {
        q: "Is there a free tier limit?",
        a: "No, SaveFromNet's transcript generator is free to use without account-based limits.",
      },
    ],
  },
  {
    slug: "downsub",
    competitor: "DownSub",
    metaTitle: "SaveFromNet vs DownSub — Free Alternative",
    metaDescription:
      "Comparing SaveFromNet and DownSub for downloading YouTube subtitles and transcripts, including formats and interface.",
    heading: "SaveFromNet vs DownSub",
    intro: [
      "DownSub is a long-standing subtitle downloader that supports YouTube and several other video platforms. SaveFromNet is focused specifically on YouTube, with a simpler single-step flow and a modern export set (TXT, timestamped TXT and SRT).",
      "If you need subtitles from platforms beyond YouTube, a multi-platform tool like DownSub covers more ground. For YouTube specifically, SaveFromNet's flow is built to be as few clicks as possible.",
    ],
    points: [
      { label: "Platform focus", us: "YouTube only, purpose-built", them: "Multiple video platforms" },
      { label: "Export formats", us: "TXT, timestamped TXT, SRT", them: "SRT, VTT, TXT depending on source" },
      { label: "Account required", us: "No sign-up needed", them: "No sign-up needed" },
      { label: "Video info shown", us: "Title, channel, thumbnail, duration", them: "Varies by video" },
    ],
    faqs: [
      {
        q: "Does SaveFromNet support platforms other than YouTube?",
        a: "Not currently — it's purpose-built for YouTube videos.",
      },
      {
        q: "Can I download an SRT file?",
        a: "Yes, alongside plain TXT and timestamped TXT exports.",
      },
    ],
  },
  {
    slug: "youtubetotranscript",
    competitor: "YouTubeToTranscript.com",
    metaTitle: "SaveFromNet vs YouTubeToTranscript.com",
    metaDescription:
      "Comparing SaveFromNet and YouTubeToTranscript.com for generating free YouTube video transcripts, formats and features.",
    heading: "SaveFromNet vs YouTubeToTranscript.com",
    intro: [
      "Both tools do the same core job: paste a YouTube link, get a transcript. The difference comes down to export options and the extras built around the core tool.",
      "SaveFromNet adds a timestamped TXT export and an SRT subtitle export alongside the standard plain-text copy and download, so the same transcript can be reused for subtitles, notes or citations without extra conversion.",
    ],
    points: [
      { label: "Core purpose", us: "Transcript extraction, purpose-built for YouTube", them: "Transcript extraction, purpose-built for YouTube" },
      { label: "Export formats", us: "TXT, timestamped TXT, SRT", them: "Varies" },
      { label: "Account required", us: "No sign-up needed", them: "No sign-up needed" },
      { label: "Price", us: "Free", them: "Free" },
    ],
    faqs: [
      {
        q: "What's the main difference between the two?",
        a: "The core transcript extraction is similar. SaveFromNet differentiates on export formats — plain TXT, timestamped TXT and SRT — from a single generation step.",
      },
      {
        q: "Is SaveFromNet also free?",
        a: "Yes, completely free with no sign-up required.",
      },
    ],
  },
  {
    slug: "y2mate",
    competitor: "Y2mate",
    metaTitle: "SaveFromNet vs Y2mate — Free Alternative",
    metaDescription:
      "Comparing SaveFromNet and Y2mate for downloading YouTube videos and audio. See the difference in ads, redirects and quality options.",
    heading: "SaveFromNet vs Y2mate",
    intro: [
      "Y2mate is one of the older, better-known names for downloading YouTube videos and audio, but it's also known for heavy ad load and redirect pop-ups on many mirror domains. SaveFromNet's YouTube Video Downloader is a single, ad-light page: paste a link, pick a quality, download.",
      "If you've landed on a Y2mate mirror and hit unexpected redirects or download buttons that aren't really download buttons, a simpler tool is usually the less frustrating path.",
    ],
    points: [
      { label: "Interface", us: "Single page, no redirects", them: "Ad-heavy, redirect pop-ups on many mirrors" },
      { label: "Quality options", us: "Only qualities that actually exist for the video", them: "Lists qualities that sometimes fail to download" },
      { label: "Account required", us: "No sign-up needed", them: "No sign-up needed" },
      { label: "Audio download", us: "Dedicated MP3 button", them: "Separate audio conversion step" },
    ],
    faqs: [
      {
        q: "Is SaveFromNet like Y2mate?",
        a: "Both let you download YouTube videos for free without an account, but SaveFromNet is built as a single ad-light page with direct quality buttons instead of redirect-heavy download flows.",
      },
      {
        q: "Can I download YouTube audio only, like on Y2mate?",
        a: "Yes — the YouTube Video Downloader includes a dedicated Audio (MP3) option alongside video qualities.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}
