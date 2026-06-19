import { capabilities, adsManagement } from "@/data/adsManagement";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export function Capabilities() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I run"
          title={adsManagement.title}
          description={adsManagement.intro}
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <RevealItem key={cap.title} variants={scaleIn} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
                  <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors duration-500 group-hover:border-accent/50">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="relative mb-2 font-display text-xl font-semibold tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-muted">
                    {cap.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
