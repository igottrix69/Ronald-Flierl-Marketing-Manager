import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Full-funnel marketing,
              <br className="hidden sm:block" /> engineered for revenue.
            </>
          }
          description="Specialist disciplines that compound — from the first ad impression to the qualified lead landing in your CRM."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {services.map((service) => (
            <RevealItem key={service.title} variants={scaleIn} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
