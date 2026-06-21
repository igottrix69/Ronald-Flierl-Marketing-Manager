import { GraduationCap } from "lucide-react";
import { education } from "@/data/about";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function Education() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <h3 className="eyebrow mb-7">
          <GraduationCap size={15} className="text-accent" /> Education
        </h3>
        <RevealGroup
          className="grid gap-4 sm:grid-cols-2 sm:gap-5"
          stagger={0.1}
        >
          {education.map((edu) => (
            <RevealItem
              key={edu.qualification}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-surface/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    {edu.qualification}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-accent">
                  {edu.period}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
