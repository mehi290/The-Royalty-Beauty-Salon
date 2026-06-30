import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "4.9 ★", label: "Google Rating" },
  { value: "295", label: "Google Reviews" },
  { value: "2000+", label: "Satisfied Clients" },
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  const animateValue = () => {
    const isFloat = value.includes(".");
    const hasPlus = value.includes("+");
    const hasStar = value.includes("★");
    
    const cleanNum = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(cleanNum)) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * cleanNum;
      
      let formattedVal = "";
      if (isFloat) {
        formattedVal = currentVal.toFixed(1);
      } else {
        formattedVal = Math.floor(currentVal).toString();
      }

      if (hasPlus) formattedVal += "+";
      if (hasStar) formattedVal += " ★";

      setDisplayValue(formattedVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return <span ref={elementRef}>{displayValue}</span>;
};

const StatsBar = () => (
  <section style={{ background: "#9F3F5C", padding: "24px 40px" }}>
    <div
      className="grid grid-cols-1 sm:grid-cols-3"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center py-3 sm:py-0 ${i < 2 ? "sm:border-r" : ""
            }`}
          style={{
            borderColor: "rgba(255,255,255,0.35)",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 36,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            <AnimatedCounter value={stat.value} />
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              textTransform: "uppercase",
              color: "#111111",
              letterSpacing: "0.12em",
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
