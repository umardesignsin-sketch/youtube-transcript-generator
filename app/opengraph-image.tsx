import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 22,
            background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 55%, #0ea5e9 100%)",
            marginBottom: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ width: 44, height: 8, borderRadius: 6, background: "#fff" }} />
            <div style={{ width: 32, height: 8, borderRadius: 6, background: "#fff" }} />
            <div style={{ width: 38, height: 8, borderRadius: 6, background: "#fff" }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          Free YouTube Transcript Generator
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          Generate · Copy · Download — instantly, for free
        </div>
      </div>
    ),
    { ...size }
  );
}
