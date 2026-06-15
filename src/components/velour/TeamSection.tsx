import { useState } from "react";
import { Link } from "react-router-dom";

const team = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    name: "Sofia",
    title: "SENIOR COLOUR SPECIALIST",
    bio: "12 years of colour expertise, trained in Paris and London.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    name: "Nour",
    title: "HAIR STYLIST & KERATIN EXPERT",
    bio: "Specialist in all hair types, particularly curly and textured hair.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    name: "James",
    title: "CREATIVE DIRECTOR",
    bio: "Award-trained stylist with 15 years of experience across Dubai and London.",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    name: "Lana",
    title: "NAIL & BEAUTY THERAPIST",
    bio: "Certified in gel, acrylic, BIAB nail techniques and advanced facials.",
  },
];

const TeamCard = ({ img, name, title, bio }: (typeof team)[0]) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={img}
        alt={name}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 220,
          height: 220,
          objectFit: "cover",
          margin: "0 auto",
          display: "block",
          outline: hovered ? "2px solid #C9A96E" : "2px solid transparent",
          outlineOffset: 6,
          transition: "outline 0.3s ease",
        }}
      />
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          color: "#111111",
          marginTop: 18,
          fontWeight: 400,
        }}
      >
        {name}
      </h3>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#C9A96E",
          marginTop: 4,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "#888888",
          marginTop: 8,
        }}
      >
        {bio}
      </p>
      <Link
        to="/book"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: "#C9A96E",
          textDecoration: "none",
          marginTop: 8,
          display: "inline-block",
          transition: "text-decoration 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
      >
        Book with {name} →
      </Link>
    </div>
  );
};

const TeamSection = () => (
  <section
    id="team"
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
          OUR EXPERTS
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
          Skilled. Passionate. Here For You.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#3D3D3D",
            marginTop: 12,
            maxWidth: 600,
            margin: "12px auto 0",
          }}
        >
          Every Ash Beauty Salon stylist is internationally trained and personally selected
          for their passion for beauty and care for clients.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ gap: 40 }}
      >
        {team.map((t) => (
          <TeamCard key={t.name} {...t} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href="#team"
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
          MEET THE FULL TEAM →
        </a>
      </div>
    </div>
  </section>
);

export default TeamSection;
