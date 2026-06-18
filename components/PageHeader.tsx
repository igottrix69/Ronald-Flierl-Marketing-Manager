import { RevealGroup, RevealItem } from "./Reveal";
import { GlowAccent } from "./Backgrounds";
import { fadeUp } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <GlowAccent className="left-1/2 top-[-10%] h-[360px] w-[720px] -translate-x-1/2" />
      <div className="container-px">
        <RevealGroup stagger={0.12}>
          <RevealItem variants={fadeUp}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.98] tracking-tightest">
              {title}
            </h1>
          </RevealItem>
          {description && (
            <RevealItem variants={fadeUp}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {description}
              </p>
            </RevealItem>
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
