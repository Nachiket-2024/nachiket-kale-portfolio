import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getContentDir(collection: string): string {
  return path.join(CONTENT_ROOT, collection);
}

export function getMdxSlugs(collection: string): string[] {
  const dir = getContentDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function readMdxFile<TFrontmatter>(
  collection: string,
  slug: string
): { frontmatter: TFrontmatter; content: string } {
  const filePath = path.join(getContentDir(collection), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as TFrontmatter, content };
}

export function readAllMdxFiles<TFrontmatter>(
  collection: string
): { frontmatter: TFrontmatter; content: string; fileSlug: string }[] {
  return getMdxSlugs(collection).map((fileSlug) => ({
    fileSlug,
    ...readMdxFile<TFrontmatter>(collection, fileSlug),
  }));
}
