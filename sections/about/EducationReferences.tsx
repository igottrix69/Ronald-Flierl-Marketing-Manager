import { GraduationCap, UserRound } from "lucide-react";
import { education, references } from "@/data/about";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export function EducationReferences() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <div>
            <h3 className="eyebrow mb-7">
              <GraduationCap size={15} className="text-accent" /> Education
            </h3>
            <RevealGroup className="flex flex-col gap-4" stagger={0.1}>
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
                      <p className="mt-1 text-sm text-muted">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-accent">
                      {edu.period}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* References */}
          <div>
            <h3 className="eyebrow mb-7">
              <UserRound size={15} className="text-accent" /> References
            </h3>
            <RevealGroup className="flex flex-col gap-4" stagger={0.1}>
              {references.map((ref) => (
                <RevealItem
                  key={ref.name}
                  variants={fadeUp}
                  className="rounded-2xl border border-line bg-surface/40 p-6"
                >
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    {ref.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{ref.title}</p>
                </RevealItem>
              ))}
              <RevealItem variants={fadeUp}>
                <p className="px-1 text-xs italic text-muted">
                  Contact details available upon request.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
