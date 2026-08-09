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
// SAFE ZONES (Instagram): critical content stays inside the central 1080×1080 square
// (y=135..1215) and clear of the bottom 15% (below y=1148); edge padding is 80px and
// the swipe cue sits at ~y=1108. A slide may opt `dark: true` (the cover) — dark
// #1E3C52 field, white wordmark/headline, #92BAD6 accents, and an inverted Pp tile.
// Overflow is handled, never silently clipped: long headlines scale down to a line
// cap, and any slide whose estimated content exceeds the safe height prints a WARNING.
import React from "react";
import { ImageResponse } from "next/og";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { homedir } from "node:os";

// ---- palette ---------------------------------------------------------------
const WHITE = "#FFFFFF";
const INK = "#16181B";
const ACCENT = "#3A759F";
const HAIRLINE = "#D9DEE4";
const SURFACE = "#F4F6F8";
const MUTED = "#5E6B78";
// dark-cover palette
const DARK_BG = "#1E3C52";
const DARK_ACCENT = "#92BAD6"; // NEWS + accent bar + top rule on dark
const DARK_SUB = "#C8D6E2"; // subhead on dark

interface Theme {
  bg: string;
  rule: string; // top accent rule
  ink: string; // wordmark + headline default + body
  accent: string; // NEWS + accent bar + accent headline runs
  subhead: string; // subhead + section label
  tile: "image" | "invert";
  ctaBg: string; // filled CTA button fill
  ctaInk: string; // CTA button label
  hairline: string; // footer divider rule
  footerInk: string; // footer url text
}
// On the dark field the same rule as the cover's accent applies: swap #3A759F → #92BAD6
// wherever mid-blue won't read on #1E3C52. The CTA can't stay #3A759F-on-navy (too close in
// value) so it inverts — #92BAD6 fill with a #1E3C52 label — and the #D9DEE4 hairline (which
// vanishes on navy) becomes #92BAD6; footer url text goes to the #C8D6E2 subhead tone.
const LIGHT: Theme = { bg: WHITE, rule: ACCENT, ink: INK, accent: ACCENT, subhead: MUTED, tile: "image", ctaBg: ACCENT, ctaInk: WHITE, hairline: HAIRLINE, footerInk: MUTED };
const DARK: Theme = { bg: DARK_BG, rule: DARK_ACCENT, ink: WHITE, accent: DARK_ACCENT, subhead: DARK_SUB, tile: "invert", ctaBg: DARK_ACCENT, ctaInk: DARK_BG, hairline: DARK_ACCENT, footerInk: DARK_SUB };

// ---- geometry (1080×1350 with Instagram safe zones) ------------------------
const W = 1080;
const H = 1350;
const PAD = 80; // edge padding
const CW = W - PAD * 2; // content width 920
const TOP = 125; // content top → masthead lands at y≈135 (central-square top)
const BOTTOM = 212; // content bottom → y≈1138, swipe at ≈1108, clear of the y=1148 line

// ---- data contract ---------------------------------------------------------
export type Run = { text: string; accent?: boolean };
export interface Callout {
  title: string;
  note?: string;
}
export interface Slide {
  dark?: boolean; // dark field (the cover); interior slides default light
  label?: string; // upper-right section label ("TRACK ONE")
  headline?: Run[]; // ink/accent runs — one run = a plain wrapping headline
  headlineSize?: number; // target size; auto-reduced if it would exceed the line cap
  accentBar?: boolean; // short accent bar under the headline
  subhead?: string; // muted line under the headline
  body?: string[]; // body paragraphs
  callout?: Callout; // SURFACE box with an ACCENT left bar (light slides)
  afterCallout?: string; // paragraph below the callout
  cta?: string; // filled ACCENT button label, full content width
  footerUrl?: boolean; // hairline + profpeptide.com/news
  swipe?: boolean; // "SWIPE →" (default true, off on the last slide / when footerUrl)
}
export interface Carousel {
  date: string; // "2026-08-08"
  name: string; // "two-tracks"
  slides: Slide[];
}

// ---- text-fit helpers ------------------------------------------------------
const estLines = (text: string, size: number, width = CW) =>
  Math.max(1, Math.ceil((text.length * size * 0.52) / width));

function fitHeadline(runs: Run[], target: number, cap = 4): number {
  const text = runs.map((r) => r.text).join(" ");
  let size = target;
  while (size > 40 && estLines(text, size) > cap) size -= 2;
  return size;
}

// Rough content-height estimate for the main block. Warns — never clips.
function overflowWarning(s: Slide, headlineSize: number): string | null {
  let h = 0;
  if (s.headline) h += estLines(s.headline.map((r) => r.text).join(" "), headlineSize) * headlineSize * 1.12;
  if (s.accentBar) h += 8 + 30;
  if (s.subhead) h += estLines(s.subhead, 40) * 40 * 1.3 + 28;
  for (const p of s.body ?? []) h += estLines(p, 36) * 36 * 1.4 + 24;
  if (s.callout) {
    h += 76 + estLines(s.callout.title, 50) * 50 * 1.2;
    if (s.callout.note) h += estLines(s.callout.note, 34) * 34 * 1.35 + 18;
    h += 36;
  }
  if (s.afterCallout) h += estLines(s.afterCallout, 36) * 36 * 1.4 + 40;
  if (s.cta) h += 100 + 44;
  const budget = H - TOP - BOTTOM - 150 - 40; // minus masthead band + footer margin
  return h > budget ? `main content ≈ ${Math.round(h)}px exceeds the ~${budget}px between masthead and safe-zone floor` : null;
}

