import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { fadeUp } from "@/lib/motion";
import { site } from "@/data/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GlowAccent className="bottom-[-20%] left-1/2 h-[420px] w-[760px] -translate-x-1/2" />
      <div className="container-px">
        <RevealGroup
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          stagger={0.1}
        >
          <RevealItem variants={fadeUp}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Paid Ads Management
            </span>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tightest sm:text-6xl">
              Let&apos;s scale your <span className="text-accent">ad account.</span>
            </h2>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Whether you&apos;re starting from scratch or want a second set of
              expert eyes on a five- or six-figure budget, let&apos;s talk ROAS.
            </p>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/about#contact" withArrow>
                Scale my ad account
              </Button>
              <Button href={`mailto:${site.email}`} variant="secondary">
                {site.email}
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
