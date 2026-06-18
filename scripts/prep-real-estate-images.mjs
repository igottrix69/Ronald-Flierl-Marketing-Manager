/**
 * Prep step for the Real Estate Media before/after sliders.
 *
 * Each `before-after-*.jpg` source is a single side-by-side image
 * (left half = Before, right half = After). This script crops each into two
 * halves so the BeforeAfterSlider can cross-fade between real, separate images.
 *
 * Run:  node scripts/prep-real-estate-images.mjs
 * Requires: sharp (devDependency). Output halves are committed to /public.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "real-estate");

const sources = [
  "before-after-beachfront-living.jpg",
  "before-after-kitchen-daylight.jpg",
];

for (const file of sources) {
  const src = path.join(dir, file);
  const meta = await sharp(src).metadata();
  const half = Math.floor(meta.width / 2);
  // The source has baked-in "Before"/"After" labels in the top band; trim it
  // so only the slider's own accent-styled labels show.
  const top = Math.round(meta.height * 0.085);
  const height = meta.height - top;
  const base = file.replace(/\.jpg$/i, "");

  await sharp(src)
    .extract({ left: 0, top, width: half, height })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(dir, `${base}-before.jpg`));

  await sharp(src)
    .extract({ left: meta.width - half, top, width: half, height })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(dir, `${base}-after.jpg`));

  console.log(`✓ ${base}: ${half}x${height} before/after halves (trimmed ${top}px label band)`);
}

console.log("Done.");
