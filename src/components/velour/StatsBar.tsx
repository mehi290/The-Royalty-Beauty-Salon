const stats = [
  { value: "4.5 ★", label: "Google Rating" },
  { value: "84+", label: "Google Reviews" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "JVC ★", label: "DUBAI" },
];

const StatsBar = () => (
  <section style={{ background: "#C9A96E", padding: "24px 40px" }}>
    <div
      className="grid grid-cols-2 md:grid-cols-4"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center py-3 md:py-0 ${i < 3 ? "md:border-r" : ""
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
            {stat.value}
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
