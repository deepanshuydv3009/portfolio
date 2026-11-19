import { ImageResponse } from "next/og";
export const alt = "Deepanshu Yadav, software engineer and cybersecurity researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 80, background: "#0c0d0f", color: "#ece9e2" }}>
        <div style={{ fontSize: 96, fontFamily: "Georgia, serif" }}>Deepanshu Yadav</div>
        <div style={{ fontSize: 36, color: "#b9e36b", marginTop: 16 }}>Software engineer and cybersecurity researcher</div>
      </div>
    ),
    size,
  );
}
