import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "#pricing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key === "Tab" && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

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
            height: 68,
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(16px, 2.2vw, 22px)",
              fontWeight: "700",
              color: "white",
              letterSpacing: "0.15em",
              lineHeight: 1.2,
              opacity: scrolled ? 1 : 0,
              transition: "opacity 0.25s ease",
              pointerEvents: "none",
              userSelect: "none",
            }}
            aria-hidden={!scrolled}
          >
            The Royalty Beauty Salon
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
                style={{
                  padding: link.label === "Book Now" ? "12px 24px" : "0",
                  background: link.label === "Book Now" ? "#9F3F5C" : "transparent",
                  color: link.label === "Book Now" ? "#FFFFFF" : "#E8E0D5",
                  borderRadius: link.label === "Book Now" ? "6px" : "0",
                  fontWeight: link.label === "Book Now" ? "700" : "500",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (link.label === "Book Now") {
                    e.currentTarget.style.background = "#7E2943";
                  }
                }}
                onMouseLeave={(e) => {
                  if (link.label === "Book Now") {
                    e.currentTarget.style.background = "#9F3F5C";
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            ref={menuButtonRef}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X color="#E8E0D5" size={28} /> : <Menu color="#E8E0D5" size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
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
          pointerEvents: menuOpen ? "auto" : "none",
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
      </div>
    </>
  );
};

export default Navbar;
