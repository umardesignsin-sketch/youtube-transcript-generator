import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ContentBlock from "@/components/ContentBlock";
import Citations from "@/components/Citations";
import FAQ from "@/components/FAQ";

const lastUpdated = "August 2026";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />

      <div className="bg-white text-center text-xs text-slate-400">
        Last updated {lastUpdated}
      </div>

      <Features />
      <HowItWorks />

      <ContentBlock
        heading="How This Transcript Generator Actually Works"
        paragraphs={[
          "This tool doesn't listen to or re-transcribe a video's audio — it reads the caption track YouTube already stores for that video, whether that's a caption the creator wrote themselves or one YouTube's own speech recognition generated automatically when the video went up. Reading existing data instead of processing audio is what makes results come back in seconds regardless of video length.",
          "Because accuracy comes from the source captions, results are exactly as accurate as what YouTube already has: manually written captions tend to be near-perfect, and auto-generated ones are generally solid but can occasionally miss uncommon names or technical jargon. A video with no captions available on either side has no transcript to extract — that's a limit on YouTube's end, not something any tool can override.",
        ]}
      />

      <Citations />
      <FAQ />
    </main>
  );
}
