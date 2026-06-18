"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Render as a stagger container; children should be <Reveal.Item> */
  as?: "div" | "section" | "ul" | "li";
  delay?: number;
};

/** Single fade-up element revealed on scroll into view. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  as = "div",
  delay = 0,
}: RevealProps) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

type GroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "section" | "ul";
};

/** Staggered container — pair with <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  as = "div",
}: GroupProps) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li";
}) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
