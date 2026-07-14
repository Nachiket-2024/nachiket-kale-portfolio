import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { MdxContent } from "@/components/mdx/mdx-content";
import { ExperienceList } from "@/components/experience-list";
import { GithubIcon, LinkedinIcon} from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { getAbout, getAllExperience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background and what I care about.",
};

export default function AboutPage() {
  const about = getAbout();
  const experience = getAllExperience();

  const socialLinks = [
    about.email && {
      href: `mailto:${about.email}`,
      label: "Email",
      icon: Mail,
      external: false,
    },
    about.social?.github && {
      href: about.social.github,
      label: "GitHub",
      icon: GithubIcon,
      external: true,
    },
    about.social?.linkedin && {
      href: about.social.linkedin,
      label: "LinkedIn",
      icon: LinkedinIcon,
      external: true,
    },

  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    external: boolean;
  }[];

  return (
    <div className="flex flex-col gap-10">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {about.avatar && (
          <Image
            src={about.avatar}
            alt={about.name}
            width={96}
            height={96}
            className="size-20 shrink-0 rounded-full border object-cover sm:size-24"
          />
        )}
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {about.name}
            </h1>
            <p className="text-muted-foreground">{about.role}</p>
            {about.location && (
              <p className="text-sm text-muted-foreground">
                {about.location}
              </p>
            )}
          </div>
          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <Reveal className="prose prose-neutral max-w-none dark:prose-invert">
        <MdxContent source={about.content} />
      </Reveal>

      {experience.length > 0 && (
        <Reveal className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Experience
          </h2>
          <ExperienceList items={experience} />
        </Reveal>
      )}
    </div>
  );
}
