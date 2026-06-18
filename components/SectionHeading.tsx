import { cn } from "@/lib/utils";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { fadeUp } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <RevealGroup
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
      stagger={0.12}
    >
      {eyebrow && (
        <RevealItem variants={fadeUp}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </RevealItem>
      )}
      <RevealItem variants={fadeUp}>
        <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </RevealItem>
      {description && (
        <RevealItem variants={fadeUp}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </RevealItem>
      )}
    </RevealGroup>
  );
}
