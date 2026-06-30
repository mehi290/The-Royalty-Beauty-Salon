import { useCallback, useLayoutEffect, useRef, useState } from "react";

const transformations = [
  {
    title: "Hair Treatment",
    subtitle: "Stunning before and after results",
    video: "/before and after.mp4",
  },
  {
    title: "Hair Styling",
    subtitle: "Premium styling transformations",
    video: "/our work the royal.mp4",
  },
  {
    title: "Balayage Transformation",
    subtitle: "From blonde ombre to stunning ash balayage",
    beforeImage: "/hair color after  before.jpeg",
    afterImage: "/hair color after  before.jpeg",
    combinedImage: "/hair color after  before.jpeg",
    wideCombinedImage: false,
  },
  {
    title: "Keratin Smoothing",
    subtitle: "Frizzy to sleek, silky straight hair",
    beforeImage: "/keratin after before.jpeg",
    afterImage: "/keratin after before.jpeg",
    combinedImage: "/keratin after before.jpeg",
    wideCombinedImage: false,
  },
  {
    title: "Brow & Makeup Enhancement",
    subtitle: "Professional brow shaping and makeup artistry",
    beforeImage: "/make%20up%20before%20and%20after.jpeg",
    afterImage: "/make%20up%20before%20and%20after.jpeg",
    combinedImage: "/make%20up%20before%20and%20after.jpeg",
    wideCombinedImage: false,
  },
];

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  title,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(0);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerW(el.offsetWidth));
    ro.observe(el);
    setContainerW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    setPos(rect.width ? (x / rect.width) * 100 : 50);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = true;
    wrapRef.current?.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try {
      wrapRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      ref={wrapRef}
      role="slider"
      aria-label={`Before and after comparison for ${title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        borderRadius: 14,
        overflow: "hidden",
        background: "#1a1a1a",
        cursor: "ew-resize",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* After — full color (revealed on the right as slider moves) */}
      <img
        src={afterImage}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Before — grayscale, clipped from the left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: `${pos}%`,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <img
          src={beforeImage}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: containerW || "100%",
            maxWidth: "none",
            objectFit: "cover",
            filter: "grayscale(100%)",
          }}
        />
      </div>

      {/* Divider + handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 0,
          zIndex: 3,
          transform: "translateX(-50%)",
          cursor: "ew-resize",
          touchAction: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 2,
            transform: "translateX(-50%)",
            background: "#C9A96E",
            boxShadow: "0 0 8px rgba(0,0,0,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#C9A96E",
            border: "2px solid rgba(255,255,255,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          }}
        >
          <span style={{ color: "white", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>‹</span>
          <span style={{ color: "white", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>›</span>
        </div>
      </div>

      <span
        style={{
          position: "absolute",
          left: 14,
          bottom: 14,
          zIndex: 4,
          pointerEvents: "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(17,17,17,0.82)",
          borderRadius: 999,
          padding: "6px 12px",
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          right: 14,
          bottom: 14,
          zIndex: 4,
          pointerEvents: "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "white",
          background: "#C9A96E",
          borderRadius: 999,
          padding: "6px 12px",
        }}
      >
        After
      </span>
    </div>
  );
};

const TransformationCard = ({
  title,
  subtitle,
  beforeImage,
  afterImage,
  combinedImage,
  wideCombinedImage,
  combinedAspectRatio,
  video,
}: (typeof transformations)[0]) => (
  <article>
    {video ? (
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: 14,
          overflow: "hidden",
          background: "#1a1a1a",
        }}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ) : combinedImage ? (
      <div
        style={{
          width: "100%",
          aspectRatio:
            combinedAspectRatio ?? (wideCombinedImage ? "16 / 10" : "1 / 1"),
          borderRadius: 14,
          overflow: "hidden",
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={combinedImage}
          alt={title}
          draggable={false}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    ) : (
      <BeforeAfterSlider
        beforeImage={beforeImage ?? ""}
        afterImage={afterImage ?? ""}
        title={title}
      />
    )}
    <h3
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(22px, 2.2vw, 28px)",
        color: "#2E2E2E",
        marginTop: 18,
        fontWeight: 400,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        color: "#5A5A5A",
        marginTop: 6,
        lineHeight: 1.5,
      }}
    >
      {subtitle}
    </p>
  </article>
);

const GallerySection = () => (
  <section
    id="gallery"
    className="velour-section"
    style={{
      background:
        "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(201,169,110,0.09) 0%, transparent 55%), #FAF7F2",
      padding: "96px 0 100px",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#C5A078",
          }}
        >
          Transformations
        </span>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#1a1a1a",
            fontWeight: 400,
            marginTop: 14,
            lineHeight: 1.15,
          }}
        >
          See the Difference
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#6B6B6B",
            maxWidth: 560,
            margin: "16px auto 0",
            lineHeight: 1.65,
          }}
        >
          Drag the slider to reveal stunning before and after transformations by our expert stylists.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
          aria-hidden
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#E8DFD0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6)",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#8B7355",
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
        {transformations.map((item) => (
          <TransformationCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
