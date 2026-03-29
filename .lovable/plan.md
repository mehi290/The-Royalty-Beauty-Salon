
# Velour Salon Dubai — Luxury Hair & Beauty Website

## Overview
A pixel-perfect, luxury salon website with 11 sections + floating WhatsApp button. Split into modular components, smooth-scroll navigation, scroll-triggered animations, and the exact design system specified.

## Architecture
- **Page**: `src/pages/Index.tsx` — imports all section components, manages IntersectionObserver for scroll animations
- **Components folder**: `src/components/velour/` — one file per section + shared helpers

## Components to Build

### 1. `VelourStyles.tsx` — Global style injection
- Google Fonts import (Cormorant Garamond + Inter)
- Keyframes: bounce, shimmer, pulse, fade-in-section
- scroll-behavior: smooth on html
- Custom CSS for nav underline animations, hover effects not achievable with Tailwind alone

### 2. `Navbar.tsx` — Fixed navigation
- Transparent → solid #111111 on scroll (useState + useEffect scroll listener, threshold 80px)
- Three-zone flex: logo left, 5 nav links center, Book Now button right
- Links smooth-scroll to section IDs
- Mobile: hamburger icon → full-screen overlay with animated slide-down menu
- Green WhatsApp dot on Book Now button

### 3. `HeroSection.tsx` — Full viewport hero
- Unsplash background with gradient overlay
- Centered content: eyebrow label, main heading (clamp sizing), italic subheading
- Two CTA buttons (gold solid + white outlined), stacked on mobile
- Animated bouncing ChevronDown at bottom

### 4. `StatsBar.tsx` — Gold accent strip
- 4 stats in flex row with white dividers, 2×2 grid on mobile
- Cormorant Garamond numbers + Inter labels

### 5. `AboutSection.tsx` — Two-column about
- Text left (60%) with eyebrow, heading, 3 paragraphs, gold rule, 3 feature tags
- Image right (40%) with gold outline offset
- Reversed stack on mobile (image first)

### 6. `ServicesSection.tsx` — 6-card service grid
- 3-col grid (2-col tablet, 1-col mobile), 2px gap
- Each card: aspect-ratio 3/4, image background, gradient overlay, hover reveal with description + gold top border
- Gold outlined "View Full Service Menu" button below

### 7. `GallerySection.tsx` — Masonry gallery
- CSS columns layout (3/2/1 responsive)
- 6 images with hover: scale + gold overlay + PlusCircle icon
- Instagram follow CTA below

### 8. `ReviewsSection.tsx` — 3 testimonial cards
- Dark cards with gold top border, star icons, large gold quotation mark
- Italic review text, avatar circles with initials
- Trust badges row below

### 9. `TeamSection.tsx` — 4 team member cards
- 4-col grid (2-col tablet, 1-col mobile)
- Square images with hover gold outline, name/title/bio/book link
- "Meet the Full Team" button below

### 10. `PricingSection.tsx` — 3 pricing tiers
- Edge-to-edge cards with dividers between
- Essentials (dark), Signature (gold, featured with "Most Popular" badge), Premium (dark with gold border)
- 6 line items per card with service/price rows
- Disclaimer text below

### 11. `OfferBanner.tsx` — New client promo
- Shimmer gradient background (animated background-position)
- 20% off heading, subtext, WhatsApp + Call buttons

### 12. `ContactSection.tsx` — Location & contact
- Left: 4 info rows with icons, two CTA buttons
- Right: map placeholder with gold border, centered pin icon + "Open in Google Maps"

### 13. `Footer.tsx` — 4-column footer
- Brand column, Services links, Quick Links, Contact info
- Social icons with hover effects
- Bottom bar with copyright + legal links

### 14. `WhatsAppFloat.tsx` — Mobile-only floating button
- Fixed position, green, pulse animation, visible below 768px only

## Design System Implementation
- All exact hex colors applied via inline styles or Tailwind arbitrary values
- Typography: Cormorant Garamond for headings/quotes, Inter for everything else
- Section padding: py-[100px] desktop, py-[60px] mobile
- Max-width 1200px container with horizontal padding
- Alternating dark (#111111) → cream (#FAF7F2) backgrounds
- No border-radius except buttons (3px) and avatar circles
- All hover transitions 0.3s ease

## Interactivity
- IntersectionObserver on all sections for scroll-reveal animations
- Smooth-scroll anchor links in nav
- Realistic fake phone numbers (e.g., +971 4 385 7200)
- WhatsApp buttons link to wa.me with pre-filled message
