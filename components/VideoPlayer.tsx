"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { WalkthroughVideo } from "@/data/realEstateMedia";

/**
 * Responsive 16:9 walkthrough player. Renders a poster + accent play overlay.
 * When a `src` (MP4) or `embedUrl` is supplied in the data, clicking plays it;
 * otherwise it shows a clearly-labelled "coming soon" placeholder.
 */
export function VideoPlayer({ video }: { video: WalkthroughVideo }) {
  const [playing, setPlaying] = useState(false);
  const hasMedia = Boolean(video.src || video.embedUrl);

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-card">
      <div className="relative aspect-video w-full">
        {playing && video.src ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : playing && video.embedUrl ? (
          <iframe
            src={`${video.embedUrl}${video.embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
            title={video.title}
            allow="accelerated-media; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <>
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

            <button
              type="button"
              onClick={() => hasMedia && setPlaying(true)}
              aria-label={
                hasMedia ? `Play ${video.title}` : `${video.title} — sample coming soon`
              }
              aria-disabled={!hasMedia}
              className="absolute inset-0 flex items-center justify-center outline-none"
            >
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                {hasMedia && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                )}
                <Play size={24} className="relative ml-1 fill-current" />
              </span>
            </button>

            {/* duration pill */}
            <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              {video.duration}
            </span>

            {!hasMedia && (
              <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/55 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
                Sample coming soon
              </span>
            )}
          </>
        )}
      </div>

      <figcaption className="flex flex-col gap-1 p-5">
        <span className="font-display text-lg font-semibold tracking-tight">
          {video.title}
        </span>
        <span className="text-sm text-muted">{video.caption}</span>
      </figcaption>
    </figure>
  );
}
