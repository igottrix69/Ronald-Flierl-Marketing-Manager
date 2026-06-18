import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { BrowserMockup } from "@/components/BrowserMockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { scaleIn } from "@/lib/motion";

export function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="High-ticket campaigns that convert."
          />
          <Reveal className="shrink-0">
            <Button href="/work" variant="secondary" withArrow>
              View all work
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-14 grid gap-6 lg:grid-cols-2"
          stagger={0.12}
        >
          {projects.map((project) => (
            <RevealItem key={project.title} variants={scaleIn}>
              <Link href="/work" className="group block">
                <BrowserMockup
                  src={project.cover}
                  alt={`${project.client} — ${project.title}`}
                  width={project.width}
                  height={project.height}
                  url={new URL(project.clientHref).hostname.replace("www.", "")}
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span className="text-accent">{project.client}</span>
                      <span className="h-1 w-1 rounded-full bg-muted" />
                      <span>{project.role}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
