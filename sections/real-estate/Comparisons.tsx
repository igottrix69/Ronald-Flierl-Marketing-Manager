import { MoveHorizontal } from "lucide-react";
import { beforeAfter } from "@/data/realEstateMedia";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export function Comparisons() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Before / After"
            title="Drag to see the difference."
            description="Every image is corrected and enhanced by hand. Drag the handle to reveal the raw shot underneath."
          />
          <div className="hidden shrink-0 items-center gap-2 text-sm text-muted sm:flex">
            <MoveHorizontal size={16} className="text-accent" />
            Drag · or use arrow keys
          </div>
        </div>

        <RevealGroup
          className="mt-12 grid gap-8 lg:grid-cols-2"
          stagger={0.12}
        >
          {beforeAfter.map((item) => (
            <RevealItem key={item.id} variants={scaleIn} className="flex flex-col">
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                width={item.width}
                height={item.height}
                alt={`${item.title} — before and after edit`}
              />
              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.caption}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
