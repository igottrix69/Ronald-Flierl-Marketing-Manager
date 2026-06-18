import { Check } from "lucide-react";
import { experience } from "@/data/timeline";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function Timeline() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience"
          title="A track record across PNG's top platforms."
        />

        <div className="relative mt-16">
          {/* vertical spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[150px]" />

          <RevealGroup className="flex flex-col gap-12 sm:gap-16" stagger={0.1}>
            {experience.map((job, i) => (
              <RevealItem key={`${job.company}-${i}`} variants={fadeUp}>
                <div className="relative grid gap-4 pl-9 sm:grid-cols-[150px_1fr] sm:gap-0 sm:pl-0">
                  {/* node */}
                  <span className="absolute left-0 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:left-[143px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  {/* period + location */}
                  <div className="sm:pr-10 sm:text-right">
                    <span className="inline-flex rounded-full border border-line bg-surface/50 px-3 py-1 text-xs font-medium text-accent">
                      {job.period}
                    </span>
                    <p className="mt-2 text-sm text-muted">{job.location}</p>
                  </div>

                  {/* content */}
                  <div className="sm:pl-10">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent">{job.company}</p>
                    {job.meta && (
                      <p className="mt-1 text-xs text-muted">{job.meta}</p>
                    )}
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                      {job.summary}
                    </p>
                    <ul className="mt-5 flex max-w-2xl flex-col gap-2.5">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
