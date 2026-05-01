import { Link } from "react-router-dom";

const OfferBanner = () => (
  <section
    className="velour-section"
    style={{
      height: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #6B4F0D 0%, #C9A96E 50%, #6B4F0D 100%)",
      backgroundSize: "200% 200%",
      animation: "velour-shimmer 6s ease infinite",
      padding: "0 20px",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 5vw, 54px)",
          fontWeight: 400,
          color: "white",
          lineHeight: 1.15,
        }}
      >
        New to Afro Hair Show Salon? Enjoy 20% Off Your First Visit
      </h2>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          color: "rgba(255,255,255,0.85)",
          marginTop: 12,
          maxWidth: 560,
          margin: "12px auto 0",
        }}
      >
        Valid on any service at our Dubai location. No code needed - just mention
        it while booking.
      </p>
      <div
        className="flex-col sm:flex-row"
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginTop: 32,
        }}
      >
        <Link
          to="/book"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            background: "#111111",
            color: "white",
            padding: "15px 36px",
            textDecoration: "none",
            border: "none",
            borderRadius: 3,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "filter 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(1.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          Book Now
        </Link>
        <a
          href="tel:+97143857200"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            background: "transparent",
            color: "white",
            padding: "15px 36px",
            textDecoration: "none",
            border: "1.5px solid white",
            borderRadius: 3,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          Call Salon
        </a>
      </div>
    </div>
  </section>
);

export default OfferBanner;
