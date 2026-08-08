// Repeatable Instagram-carousel generator (1080×1350 PNGs) for Prof. Peptide.
//
// LAYOUT lives here; SLIDE DATA lives in scripts/ig-carousels/<name>.ts. A weekly
// carousel means writing a new data file — never editing this renderer.
//
//   npx tsx scripts/ig-carousel.tsx <name>
//   e.g. npx tsx scripts/ig-carousel.tsx 2026-08-08-two-tracks
//
// It loads scripts/ig-carousels/<name>.ts (default export = Carousel), renders each
// slide with next/og's ImageResponse (the same Satori engine as generateNewsOg, which
// composites the real pp-mark.png), and writes ~/Downloads/pp-ig-<date>-<name>-<n>.png.
//
// Same masthead + palette as the news OG card. Overflow is handled, never silently
// clipped: long headlines scale down to a line cap, and any slide whose estimated
// content exceeds the safe height prints a WARNING naming the slide.
import React from "react";
import { ImageResponse } from "next/og";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { homedir } from "node:os";

// ---- palette (matches the news OG card) ------------------------------------
const WHITE = "#FFFFFF";
const INK = "#16181B";
const ACCENT = "#3A759F";
const HAIRLINE = "#D9DEE4";
const SURFACE = "#F4F6F8";
const MUTED = "#5E6B78";

const W = 1080;
const H = 1350;
const PAD = 72;
const CW = W - PAD * 2; // content width 936

// ---- data contract (kept minimal; data files import these types) -----------
export type Run = { text: string; accent?: boolean };
export interface Callout {
  title: string;
  note?: string;
}
export interface Slide {
  label?: string; // upper-right section label ("TRACK ONE")
  headline?: Run[]; // ink/accent runs — one run = a plain wrapping headline
  headlineSize?: number; // target size; auto-reduced if it would exceed the line cap
  accentBar?: boolean; // short accent bar under the headline
  subhead?: string; // muted line under the headline
  body?: string[]; // body paragraphs
  callout?: Callout; // SURFACE box with an ACCENT left bar
  afterCallout?: string; // paragraph below the callout
  cta?: string; // filled ACCENT button label, full content width
  footerUrl?: boolean; // hairline + profpeptide.com/news
  swipe?: boolean; // "SWIPE →" bottom-right (default: true, off on the last slide / when footerUrl)
}
export interface Carousel {
  date: string; // "2026-08-08"
  name: string; // "two-tracks"
  slides: Slide[];
}

// ---- text-fit helpers ------------------------------------------------------
// Inter averages ~0.52em per glyph at the weights used here; enough to estimate
// wrap lines and total block height for the overflow guard (never for pixel layout).
const estLines = (text: string, size: number, width = CW) =>
  Math.max(1, Math.ceil((text.length * size * 0.52) / width));

// Reduce a headline's size until it fits the line cap, so a long headline scales
// down instead of clipping. Returns the size actually used.
function fitHeadline(runs: Run[], target: number, cap = 4): number {
  const text = runs.map((r) => r.text).join(" ");
  let size = target;
  while (size > 34 && estLines(text, size) > cap) size -= 2;
  return size;
}

// Rough content-height estimate (masthead + blocks + footer). Warns — never clips.
function overflowWarning(s: Slide, headlineSize: number): string | null {
  let h = 118; // masthead band
  if (s.headline) h += estLines(s.headline.map((r) => r.text).join(" "), headlineSize) * headlineSize * 1.12 + 8;
  if (s.accentBar) h += 8 + 28;
  if (s.subhead) h += estLines(s.subhead, 38) * 38 * 1.3 + 24;
  for (const p of s.body ?? []) h += estLines(p, 36) * 36 * 1.4 + 22;
  if (s.callout) {
    h += 72; // box padding
    h += estLines(s.callout.title, 50) * 50 * 1.2;
    if (s.callout.note) h += estLines(s.callout.note, 34) * 34 * 1.35 + 16;
    h += 40;
  }
  if (s.afterCallout) h += estLines(s.afterCallout, 36) * 36 * 1.4 + 40;
  if (s.cta) h += 96 + 40;
  h += 110; // footer band
  const budget = H - 10 - 40; // minus top rule and a safe margin
  return h > budget ? `content ≈ ${Math.round(h)}px exceeds the ~${budget}px safe height` : null;
}

