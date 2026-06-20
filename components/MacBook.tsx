"use client";

import {
  cubicBezier,
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Props = {
  /** scroll progress 0→1 driving the open + scale-up choreography */
  progress: MotionValue<number>;
  /** the live screen content (dashboard layer) */
  children: React.ReactNode;
};

const easeOut = cubicBezier(0.16, 1, 0.3, 1);

/**
 * CSS/3D MacBook Pro (space black). The lid pivots open at the hinge (0–0.35),
 * then the whole unit scales up to its capped, fully-visible size (0.35–0.6) and
 * holds — the dashboard fills the screen but the bezels and base stay in frame.
 * Final size is capped in CSS (.mbp width), so it never zooms past the laptop.
 * All transforms are GPU-friendly (transform only).
 */
export function MacBook({ progress, children }: Props) {
  const lidRotate = useTransform(progress, [0, 0.35], [-90, 0], {
    ease: easeOut,
  });
  const tilt = useTransform(progress, [0, 0.35], [14, 0], { ease: easeOut });
  const scale = useTransform(progress, [0.35, 0.6], [0.72, 1], {
    ease: easeOut,
  });

  return (
    <div style={{ perspective: 1800 }} className="flex justify-center">
      <motion.div
        style={{ rotateX: tilt, scale, transformStyle: "preserve-3d" }}
        className="mbp"
      >
        {/* LID */}
        <motion.div
          style={{ rotateX: lidRotate, transformOrigin: "bottom center" }}
          className="mbp-lid"
        >
          <div className="mbp-notch" />
          <div className="mbp-screen">{children}</div>
        </motion.div>

        {/* DECK */}
        <div className="mbp-deck" />
      </motion.div>
    </div>
  );
}
