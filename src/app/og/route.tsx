import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Diamond mark */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 32 32"
          style={{ marginBottom: "40px", opacity: 0.9 }}
        >
          <path
            d="M16 2 L30 16 L16 30 L2 16 Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M9 21 L9 11 L16 18 L23 11 L23 21"
            stroke="white"
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          MARDENIC
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "700px",
          }}
        >
          Intelligence that doesn&apos;t compromise.
        </div>

        {/* Subline */}
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "22px",
            marginTop: "24px",
            lineHeight: 1.5,
            maxWidth: "600px",
          }}
        >
          AI Research & Development — without compromising safety.
        </div>

        {/* Bottom right badge */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            color: "rgba(255,255,255,0.2)",
            fontSize: "13px",
            letterSpacing: "0.1em",
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
