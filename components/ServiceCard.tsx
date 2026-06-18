import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

      <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors duration-500 group-hover:border-accent/50">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className="relative mb-2 font-display text-xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="relative mb-6 flex-1 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <div className="relative flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
