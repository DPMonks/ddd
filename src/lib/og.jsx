import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — premium dark-tech digital design & development studio`;

const host = SITE_URL.replace(/^https?:\/\//, "");

// Branded, on-brand OG/Twitter card generated at build time.
export function ogImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          border: "8px solid #9B4DFF",
        }}
      >
        <div
          style={{
            color: "#9B4DFF",
            fontSize: 26,
            letterSpacing: 8,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Digital Design Services
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: 22,
              color: "#FFFFFF",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span>Design</span>
            <span style={{ color: "#9B4DFF" }}>&</span>
            <span>Development</span>
          </div>
          <div style={{ color: "#CFCFCF", fontSize: 34, marginTop: 20 }}>
            {SITE_TAGLINE}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* 6:1 logo placeholder echo */}
          <div
            style={{
              width: 360,
              height: 60,
              background: "#CFCFCF",
              border: "3px solid #9B4DFF",
              borderRadius: 12,
            }}
          />
          <div style={{ color: "#CFCFCF", fontSize: 26 }}>{host}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
