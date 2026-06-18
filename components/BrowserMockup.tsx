import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** shown in the faux address bar */
  url?: string;
  className?: string;
};

/**
 * Browser-chrome frame for tall landing-page captures. The image sits in a
 * clipped viewport and gently auto-scrolls down on hover to preview the page.
 */
export function BrowserMockup({
  src,
  alt,
  width,
  height,
  url = "borokomotors.com",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group/frame overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-card",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex-1">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-1.5 rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted">
            <span className="h-2.5 w-2.5 rounded-full border border-muted/50" />
            {url}
          </div>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-x-0 top-0 h-auto w-full select-none transition-transform duration-[6500ms] ease-linear group-hover/frame:-translate-y-[67%]"
        />
        {/* subtle bottom fade for polish */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/40 to-transparent" />
      </div>
    </div>
  );
}
