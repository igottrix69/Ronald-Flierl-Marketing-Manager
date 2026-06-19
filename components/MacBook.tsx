"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  /** scroll progress 0→1 driving the open + zoom choreography */
  progress: MotionValue<number>;
  /** the live screen content (dashboard layer) */
  children: React.ReactNode;
};

/**
 * CSS/3D MacBook Pro (space black). The lid pivots open at the hinge as
 * `progress` advances, the whole unit scales up, then the stage zooms into the
 * screen while the keyboard deck fades — an Apple-style product reveal.
 * All transforms are GPU-friendly (transform/opacity only).
 */
export function MacBook({ progress, children }: Props) {
  // Phase 1 (0–0.4): open the lid + gentle scale-up, 3D tilt flattens.
  const lidRotate = useTransform(progress, [0, 0.4], [-90, 0]);
  const tilt = useTransform(progress, [0, 0.4, 1], [16, 3, 0]);
  const baseScale = useTransform(progress, [0, 0.4], [0.82, 1]);

  // Phase 2 (0.4–0.72): zoom the stage into the screen; deck fades out.
  const zoomScale = useTransform(progress, [0.4, 0.72], [1, 2.55]);
  const zoomY = useTransform(progress, [0.4, 0.72], ["0%", "16%"]);
  const deckOpacity = useTransform(progress, [0.46, 0.62], [1, 0]);
  const bezelFade = useTransform(progress, [0.55, 0.72], [1, 0]);

  return (
    <div style={{ perspective: 1800 }} className="flex justify-center">
      <motion.div
        style={{ scale: zoomScale, y: zoomY, transformOrigin: "50% 40%" }}
        className="flex justify-center"
      >
        <motion.div
          style={{ rotateX: tilt, scale: baseScale, transformStyle: "preserve-3d" }}
          className="mbp"
        >
          {/* LID */}
          <motion.div
            style={{ rotateX: lidRotate, transformOrigin: "bottom center" }}
            className="mbp-lid"
          >
            <motion.div style={{ opacity: bezelFade }} className="mbp-notch" />
            <div className="mbp-screen">{children}</div>
          </motion.div>

          {/* DECK */}
          <motion.div style={{ opacity: deckOpacity }} className="mbp-deck" />
        </motion.div>
      </motion.div>
    </div>
  );
}
