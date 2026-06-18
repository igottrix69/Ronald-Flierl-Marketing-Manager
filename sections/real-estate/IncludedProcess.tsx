import { included, processSteps } from "@/data/realEstateMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp, scaleIn } from "@/lib/motion";

export function IncludedProcess() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="What's included"
          title="Every edit, handled."
          description="A complete, listing-ready treatment on every image — no à la carte surprises."
        />

        {/* Value props */}
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {included.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.label} variants={scaleIn} className="h-full">
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors duration-300 group-hover:border-accent/50">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium leading-snug">
                    {item.label}
                  </span>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Process */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h3>
          </Reveal>

          <RevealGroup
            className="relative mt-10 grid gap-6 md:grid-cols-3"
            stagger={0.12}
          >
            {/* connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <RevealItem key={step.step} variants={fadeUp}>
                  <div className="relative flex flex-col items-center rounded-2xl border border-line bg-surface/50 p-7 text-center">
                    <span className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-glow-sm">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="mb-1 text-xs font-semibold tracking-[0.2em] text-accent">
                      {step.step}
                    </span>
                    <h4 className="font-display text-lg font-semibold tracking-tight">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
