import { useState } from "react";

const services = [
  {
    name: "Hair Cut",
    price: "From AED 250",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    desc: "Precision cuts tailored to your face shape, texture, and personal style.",
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
  },
  {
    name: "Wax",
    price: "From AED 35",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
    desc: "Face and body waxing with gentle products for smooth, long-lasting results.",
  },
  {
    name: "Extensions",
    price: "From AED 650",
    img: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=600&q=80",
    desc: "Volume, length, and seamless blend extensions customized to your hair goals.",
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
      style={{
        aspectRatio: "3/4",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        outline: hovered ? "2px solid #C9A96E" : "2px solid transparent",
        outlineOffset: -2,
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
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
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
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      )}
      {/* Always-visible gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 55%)",
        }}
      />
      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17,17,17,0.55)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Gold top border on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "#C9A96E",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "28px 24px",
          zIndex: 2,
        }}
      >
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 26,
            color: "white",
            fontWeight: 400,
          }}
        >
          {name}
        </h3>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "white",
            fontWeight: 700,
            display: "inline-block",
            marginTop: 6,
          }}
        >
          {price}
        </span>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#E8E0D5",
            marginTop: 10,
            lineHeight: 1.6,
            opacity: hovered ? 1 : 0,
            maxHeight: hovered ? 64 : 0,
            overflow: "hidden",
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.3s ease",
          }}
        >
          {desc}
        </p>
        <a
          href="https://wa.me/971503857200?text=Hi%20Velour!%20I%20want%20to%20book%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: hovered ? 12 : 0,
            display: "inline-block",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#111111",
            textDecoration: "none",
            background: "#C9A96E",
            padding: "8px 14px",
            borderRadius: 10,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            pointerEvents: hovered ? "auto" : "none",
            transition: "opacity 0.3s ease, transform 0.3s ease, margin-top 0.3s ease",
          }}
        >
          Quick Book
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section
    id="services"
    className="velour-section"
    style={{ background: "#FFFFFF", padding: "100px 0" }}
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
