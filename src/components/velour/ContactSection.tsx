import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

const salonAddress = "Velour Salon, Shop 12, Al Wasl Road, Jumeirah 1, Dubai, UAE";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(salonAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

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
          Visit Velour Salon Dubai
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
        <div
          style={{
            marginTop: 28,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#5A5A5A",
            lineHeight: 1.8,
          }}
        >
          <p>Nearest landmark: Al Wasl Road, Jumeirah 1.</p>
          <p>Parking: street and paid parking available nearby.</p>
          <p>Nearest metro: Business Bay (short taxi ride).</p>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a
            href="tel:+97143857200"
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8B6914")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A96E")}
          >
            CALL SALON
          </a>
          <a
            href="https://maps.google.com/?q=Velour+Salon+Jumeirah+1+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#C9A96E",
              border: "1.5px solid #C9A96E",
              background: "transparent",
              padding: "14px 32px",
              textDecoration: "none",
              borderRadius: 3,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.3s ease",
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
            GET DIRECTIONS <ExternalLink size={14} />
          </a>
          <button
            onClick={copyAddress}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#111111",
              background: "#E8E0D5",
              border: "1.5px solid #D7CCBE",
              padding: "14px 32px",
              textDecoration: "none",
              borderRadius: 3,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            {copied ? "Address copied" : "Copy address"}
          </button>
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
          title="Velour Salon Dubai map"
          src="https://www.google.com/maps?q=Velour+Salon+Jumeirah+1+Dubai&output=embed"
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
