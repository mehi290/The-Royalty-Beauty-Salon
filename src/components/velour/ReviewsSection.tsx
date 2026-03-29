import { Star } from "lucide-react";

const reviews = [
  {
    text: "I've tried every salon from Jumeirah to JBR and nothing comes close to Velour. My balayage came out exactly as I showed them. No damage, no brassiness — just perfect. Booked my next appointment before I even left.",
    name: "Sarah M.",
    location: "Jumeirah, Dubai",
    initial: "S",
  },
  {
    text: "As someone with thick, curly hair, I always dreaded salons in Dubai. Velour genuinely understands all hair types. My keratin lasted 4 months and my hair has never felt healthier. The atmosphere is so calm and welcoming.",
    name: "Aisha K.",
    location: "Downtown Dubai",
    initial: "A",
  },
  {
    text: "Came in for a quick nail appointment and ended up getting my hair done too — couldn't resist! Both were absolutely flawless. The team are so warm and professional. This is my place now.",
    name: "Priya R.",
    location: "Dubai Marina",
    initial: "P",
  },
];

const ReviewsSection = () => (
  <section
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
          CLIENT LOVE
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
          Over 1,000 Five-Star Reviews
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#E8E0D5",
            marginTop: 12,
          }}
        >
          Don't take our word for it — here's what our Dubai clients say.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 24 }}>
        {reviews.map((r) => (
          <div
            key={r.name}
            style={{
              background: "#1E1E1E",
              padding: "40px 36px",
              borderTop: "3px solid #C9A96E",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: 4 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} color="#C9A96E" fill="#C9A96E" />
              ))}
            </div>

            {/* Quote mark */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 52,
                color: "#C9A96E",
                lineHeight: 1,
                marginTop: 20,
              }}
            >
              ❝
            </div>

            {/* Review text */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontStyle: "italic",
                color: "white",
                lineHeight: 1.75,
                marginTop: 8,
              }}
            >
              {r.text}
            </p>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 28,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#C9A96E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {r.initial}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#E8E0D5",
                    fontWeight: 500,
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: "#888888",
                  }}
                >
                  {r.location} · ★ Google Reviews
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          marginTop: 48,
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          textTransform: "uppercase",
          color: "#E8E0D5",
          letterSpacing: "0.1em",
        }}
      >
        <span>4.9 / 5 on Google</span>
        <span style={{ color: "#C9A96E" }}>◆</span>
        <span>1,000+ Happy Clients</span>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
