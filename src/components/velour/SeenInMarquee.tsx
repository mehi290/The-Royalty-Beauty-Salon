const publications = [
  "ELLE",
  "MARIE CLAIRE",
  "GRAZIA",
  "COSMOPOLITAN",
  "VOGUE",
  "HARPER'S BAZAAR",
];

const SeenInMarquee = () => (
  <section
    style={{
      background: "#F1F1EF",
      borderTop: "1px solid #E1E1DE",
      borderBottom: "1px solid #E8E8E5",
      overflow: "hidden",
      padding: "14px 0 18px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#777777",
        marginBottom: 10,
      }}
    >
      AS SEEN IN
    </div>

    <div className="velour-marquee-track">
      {[...publications, ...publications].map((name, index) => (
        <span key={`${name}-${index}`} className="velour-marquee-item">
          {name}
        </span>
      ))}
    </div>
  </section>
);

export default SeenInMarquee;
