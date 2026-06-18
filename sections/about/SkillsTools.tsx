import { Sparkles } from "lucide-react";
import { skills, tools } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp, scaleIn } from "@/lib/motion";

export function SkillsTools() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Capabilities"
          title="The skill set behind the results."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Core skills */}
          <div>
            <h3 className="eyebrow mb-6">Core skills</h3>
            <RevealGroup className="flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line/60" stagger={0.05}>
              {skills.map((skill) => (
                <RevealItem
                  key={skill}
                  variants={fadeUp}
                  className="group flex items-center gap-3 bg-background px-5 py-4 transition-colors hover:bg-surface"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                  <span className="text-sm font-medium sm:text-base">{skill}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Tools */}
          <div>
            <h3 className="eyebrow mb-6">Tools &amp; platforms</h3>
            <RevealGroup className="flex flex-wrap gap-2.5" stagger={0.04}>
              {tools.map((tool) => (
                <RevealItem key={tool} variants={scaleIn}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-2.5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent">
                    <Sparkles size={13} className="text-accent" />
                    {tool}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
