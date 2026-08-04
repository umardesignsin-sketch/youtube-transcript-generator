import fs from "fs";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "data", "blog");

export function getPostSlugs() {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");

  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);

  const source = fs.readFileSync(fullPath, "utf8");

  return {
    slug: realSlug,
    source,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => getPostBySlug(slug));
}