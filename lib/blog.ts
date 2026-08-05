import fs from "fs";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "data", "blog");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/data/blog/${slug}.mdx`);
      return { ...mod.meta, slug } as PostMeta;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
