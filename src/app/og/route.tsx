import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F0EFEC",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div
          style={{
            color: "#1A1917",
            fontSize: "15px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          MARDENIC
        </div>

        {/* Middle: headline + subline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#1A1917",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "780px",
            }}
          >
            Intelligence that doesn't compromise.
          </div>
          <div
            style={{
              color: "#78756E",
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "580px",
            }}
          >
            AI Research & Development — safety at the core.
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            color: "#A8A59E",
            fontSize: "14px",
            letterSpacing: "0.08em",
          }}
        >
          mardenic.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
