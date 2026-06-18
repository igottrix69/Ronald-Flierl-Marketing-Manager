"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { gallery } from "@/data/realEstateMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { scaleIn } from "@/lib/motion";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Finished work"
          title="Photos that make people stop scrolling."
          description="A selection of finished, ready-to-list stills. Tap any image to view it full-screen."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {gallery.map((item, i) => (
            <RevealItem key={item.src} variants={scaleIn}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View ${item.caption} full-screen`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-line shadow-card"
              >
                <span className="relative block aspect-[3/2] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </span>
                {/* hover overlay */}
                <span className="pointer-events-none absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-medium text-white">
                    {item.caption}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Maximize2 size={15} />
                  </span>
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Lightbox
        items={gallery}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </section>
  );
}
