import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gem,
  Hand,
  Heart,
  MessageSquare,
  Scissors,
  Sparkles,
  User,
  Wind,
} from "lucide-react";
import {
  bookingCategories,
  getCategoryById,
  getCategoryIdForServiceId,
  getServiceById,
  getServiceDisplayLabel,
  getServicesByCategory,
  OTHER_SERVICE_ID,
  type BookingCategoryId,
  type BookingIconKey,
} from "@/data/bookingCatalog";
import { getStylistById, stylists } from "@/data/stylists";

const gold = "#9F3F5C";

const iconMap: Record<BookingIconKey, React.ReactNode> = {
  scissors: <Scissors size={20} strokeWidth={1.5} />,
  sparkles: <Sparkles size={20} strokeWidth={1.5} />,
  heart: <Heart size={20} strokeWidth={1.5} />,
  hand: <Hand size={20} strokeWidth={1.5} />,
  gem: <Gem size={20} strokeWidth={1.5} />,
  face: <User size={20} strokeWidth={1.5} />,
  wind: <Wind size={20} strokeWidth={1.5} />,
};

function formatDateShort(d: Date) {
  return d.toLocaleDateString("en-GB", { weekday: "short", month: "short", day: "numeric" });
}

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

function isBookingCategoryId(id: string): id is BookingCategoryId {
  return getCategoryById(id) !== undefined;
}

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [categoryId, setCategoryId] = useState<BookingCategoryId | "">("");
  const [serviceId, setServiceId] = useState("");
  const [customServiceNote, setCustomServiceNote] = useState("");
  const [stylistId, setStylistId] = useState("");
  const [dateIso, setDateIso] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const prefillService = searchParams.get("service");
  const prefillCategory = searchParams.get("category");

  useEffect(() => {
    if (prefillService && getServiceById(prefillService)) {
      const cat = getCategoryIdForServiceId(prefillService);
      if (cat) setCategoryId(cat);
      setServiceId(prefillService);
      setCustomServiceNote("");
      return;
    }
    if (prefillCategory && isBookingCategoryId(prefillCategory)) {
      setCategoryId(prefillCategory);
      setServiceId("");
      setCustomServiceNote("");
    }
  }, [prefillService, prefillCategory]);

  const resetAll = useCallback(() => {
    setStep(1);
    setCategoryId("");
    setServiceId("");
    setCustomServiceNote("");
    setStylistId("");
    setDateIso("");
    setTime("");
    setPhone("");
    setBookingSuccess(false);
  }, []);

  const nextWeekDates = useMemo(() => {
    const out: Date[] = [];
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      out.push(d);
    }
    return out;
  }, []);

  useEffect(() => {
    if (!dateIso && nextWeekDates.length) {
      setDateIso(nextWeekDates[0].toISOString().slice(0, 10));
    }
  }, [dateIso, nextWeekDates]);

  const selectedStylist = getStylistById(stylistId);
  const serviceDisplayLabel = getServiceDisplayLabel(serviceId, customServiceNote);
  const selectedCategory = categoryId ? getCategoryById(categoryId) : undefined;

  const servicesInCategory = categoryId
    ? getServicesByCategory(categoryId)
    : [];

  const hasValidServiceSelection =
    !!serviceId &&
    (serviceId !== OTHER_SERVICE_ID || customServiceNote.trim().length > 0) &&
    (serviceId === OTHER_SERVICE_ID || !!getServiceById(serviceId));

  const phoneValid = phone.replace(/\D/g, "").length >= 8;

  const handleConfirm = () => {
    if (!phoneValid || !hasValidServiceSelection || !selectedStylist || !dateIso || !time) return;
    setBookingSuccess(true);
  };

  const canContinue1 = !!categoryId && hasValidServiceSelection;
  const canContinue2 = !!stylistId;
  const canContinue3 = !!dateIso && !!time;

  if (bookingSuccess) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#FAF9F6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 18,
            padding: "48px 40px",
            maxWidth: 440,
            textAlign: "center",
            boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: `${gold}22`,
              color: gold,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Check size={28} strokeWidth={2} />
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#111",
              margin: "0 0 12px",
            }}
          >
            Booking request sent
          </h1>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.6, margin: "0 0 28px" }}>
            Thank you. Our team will contact you at the number you provided to confirm your appointment.
          </p>
          <div
            style={{
              background: "#F3F0EB",
              borderRadius: 12,
              padding: "14px 16px",
              marginBottom: 24,
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>Service</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>{serviceDisplayLabel}</div>
          </div>
          <button
            type="button"
            onClick={resetAll}
            style={{
              width: "100%",
              padding: "14px 24px",
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              background: gold,
              color: "#111",
              border: "none",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            Book another appointment
          </button>
          <Link
            to="/"
            style={{
              display: "block",
              marginTop: 16,
              fontSize: 13,
              color: "#666",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const stepper = (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 360,
        margin: "0 auto 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
      }}
    >
      {[
        { n: 1, Icon: Scissors },
        { n: 2, Icon: User },
        { n: 3, Icon: Calendar },
        { n: 4, Icon: Check },
      ].map(({ n, Icon }, idx) => {
        const done = step > n;
        const active = step === n;
        return (
          <div key={n} style={{ display: "flex", alignItems: "center", flex: idx < 3 ? 1 : 0 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: done ? gold : active ? "#111111" : "#E8E6E3",
                color: done || active ? "#fff" : "#999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: done ? "none" : active ? "none" : "1px solid #ddd",
                flexShrink: 0,
              }}
            >
              {done ? <Check size={18} strokeWidth={2.5} /> : <Icon size={18} strokeWidth={1.8} />}
            </div>
            {idx < 3 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  margin: "0 4px",
                  background: step > n ? gold : "#E0DDD8",
                  minWidth: 12,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  const handleBack = () => {
    if (step === 1 && categoryId) {
      setCategoryId("");
      setServiceId("");
      setCustomServiceNote("");
      return;
    }
    if (step > 1) setStep((s) => ((s - 1) as 1 | 2 | 3 | 4));
  };

  const backDisabled = step === 1 && !categoryId;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF9F6",
        padding: "24px 16px 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link
          to="/"
          style={{
            fontSize: 13,
            color: "#555",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 20,
          }}
        >
          <ChevronLeft size={16} /> Home
        </Link>

        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "28px 24px 32px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              background: "#F3F0EB",
              borderRadius: 12,
              padding: "16px 12px 20px",
              marginBottom: 18,
            }}
          >
            {stepper}
          </div>

          {step === 1 && !categoryId && (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#111",
                  margin: "0 0 8px",
                }}
              >
                Choose a category
              </h2>
              <p style={{ fontSize: 14, color: "#666", margin: "0 0 20px", lineHeight: 1.5 }}>
                Select a category, then pick a service or describe your own.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                {bookingCategories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setCategoryId(c.id);
                      setServiceId("");
                      setCustomServiceNote("");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      textAlign: "left",
                      border: "1px solid #E5E2E0",
                      borderRadius: 10,
                      background: "#FFFFFF",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#E8DFD0",
                        color: "#5C5346",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {iconMap[c.icon]}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#111",
                        }}
                      >
                        {c.title}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 13,
                          color: "#666",
                          marginTop: 2,
                        }}
                      >
                        {c.description}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && categoryId && (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#111",
                  margin: "0 0 8px",
                }}
              >
                Select a service
              </h2>
              <p style={{ fontSize: 14, color: "#666", margin: "0 0 20px", lineHeight: 1.5 }}>
                {selectedCategory?.title ?? ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                {servicesInCategory.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setServiceId(s.id);
                      setCustomServiceNote("");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      textAlign: "left",
                      border:
                        serviceId === s.id ? `2px solid ${gold}` : "1px solid #E5E2E0",
                      borderRadius: 10,
                      background: "#FFFFFF",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: serviceId === s.id ? gold : "#E8DFD0",
                        color: serviceId === s.id ? "#fff" : "#5C5346",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {iconMap[s.icon]}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#111",
                        }}
                      >
                        {s.name}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 13,
                          color: gold,
                          marginTop: 2,
                        }}
                      >
                        {s.priceLabel}
                      </span>
                    </span>
                  </button>
                ))}
                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceId(OTHER_SERVICE_ID);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      textAlign: "left",
                      width: "100%",
                      border:
                        serviceId === OTHER_SERVICE_ID
                          ? `2px solid ${gold}`
                          : "1px solid #E5E2E0",
                      borderRadius: 10,
                      background: "#FFFFFF",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: serviceId === OTHER_SERVICE_ID ? gold : "#E8DFD0",
                        color: serviceId === OTHER_SERVICE_ID ? "#fff" : "#5C5346",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MessageSquare size={20} strokeWidth={1.5} />
                    </span>
                    <span style={{ minWidth: 0, textAlign: "left" }}>
                      <span
                        style={{
                          display: "block",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#111",
                        }}
                      >
                        Other
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 13,
                          color: "#666",
                          marginTop: 2,
                        }}
                      >
                        Describe what you need
                      </span>
                    </span>
                  </button>
                  {serviceId === OTHER_SERVICE_ID && (
                    <textarea
                      placeholder="Describe what you need (e.g. specific treatment, occasion…)"
                      value={customServiceNote}
                      onChange={(e) => setCustomServiceNote(e.target.value)}
                      rows={4}
                      style={{
                        width: "100%",
                        marginTop: 12,
                        padding: "12px 14px",
                        fontSize: 14,
                        borderRadius: 10,
                        border: "1px solid #E5E2E0",
                        boxSizing: "border-box",
                        fontFamily: "'Inter', sans-serif",
                        resize: "vertical",
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#111",
                  margin: "0 0 20px",
                }}
              >
                Choose Your Stylist
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 12 }}>
                {stylists.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStylistId(st.id)}
                    style={{
                      padding: 12,
                      border:
                        stylistId === st.id ? `2px solid ${gold}` : "1px solid #E5E2E0",
                      borderRadius: 10,
                      background: "#FFFFFF",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={st.image}
                      alt=""
                      style={{
                        width: "100%",
                        aspectRatio: "1",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: 10,
                      }}
                    />
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#111",
                        marginBottom: 4,
                      }}
                    >
                      {st.name}
                    </div>
                    <div style={{ fontSize: 11, color: "#777" }}>{st.title}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#111",
                  margin: "0 0 16px",
                }}
              >
                Select Date & Time
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                  marginTop: 8,
                }}
              >
                <Calendar size={16} color={gold} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>
                  Available Dates
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  overflowX: "auto",
                  paddingBottom: 8,
                  marginBottom: 20,
                }}
              >
                {nextWeekDates.map((d) => {
                  const iso = d.toISOString().slice(0, 10);
                  const sel = dateIso === iso;
                  return (
                    <button
                      key={iso}
                      type="button"
                      onClick={() => setDateIso(iso)}
                      style={{
                        flexShrink: 0,
                        width: 72,
                        padding: "10px 6px",
                        borderRadius: 10,
                        border: sel ? "none" : "1px solid #ddd",
                        background: sel ? gold : "#fff",
                        color: sel ? "#fff" : "#111",
                        cursor: "pointer",
                        fontSize: 12,
                      }}
                    >
                      <div style={{ fontSize: 10, opacity: 0.9 }}>
                        {d.toLocaleDateString("en-GB", { weekday: "short" })}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 18 }}>{d.getDate()}</div>
                      <div style={{ fontSize: 10, opacity: 0.9 }}>
                        {d.toLocaleDateString("en-GB", { month: "short" })}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <Clock size={16} color={gold} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>
                  Available Times
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8 }}>
                {timeSlots.map((t) => {
                  const sel = time === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      style={{
                        padding: "10px 8px",
                        borderRadius: 8,
                        border: sel ? "none" : "1px solid #ddd",
                        background: sel ? gold : "#fff",
                        color: sel ? "#fff" : "#111",
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#111",
                  margin: "0 0 20px",
                }}
              >
                Review Your Booking
              </h2>
              <div
                style={{
                  background: "#F3F0EB",
                  borderRadius: 12,
                  padding: "8px 0",
                  marginBottom: 20,
                }}
              >
                {[
                  {
                    label: "Service",
                    value: serviceDisplayLabel,
                    Icon: Scissors,
                  },
                  {
                    label: "Stylist",
                    value: selectedStylist?.name ?? "—",
                    Icon: User,
                  },
                  {
                    label: "Date",
                    value:
                      dateIso && new Date(dateIso + "T12:00:00")
                        ? formatDateShort(new Date(dateIso + "T12:00:00"))
                        : "—",
                    Icon: Calendar,
                  },
                  {
                    label: "Time",
                    value: time || "—",
                    Icon: Clock,
                  },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
                      gap: 12,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <row.Icon size={18} color={gold} strokeWidth={1.5} />
                      <span style={{ color: "#666", fontSize: 14 }}>{row.label}</span>
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "#111",
                        fontSize: 14,
                        textAlign: "right",
                        maxWidth: "58%",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 8,
                }}
              >
                Phone number
              </label>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="e.g. +971 50 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              />
              <p style={{ fontSize: 12, color: "#777", margin: "0 0 20px", lineHeight: 1.5 }}>
                By confirming, you agree to our booking terms and cancellation policy.
              </p>
            </>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24,
              gap: 12,
            }}
          >
            <button
              type="button"
              onClick={handleBack}
              disabled={backDisabled}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 16px",
                fontSize: 13,
                background: "#FFFFFF",
                border: "1px solid #ddd",
                borderRadius: 0,
                cursor: backDisabled ? "default" : "pointer",
                opacity: backDisabled ? 0.4 : 1,
              }}
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < 4 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !canContinue1) return;
                  if (step === 2 && !canContinue2) return;
                  if (step === 3 && !canContinue3) return;
                  setStep((s) => (s < 4 ? ((s + 1) as 1 | 2 | 3 | 4) : s));
                }}
                disabled={
                  (step === 1 && !canContinue1) ||
                  (step === 2 && !canContinue2) ||
                  (step === 3 && !canContinue3)
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  background: gold,
                  color: "#111",
                  border: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                  opacity:
                    (step === 1 && !canContinue1) ||
                    (step === 2 && !canContinue2) ||
                    (step === 3 && !canContinue3)
                      ? 0.45
                      : 1,
                }}
              >
                Continue <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirm}
                disabled={
                  !phoneValid || !hasValidServiceSelection || !selectedStylist || !dateIso || !time
                }
                style={{
                  padding: "10px 20px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  background: gold,
                  color: "#111",
                  border: "none",
                  borderRadius: 0,
                  cursor: phoneValid ? "pointer" : "not-allowed",
                  opacity:
                    phoneValid && hasValidServiceSelection && selectedStylist && dateIso && time
                      ? 1
                      : 0.45,
                }}
              >
                Confirm booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
