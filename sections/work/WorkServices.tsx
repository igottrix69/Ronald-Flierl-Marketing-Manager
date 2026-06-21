import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workServices, type WorkService } from "@/data/work";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40";

function CardInner({ service }: { service: WorkService }) {
  const Icon = service.icon;
  const interactive = Boolean(service.href);
  return (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
      <div className="relative mb-5 flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors duration-500 group-hover:border-accent/50">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        {interactive && (
          <ArrowUpRight
            size={17}
            className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>
      <h3 className="relative mb-2 font-display text-lg font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="relative text-sm leading-relaxed text-muted">
        {service.description}
      </p>
    </>
  );
}

export function WorkServices() {
  return (
    <section className="pb-12 sm:pb-16">
      <div className="container-px">
        <RevealGroup
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {workServices.map((service) => (
            <RevealItem key={service.title} variants={scaleIn} className="h-full">
              {service.href ? (
                service.href.startsWith("#") ? (
                  <a href={service.href} className={cardClass}>
                    <CardInner service={service} />
                  </a>
                ) : (
                  <Link href={service.href} className={cardClass}>
                    <CardInner service={service} />
                  </Link>
                )
              ) : (
                <div className={cardClass}>
                  <CardInner service={service} />
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
