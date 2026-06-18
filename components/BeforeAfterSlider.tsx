"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  /** intrinsic dimensions of each half (for aspect ratio + next/image) */
  width: number;
  height: number;
  alt?: string;
  className?: string;
};

/**
 * Draggable before/after comparison. Pointer (mouse + touch) drag anywhere on
 * the image, plus a keyboard-accessible slider handle (arrow keys / Home / End).
 * The "before" layer is clipped from the right so the divider reveals it.
 */
export function BeforeAfterSlider({
  before,
  after,
  width,
  height,
  alt = "Before and after comparison",
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    containerRef.current?.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) updateFromClientX(e.clientX);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    containerRef.current?.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        "group relative w-full select-none overflow-hidden rounded-2xl border border-line shadow-card",
        dragging ? "cursor-grabbing" : "cursor-ew-resize",
        className
      )}
      style={{ aspectRatio: `${width} / ${height}`, touchAction: "none" }}
    >
      {/* After (base layer) */}
      <Image
        src={after}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1100px"
        className="object-cover"
        draggable={false}
        priority
      />

      {/* Before (clipped from the right) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span
        className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: pos > 6 ? 1 : 0 }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent/85 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: pos < 94 ? 1 : 0 }}
      >
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-glow-sm transition-transform duration-200 hover:scale-105 focus-visible:scale-105 active:scale-95"
        >
          <ChevronLeft size={16} className="-mr-0.5" />
          <ChevronRight size={16} className="-ml-0.5" />
        </button>
      </div>
    </div>
  );
}
