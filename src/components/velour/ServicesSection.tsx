import { useState } from "react";

const services = [
  {
    name: "Hair Cut",
    price: "From AED 250",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    desc: "Precision cuts tailored to your face shape, texture, and personal style.",
    video: "/videos/hair cut video.mp4",
  },
  {
    name: "Hair Styling",
    price: "From AED 250",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    desc: "Expert blow-dries, waves, and styling for everyday looks and special events.",
    video: "/videos/hair_style.mp4",
  },
  {
    name: "Color & Highlights",
    price: "From AED 450",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    desc: "Balayage, ombre, and custom color transformations for rich dimension.",
    video: "/videos/hair color.mp4",
  },
  {
    name: "Keratin Treatments",
    price: "From AED 800",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
    desc: "Keratin smoothing, Olaplex, hair botox and deep conditioning. From AED 350.",
    video: "/videos/keratin.mp4",
  },
  {
    name: "Nail Artistry",
    price: "From AED 189",
    img: "/videos/pedi and mani.jpeg",
    desc: "Gel, acrylic, BIAB, and custom nail designs with a premium finish.",
  },
  {
    name: "Facials & Skincare",
    price: "From AED 150",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    desc: "Hydrating, anti-ageing and deep-cleanse facials. From AED 150.",
  },
  {
    name: "Lash and Brows",
    price: "From AED 35",
    img: "/videos/lashes and brows.jpg",
    desc: "Lash lift, tinting, brow shaping, and lamination for a polished look.",
    video: "/videos/eye lash.mp4",
  },
  {
    name: "Wax",
    price: "From AED 35",
    img: "/wax image.jpeg",
    desc: "Face and body waxing with gentle products for smooth, long-lasting results.",
  },
  {
    name: "Extensions",
    price: "From AED 650",
    img: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=600&q=80",
    desc: "Volume, length, and seamless blend extensions customized to your hair goals.",
    video: "/videos/hair extension.mp4",
  },
];

const ServiceCard = ({ name, price, img, desc, video }: (typeof services)[0]) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
      style={{
        aspectRatio: "3/4",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: 14,
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.18)" : "0 4px 24px rgba(0,0,0,0.08)",
        outline: "none",
        transition: "box-shadow 0.35s ease",
      }}
    >
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      ) : (
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      )}
      {/* Bottom gradient for readable white text (screenshot style) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 42%, rgba(0,0,0,0) 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Slightly stronger dim on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "22px 22px 20px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 2.4vw, 28px)",
            color: "white",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.92)",
            marginTop: 8,
            lineHeight: 1.5,
            maxWidth: "100%",
            opacity: hovered ? 1 : 0,
            maxHeight: hovered ? 48 : 0,
            overflow: "hidden",
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease",
          }}
        >
          {desc}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 14,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "white",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {price}
          </span>
          <a
            href="https://wa.me/971503857200?text=Hi%20Velour!%20I%20want%20to%20book%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flexShrink: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "white",
              textDecoration: "none",
              background: "#C9A96E",
              padding: "10px 16px",
              borderRadius: 999,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              pointerEvents: hovered ? "auto" : "none",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            Quick Book
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section
    id="services"
    className="velour-section"
    style={{ background: "#FAF7F2", padding: "100px 0" }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#C9A96E",
          }}
        >
          WHAT WE OFFER
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
          Our Full Range of Services
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#4A4A4A",
            marginTop: 12,
          }}
        >
          From a quick blowdry to a full bridal transformation, all done
          beautifully.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 32 }}
      >
        {services.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#C9A96E",
            border: "1.5px solid #C9A96E",
            padding: "14px 36px",
            textDecoration: "none",
            borderRadius: 3,
            transition: "all 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C9A96E";
            e.currentTarget.style.color = "#111111";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#C9A96E";
          }}
        >
          VIEW FULL SERVICE MENU →
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
