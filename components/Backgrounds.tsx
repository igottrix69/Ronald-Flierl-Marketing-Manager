import { cn } from "@/lib/utils";

/** Hero backdrop: animated grid + layered #1b88ff glow mesh. */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid animate-grid-fade" />
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute left-[12%] top-[35%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-accent/15 blur-[90px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/** Soft single-glow accent for interior sections. */
export function GlowAccent({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full bg-accent/15 blur-[120px]",
        className
      )}
    />
  );
}
