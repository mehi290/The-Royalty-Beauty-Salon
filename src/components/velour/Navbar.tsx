import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "OUR TEAM", href: "#team" },
  { label: "GALLERY", href: "#gallery" },
  { label: "PACKAGES", href: "#pricing" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: scrolled ? "#111111" : "transparent",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.4)" : "none",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                color: "#C9A96E",
                letterSpacing: "0.2em",
                lineHeight: 1,
              }}
            >
              VELOUR
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 9,
                letterSpacing: "0.35em",
                color: "#888888",
                textTransform: "uppercase",
              }}
            >
              SALON &bull; DUBAI
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex" style={{ gap: 32, alignItems: "center" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="velour-nav-link"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#E8E0D5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Book Now */}
          <a
            href="https://wa.me/971503857200?text=Hi%20Velour!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#C9A96E",
              border: "1.5px solid #C9A96E",
              background: "transparent",
              padding: "10px 24px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              borderRadius: 3,
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
            BOOK NOW
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#25D366",
                display: "inline-block",
              }}
            />
          </a>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Open menu"
          >
            <Menu color="#E8E0D5" size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s ease",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close menu"
        >
          <X color="#E8E0D5" size={32} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 36,
              color: "white",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://wa.me/971503857200?text=Hi%20Velour!%20I'd%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 24,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#111111",
            background: "#C9A96E",
            padding: "16px 40px",
            textDecoration: "none",
            borderRadius: 3,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MessageCircle size={16} color="#25D366" />
          BOOK ON WHATSAPP
        </a>
      </div>
    </>
  );
};

export default Navbar;
