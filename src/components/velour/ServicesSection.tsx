import { useState } from "react";

const services = [
  {
    name: "Cut & Styling",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    desc: "Precision cuts and blowdries for all hair types. Starting from AED 120.",
    video: "/colourbalyage.mp4",
  },
  {
    name: "Colour & Balayage",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    desc: "Root touch-ups, full colour, highlights and balayage. From AED 280.",
    video: "/videos/hair_style.mp4",
  },
  {
    name: "Keratin & Treatments",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
    desc: "Keratin smoothing, Olaplex, hair botox and deep conditioning. From AED 350.",
    video: "/keratin.mp4",
  },
  {
    name: "Nails & Manicure",
    img: "/pedi and mani.jpeg",
    desc: "Gel, acrylic, BIAB, and nail art. Gel mani-pedi combo from AED 189.",
  },
  {
    name: "Facials & Skincare",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    desc: "Hydrating, anti-ageing and deep-cleanse facials. From AED 150.",
  },
  {
    name: "Lashes, Brows & Waxing",
    img: "/lashes and brows.jpg",
    desc: "Lash lift, brow lamination, threading and full waxing. From AED 35.",
  },
];

const ServiceCard = ({ name, img, desc, video }: (typeof services)[0]) => {
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
            fontSize: 11,
            color: "#C9A96E",
          }}
        >
          From AED pricing
        </span>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#E8E0D5",
            marginTop: 10,
            lineHeight: 1.6,
            opacity: 1,
            transform: "translateY(0)",
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
            marginTop: 12,
            display: "inline-block",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#C9A96E",
            textDecoration: "none",
            borderBottom: hovered ? "1px solid #C9A96E" : "1px solid transparent",
          }}
        >
          Book this service
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section
    id="services"
    className="velour-section"
    style={{ background: "#111111", padding: "100px 0" }}
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
            color: "white",
            marginTop: 12,
          }}
        >
          Our Full Range of Services
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#E8E0D5",
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
        style={{ gap: 2 }}
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
