import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { scaleIn } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative py-20 sm:py-28">
      <GlowAccent className="left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2" />
      <div className="container-px">
        <RevealGroup
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line/60 lg:grid-cols-4"
          stagger={0.06}
        >
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              variants={scaleIn}
              className="flex flex-col gap-1.5 bg-background p-6 sm:p-8"
            >
              <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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
      </div>
    </section>
  );
}
