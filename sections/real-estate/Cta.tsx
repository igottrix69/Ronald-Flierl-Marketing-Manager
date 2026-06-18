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
              Real Estate Media
            </span>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tightest sm:text-6xl">
              Get your listing <span className="text-accent">media.</span>
            </h2>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Send through your photos or footage and I&apos;ll turn them into
              scroll-stopping, ready-to-list media — usually within 24–48 hours.
            </p>
          </RevealItem>
          <RevealItem variants={fadeUp}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/about#contact" withArrow>
                Get your listing media
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
