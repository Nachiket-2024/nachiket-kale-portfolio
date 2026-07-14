import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger-list";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects I've built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-8">
      <Reveal className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          A collection of projects focused on backend engineering, security, and financial technology.
        </p>
      </Reveal>
      {projects.length > 0 ? (
        <StaggerList className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerList>
      ) : (
        <p className="text-sm text-muted-foreground">
          Projects are coming soon.
        </p>
      )}
    </div>
  );
}
