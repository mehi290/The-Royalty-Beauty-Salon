import { Facebook, Instagram, MessageCircle, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.5) 45%, rgba(10,10,10,0.78) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          textAlign: "center",
        }}
      >     

        {/* Main Heading */}
        <h1
          className="text-5xl font-semibold text-destructive-foreground bg-inherit text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 8vw, 92px)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.05,
            maxWidth: 820,
            marginTop: 20,
          }}
        >
          Welcome to Tres&nbsp;Beauty&nbsp;Lounge
        </h1>

        {/* Subheading */}
        <p
          className="text-5xl font-semibold text-left text-destructive-foreground bg-inherit"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 2.2vw, 26px)",
            fontStyle: "italic",
            color: "#E8E0D5",
            maxWidth: 560,
            marginTop: 20,
          }}
        >
          Luxury hair and beauty treatments tailored to your style, schedule, and hair type.
        </p>

        {/* Buttons */}
        <div
          className="flex-col sm:flex-row"
          style={{
            display: "flex",
            gap: 16,
            marginTop: 44,
            width: "100%",
            maxWidth: 460,
            justifyContent: "center",
          }}
        >
          <Link
            to="/book"
            className="w-full sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              background: "#C9A96E",
              color: "#111111",
              padding: "16px 40px",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: 3,
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8B6914")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A96E")}
          >
            BOOK NOW
          </Link>
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              background: "#ffffff",
              color: "#111111",
              padding: "16px 40px",
              border: "1.5px solid rgba(0,0,0,0.2)",
              cursor: "pointer",
              borderRadius: 3,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f4f4f4";
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#111111";
            }}
          >
            EXPLORE SERVICES
          </button>
        </div>
      </div>

      {/* Social Rail */}
      <div
        style={{
          position: "absolute",
          left: 22,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {[
          {
            href: "https://instagram.com",
            label: "Instagram",
            bg: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
            icon: <Instagram size={20} color="white" strokeWidth={2} />,
          },
          {
            href: "https://wa.me/971503857200",
            label: "WhatsApp",
            bg: "#25D366",
            icon: <MessageCircle size={20} color="white" strokeWidth={2} />,
          },
          {
            href: "https://facebook.com",
            label: "Facebook",
            bg: "#1877F2",
            icon: <Facebook size={20} color="white" strokeWidth={2} />,
          },
          {
            href: "https://tiktok.com",
            label: "TikTok",
            bg: "#111111",
            icon: <Music2 size={20} color="white" strokeWidth={2} />,
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{
              width: 30,
              height: 30,
              borderRadius: 1,
              background: item.bg,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.22)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;
