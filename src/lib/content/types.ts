export type ProjectFrontmatter = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  date: string;
  featured?: boolean;
};

export type Project = ProjectFrontmatter & {
  content: string;
};

export type ExperienceFrontmatter = {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  order: number;
};

export type Experience = ExperienceFrontmatter & {
  content: string;
};

export type AboutFrontmatter = {
  title: string;
  name: string;
  role: string;
  avatar?: string;
  location?: string;
  email?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

export type About = AboutFrontmatter & {
  content: string;
};

export type ResumeFrontmatter = {
  title: string;
  pdfUrl: string;
  updated: string;
};

export type Resume = ResumeFrontmatter & {
  content: string;
};
