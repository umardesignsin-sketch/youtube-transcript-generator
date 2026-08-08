import type { FaqItem } from "@/components/FAQ";

export type UseCase = {
  slug: string;
  audience: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  tips: string[];
  faqs: FaqItem[];
};

export const useCases: UseCase[] = [
  {
    slug: "students",
    audience: "Students",
    metaTitle: "YouTube Transcript Generator for Students",
    metaDescription:
      "Turn YouTube lectures and tutorials into text notes instantly. Free transcript generator built for studying, revision and research.",
    heading: "YouTube Transcripts for Students",
    intro: [
      "Rewatching a 90-minute lecture to find one explanation is a waste of study time. Paste the video link, get the full transcript, and use Ctrl+F to jump straight to the concept you need.",
      "Because the output is plain text, you can drop it into a document, highlight key terms, or feed it into an AI tool to generate a study guide or flashcards without transcribing anything by hand.",
    ],
    tips: [
      "Search the transcript for keywords the professor repeats — they're usually exam-relevant.",
      "Download the timestamped TXT version so you can jump back to the original video at the exact moment something was explained.",
      "Paste the transcript into ChatGPT or Claude and ask for a bullet-point summary or a set of quiz questions.",
      "For long lecture series, save each transcript with the lecture number in the filename so they stay organized.",
    ],
    faqs: [
      {
        q: "Can I use this for university lecture recordings on YouTube?",
        a: "Yes, as long as the lecture is publicly available on YouTube and has captions or auto-generated subtitles.",
      },
      {
        q: "Will this help me study faster?",
        a: "Yes. Reading a transcript and searching for keywords is significantly faster than scrubbing through video to find a specific explanation.",
      },
      {
        q: "Can I turn a transcript into flashcards?",
        a: "Yes. Copy the transcript into an AI tool like ChatGPT or Claude and ask it to generate flashcards or a summary from the text.",
      },
    ],
  },
  {
    slug: "content-creators",
    audience: "Content Creators",
    metaTitle: "YouTube Transcript Generator for Content Creators",
    metaDescription:
      "Repurpose your YouTube videos into blog posts, show notes, tweets and captions in minutes with a free transcript generator.",
    heading: "YouTube Transcripts for Content Creators",
    intro: [
      "One video, five pieces of content: repurpose your own YouTube uploads into a blog post, a Twitter/X thread, LinkedIn captions and email newsletter copy — all sourced from the exact words you already said on camera.",
      "It also works on other creators' public videos for research: pull competitor scripts to study pacing, hooks and structure before you plan your next upload.",
    ],
    tips: [
      "Generate the transcript of your own video right after publishing and turn it into a companion blog post for SEO.",
      "Pull quotable lines from the transcript for social captions instead of rewatching the video to find them.",
      "Use the timestamped export to build accurate YouTube chapter markers.",
      "Compare transcripts of top-performing videos in your niche to spot common hooks and talking points.",
    ],
    faqs: [
      {
        q: "Can I get a transcript of my own YouTube video to write a blog post?",
        a: "Yes. Paste your video's URL and the tool extracts the full transcript, which you can turn into a blog post, show notes or social captions.",
      },
      {
        q: "Can I use this to build YouTube chapters?",
        a: "Yes. Download the timestamped TXT export to see exactly when each topic starts, then use those timestamps as chapter markers.",
      },
      {
        q: "Does this work on other creators' videos for research?",
        a: "Yes, on any public YouTube video with captions available, which makes it useful for competitor and niche research.",
      },
    ],
  },
  {
    slug: "researchers",
    audience: "Researchers",
    metaTitle: "YouTube Transcript Generator for Researchers",
    metaDescription:
      "Extract accurate text from interviews, panels, webinars and conference talks on YouTube for qualitative research and citation.",
    heading: "YouTube Transcripts for Researchers",
    intro: [
      "Long-form interviews, conference talks and webinars are common primary sources in qualitative research, but manually transcribing hours of footage isn't practical. Generate a full text transcript in seconds and work with the source material directly.",
      "The plain-text output is easy to paste into coding software, reference managers or a document for thematic analysis, and the timestamped version keeps a clear link back to the original recording for citation.",
    ],
    tips: [
      "Download the timestamped TXT file so you can cite the exact minute a claim was made in the source video.",
      "Search the transcript for recurring terms to quickly identify themes before formal coding.",
      "Paste sections of the transcript into qualitative analysis tools that accept plain text.",
      "Cross-check auto-generated captions against the video for names, technical terms or numbers where accuracy matters most.",
    ],
    faqs: [
      {
        q: "Is the transcript accurate enough to cite in academic work?",
        a: "Transcripts come directly from YouTube's manually created or auto-generated captions. For direct quotes in formal work, we recommend verifying exact wording against the video, especially for technical terms or names.",
      },
      {
        q: "Can I get timestamps for citations?",
        a: "Yes. The timestamped TXT export marks the time of each line, so you can reference the exact point in the source video.",
      },
      {
        q: "Does it work on conference talks and webinars?",
        a: "Yes, on any public YouTube upload that has captions or subtitles available.",
      },
    ],
  },
  {
    slug: "marketers",
    audience: "Marketers & SEO Professionals",
    metaTitle: "YouTube Transcript Generator for Marketers & SEO",
    metaDescription:
      "Pull keywords, talking points and content ideas from YouTube videos to power SEO content, ad copy and competitor research.",
    heading: "YouTube Transcripts for Marketers & SEO",
    intro: [
      "A transcript of a high-performing YouTube video is a free keyword and messaging research document. See exactly which phrases, questions and objections a topic's top creators use, then reuse that language in your own SEO content and ad copy.",
      "It also speeds up competitor research: instead of watching a competitor's product walkthrough or webinar in full, scan the transcript for pricing mentions, feature names and positioning language in seconds.",
    ],
    tips: [
      "Search competitor video transcripts for the exact phrases they use to describe their product — useful for positioning and ad copy.",
      "Pull FAQ-style questions asked in a video's transcript to build an FAQ schema section on your own page.",
      "Feed a transcript into an AI tool to extract a keyword list based on the natural language actually used around the topic.",
      "Use timestamps to jump straight to the section of a long webinar where pricing or features are discussed.",
    ],
    faqs: [
      {
        q: "Can I use this for competitor and keyword research?",
        a: "Yes. Transcripts reveal the exact language, questions and keywords used in a video, which is useful for SEO content and messaging research.",
      },
      {
        q: "Can I extract talking points for ad copy?",
        a: "Yes, copy any section of the transcript and adapt it, or feed it into an AI tool to generate ad copy variations.",
      },
      {
        q: "Is this useful for building FAQ content?",
        a: "Yes. Many videos naturally answer common questions, which you can lift from the transcript to build FAQ sections with matching schema markup.",
      },
    ],
  },
  {
    slug: "journalists",
    audience: "Journalists",
    metaTitle: "YouTube Transcript Generator for Journalists",
    metaDescription:
      "Quickly transcribe public statements, press conferences and interviews published on YouTube for reporting and fact-checking.",
    heading: "YouTube Transcripts for Journalists",
    intro: [
      "Press conferences, public statements and interviews are increasingly published first on YouTube. Get a searchable text version in seconds instead of scrubbing back and forth through the video looking for a specific quote.",
      "Because the transcript is timestamped, you can trace any quote back to the exact moment it was said, which matters when accuracy and sourcing are non-negotiable.",
    ],
    tips: [
      "Always verify a quote against the original video before publishing — auto-generated captions can misinterpret names and technical terms.",
      "Use the timestamped export to timestamp quotes precisely for sourcing.",
      "Search the transcript for keywords tied to your story angle to quickly find the relevant section of a long press conference.",
      "Keep the video URL alongside the transcript so the source stays traceable.",
    ],
    faqs: [
      {
        q: "Can I use transcripts for direct quotes in an article?",
        a: "Yes, but always cross-check the exact wording against the video first — auto-generated captions aren't always 100% accurate, especially for names and technical terms.",
      },
      {
        q: "Can I find a specific quote in a long press conference quickly?",
        a: "Yes. Generate the transcript, then search it for keywords to jump straight to the relevant section instead of scrubbing through the video.",
      },
      {
        q: "Does this work on live streams that are now published as videos?",
        a: "Yes, as long as the upload is public and has captions or subtitles available.",
      },
    ],
  },
  {
    slug: "teachers",
    audience: "Teachers & Educators",
    metaTitle: "YouTube Transcript Generator for Teachers & Educators",
    metaDescription:
      "Turn YouTube videos into reading materials, handouts and accessible lesson content for the classroom, free and instant.",
    heading: "YouTube Transcripts for Teachers & Educators",
    intro: [
      "Turn any educational YouTube video into a text handout for students who read faster than they watch, need an accessible alternative, or want written notes to review before a test.",
      "It also makes lesson planning faster: instead of rewatching a video to build discussion questions or a summary, work directly from the transcript.",
    ],
    tips: [
      "Turn a transcript into a reading comprehension handout by trimming it down to key sections.",
      "Use the transcript to write discussion questions without rewatching the full video.",
      "Provide the transcript alongside the video for students who benefit from a text-based alternative.",
      "Paste the transcript into an AI tool to generate a quiz or a simplified summary for younger students.",
    ],
    faqs: [
      {
        q: "Can I use this to create accessible materials for students?",
        a: "Yes. A text transcript is a simple way to provide a text-based alternative to video content for students who need it.",
      },
      {
        q: "Can I build a worksheet from a YouTube video?",
        a: "Yes. Generate the transcript, then use it as the basis for reading comprehension questions, summaries or discussion prompts.",
      },
      {
        q: "Is this free for classroom use?",
        a: "Yes, the tool is free with no sign-up, so it's suitable for regular classroom use.",
      },
    ],
  },
  {
    slug: "podcasters",
    audience: "Podcasters",
    metaTitle: "YouTube Transcript Generator for Podcasters",
    metaDescription:
      "Generate show notes, blog recaps and social clips from your video podcast episodes on YouTube, free and instant.",
    heading: "YouTube Transcripts for Podcasters",
    intro: [
      "If your podcast is published on YouTube, the transcript is a ready-made source for show notes, episode summaries and pull quotes without listening back through the entire episode.",
      "It's also useful for finding short, quotable moments to clip for social media — search the text for a punchy line, then jump to that timestamp in the video.",
    ],
    tips: [
      "Generate show notes directly from the transcript instead of writing them from memory.",
      "Search for quotable one-liners in the text to find clip-worthy moments fast.",
      "Use the timestamped export to build an episode timeline or table of contents.",
      "Paste the transcript into an AI tool to draft an episode summary for your show notes page.",
    ],
    faqs: [
      {
        q: "Can I generate show notes from my podcast episode automatically?",
        a: "You can generate the full transcript instantly, then use it as the base for show notes, either by editing it yourself or summarizing it with an AI tool.",
      },
      {
        q: "Can I find clip-worthy moments for social media?",
        a: "Yes. Search the transcript text for strong quotes, then use the matching timestamp to find that exact moment in the video.",
      },
      {
        q: "Does this work for multi-hour interview episodes?",
        a: "Yes, transcript length isn't limited — long episodes work the same way as short ones.",
      },
    ],
  },
  {
    slug: "developers",
    audience: "Developers & AI Builders",
    metaTitle: "YouTube Transcript Generator for Developers",
    metaDescription:
      "Get clean YouTube transcript text and timestamps for RAG pipelines, AI summarization, prompts and dataset building.",
    heading: "YouTube Transcripts for Developers & AI Builders",
    intro: [
      "Need transcript text for a summarization prompt, a RAG pipeline, or a quick dataset sample? Paste a URL and get clean text output with timestamps, ready to copy or download without writing scraping code for a one-off task.",
      "It's a fast way to sanity-check what a transcript actually looks like for a given video before you build an automated pipeline around it.",
    ],
    tips: [
      "Use the timestamped TXT export when you need line-level timing for chunking a transcript into a vector store.",
      "Download the SRT file if your pipeline expects subtitle-formatted input.",
      "Paste the transcript directly into a prompt for quick summarization testing without setting up an API call.",
      "Check the available_languages data returned by a video before assuming captions exist in your target language.",
    ],
    faqs: [
      {
        q: "Can I get transcript text with timestamps for a RAG pipeline?",
        a: "Yes. The timestamped TXT and SRT exports both include line-level timing you can use for chunking.",
      },
      {
        q: "Is there an API for this?",
        a: "The site currently offers a simple web tool. For automated or bulk use, reach out about API access.",
      },
      {
        q: "Does it return which languages are available for a video?",
        a: "Yes, the tool detects and can surface every available caption language for a given video, not just the default one.",
      },
    ],
  },
];

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
