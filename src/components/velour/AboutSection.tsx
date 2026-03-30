const tags = [
  "✦ All Hair Types Welcome",
  "✦ Premium Brands Only",
  "✦ Walk-ins Welcome",
];

const AboutSection = () => (
  <section
    id="about"
    className="velour-section"
    style={{ background: "#FAF7F2", padding: "100px 0" }}
  >
    <div
      className="flex flex-col-reverse md:flex-row"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 20px",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* Text */}
      <div className="md:w-[60%]">
        <span
          className="font-semibold"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#C9A96E",
          }}
        >
          WHO WE ARE
        </span>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 400,
            color: "#111111",
            marginTop: 12,
            lineHeight: 1.15,
          }}
        >
          A Salon That Feels Like Home
        </h2>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            lineHeight: 1.85,
            color: "#3D3D3D",
            marginTop: 24,
          }}
        >
          <p>
            Velour Salon has been part of Dubai's beauty scene for over a decade.
            Nestled in the vibrant heart of the city, we've built a loyal
            community of clients who come to us not just for great hair but for
            the experience.
          </p>
          <p style={{ marginTop: 16 }}>
            
          </p>
          <p style={{ marginTop: 16 }}>
            
          </p>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #C9A96E",
            margin: "30px 0",
          }}
        />
        <div className="flex flex-wrap" style={{ gap: 10 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#C9A96E",
                border: "1px solid #C9A96E",
                padding: "8px 20px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="md:w-[40%] w-full">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
          src="30ec6ff5-e570-4b00-a71c-7dce23c5051e.jpg"
          alt="Inside Velour Salon Dubai"
          className="h-[300px] md:h-[540px]"
          style={{
            width: "100%",
            objectFit: "cover",
            outline: "1px solid #C9A96E",
            outlineOffset: 14,
          }}
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
