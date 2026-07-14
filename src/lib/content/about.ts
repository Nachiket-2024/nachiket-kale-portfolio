import { readMdxFile } from "./fs";
import type { About, AboutFrontmatter } from "./types";

export function getAbout(): About {
  const { frontmatter, content } = readMdxFile<AboutFrontmatter>(
    "about",
    "about"
  );
  return { ...frontmatter, content };
}
