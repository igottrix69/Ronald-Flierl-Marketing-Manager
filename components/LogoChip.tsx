import Image from "next/image";
import type { Client } from "@/data/clients";
import { cn } from "@/lib/utils";

type Props = {
  client: Client;
  /** image height utility class, e.g. "h-7" */
  imgClass?: string;
  className?: string;
};

/**
 * Neutral light "chip" so every client logo stays legible in both themes.
 * The logos carry their own colored backgrounds (or are transparent navy),
 * so a consistent off-white card normalizes them.
 */
export function LogoChip({ client, imgClass = "h-7", className }: Props) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${client.name} — opens in a new tab`}
      title={client.name}
      className={cn(
        "group flex items-center justify-center rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm",
        className
      )}
    >
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={client.width}
        height={client.height}
        className={cn(
          "w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100",
          imgClass
        )}
      />
    </a>
  );
}
