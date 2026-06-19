"use client";

import { motion } from "framer-motion";
import { dashboards, type DashboardId } from "@/data/adsManagement";
import { cn } from "@/lib/utils";

function Glyph({ id }: { id: DashboardId }) {
  if (id === "google") {
    return (
      <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7.2 7.5C4.6 7.5 3 9.6 3 12s1.6 4.5 4.2 4.5c3.3 0 5.2-9 9.6-9 2.6 0 4.2 2.1 4.2 4.5s-1.6 4.5-4.2 4.5c-3.3 0-5.2-9-9.6-9z"
        fill="none"
        stroke="#0866FF"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Props = {
  active: DashboardId;
  onChange: (id: DashboardId) => void;
  className?: string;
};

export function AdsDashboardToggle({ active, onChange, className }: Props) {
  return (
    <div
      role="group"
      aria-label="Choose ad platform dashboard"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-line bg-background/80 p-1 shadow-card backdrop-blur-md",
        className
      )}
    >
      {dashboards.map((d) => {
        const isActive = d.id === active;
        return (
          <button
            key={d.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(d.id)}
            className={cn(
              "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
              isActive ? "text-white" : "text-muted hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="ads-toggle-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-accent shadow-glow-sm"
              />
            )}
            <Glyph id={d.id} />
            {d.label}
          </button>
        );
      })}
    </div>
  );
}
