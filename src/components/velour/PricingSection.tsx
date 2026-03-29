const essentials = [
  { service: "Wash, Cut & Blowdry", price: "AED 120" },
  { service: "Root Touch-Up", price: "AED 180" },
  { service: "Eyebrow Threading", price: "AED 35" },
  { service: "Classic Manicure", price: "AED 80" },
  { service: "Gelish Pedicure", price: "AED 150" },
  { service: "Lash Tint & Lift", price: "AED 220" },
];
const signature = [
  { service: "Full Hair Colour (L'Oréal)", price: "AED 280" },
  { service: "Balayage & Toner", price: "AED 650" },
  { service: "Keratin Treatment", price: "AED 350" },
  { service: "Gel Mani-Pedi Combo", price: "AED 189" },
  { service: "Olaplex Treatment", price: "AED 450" },
  { service: "Lash Lift + Brow Lamination", price: "AED 320" },
];
const premium = [
  { service: "Balayage + Trim + Toner", price: "AED 700" },
  { service: "Hair Extensions (Full Head)", price: "AED 1,200" },
  { service: "Bridal Hair & Makeup", price: "AED 2,100" },
  { service: "Ombré (Short to Long)", price: "AED 600–800" },
  { service: "Advanced Anti-Ageing Facial", price: "AED 380" },
  { service: "Full Body Waxing Package", price: "AED 350" },
];

const GoldButton = ({ dark }: { dark?: boolean }) => (
  <a
    href="https://wa.me/971503857200?text=Hi%20Velour!%20I'd%20like%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      marginTop: 32,
      padding: "14px 0",
      borderRadius: 3,
      textDecoration: "none",
      transition: "all 0.3s ease",
      ...(dark
        ? { background: "#111111", color: "white", border: "none" }
        : {
            background: "transparent",
            color: "#C9A96E",
            border: "1.5px solid #C9A96E",
          }),
    }}
  >
    BOOK NOW
  </a>
);

const LineItem = ({
  service,
  price,
  dark,
}: {
  service: string;
  price: string;
  dark?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: dark
        ? "1px solid rgba(0,0,0,0.1)"
        : "1px solid #222",
      fontFamily: "'Inter', sans-serif",
    }}
  >
    <span style={{ fontSize: 14, color: dark ? "#111111" : "#E8E0D5" }}>
      {service}
    </span>
    <span
      style={{
        fontSize: 13,
        color: dark ? "rgba(0,0,0,0.7)" : "#C9A96E",
        whiteSpace: "nowrap",
        marginLeft: 12,
      }}
    >
      {price}
    </span>
  </div>
);

const PricingSection = () => (
  <section
    id="pricing"
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
          TRANSPARENT PRICING
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
          No Hidden Costs. Ever.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#888888",
            marginTop: 12,
            maxWidth: 600,
            margin: "12px auto 0",
          }}
        >
          Prices shown are starting prices in AED inclusive of VAT. Final price
          confirmed at consultation based on hair length and complexity.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 0 }}>
        {/* Essentials */}
        <div style={{ background: "#1A1A1A", padding: "48px 40px" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#C9A96E",
            }}
          >
            ESSENTIALS
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 42,
              color: "white",
              marginTop: 8,
            }}
          >
            from AED 80
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#888888",
              marginTop: 8,
            }}
          >
            Quick, quality services for your everyday beauty routine.
          </p>
          <hr style={{ border: "none", borderTop: "1px solid #2A2A2A", margin: "28px 0" }} />
          {essentials.map((item) => (
            <LineItem key={item.service} {...item} />
          ))}
          <GoldButton />
        </div>

        {/* Signature */}
        <div style={{ background: "#C9A96E", padding: "48px 40px", position: "relative" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9,
              textTransform: "uppercase",
              background: "white",
              color: "#111111",
              padding: "4px 12px",
              display: "inline-block",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            MOST POPULAR
          </span>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#111111",
            }}
          >
            SIGNATURE
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 42,
              color: "#111111",
              marginTop: 8,
            }}
          >
            from AED 280
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(0,0,0,0.65)",
              marginTop: 8,
            }}
          >
            Our most loved services, done to perfection.
          </p>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(0,0,0,0.15)",
              margin: "28px 0",
            }}
          />
          {signature.map((item) => (
            <LineItem key={item.service} {...item} dark />
          ))}
          <GoldButton dark />
        </div>

        {/* Premium */}
        <div
          style={{
            background: "#1A1A1A",
            padding: "48px 40px",
            border: "1px solid #C9A96E",
          }}
        >
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#C9A96E",
            }}
          >
            PREMIUM
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 42,
              color: "white",
              marginTop: 8,
            }}
          >
            from AED 700
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#888888",
              marginTop: 8,
            }}
          >
            Full transformations and specialist treatments.
          </p>
          <hr style={{ border: "none", borderTop: "1px solid #2A2A2A", margin: "28px 0" }} />
          {premium.map((item) => (
            <LineItem key={item.service} {...item} />
          ))}
          <GoldButton />
        </div>
      </div>

      {/* Disclaimer */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "#555555",
          textAlign: "center",
          marginTop: 36,
          lineHeight: 1.7,
        }}
      >
        * All prices are starting prices inclusive of VAT. Stylist-level pricing
        and hair length may affect final cost. Ask us for a free consultation.
      </p>
    </div>
  </section>
);

export default PricingSection;
