"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  value: number;
  /** if provided, the counter is skipped and this string is shown verbatim */
  display?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  display,
  prefix = "",
  suffix = "",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    Math.round(v).toLocaleString("en-US")
  );

  useEffect(() => {
    if (display) return;
    if (!inView) return;
    if (reduced) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, count, reduced, display]);

  if (display) {
    return (
      <span ref={ref} className={className}>
        {display}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
