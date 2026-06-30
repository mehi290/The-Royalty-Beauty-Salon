import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const TypewriterText = ({
  text,
  delay = 70,
  startDelay = 0,
  onComplete,
}: {
  text: string;
  delay?: number;
  startDelay?: number;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    setDisplayText(""); // Reset text on start
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (prev.length < text.length) {
          return prev + text.charAt(prev.length);
        } else {
          clearInterval(interval);
          if (onCompleteRef.current) onCompleteRef.current();
          return prev;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [started, text, delay]);

  return (
    <span>
      {displayText}
    </span>
  );
};

const HeroSection = () => {
  const [headingComplete, setHeadingComplete] = useState(false);
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
            minHeight: "clamp(52px, 8vw, 92px)",
          }}
        >
          <TypewriterText text="The Royalty Beauty Salon" delay={75} onComplete={() => setHeadingComplete(true)} />
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
            minHeight: "clamp(18px, 2.2vw, 26px)",
          }}
        >
          {headingComplete && (
            <TypewriterText text="Luxury hair and beauty treatments" delay={45} />
          )}
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
              background: "#9F3F5C",
              color: "#111111",
              padding: "16px 40px",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: 3,
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7E2943")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#9F3F5C")}
          >
            BOOK NOW
          </Link>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/971564629378"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 1200,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#25D366",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.28)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <MessageCircle size={24} color="white" strokeWidth={2.2} />
      </a>

    </section>
  );
};

export default HeroSection;
