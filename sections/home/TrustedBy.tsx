import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";

export function TrustedBy() {
  return (
    <section className="border-y border-line py-12 sm:py-16">
      <div className="container-px">
        <Reveal>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Trusted by Papua New Guinea&apos;s leading institutions
          </p>
        </Reveal>
      </div>
      <Reveal>
        <LogoMarquee />
      </Reveal>
    </section>
  );
}
