import type { Metadata } from "next";
import { Download, Eye } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { MdxContent } from "@/components/mdx/mdx-content";
import { Reveal } from "@/components/motion/reveal";
import { getResume } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my resume or read a summary of my background.",
};

export default function ResumePage() {
  const resume = getResume();

  return (
    <div className="flex flex-col gap-8">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>

        <div className="flex w-fit gap-3">
          <a
            href={resume.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "w-fit" })}
          >
            <Eye className="size-4" aria-hidden="true" /> View PDF
          </a>

          <a
            href={resume.pdfUrl}
            download
            className={buttonVariants({ className: "w-fit" })}
          >
            <Download className="size-4" aria-hidden="true" /> Download PDF
          </a>
        </div>
      </Reveal>

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <MdxContent source={resume.content} />
      </div>
    </div>
  );
}