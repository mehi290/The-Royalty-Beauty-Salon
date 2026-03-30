const transformations = [
  {
    title: "Balayage Transformation",
    subtitle: "From blonde ombre to stunning ash balayage",
    beforeImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Keratin Smoothing",
    subtitle: "Frizzy to sleek, silky straight hair",
    beforeImage:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80",
  },
];

const TransformationCard = ({
  title,
  subtitle,
  beforeImage,
  afterImage,
}: (typeof transformations)[0]) => (
  <article>
    <div
      style={{
        position: "relative",
        height: 430,
        overflow: "hidden",
        borderRadius: 6,
        border: "1px solid #DAD6CF",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <img
        src={beforeImage}
        alt={`${title} before`}
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
      />
      <img
        src={afterImage}
        alt={`${title} after`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: 2,
          transform: "translateX(-50%)",
          background: "#C9A96E",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 34,
          height: 34,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "#C9A96E",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        ›
      </div>

      <span
        style={{
          position: "absolute",
          left: 14,
          bottom: 12,
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "white",
          background: "rgba(17,17,17,0.65)",
          borderRadius: 4,
          padding: "4px 10px",
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          right: 14,
          bottom: 12,
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "white",
          background: "rgba(201,169,110,0.9)",
          borderRadius: 4,
          padding: "4px 10px",
        }}
      >
        After
      </span>
    </div>

    <h3
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 33,
        color: "#2E2E2E",
        marginTop: 16,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 27,
        color: "#5A5A5A",
        marginTop: 4,
      }}
    >
      {subtitle}
    </p>
  </article>
);

const GallerySection = () => (
  <section id="gallery" className="velour-section" style={{ background: "#ECEAE7", padding: "80px 0 100px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 34 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(46px, 5.2vw, 78px)",
            color: "#2E2E2E",
            fontWeight: 400,
          }}
        >
          See the Difference
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(22px, 2.25vw, 34px)",
            color: "#5B5B5B",
            maxWidth: 900,
            margin: "10px auto 0",
            lineHeight: 1.45,
          }}
        >
          Drag the slider to reveal stunning before and after transformations by our
          expert stylists.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 36 }}>
        {transformations.map((item) => (
          <TransformationCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
