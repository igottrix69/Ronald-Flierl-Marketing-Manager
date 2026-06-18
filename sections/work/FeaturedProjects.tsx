import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { BrowserMockup } from "@/components/BrowserMockup";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured projects"
          title="Landing pages built to convert."
          description="Two high-ticket lead-gen pages — strategy, copy and conversion design from first wireframe to live campaign."
        />

        <RevealGroup className="mt-14 flex flex-col gap-16 sm:gap-24" stagger={0.1}>
          {projects.map((project, i) => (
            <RevealItem key={project.title} variants={scaleIn}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <BrowserMockup
                    src={project.cover}
                    alt={`${project.client} — ${project.title}`}
                    width={project.width}
                    height={project.height}
                    url={new URL(project.clientHref).hostname.replace("www.", "")}
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <a
                      href={project.clientHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {project.client}
                    </a>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span>{project.role}</span>
                  </div>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                    {project.blurb}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
