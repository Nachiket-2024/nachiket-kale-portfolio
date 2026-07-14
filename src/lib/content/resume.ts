import { readMdxFile } from "./fs";
import type { Resume, ResumeFrontmatter } from "./types";

export function getResume(): Resume {
  const { frontmatter, content } = readMdxFile<ResumeFrontmatter>(
    "resume",
    "resume"
  );
  return { ...frontmatter, content };
}
