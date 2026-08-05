import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MonetagSW from "@/components/MonetagSW";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.savefromnet.fun"),

  title: {
    default: "Free YouTube Transcript Generator | SaveFromNet",
    template: "%s | SaveFromNet",
  },

  description:
    "Generate, copy, and download transcripts from any public YouTube video for free. Fast, accurate, and no sign-up required.",

  keywords: [
    "youtube transcript",
    "youtube transcript generator",
    "youtube transcript download",
    "youtube transcript extractor",
    "youtube transcript ai",
    "youtube transcript api",
    "youtube transcript tool",
    "video transcript generator",
    "youtube captions",
    "youtube subtitles",
  ],

  authors: [
    {
      name: "SaveFromNet",
    },
  ],

  creator: "SaveFromNet",
  publisher: "SaveFromNet",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Free YouTube Transcript Generator",
    description:
      "Generate, copy, and download YouTube transcripts instantly for free.",
    url: "https://www.savefromnet.fun",
    siteName: "SaveFromNet",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Transcript Generator",
    description:
      "Generate, copy, and download YouTube transcripts instantly for free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
        <Footer />
        <CookieConsent gaId="G-DXPM9JWSFJ" />
        <MonetagSW />
      </body>
    </html>
  );
}