// ---- building blocks -------------------------------------------------------
function Masthead({ mark, theme }: { mark: string; theme: Theme }) {
  const TILE = 120;
  const WM = 56;
  const NEWS = Math.round(WM * 0.82); // 46
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {theme.tile === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={mark} width={TILE} height={TILE} alt="" style={{ width: TILE, height: TILE, borderRadius: 16 }} />
      ) : (
        // Inverted tile for the dark field — white interior, #3A759F border, #1E3C52 "Pp".
        // Drawn (vector) rather than composited: no raster to alias, edges stay crisp.
        <div style={{ display: "flex", width: TILE, height: TILE, borderRadius: 18, backgroundColor: WHITE, border: `7px solid ${ACCENT}`, alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", fontSize: 66, fontWeight: 800, color: DARK_BG, letterSpacing: -3 }}>Pp</div>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
        <div style={{ display: "flex", fontSize: WM, fontWeight: 800, color: theme.ink, letterSpacing: -1.4 }}>Prof. Peptide</div>
        {/* NEWS as individual glyphs w/ per-letter marginRight — no leading offset, so the
            "N" left edge sits at the same x as the "P" above (verified by measurement). */}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 8 }}>
          {["N", "E", "W", "S"].map((c, i) => (
            <div key={i} style={{ display: "flex", fontSize: NEWS, fontWeight: 700, color: theme.accent, marginRight: i < 3 ? 10 : 0 }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Headline({ runs, size, theme }: { runs: Run[]; size: number; theme: Theme }) {
  if (runs.length === 1) {
    return (
      <div style={{ display: "flex", fontSize: size, fontWeight: 800, color: runs[0].accent ? theme.accent : theme.ink, lineHeight: 1.12, letterSpacing: -1.5 }}>
        {runs[0].text}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
      {runs.map((r, i) => (
        <div key={i} style={{ display: "flex", fontSize: size, fontWeight: 800, color: r.accent ? theme.accent : theme.ink, lineHeight: 1.12, letterSpacing: -1, marginRight: i < runs.length - 1 ? 18 : 0 }}>
          {r.text}
        </div>
      ))}
    </div>
  );
}

function SlideCard({ mark, slide, index, total }: { mark: string; slide: Slide; index: number; total: number }) {
  const theme = slide.dark ? DARK : LIGHT;
  const isLast = index === total - 1;
  const showSwipe = !slide.footerUrl && (slide.swipe ?? !isLast);
  const hSize = slide.headline ? fitHeadline(slide.headline, slide.headlineSize ?? 66) : 0;

  return (
    <div style={{ width: W, height: H, display: "flex", flexDirection: "column", backgroundColor: theme.bg, fontFamily: "Inter" }}>
      <div style={{ display: "flex", width: W, height: 10, backgroundColor: theme.rule }} />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between", padding: `${TOP}px ${PAD}px ${BOTTOM}px ${PAD}px` }}>
        {/* header: masthead + section label — top of the central square (y≈135) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Masthead mark={mark} theme={theme} />
          {slide.label ? (
            <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: theme.subhead, letterSpacing: 3, marginTop: 16 }}>{slide.label}</div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>

        {/* main content, vertically centered in the safe band */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1, paddingTop: 28, paddingBottom: 28 }}>
          {slide.headline && <Headline runs={slide.headline} size={hSize} theme={theme} />}
          {slide.accentBar && <div style={{ display: "flex", width: 96, height: 8, borderRadius: 4, backgroundColor: theme.accent, marginTop: 30 }} />}
          {slide.subhead && (
            <div style={{ display: "flex", fontSize: 40, color: theme.subhead, marginTop: 28, lineHeight: 1.3, maxWidth: CW }}>{slide.subhead}</div>
          )}
          {(slide.body ?? []).map((p, i) => (
            <div key={i} style={{ display: "flex", fontSize: 36, color: theme.ink, marginTop: i === 0 ? 34 : 24, lineHeight: 1.4, maxWidth: CW }}>
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
            <div style={{ display: "flex", fontSize: 36, color: theme.ink, marginTop: 40, lineHeight: 1.4, maxWidth: CW }}>{slide.afterCallout}</div>
          )}
          {slide.cta && (
            <div style={{ display: "flex", width: CW, justifyContent: "center", backgroundColor: theme.ctaBg, borderRadius: 16, padding: "30px 0", marginTop: 44 }}>
              <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: theme.ctaInk }}>{slide.cta}</div>
            </div>
          )}
        </div>

        {/* footer at the safe-zone floor (y≈1108): swipe cue OR hairline + url */}
        {slide.footerUrl ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: CW, height: 1, backgroundColor: theme.hairline }} />
            <div style={{ display: "flex", fontSize: 30, color: theme.footerInk, marginTop: 22 }}>profpeptide.com/news</div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {showSwipe ? (
              <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: theme.accent, letterSpacing: 2 }}>SWIPE →</div>
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

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((e) => {
    console.error("FAILED:", e);
    process.exit(1);
  });
}
