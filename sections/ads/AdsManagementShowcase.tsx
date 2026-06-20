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
  // Static fallback sits at the held, fully-open frame (progress ≥ 0.6).
  const staticProgress = useMotionValue(0.7);
  const progress = animate ? scrollYProgress : staticProgress;

  // Ambient glow builds while the laptop opens, then holds.
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const glowScale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1.05]);

  // Scroll hint shows at the top, fades before the laptop finishes opening.
  const hintOpacity = useTransform(scrollYProgress, [0, 0.22, 0.36], [1, 1, 0]);

  // Overlays land once the laptop is capped & held (≥ 0.6).
  const headlineOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.6, 0.78], [-20, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.64, 0.82], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.64, 0.82], [-20, 0]);
  const toggleOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const toggleY = useTransform(scrollYProgress, [0.6, 0.78], [20, 0]);

  return (
    <section
      ref={ref}
      style={{ height: animate ? "300vh" : "auto" }}
      className="relative"
    >
      <div
        className={
          animate
            ? "sticky top-0 flex h-screen items-center justify-center overflow-hidden pt-20"
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

        {/* End-state overlays, anchored to the pinned stage (animate only) */}
        {animate && (
          <>
            {/* caption + headline — top-left, below the nav */}
            <motion.div
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="absolute left-6 top-[88px] z-30 sm:left-10"
            >
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Live ad dashboards
              </span>
              <h2 className="mt-2 max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Inside the accounts I run daily.
              </h2>
            </motion.div>

            {/* CTA — top-right, same row */}
            <motion.div
              style={{ opacity: ctaOpacity, y: ctaY }}
              className="absolute right-6 top-[88px] z-30 sm:right-10"
            >
              <Button href="/about#contact" withArrow magnetic={false}>
                Scale my ad account
              </Button>
            </motion.div>

            {/* toggle — centred below the laptop. Outer flex centres it so the
                framer y-transform doesn't clobber a translate-x. */}
            <div className="absolute inset-x-0 bottom-10 z-30 flex justify-center">
              <motion.div style={{ opacity: toggleOpacity, y: toggleY }}>
                <AdsDashboardToggle active={active} onChange={setActive} />
              </motion.div>
            </div>
          </>
        )}

        {/* Static toggle + CTA (mobile / reduced-motion) */}
        {!animate && (
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
