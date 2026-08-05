import type { FaqItem } from "@/components/FAQ";

export type ToolPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  steps: string[];
  faqs: FaqItem[];
};

export const tools: ToolPage[] = [
  {
    slug: "youtube-to-srt",
    title: "YouTube to SRT Converter",
    metaTitle: "YouTube to SRT Converter — Free Subtitle Download",
    metaDescription:
      "Convert any public YouTube video into a downloadable .srt subtitle file for free. No sign-up, no software, works in your browser.",
    heading: "YouTube to SRT Converter",
    intro: [
      "Turn a YouTube video's captions into a properly formatted .srt subtitle file — the standard format supported by video editors, media players and subtitle software.",
      "The SRT file is generated directly from the video's existing captions, with numbered cues and start/end timestamps for every line, so it drops straight into your editing workflow.",
    ],
    steps: [
      "Paste the YouTube video URL into the box below.",
      "Click Generate Transcript and wait a few seconds.",
      "Click the SRT button to download the subtitle file.",
    ],
    faqs: [
      {
        q: "What is an SRT file used for?",
        a: "SRT (SubRip Subtitle) is a widely supported subtitle format used by video editors, media players and video platforms to display timed captions.",
      },
      {
        q: "Will the SRT file be perfectly synced?",
        a: "Timing comes directly from YouTube's own caption data, so it matches what's shown on the video. Auto-generated captions can occasionally have minor timing drift.",
      },
      {
        q: "Is the SRT converter free?",
        a: "Yes, completely free with no sign-up or limits on the number of conversions.",
      },
    ],
  },
  {
    slug: "youtube-transcript-with-timestamps",
    title: "YouTube Transcript with Timestamps",
    metaTitle: "YouTube Transcript with Timestamps — Free Generator",
    metaDescription:
      "Get a YouTube video transcript with a timestamp on every line. Free, instant, and downloadable as a TXT file.",
    heading: "YouTube Transcript with Timestamps",
    intro: [
      "A plain transcript is great for reading, but sometimes you need to know exactly when something was said. This generates a transcript with a [MM:SS] timestamp on every line.",
      "Useful for building chapter markers, citing a quote to the exact moment, or jumping back into the source video to verify context.",
    ],
    steps: [
      "Paste the YouTube video URL into the box below.",
      "Click Generate Transcript and wait a few seconds.",
      "Click the 'TXT + Timestamps' button to download the timestamped file.",
    ],
    faqs: [
      {
        q: "What format are the timestamps in?",
        a: "Timestamps are shown as minutes:seconds (MM:SS) at the start of each line, matching the point in the video where that line is spoken.",
      },
      {
        q: "Can I use this to create YouTube chapters?",
        a: "Yes. The timestamps make it easy to identify where each topic starts and build chapter markers for your own video description.",
      },
      {
        q: "Is there a limit to video length?",
        a: "No, the tool works the same way regardless of video length.",
      },
    ],
  },
  {
    slug: "youtube-transcript-to-text",
    title: "YouTube Transcript to Text (TXT)",
    metaTitle: "YouTube Transcript to Text (TXT) — Free Download",
    metaDescription:
      "Extract the plain text transcript of any public YouTube video and download it as a clean .txt file, free and instant.",
    heading: "YouTube Transcript to Plain Text",
    intro: [
      "Get the full spoken text of a YouTube video as a clean, punctuation-free plain text file — ready to paste into a document, notes app or AI prompt.",
      "No timestamps or clutter, just the words of the video in a single readable block of text.",
    ],
    steps: [
      "Paste the YouTube video URL into the box below.",
      "Click Generate Transcript and wait a few seconds.",
      "Click the TXT button to download the plain text file, or use Copy to paste it anywhere.",
    ],
    faqs: [
      {
        q: "Is the text file editable?",
        a: "Yes, it's a plain .txt file you can open and edit in any text editor, word processor or notes app.",
      },
      {
        q: "Does the text include speaker names?",
        a: "Speaker labels depend on what's included in the video's original captions. Most auto-generated captions don't include speaker names.",
      },
      {
        q: "Can I paste this into ChatGPT or Claude?",
        a: "Yes, the plain text format is ideal for pasting directly into any AI chat tool for summarizing or analysis.",
      },
    ],
  },
  {
    slug: "youtube-caption-downloader",
    title: "YouTube Caption Downloader",
    metaTitle: "YouTube Caption Downloader — Free & Instant",
    metaDescription:
      "Download YouTube captions and subtitles for free as TXT or SRT. No sign-up, no browser extension required.",
    heading: "YouTube Caption Downloader",
    intro: [
      "Download the captions from any public YouTube video without installing a browser extension or signing up for an account.",
      "Choose plain text, timestamped text, or SRT subtitle format depending on what you need the captions for.",
    ],
    steps: [
      "Paste the YouTube video URL into the box below.",
      "Click Generate Transcript and wait a few seconds.",
      "Choose TXT, TXT + Timestamps, or SRT to download the captions.",
    ],
    faqs: [
      {
        q: "Do I need a browser extension?",
        a: "No, everything runs on the website directly — no extension or software install required.",
      },
      {
        q: "Can I download captions in multiple formats?",
        a: "Yes. You can download plain TXT, timestamped TXT, or SRT subtitle format from the same generated transcript.",
      },
      {
        q: "Does this work if the video only has auto-generated captions?",
        a: "Yes, it works with both manually created and auto-generated YouTube captions.",
      },
    ],
  },
  {
    slug: "youtube-transcript-to-pdf",
    title: "YouTube Transcript to PDF",
    metaTitle: "YouTube Transcript to PDF — Free Save as PDF",
    metaDescription:
      "Generate a YouTube transcript and save it as a PDF straight from your browser's print dialog. Free, no software needed.",
    heading: "YouTube Transcript to PDF",
    intro: [
      "Generate the transcript, then use your browser's built-in print dialog to save it as a clean PDF — no separate PDF software or upload required.",
      "This keeps the process free and works entirely on-device: the transcript never has to be uploaded to a third-party PDF converter.",
    ],
    steps: [
      "Paste the YouTube video URL into the box below and click Generate Transcript.",
      "Once the transcript loads, press Ctrl+P (or Cmd+P on Mac) to open the print dialog.",
      "Choose 'Save as PDF' as the destination and save the file.",
    ],
    faqs: [
      {
        q: "Do I need special software to make a PDF?",
        a: "No. Every modern browser (Chrome, Edge, Firefox, Safari) can save a page as a PDF directly from the print dialog, so no extra software is needed.",
      },
      {
        q: "Is my transcript uploaded anywhere to create the PDF?",
        a: "No. The PDF is created locally by your browser's print function — the transcript text isn't sent to any third-party converter.",
      },
      {
        q: "Can I still copy or download the TXT/SRT version?",
        a: "Yes, the Copy, TXT, TXT + Timestamps and SRT options are all still available on the same page.",
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
