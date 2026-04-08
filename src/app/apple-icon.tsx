import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d9488",
          borderRadius: 24,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 6,
            right: 6,
            bottom: 6,
            border: "3px solid rgba(255,255,255,0.4)",
            borderRadius: 20,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 20,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          15
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            fontFamily: "sans-serif",
            marginTop: 10,
            letterSpacing: -2,
          }}
        >
          Pp
        </div>
      </div>
    ),
    { ...size }
  );
}
