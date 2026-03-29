import { useState } from "react";
import { PlusCircle, Instagram } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80",
];

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        breakInside: "avoid",
        marginBottom: 10,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,169,110,0.2)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlusCircle color="white" size={32} />
      </div>
    </div>
  );
};

const GallerySection = () => (
  <section
    id="gallery"
    className="velour-section"
    style={{ background: "#FAF7F2", padding: "100px 0" }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#C9A96E",
          }}
        >
          OUR WORK
        </span>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 400,
            color: "#111111",
            marginTop: 12,
          }}
        >
          The Results Speak for Themselves
        </h2>
      </div>

      {/* Masonry */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3"
        style={{ columnGap: 10 }}
      >
        {images.map((src, i) => (
          <GalleryImage key={i} src={src} alt={`Velour salon work ${i + 1}`} />
        ))}
      </div>

      {/* Instagram CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 48,
        }}
      >
        <Instagram size={18} color="#C9A96E" />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#3D3D3D",
          }}
        >
          Follow our work on Instagram{" "}
          <a
            href="https://instagram.com/velour.dubai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A96E", textDecoration: "none" }}
          >
            @velour.dubai
          </a>{" "}
          →
        </span>
      </div>
    </div>
  </section>
);

export default GallerySection;
