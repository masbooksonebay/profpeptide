import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Node runtime (not edge): the OFFICIAL brand mark (public/logo-glasses.png) is read from
// disk at render time, replacing the old hand-drawn glasses SVG. Edge can't readFile, so this
// route was converted off edge; the mark is traced for /about/** via outputFileTracingIncludes.
export const alt = "About Prof. Peptide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0f172a";
const PANEL = "#1e293b";
const TEAL = "#3A759F";
const TEAL_SOFT = "rgba(8, 145, 178, 0.15)";
const TEXT = "#f1f5f9";
const MUTED = "#94a3b8";

const PILLARS = [
  "Profiles",
  "Guides",
  "Vendor catalog",
  "iOS app",
];

export default async function Image() {
  const markData = await readFile(join(process.cwd(), "public/logo-glasses.png"));
  const mark = `data:image/png;base64,${markData.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${NAVY} 0%, #111c33 100%)`,
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: TEXT,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 56,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 16px",
            borderRadius: 999,
            background: TEAL_SOFT,
            border: `1px solid ${TEAL}`,
            color: TEAL,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          About
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 56 }}>
          {/* Official brand mark (public/logo-glasses.png) — white glasses on #3A759F, so the
              tile background is baked into the asset; no separate colored wrapper. Resized only. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={112} height={112} alt="" style={{ width: 112, height: 112, borderRadius: 26 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 80,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: TEXT,
              }}
            >
              About
            </div>
            <div
              style={{
                fontSize: 80,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: TEXT,
              }}
            >
              Prof. Peptide
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 400,
            color: MUTED,
            letterSpacing: "-0.01em",
            maxWidth: 1000,
            lineHeight: 1.3,
          }}
        >
          Peptide research consolidated. One source, structured.
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: "auto",
            marginBottom: 12,
            flexWrap: "wrap",
          }}
        >
          {PILLARS.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 20px",
                borderRadius: 14,
                background: PANEL,
                border: "1px solid rgba(148, 163, 184, 0.15)",
                borderLeft: `4px solid ${TEAL}`,
                fontSize: 24,
                fontWeight: 600,
                color: TEXT,
                letterSpacing: "-0.01em",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
            fontSize: 22,
            color: MUTED,
            letterSpacing: "-0.01em",
          }}
        >
          <div>profpeptide.com/about</div>
          <div style={{ color: TEXT, fontWeight: 500 }}>Prof. Peptide</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
