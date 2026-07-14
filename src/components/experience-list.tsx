import { MdxContent } from "@/components/mdx/mdx-content";
import type { Experience } from "@/lib/content";

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="flex flex-col gap-8 border-l border-border pl-6">
      {items.map((item) => (
        <li
          key={`${item.company}-${item.role}`}
          className="relative flex flex-col gap-1"
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[1.6rem] size-2.5 rounded-full border-2 border-background bg-muted-foreground/40"
          />

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold underline underline-offset-4">
              {item.role} — {item.company}
            </h3>

            <span className="text-sm text-muted-foreground">
              {item.startDate} — {item.endDate}
            </span>
          </div>

          {item.location && (
            <p className="text-sm text-muted-foreground">{item.location}</p>
          )}

          <div className="prose prose-neutral prose-md max-w-none dark:prose-invert">
            <MdxContent source={item.content} />
          </div>
        </li>
      ))}
    </ol>
  );
}