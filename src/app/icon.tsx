import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          backgroundColor: "#0f172a",
          borderRadius: 4,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "1.5px solid #0891b2",
            borderRadius: 4,
          }}
        />
<div
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "#f1f5f9",
            fontFamily: "sans-serif",
            marginTop: 2,
            letterSpacing: -0.5,
          }}
        >
          Pp
        </div>
      </div>
    ),
    { ...size }
  );
}
