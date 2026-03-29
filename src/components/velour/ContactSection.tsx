import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => (
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
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
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
              text: "Velour Salon, Shop 12, Al Wasl Road, Jumeirah 1, Dubai, UAE",
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
                  WhatsApp bookings:{" "}
                  <a
                    href="https://wa.me/971503857200"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", textDecoration: "none" }}
                  >
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

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a
            href="tel:+97143857200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
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
            CALL NOW
          </a>
          <a
            href="https://maps.google.com/?q=Velour+Salon+Jumeirah+1+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
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
        </div>
      </div>

      {/* Right - Map placeholder */}
      <div
        className="md:w-[45%] w-full"
        style={{
          height: 380,
          background: "#1E1E1E",
          border: "1px solid #C9A96E",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MapPin size={48} color="#C9A96E" />
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            color: "white",
            marginTop: 16,
          }}
        >
          VELOUR SALON
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#888888",
            marginTop: 4,
          }}
        >
          Jumeirah 1, Dubai
        </div>
        <a
          href="https://maps.google.com/?q=Velour+Salon+Jumeirah+1+Dubai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#C9A96E",
            border: "1.5px dashed #C9A96E",
            padding: "10px 24px",
            textDecoration: "none",
            borderRadius: 3,
            marginTop: 20,
            transition: "all 0.3s ease",
          }}
        >
          OPEN IN GOOGLE MAPS →
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
