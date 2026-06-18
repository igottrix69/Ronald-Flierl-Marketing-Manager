import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogAlt = `${site.name} — ${site.tagline}`;
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const words = [
  { t: "Marketing" },
  { t: "that" },
  { t: "generates" },
  { t: "leads,", accent: true },
  { t: "not" },
  { t: "just" },
  { t: "likes." },
];

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 78% -12%, rgba(27,136,255,0.45), rgba(10,10,10,0) 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#1b88ff",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            {words.map((w, i) => (
              <span
                key={i}
                style={{
                  color: w.accent ? "#1b88ff" : "#ffffff",
                  marginRight: 18,
                }}
              >
                {w.t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9496a0" }}>
            {site.tagline} · {site.location}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
