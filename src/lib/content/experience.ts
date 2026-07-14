import { readAllMdxFiles } from "./fs";
import type { Experience, ExperienceFrontmatter } from "./types";

const COLLECTION = "experience";

export function getAllExperience(): Experience[] {
  return readAllMdxFiles<ExperienceFrontmatter>(COLLECTION)
    .map(({ frontmatter, content }) => ({ ...frontmatter, content }))
    .sort((a, b) => a.order - b.order);
}
