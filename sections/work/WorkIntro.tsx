import { RevealGroup, RevealItem } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { fadeUp } from "@/lib/motion";
import { workIntro } from "@/data/work";

export function WorkIntro() {
  return (
    <section className="relative overflow-hidden pt-36 pb-10 sm:pt-44 sm:pb-14">
      <GlowAccent className="left-1/2 top-[-10%] h-[360px] w-[720px] -translate-x-1/2" />
      <div className="container-px">
        <RevealGroup stagger={0.12}>
          <RevealItem variants={fadeUp}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {workIntro.eyebrow}
            </span>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.98] tracking-tightest">
              Performance marketing,{" "}
              <span className="text-accent">built for revenue.</span>
            </h1>
          </RevealItem>
          {workIntro.paragraphs.map((p, i) => (
            <RevealItem key={i} variants={fadeUp}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {p}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
