import { bio } from "@/data/about";
import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

const quickStats = stats.slice(0, 4);

export function Bio() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <RevealGroup className="flex flex-col gap-6" stagger={0.12}>
            {bio.map((para, i) => (
              <RevealItem key={i} variants={fadeUp}>
                <p
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-foreground sm:text-2xl"
                      : "text-base leading-relaxed text-muted sm:text-lg"
                  }
                >
                  {para}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="lg:pt-2">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/60">
              {quickStats.map((stat) => (
                <div key={stat.label} className="bg-background p-5">
                  <div className="font-display text-3xl font-bold tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      display={stat.display}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
