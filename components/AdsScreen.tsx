"use client";

import Image from "next/image";
import { dashboards, type DashboardId } from "@/data/adsManagement";

/**
 * The live dashboard layer shown on the MacBook screen. Both images are mounted
 * (preloaded) and crossfade with a slight scale when the toggle switches, via a
 * GPU-friendly CSS opacity/transform transition. Screen aspect matches the
 * source so no cropping. prefers-reduced-motion disables the transition globally.
 */
export function AdsScreen({ active }: { active: DashboardId }) {
  return (
    <div className="relative h-full w-full bg-white">
      {dashboards.map((d) => {
        const on = d.id === active;
        return (
          <div
            key={d.id}
            aria-hidden={!on}
            className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out-expo will-change-[opacity,transform]"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "scale(1)" : "scale(1.04)",
              pointerEvents: on ? "auto" : "none",
            }}
          >
            <Image
              src={d.src}
              alt={d.alt}
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 1280px, 95vw"
              className="object-cover object-top"
            />
          </div>
        );
      })}
    </div>
  );
}
