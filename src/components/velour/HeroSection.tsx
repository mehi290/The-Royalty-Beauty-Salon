import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85)",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
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
        {/* Eyebrow */}
        <span
          className="text-5xl font-semibold text-left text-destructive-foreground bg-inherit"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#C9A96E",
          }}
        >
          {"\n"}
        </span>

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
          Premium Ladies Beauty Salon
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
          {"\n"}
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
          <a
            href="https://wa.me/971503857200?text=Hi%20Velour!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
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
            BOOK APPOINTMENT
          </a>
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              background: "transparent",
              color: "white",
              padding: "16px 40px",
              border: "1.5px solid rgba(255,255,255,0.7)",
              cursor: "pointer",
              borderRadius: 3,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            EXPLORE SERVICES
          </button>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "velour-bounce 2s infinite ease-in-out",
          zIndex: 1,
        }}
      >
        <ChevronDown color="#C9A96E" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
