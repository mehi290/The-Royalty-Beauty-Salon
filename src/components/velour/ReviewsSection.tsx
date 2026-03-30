import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "The membership benefits are incredible value. I love having priority booking and the complimentary treatments. It is my favorite self-care destination.",
    name: "Natalia Volkov",
    location: "Diamond Member",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Every visit feels luxurious and relaxing. The team is attentive, skilled, and always delivers exactly what I ask for. I leave feeling confident every time.",
    name: "Aisha Karim",
    location: "Gold Member",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "From hair to nails, every service is top-notch. Booking is smooth, the salon is beautiful, and the stylists truly care about quality and detail.",
    name: "Priya Rao",
    location: "Platinum Member",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      className="velour-section"
      style={{ background: "#ECEAE7", padding: "110px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            position: "relative",
            maxWidth: 980,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={showPrev}
            style={{
              width: 44,
              height: 44,
              borderRadius: "9999px",
              border: "1px solid #E0DDD7",
              background: "#FAFAFA",
              color: "#666666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <article
            style={{
              background: "#F7F7F6",
              border: "1px solid #DBD8D2",
              borderRadius: 14,
              width: "100%",
              padding: "36px 34px",
              textAlign: "center",
              minHeight: 335,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={activeReview.image}
              alt={activeReview.name}
              style={{
                width: 82,
                height: 82,
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto",
                border: "3px solid #D7C39B",
              }}
            />

            <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 16 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} color="#C9A96E" fill="#C9A96E" />
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(21px, 2.2vw, 34px)",
                lineHeight: 1.45,
                color: "#222222",
                maxWidth: 760,
                margin: "18px auto 0 auto",
              }}
            >
              "{activeReview.text}"
            </p>

            <div style={{ marginTop: 18 }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  color: "#2E2E2E",
                  lineHeight: 1.1,
                }}
              >
                {activeReview.name}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 18,
                  color: "#8D7A55",
                }}
              >
                {activeReview.location}
              </div>
            </div>
          </article>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={showNext}
            style={{
              width: 44,
              height: 44,
              borderRadius: "9999px",
              border: "1px solid #E0DDD7",
              background: "#FAFAFA",
              color: "#666666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
