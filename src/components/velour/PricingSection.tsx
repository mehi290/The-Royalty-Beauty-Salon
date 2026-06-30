import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Gem,
  Hand,
  Heart,
  Scissors,
  Sparkles,
  User,
  Wind,
} from "lucide-react";
import { bookingCategories, type BookingIconKey } from "@/data/bookingCatalog";

const gold = "#9F3F5C";

const iconMap: Record<BookingIconKey, ReactNode> = {
  scissors: <Scissors size={18} strokeWidth={1.5} />,
  sparkles: <Sparkles size={18} strokeWidth={1.5} />,
  heart: <Heart size={18} strokeWidth={1.5} />,
  hand: <Hand size={18} strokeWidth={1.5} />,
  gem: <Gem size={18} strokeWidth={1.5} />,
  face: <User size={18} strokeWidth={1.5} />,
  wind: <Wind size={18} strokeWidth={1.5} />,
};

const PricingSection = () => (
  <section
    id="pricing"
    className="velour-section"
    style={{ background: "#FFFFFF", padding: "100px 0" }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: gold,
          }}
        >
          BOOK NOW
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
          Reserve Your Experience
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#4A4A4A",
            marginTop: 12,
            maxWidth: 600,
            margin: "12px auto 0",
          }}
        >
          Book your appointment in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14 }}>
        {bookingCategories.map((c) => (
          <Link
            key={c.id}
            to={`/book?category=${encodeURIComponent(c.id)}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 16px",
              textDecoration: "none",
              border: "1px solid #E8E5E0",
              borderRadius: 10,
              background: "#FAFAF9",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = gold;
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E8E5E0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#E8DFD0",
                color: "#5C5346",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {iconMap[c.icon]}
            </span>
            <span style={{ minWidth: 0, textAlign: "left" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#111111",
                }}
              >
                {c.title}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#666666",
                  marginTop: 2,
                }}
              >
                {c.description}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "#666666",
          textAlign: "center",
          marginTop: 36,
        }}
      >
        Prefer to call?{" "}
        <a href="tel:+971564629378" style={{ color: gold, fontWeight: 600 }}>
          0564629378       </a>
      </p>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "#555555",
          textAlign: "center",
          marginTop: 16,
          lineHeight: 1.7,
        }}
      >
        * All prices are starting prices inclusive of VAT.
      </p>
    </div>
  </section>
);

export default PricingSection;
