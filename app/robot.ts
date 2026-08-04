import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.savefromnet.fun/sitemap.xml",
    host: "https://www.savefromnet.fun",
  };
}