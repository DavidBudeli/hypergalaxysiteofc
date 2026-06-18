import { ImageResponse } from "next/og";

export const alt = "Hyper Galaxy - Software, IA, Automação e Cloud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#050507",
        color: "#F6F4EF",
        padding: "64px 72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #8B5CF6",
            borderRadius: 26,
            color: "#C4B5FD",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          H
        </div>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 800, letterSpacing: 4 }}>
          HYPER GALAXY
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 900, lineHeight: 0.92 }}>
          SISTEMAS CONECTADOS
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 900, lineHeight: 0.92, color: "#8B5CF6" }}>
          PARA OPERAÇÕES REAIS.
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 18, color: "#B9BBC5" }}>
        <span>SOFTWARE / IA / AUTOMAÇÃO / CLOUD</span>
        <span>hypergalaxy.cloud</span>
      </div>
    </div>,
    size,
  );
}
