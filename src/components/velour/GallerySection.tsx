import { Instagram } from "lucide-react";

const transformations = [
  { title: "Balayage Transformation", type: "video" as const, videoSrc: "/videos/hair_style.mp4", beforeGradient: "", afterGradient: "" },
  { title: "Bridal Updo", type: "gradient" as const, beforeGradient: "from-stone-500 to-stone-400", afterGradient: "from-rose-200 to-pink-100" },
  { title: "Keratin Treatment", type: "gradient" as const, beforeGradient: "from-zinc-400 to-zinc-300", afterGradient: "from-amber-100 to-orange-50" },
  { title: "Colour Correction", type: "video" as const, videoSrc: "/videos/hair_style.mp4", beforeGradient: "", afterGradient: "" },
  { title: "Precision Cut", type: "gradient" as const, beforeGradient: "from-gray-400 to-gray-300", afterGradient: "from-stone-200 to-amber-50" },
  { title: "Hair Extensions", type: "gradient" as const, beforeGradient: "from-neutral-400 to-neutral-300", afterGradient: "from-yellow-100 to-amber-50" },
];

const VideoCard = ({ title, videoSrc }: { title: string; videoSrc: string }) => (
  <div style={{ border: "1px solid #E5E0D8" }}>
    <div className="relative aspect-[3/2] overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
    <div
      style={{
        padding: "14px 16px",
        borderTop: "1px solid #E5E0D8",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#C9A96E",
        }}
      >
        {title}
      </span>
    </div>
  </div>
);

const BeforeAfterCard = ({ title, beforeGradient, afterGradient }: { title: string; beforeGradient: string; afterGradient: string }) => (
  <div style={{ border: "1px solid #E5E0D8" }}>
    <div className="flex">
      <div className="relative w-1/2">
        <div className={`bg-gradient-to-br ${beforeGradient} aspect-[3/4] flex items-center justify-center`}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "#6B6B6B", background: "rgba(255,255,255,0.85)", padding: "4px 12px" }}>Before</span>
        </div>
      </div>
      <div style={{ width: 2, background: "#C9A96E" }} />
      <div className="relative w-1/2">
        <div className={`bg-gradient-to-br ${afterGradient} aspect-[3/4] flex items-center justify-center`}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "#6B6B6B", background: "rgba(255,255,255,0.85)", padding: "4px 12px" }}>After</span>
        </div>
      </div>
    </div>
    <div style={{ padding: "14px 16px", borderTop: "1px solid #E5E0D8", textAlign: "center" }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "#C9A96E" }}>{title}</span>
    </div>
  </div>
);

const GallerySection = () => (
  <section id="gallery" className="velour-section" style={{ background: "#FAF7F2", padding: "100px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.25em", color: "#C9A96E" }}>OUR WORK</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, color: "#111111", marginTop: 12 }}>Before &amp; After Transformations</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {transformations.map((t, i) =>
          t.type === "video" ? (
            <VideoCard key={i} title={t.title} videoSrc={t.videoSrc!} />
          ) : (
            <BeforeAfterCard key={i} title={t.title} beforeGradient={t.beforeGradient} afterGradient={t.afterGradient} />
          )
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 48 }}>
        <Instagram size={18} color="#C9A96E" />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#3D3D3D" }}>
          Follow our work on Instagram{" "}
          <a href="https://instagram.com/velour.dubai" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E", textDecoration: "none" }}>@velour.dubai</a> →
        </span>
      </div>
    </div>
  </section>
);

export default GallerySection;
