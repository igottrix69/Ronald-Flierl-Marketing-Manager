"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { HeroBackground } from "@/components/Backgrounds";
import { maskUp, fadeUp, easeOutExpo } from "@/lib/motion";
import { site } from "@/data/site";

type Word = { text: string; accent?: boolean };
const headline: Word[][] = [
  [{ text: "Marketing that" }],
  [{ text: "generates " }, { text: "leads,", accent: true }],
  [{ text: "not just likes." }],
];

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <HeroBackground />
      <div className="container-px">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3.5 py-1.5 text-xs text-muted backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects · {site.availability}
        </motion.div>

        {/* Masked headline */}
        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-display text-[clamp(2.75rem,8vw,8.5rem)] font-bold leading-[0.95] tracking-tightest"
        >
          {headline.map((line, i) => (
            <span key={i} className="block overflow-hidden py-[0.04em]">
              <motion.span variants={maskUp} className="inline-block">
                {line.map((word, j) => (
                  <span key={j} className={word.accent ? "text-accent" : undefined}>
                    {word.text}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6, duration: 0.7, ease: easeOutExpo }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {site.tagline} based in{" "}
          <span className="inline-flex items-center gap-1 text-foreground">
            <MapPin size={16} className="text-accent" />
            {site.location}
          </span>
          . I build full-funnel systems that turn paid traffic into qualified,
          high-ticket leads.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.75, duration: 0.7, ease: easeOutExpo }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button href="/work" withArrow>
            View My Work
          </Button>
          <Button href="/about#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
