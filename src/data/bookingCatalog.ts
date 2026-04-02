/**
 * Single source of truth for bookable services (Packages + booking wizard).
 * Icons map to lucide icon names in the booking UI.
 */
export type BookingIconKey =
  | "scissors"
  | "sparkles"
  | "heart"
  | "hand"
  | "gem"
  | "face"
  | "wind";

export type BookingCategoryId =
  | "hair-care"
  | "makeup"
  | "manicure-pedicure"
  | "lash-brow"
  | "face-skincare-waxing";

export type BookingCategory = {
  id: BookingCategoryId;
  title: string;
  description: string;
  icon: BookingIconKey;
};

export const bookingCategories: BookingCategory[] = [
  {
    id: "hair-care",
    title: "Hair care",
    description: "Cuts, colour, treatments & styling",
    icon: "scissors",
  },
  {
    id: "makeup",
    title: "Makeup",
    description: "Bridal & special occasion looks",
    icon: "sparkles",
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    description: "Hands, feet & nail art",
    icon: "heart",
  },
  {
    id: "lash-brow",
    title: "Eye lash & eyebrow",
    description: "Lashes, brows & threading",
    icon: "face",
  },
  {
    id: "face-skincare-waxing",
    title: "Face, Skincare & waxing",
    description: "Facials, skin & waxing",
    icon: "wind",
  },
];

export const OTHER_SERVICE_ID = "other";

export type BookingService = {
  id: string;
  name: string;
  priceLabel: string;
  icon: BookingIconKey;
  categoryId: BookingCategoryId;
};

export const bookingServices: BookingService[] = [
  { id: "hair-cut", name: "Hair Cut", priceLabel: "From AED 250", icon: "scissors", categoryId: "hair-care" },
  { id: "hair-styling", name: "Hair Styling", priceLabel: "From AED 250", icon: "scissors", categoryId: "hair-care" },
  { id: "color-highlights", name: "Color & Highlights", priceLabel: "From AED 450", icon: "sparkles", categoryId: "hair-care" },
  { id: "keratin-treatments", name: "Keratin Treatments", priceLabel: "From AED 800", icon: "sparkles", categoryId: "hair-care" },
  { id: "extensions", name: "Extensions", priceLabel: "From AED 650", icon: "gem", categoryId: "hair-care" },
  { id: "wash-cut-blowdry", name: "Wash, Cut & Blowdry", priceLabel: "AED 120", icon: "scissors", categoryId: "hair-care" },
  { id: "root-touch-up", name: "Root Touch-Up", priceLabel: "AED 180", icon: "sparkles", categoryId: "hair-care" },
  { id: "full-hair-colour", name: "Full Hair Colour (L'Oréal)", priceLabel: "AED 280", icon: "sparkles", categoryId: "hair-care" },
  { id: "balayage-toner", name: "Balayage & Toner", priceLabel: "AED 650", icon: "sparkles", categoryId: "hair-care" },
  { id: "olaplex-treatment", name: "Olaplex Treatment", priceLabel: "AED 450", icon: "sparkles", categoryId: "hair-care" },
  { id: "balayage-trim-toner", name: "Balayage + Trim + Toner", priceLabel: "AED 700", icon: "sparkles", categoryId: "hair-care" },
  { id: "hair-extensions-full", name: "Hair Extensions (Full Head)", priceLabel: "AED 1,200", icon: "gem", categoryId: "hair-care" },
  { id: "ombre", name: "Ombré (Short to Long)", priceLabel: "AED 600–800", icon: "sparkles", categoryId: "hair-care" },

  { id: "bridal-hair-makeup", name: "Bridal Hair & Makeup", priceLabel: "AED 2,100", icon: "sparkles", categoryId: "makeup" },

  { id: "nail-artistry", name: "Nail Artistry", priceLabel: "From AED 189", icon: "heart", categoryId: "manicure-pedicure" },
  { id: "classic-manicure", name: "Classic Manicure", priceLabel: "AED 80", icon: "heart", categoryId: "manicure-pedicure" },
  { id: "gelish-pedicure", name: "Gelish Pedicure", priceLabel: "AED 150", icon: "heart", categoryId: "manicure-pedicure" },
  { id: "gel-mani-pedi-combo", name: "Gel Mani-Pedi Combo", priceLabel: "AED 189", icon: "heart", categoryId: "manicure-pedicure" },

  { id: "lash-brows", name: "Lash and Brows", priceLabel: "From AED 35", icon: "face", categoryId: "lash-brow" },
  { id: "eyebrow-threading", name: "Eyebrow Threading", priceLabel: "AED 35", icon: "face", categoryId: "lash-brow" },
  { id: "lash-tint-lift", name: "Lash Tint & Lift", priceLabel: "AED 220", icon: "face", categoryId: "lash-brow" },
  { id: "lash-lift-brow-lam", name: "Lash Lift + Brow Lamination", priceLabel: "AED 320", icon: "face", categoryId: "lash-brow" },

  { id: "facials-skincare", name: "Facials & Skincare", priceLabel: "From AED 150", icon: "face", categoryId: "face-skincare-waxing" },
  { id: "wax", name: "Wax", priceLabel: "From AED 35", icon: "wind", categoryId: "face-skincare-waxing" },
  { id: "anti-ageing-facial", name: "Advanced Anti-Ageing Facial", priceLabel: "AED 380", icon: "face", categoryId: "face-skincare-waxing" },
  { id: "full-body-wax", name: "Full Body Waxing Package", priceLabel: "AED 350", icon: "wind", categoryId: "face-skincare-waxing" },
];

export function getServiceById(id: string): BookingService | undefined {
  if (id === OTHER_SERVICE_ID) return undefined;
  return bookingServices.find((s) => s.id === id);
}

export function getCategoryById(id: string): BookingCategory | undefined {
  return bookingCategories.find((c) => c.id === id);
}

export function getServicesByCategory(categoryId: BookingCategoryId): BookingService[] {
  return bookingServices.filter((s) => s.categoryId === categoryId);
}

export function getCategoryIdForServiceId(serviceId: string): BookingCategoryId | undefined {
  if (serviceId === OTHER_SERVICE_ID) return undefined;
  return getServiceById(serviceId)?.categoryId;
}

export function getServiceDisplayLabel(serviceId: string, customNote: string): string {
  if (serviceId === OTHER_SERVICE_ID) {
    const t = customNote.trim();
    return t ? `Other — ${t}` : "Other";
  }
  return getServiceById(serviceId)?.name ?? "—";
}
