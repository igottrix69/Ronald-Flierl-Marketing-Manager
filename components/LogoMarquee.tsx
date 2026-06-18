"use client";

import Image from "next/image";
import { clients } from "@/data/clients";

/**
 * Infinite-scroll client logo strip. The list is duplicated so the
 * keyframe can translate -50% for a seamless loop. Pauses on hover.
 */
export function LogoMarquee() {
  const loop = [...clients, ...clients];

  return (
    <div
      className="group relative flex w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-6 sm:pr-6">
        {loop.map((client, i) => (
          <a
            key={`${client.name}-${i}`}
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${client.name} — opens in a new tab`}
            title={client.name}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              className="h-9 w-auto max-w-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
