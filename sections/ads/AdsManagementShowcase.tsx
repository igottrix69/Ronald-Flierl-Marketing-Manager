"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { MacBook } from "@/components/MacBook";
import { AdsScreen } from "@/components/AdsScreen";
import { AdsDashboardToggle } from "@/components/AdsDashboardToggle";
import { Button } from "@/components/Button";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { adsManagement, type DashboardId } from "@/data/adsManagement";

export function AdsManagementShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<DashboardId>("meta");
  const reduced = usePrefersReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const animate = mounted && isDesktop && !reduced;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const staticProgress = useMotionValue(0.4);
  const progress = animate ? scrollYProgress : staticProgress;

  // Overlay choreography (used only when animating)
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const glowScale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1.25]);
  const topBarOpacity = useTransform(scrollYProgress, [0.74, 0.9], [0, 1]);
  const topBarY = useTransform(scrollYProgress, [0.74, 0.9], [-20, 0]);
  const toggleOpacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.22, 0.36], [1, 1, 0]);

  return (
    <section
      ref={ref}
      style={{ height: animate ? "340vh" : "auto" }}
      className="relative"
    >
      <div
        className={
          animate
            ? "sticky top-0 flex h-screen items-center justify-center overflow-hidden"
            : "relative flex flex-col items-center justify-center px-5 py-24"
        }
      >
        {/* ambient accent glow */}
        <motion.div
          aria-hidden
          style={animate ? { opacity: glowOpacity, scale: glowScale } : undefined}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[460px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        />

        {/* scroll hint (animate only) */}
        {animate && (
          <motion.div
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute top-24 left-1/2 z-20 -translate-x-1/2 text-center"
          >
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {adsManagement.eyebrow} — scroll to open
            </span>
          </motion.div>
        )}

        {/* Static (mobile / reduced-motion) heading for context */}
        {!animate && (
          <div className="mb-10 max-w-xl text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {adsManagement.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tightest sm:text-4xl">
              Meta &amp; Google, <span className="text-accent">managed daily.</span>
            </h2>
          </div>
        )}

        {/* MacBook stage */}
        <div className="relative z-10 flex w-full justify-center">
          <MacBook progress={progress}>
            <AdsScreen active={active} />
          </MacBook>
        </div>

        {/* End-state top bar: short headline + CTA (animate only) */}
        {animate && (
          <motion.div
            style={{ opacity: topBarOpacity, y: topBarY }}
            className="absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-4 bg-gradient-to-b from-background/85 to-transparent px-6 pb-16 pt-6 sm:px-10"
          >
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Live ad dashboards
              </span>
              <h2 className="mt-2 max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Inside the accounts I run daily.
              </h2>
            </div>
            <Button href="/about#contact" withArrow magnetic={false} className="shrink-0">
              Scale my ad account
            </Button>
          </motion.div>
        )}

        {/* Toggle — pinned bottom-centre (animate) / below laptop (static) */}
        {animate ? (
          <motion.div
            style={{ opacity: toggleOpacity }}
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
          >
            <AdsDashboardToggle active={active} onChange={setActive} />
          </motion.div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-6">
            <AdsDashboardToggle active={active} onChange={setActive} />
            <Button href="/about#contact" withArrow>
              Scale my ad account
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
