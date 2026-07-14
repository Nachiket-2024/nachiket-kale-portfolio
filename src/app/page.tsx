import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Reveal } from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger-list";
import { getAbout, getFeaturedProjects } from "@/lib/content";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const about = getAbout();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about.name,
    jobTitle: about.role,
    email: about.email,
    sameAs: Object.values(about.social ?? {}).filter(Boolean),
  };

  return (
    <div className="flex flex-col gap-20 sm:gap-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <FadeIn className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Nachiket.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Full-stack software engineer building web applications and backend systems
          with a focus on authentication, secure systems, and well-structured software
          design.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link href="/projects" className={buttonVariants({ size: "lg" })}>
            View projects <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/about"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            About me
          </Link>
        </div>
      </FadeIn>

      {featuredProjects.length > 0 && (
        <section className="flex flex-col gap-6">
          <Reveal className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              View all
            </Link>
          </Reveal>
          <StaggerList className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerList>
        </section>
      )}
    </div>
  );
}
