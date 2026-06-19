import { adStats, adTools } from "@/data/adsManagement";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Reveal } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { scaleIn } from "@/lib/motion";

export function Results() {
  return (
    <section className="relative py-16 sm:py-24">
      <GlowAccent className="left-1/2 top-0 h-[300px] w-[620px] -translate-x-1/2" />
      <div className="container-px">
        <RevealGroup
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line/60 lg:grid-cols-4"
          stagger={0.06}
        >
          {adStats.map((stat) => (
            <RevealItem
              key={stat.label}
              variants={scaleIn}
              className="flex flex-col gap-1.5 bg-background p-6 sm:p-8"
            >
              <span className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  display={stat.display}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="text-xs text-muted">{stat.sublabel}</span>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Platform credibility + tool tags */}
        <Reveal className="mt-16 flex flex-col items-center text-center">
          <p className="max-w-2xl text-sm text-muted">
            Hands-on, daily, across the platforms that move the numbers:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {adTools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-line bg-surface/50 px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-accent/40 hover:text-accent"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
