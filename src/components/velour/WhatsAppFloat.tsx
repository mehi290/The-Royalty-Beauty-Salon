import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/971503857200?text=Hi%20Velour!%20I'd%20like%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    className="md:hidden"
    style={{
      position: "fixed",
      bottom: 24,
      right: 20,
      zIndex: 900,
      background: "#25D366",
      color: "white",
      borderRadius: 50,
      padding: "13px 22px",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      animation: "velour-pulse-wa 2.5s infinite",
    }}
  >
    <MessageCircle size={18} />
    BOOK NOW
  </a>
);

export default WhatsAppFloat;
