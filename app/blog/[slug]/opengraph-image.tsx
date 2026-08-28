import { ImageResponse } from "next/og";
import { blogPosts, getBlogPost } from "@/lib/blog";

export const alt = "Power Clean — industrial cleaning insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/** Per-article share card — every post gets its own OG image. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "Power Clean";
  const kicker = post?.kicker ?? "INDUSTRIAL CLEANING";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#23273f 0%,#292F6E 55%,#3a4188 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#00A651",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#00A651",
              fontSize: 22,
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            {kicker}
          </div>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: title.length > 60 ? 58 : 70,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#ffffff", fontSize: 30, fontWeight: 700, display: "flex" }}>
            POWER CLEAN
          </div>
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: 22, display: "flex" }}>
            Roovel Solutions Pvt. Ltd. · Bangalore
          </div>
        </div>
      </div>
    ),
    size
  );
}
