import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const gold = "#9F3F5C";
const goldMuted = "#b25571";

const reviews = [
  {
    text: "I visited The Royalty Beauty Salon Dubai (Al Karama) for a full hair color and requested a bleach free option. The customer service is amazing they reply quickly, welcome you warmly, listen to your needs, and respect your privacy. I had an appointment, but you can also walk in. The reception girl and all the staff are super friendly. My hairstylist, Selfa, did a fantastic job and was very patient with me. It’s my first time at this salon and I loved the interior aesthetic very chic and welcoming. They offer other services too, and you can easily reach out to them with questions. Highly recommend!",
    name: "Shey",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Would like to recommend this beautiful salon. Special thanks to master Rachel, who does good, professional pedicure and amazing feet massage, also receptionist lady who is ready to go an extra mile for the clients. Thank you!",
    name: "Hanna",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "I had an absolutely wonderful experience at The Royalty Beauty Salon! From the moment I walked in, I was greeted with warmth and professionalism. The ambience of the salon is so calming and elegant — clean, beautifully maintained and filled with a relaxing aroma that instantly makes you feel pampered. I went for a manicure and pedicure session, along with a haircut and threading and each service was done with such care and attention to detail.",
    name: "Shaista Yousuf",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Best hair service with the best staff! ❤️ Had my keratin done at The Royalty Beauty Salon and honestly, it was the best I had. Top-notched customer service from booking, to the reception and up to the hairdresser. I really appreciate that they have to adjust on an earlier timing just to accommodate me (without even asking). Special thanks to Selfa, she's so kind, so professional, and her hands are incredibly gentle — the whole experience felt relaxing and pampering. Worth every penny! I super love the haircut she gave me, exactly what I wanted! My hair feels smooth, healthy, and looks beautiful. Thank you so much, Selfa & to The Royalty Beauty Salon team, tried so many salons inside and outside Al Karama but you guys are just incredible. Can’t recommend it enough! I will definitely come back.",
    name: "Stephanie Singian",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "the best— most elegant salon i have ever been, and I’m not even exaggerating! go see for yourself. clean, fancy and luxurious, not to mention the best customer service provided by its employees! worth ever penny, to be precise. will be visiting more often! not to mention, the place smells fantabulous! 5 stars are not enough!✨🌟✨🌟✨.",
    name: "Maria Volfango",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
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
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 50% 15%, rgba(201,169,110,0.05) 0%, transparent 50%), #FFFFFF",
        padding: "96px 0 110px",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: gold,
              display: "block",
              marginBottom: 18,
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(34px, 4.5vw, 48px)",
              fontWeight: 400,
              color: "#1B2430",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            What Our Clients Say
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} color={gold} fill={gold} strokeWidth={0} />
              ))}
            </div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#5C6670",
              }}
            >
              <strong style={{ color: "#1B2430", fontWeight: 700 }}>4.9</strong>
              <span style={{ fontWeight: 400 }}> on Google Reviews</span>
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={showPrev}
            style={{
              width: 46,
              height: 46,
              flexShrink: 0,
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.06)",
              background: "#FFFFFF",
              color: "#6B6B6B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              zIndex: 2,
              marginRight: -12,
            }}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <article
            style={{
              flex: 1,
              background: "#FFFFFF",
              borderRadius: 18,
              padding: "48px 44px 52px",
              textAlign: "center",
              boxShadow: "0 12px 48px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
              minHeight: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              src={activeReview.image}
              alt=""
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${gold}`,
                boxShadow: `0 0 0 3px #FFFFFF, 0 0 0 5px rgba(197,160,112,0.35)`,
                position: "relative",
                zIndex: 1,
              }}
            />

            <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 18 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} color={gold} fill={gold} strokeWidth={0} />
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#333333",
                maxWidth: 620,
                margin: "22px auto 0",
              }}
            >
              &ldquo;{activeReview.text}&rdquo;
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 500,
                color: "#1A1A1A",
                margin: "28px 0 0",
                lineHeight: 1.2,
              }}
            >
              {activeReview.name}
            </p>
          </article>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={showNext}
            style={{
              width: 46,
              height: 46,
              flexShrink: 0,
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.06)",
              background: "#FFFFFF",
              color: "#6B6B6B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              zIndex: 2,
              marginLeft: -12,
            }}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 28,
          }}
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                borderRadius: i === activeIndex ? 4 : "50%",
                border: "none",
                padding: 0,
                background: i === activeIndex ? goldMuted : "#D4D0C8",
                cursor: "pointer",
                transition: "width 0.25s ease, background 0.2s ease",
              }}
            />
          ))}
        </div>

        {/* Verified Reviews */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#FFFFFF",
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#4A5560",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span style={{ fontWeight: 500 }}>Verified Reviews</span>
            </span>
            <span style={{ width: 1, height: 18, background: "#E2E0DC" }} aria-hidden />
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={16} color={gold} fill={gold} strokeWidth={0} />
              <strong style={{ color: "#1B2430", fontWeight: 700 }}>4.9</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