// ---- building blocks -------------------------------------------------------
function Masthead({ mark }: { mark: string }) {
  const WM = 40;
  const NEWS = Math.round(WM * 0.82); // 33
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mark} width={84} height={84} alt="" style={{ width: 84, height: 84, borderRadius: 12 }} />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 22 }}>
        <div style={{ display: "flex", fontSize: WM, fontWeight: 800, color: INK, letterSpacing: -1 }}>Prof. Peptide</div>
        {/* NEWS as individual glyphs w/ per-letter marginRight — no leading offset, so the
            "N" left edge sits at the same x as the "P" above (verified by measurement). */}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 6 }}>
          {["N", "E", "W", "S"].map((c, i) => (
            <div key={i} style={{ display: "flex", fontSize: NEWS, fontWeight: 700, color: ACCENT, marginRight: i < 3 ? 7 : 0 }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Headline({ runs, size }: { runs: Run[]; size: number }) {
  if (runs.length === 1) {
    return (
      <div style={{ display: "flex", fontSize: size, fontWeight: 800, color: runs[0].accent ? ACCENT : INK, lineHeight: 1.12, letterSpacing: -1.5 }}>
        {runs[0].text}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
      {runs.map((r, i) => (
        <div key={i} style={{ display: "flex", fontSize: size, fontWeight: 800, color: r.accent ? ACCENT : INK, lineHeight: 1.12, letterSpacing: -1, marginRight: i < runs.length - 1 ? 16 : 0 }}>
          {r.text}
        </div>
      ))}
    </div>
  );
}

function SlideCard({ mark, slide, index, total }: { mark: string; slide: Slide; index: number; total: number }) {
  const isLast = index === total - 1;
  const showSwipe = !slide.footerUrl && (slide.swipe ?? !isLast);
  const hSize = slide.headline ? fitHeadline(slide.headline, slide.headlineSize ?? 66) : 0;

  return (
    <div style={{ width: W, height: H, display: "flex", flexDirection: "column", backgroundColor: WHITE, fontFamily: "Inter" }}>
      <div style={{ display: "flex", width: W, height: 10, backgroundColor: ACCENT }} />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between", padding: `${PAD - 8}px ${PAD}px ${PAD}px ${PAD}px` }}>
        {/* header: masthead + section label */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Masthead mark={mark} />
          {slide.label ? (
            <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: MUTED, letterSpacing: 3, marginTop: 10 }}>{slide.label}</div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>

        {/* main content, vertically centered */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1, paddingTop: 24, paddingBottom: 24 }}>
          {slide.headline && <Headline runs={slide.headline} size={hSize} />}
          {slide.accentBar && <div style={{ display: "flex", width: 88, height: 8, borderRadius: 4, backgroundColor: ACCENT, marginTop: 28 }} />}
          {slide.subhead && (
            <div style={{ display: "flex", fontSize: 38, color: MUTED, marginTop: 26, lineHeight: 1.3, maxWidth: CW }}>{slide.subhead}</div>
          )}
          {(slide.body ?? []).map((p, i) => (
            <div key={i} style={{ display: "flex", fontSize: 36, color: INK, marginTop: i === 0 ? 34 : 24, lineHeight: 1.4, maxWidth: CW }}>
              {p}
            </div>
          ))}
          {slide.callout && (
            <div style={{ display: "flex", flexDirection: "row", backgroundColor: SURFACE, borderRadius: 16, padding: "38px 40px", marginTop: 36, maxWidth: CW }}>
              <div style={{ display: "flex", width: 6, borderRadius: 3, backgroundColor: ACCENT, marginRight: 30, alignSelf: "stretch" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", fontSize: 50, fontWeight: 800, color: INK, lineHeight: 1.2 }}>{slide.callout.title}</div>
                {slide.callout.note && (
                  <div style={{ display: "flex", fontSize: 34, color: MUTED, marginTop: 18, lineHeight: 1.35 }}>{slide.callout.note}</div>
                )}
              </div>
            </div>
          )}
          {slide.afterCallout && (
            <div style={{ display: "flex", fontSize: 36, color: INK, marginTop: 40, lineHeight: 1.4, maxWidth: CW }}>{slide.afterCallout}</div>
          )}
          {slide.cta && (
            <div style={{ display: "flex", width: CW, justifyContent: "center", backgroundColor: ACCENT, borderRadius: 16, padding: "30px 0", marginTop: 44 }}>
              <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: WHITE }}>{slide.cta}</div>
            </div>
          )}
        </div>

        {/* footer: swipe cue OR hairline + url */}
        {slide.footerUrl ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: CW, height: 1, backgroundColor: HAIRLINE }} />
            <div style={{ display: "flex", fontSize: 30, color: MUTED, marginTop: 22 }}>profpeptide.com/news</div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {showSwipe ? (
              <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: ACCENT, letterSpacing: 2 }}>SWIPE →</div>
            ) : (
              <div style={{ display: "flex" }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ---- render + write --------------------------------------------------------
export async function renderCarousel(carousel: Carousel, outDir: string): Promise<string[]> {
  const root = process.cwd();
  const [markBuf, r, m, b, xb] = await Promise.all([
    readFile(join(root, "public/pp-mark.png")),
    readFile(join(root, "public/fonts/Inter-Regular.ttf")),
    readFile(join(root, "public/fonts/Inter-Medium.ttf")),
    readFile(join(root, "public/fonts/Inter-Bold.ttf")),
    readFile(join(root, "public/fonts/Inter-ExtraBold.ttf")),
  ]);
  const mark = `data:image/png;base64,${markBuf.toString("base64")}`;
  const fonts = [
    { name: "Inter", data: r, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: m, weight: 500 as const, style: "normal" as const },
    { name: "Inter", data: b, weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: xb, weight: 800 as const, style: "normal" as const },
  ];

  const total = carousel.slides.length;
  const written: string[] = [];
  for (let i = 0; i < total; i++) {
    const slide = carousel.slides[i];
    const hSize = slide.headline ? fitHeadline(slide.headline, slide.headlineSize ?? 66) : 0;
    if (slide.headline && slide.headlineSize && hSize < slide.headlineSize) {
      console.warn(`  ⚠ slide ${i + 1}: headline scaled ${slide.headlineSize}→${hSize}px to stay within the line cap`);
    }
    const warn = overflowWarning(slide, hSize);
    if (warn) console.warn(`  ⚠ slide ${i + 1}: ${warn} — shorten the copy or lower a size (not clipped, but tight)`);

    const resp = new ImageResponse((<SlideCard mark={mark} slide={slide} index={i} total={total} />) as React.ReactElement, { width: W, height: H, fonts });
    const buf = Buffer.from(await resp.arrayBuffer());
    const file = join(outDir, `pp-ig-${carousel.date}-${carousel.name}-${i + 1}.png`);
    await writeFile(file, buf);
    written.push(file);
    console.log(`  ✓ ${file}  (${buf.length} bytes)`);
  }
  return written;
}

async function main() {
  const name = process.argv[2];
  if (!name) {
    console.error("usage: npx tsx scripts/ig-carousel.tsx <name>   (loads scripts/ig-carousels/<name>.ts)");
    process.exit(1);
  }
  const here = dirname(fileURLToPath(import.meta.url));
  const dataUrl = pathToFileURL(join(here, "ig-carousels", `${name}.ts`)).href;
  const mod = await import(dataUrl);
  const carousel: Carousel = mod.default;
  const outDir = join(homedir(), "Downloads");
  console.log(`Rendering "${carousel.name}" (${carousel.slides.length} slides) → ${outDir}`);
  await renderCarousel(carousel, outDir);
  console.log("Done.");
}

// Run only when invoked directly (allows importing renderCarousel elsewhere).
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((e) => {
    console.error("FAILED:", e);
    process.exit(1);
  });
}
