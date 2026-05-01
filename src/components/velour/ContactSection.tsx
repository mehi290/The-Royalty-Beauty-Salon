import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const salonAddress = "Afro Hair Show Salon, shop 12, Al Wasl Road, Dubai";
  return (
    <section
    id="contact"
    className="velour-section"
    style={{ background: "#FAF7F2", padding: "100px 0" }}
  >
    <div
      className="flex flex-col md:flex-row"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 20px",
        gap: 80,
        alignItems: "stretch",
      }}
    >
      {/* Left - Contact */}
      <div className="md:w-[55%]">
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
          FIND US
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
          Visit Afro Hair Show Salon Dubai
        </h2>

        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
          {[
            {
              icon: <MapPin size={20} color="#C9A96E" />,
              text: salonAddress,
            },
            {
              icon: <Phone size={20} color="#C9A96E" />,
              text: (
                <a href="tel:+97143857200" style={{ color: "#3D3D3D", textDecoration: "none" }}>
                  +971 4 385 7200
                </a>
              ),
            },
            {
              icon: <Clock size={20} color="#C9A96E" />,
              text: "Sat – Thu: 9:00 AM – 9:00 PM · Friday: 10:00 AM – 8:00 PM",
            },
            {
              icon: <MessageCircle size={20} color="#C9A96E" />,
              text: (
                <>
                  Mobile:{" "}
                  <a href="tel:+971503857200" style={{ color: "#3D3D3D", textDecoration: "none" }}>
                    +971 50 385 7200
                  </a>
                </>
              ),
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <a
            href="https://maps.google.com/?q=Afro+Hair+Show+Salon+Jumeirah+1+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              background: "#C9A96E",
              color: "#111111",
              padding: "14px 32px",
              textDecoration: "none",
              borderRadius: 3,
              transition: "background 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8B6914")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A96E")}
          >
            Get directions
          </a>
        </div>
      </div>

      {/* Right - Embedded map */}
      <div
        className="md:w-[45%] w-full"
        style={{
          height: 380,
          background: "#F0EBE3",
          border: "1px solid #C9A96E",
          overflow: "hidden",
        }}
      >
        <iframe
          title="Afro Hair Show Salon Dubai map"
          src="https://www.google.com/maps?q=Afro+Hair+Show+Salon+Jumeirah+1+Dubai&output=embed"
          style={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    </section>
  );
};

export default ContactSection;
