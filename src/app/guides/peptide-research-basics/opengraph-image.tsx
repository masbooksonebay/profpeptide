import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Peptide Research Basics — Prof. Peptide Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0f172a";
const PANEL = "#1e293b";
const TEAL = "#3A759F";
const TEAL_SOFT = "rgba(8, 145, 178, 0.15)";
const TEXT = "#f1f5f9";
const MUTED = "#94a3b8";

const TOPICS = [
  "Mg vs mcg",
  "BAC water",
  "Storage & cycling",
  "Quality testing",
];

export default async function Image() {
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
          Guide
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 56 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 26,
              background: TEAL,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Pp
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: TEXT,
              }}
            >
              Peptide Research
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: TEXT,
              }}
            >
              Basics
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
          What peptides are, how they signal, and what quality testing means.
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
          {TOPICS.map((t) => (
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
          <div>profpeptide.com/guides</div>
          <div style={{ color: TEXT, fontWeight: 500 }}>Prof. Peptide</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
