import type { Variants } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

/** Container that staggers its children into view. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Fade + translate-up — the default section-entrance child. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOutExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

/** Line/word mask reveal used in the hero. */
export const maskUp: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

/** Shared viewport config for scroll reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
