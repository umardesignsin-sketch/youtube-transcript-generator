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
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 55%, #0ea5e9 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ width: 16, height: 3, borderRadius: 2, background: "#fff" }} />
          <div style={{ width: 12, height: 3, borderRadius: 2, background: "#fff" }} />
          <div style={{ width: 14, height: 3, borderRadius: 2, background: "#fff" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
