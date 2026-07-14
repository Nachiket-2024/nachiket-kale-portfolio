import { readAllMdxFiles } from "./fs";
import type { Project, ProjectFrontmatter } from "./types";

const COLLECTION = "projects";

export function getAllProjects(): Project[] {
  return readAllMdxFiles<ProjectFrontmatter>(COLLECTION)
    .map(({ frontmatter, content }) => ({ ...frontmatter, content }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
