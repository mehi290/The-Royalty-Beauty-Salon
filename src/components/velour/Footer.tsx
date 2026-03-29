import { Instagram, Facebook, MessageCircle, Video } from "lucide-react";

const services = ["Cut & Styling", "Colour & Balayage", "Keratin", "Hair Extensions", "Nails", "Facials", "Lashes & Brows", "Bridal"];
const links = ["Home", "About", "Our Work", "Team", "Packages", "Blog", "Careers", "Contact"];

const Footer = () => (
  <footer style={{ background: "#0D0D0D", padding: "80px 40px 36px" }}>
    <div
      className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
      style={{ maxWidth: 1200, margin: "0 auto", gap: 48 }}
    >
      {/* Brand */}
      <div className="col-span-2 lg:col-span-1">
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            color: "#C9A96E",
            letterSpacing: "0.2em",
          }}
        >
          VELOUR
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            letterSpacing: "0.35em",
            color: "#555555",
            textTransform: "uppercase",
          }}
        >
          SALON &bull; DUBAI
        </div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontStyle: "italic",
            color: "#888888",
            marginTop: 14,
          }}
        >
          "Your beauty. Our passion."
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
          {[Instagram, Facebook, MessageCircle, Video].map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{ color: "#C9A96E", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#C9A96E";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#C9A96E",
            marginBottom: 20,
          }}
        >
          SERVICES
        </div>
        {services.map((s) => (
          <a
            key={s}
            href="#services"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#666666",
              lineHeight: 2.2,
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
          >
            {s}
          </a>
        ))}
      </div>

      {/* Quick Links */}
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#C9A96E",
            marginBottom: 20,
          }}
        >
          EXPLORE
        </div>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#666666",
              lineHeight: 2.2,
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
          >
            {l}
          </a>
        ))}
      </div>

      {/* Contact */}
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#C9A96E",
            marginBottom: 20,
          }}
        >
          GET IN TOUCH
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#666666",
            lineHeight: 2.2,
          }}
        >
          <p>Al Wasl Road, Jumeirah 1</p>
          <p>Dubai, UAE</p>
          <p>+971 4 385 7200</p>
          <p>hello@veloursalon.ae</p>
          <p>Mon–Sat: 9am – 9pm</p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #1E1E1E",
        margin: "48px 0 24px",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "#444444",
        }}
      >
        © 2026 Velour Salon Dubai. All Rights Reserved.
      </span>
      <div style={{ display: "flex", gap: 16 }}>
        {["Privacy Policy", "Terms & Conditions"].map((t) => (
          <a
            key={t}
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              color: "#444444",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
