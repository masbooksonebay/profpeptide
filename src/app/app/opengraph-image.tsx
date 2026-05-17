import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prof. Peptide for iOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0f172a";
const PANEL = "#1e293b";
const TEAL = "#0891b2";
const TEAL_SOFT = "rgba(8, 145, 178, 0.15)";
const TEXT = "#f1f5f9";
const MUTED = "#94a3b8";

const FEATURES: { label: string; sub?: string }[] = [
  { label: "Calculator", sub: "Dose math" },
  { label: "Compounds", sub: "30+ profiles" },
  { label: "Research", sub: "Latest studies" },
  { label: "Codes", sub: "Verified vendors" },
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
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: TEAL,
            }}
          />
          Now on iOS
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 72 }}>
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
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1,
              color: TEXT,
            }}
          >
            Prof. Peptide
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: "auto",
            marginBottom: 12,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "22px 24px",
                borderRadius: 18,
                background: PANEL,
                border: "1px solid rgba(148, 163, 184, 0.15)",
                borderLeft: `4px solid ${TEAL}`,
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  color: TEXT,
                  letterSpacing: "-0.02em",
                }}
              >
                {f.label}
              </div>
              {f.sub && (
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 20,
                    color: MUTED,
                  }}
                >
                  {f.sub}
                </div>
              )}
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
          <div>profpeptide.com/app</div>
          <div style={{ color: TEXT, fontWeight: 500 }}>Free on the App Store</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
