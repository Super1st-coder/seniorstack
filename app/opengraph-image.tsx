import { ImageResponse } from "next/og";

export const alt = "SeniorStack — Senior Full-Stack Engineers for Swiss Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          color: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 22, height: 22, background: "#E30613" }} />
          <div style={{ fontSize: 30, letterSpacing: -0.6 }}>SeniorStack</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.02,
              letterSpacing: -2.4,
              maxWidth: 980,
            }}
          >
            Senior Full-Stack Engineers for Swiss Companies
          </div>
          <div style={{ fontSize: 26, color: "#A3A3A3" }}>seniorstack.ch</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
