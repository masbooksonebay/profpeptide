// Regenerates the full favicon / app-icon set from public/icon.svg — the
// Prof. Peptide coupon-tag mark (single flat fill locked to #3A759F, transparent
// background, transparent eyelet knockout). Every raster is a square PNG at a
// Google-friendly size (favicon PNGs are multiples of 48px), transparency
// preserved. The .ico bundles 16/32/48.
//
// Requires `rsvg-convert` (librsvg) on PATH:  brew install librsvg
// Run from the repo root:  node scripts/gen-favicon.mjs
import { execFileSync } from "node:child_process";
import { writeFileSync, readFileSync, unlinkSync } from "node:fs";

const SRC = "public/icon.svg";
const render = (size, out) =>
  execFileSync("rsvg-convert", ["-w", String(size), "-h", String(size), SRC, "-o", out]);

// Standalone PNG deliverables.
const PNGS = [
  [48, "public/favicon-48.png"],   // Google (multiple of 48)
  [96, "public/favicon-96.png"],   // Google (multiple of 48, primary SERP source)
  [180, "public/apple-icon.png"],  // iOS home screen
  [192, "public/icon-192.png"],    // Android / PWA (manifest)
  [512, "public/icon-512.png"],    // PWA (manifest)
];
for (const [size, out] of PNGS) render(size, out);

// favicon.ico bundling 16/32/48 PNG frames.
function packIco(frames) {
  const count = frames.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  frames.forEach((f, i) => {
    const b = 16 * i;
    dir.writeUInt8(f.size >= 256 ? 0 : f.size, b + 0);
    dir.writeUInt8(f.size >= 256 ? 0 : f.size, b + 1);
    dir.writeUInt8(0, b + 2);
    dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4);
    dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(f.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += f.data.length;
  });
  return Buffer.concat([header, dir, ...frames.map((x) => x.data)]);
}

const frames = [16, 32, 48].map((size) => {
  const tmp = `public/_ico_${size}.png`;
  render(size, tmp);
  const data = readFileSync(tmp);
  unlinkSync(tmp);
  return { size, data };
});
writeFileSync("public/favicon.ico", packIco(frames));

console.log("Favicon set regenerated from", SRC, "->", PNGS.map(([, p]) => p).join(", "), "+ favicon.ico");
