import { clients } from "@/data/clients";
import { LogoChip } from "@/components/LogoChip";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export function ClientsGrid() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Clients"
          title="Brands I've helped grow."
          description="Tap any logo to visit the client's official website."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          stagger={0.07}
        >
          {clients.map((client) => (
            <RevealItem key={client.name} variants={scaleIn} className="h-full">
              <LogoChip
                client={client}
                imgClass="h-9"
                className="h-24 w-full"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
