

## Before & After Gallery Section

**What changes**: Replace the current masonry image gallery in `GallerySection.tsx` with a before-and-after results gallery featuring 6 transformation cards.

### Layout

Each card shows two images side by side with "BEFORE" and "AFTER" labels. Cards arranged in a 1-column (mobile), 2-column (tablet), 3-column (desktop) grid.

### Design

- Cards have a subtle border and the gold accent color for labels
- Each card uses placeholder gradient backgrounds in place of real photos (light gray "before", warm tone "after")
- Small gold divider line between the two halves
- "BEFORE" / "AFTER" labels in Inter uppercase, matching the site's label style
- Transformation type label below each card (e.g. "Balayage Transformation", "Bridal Updo", "Keratin Treatment", "Colour Correction", "Precision Cut", "Hair Extensions")

### Header

- Subheading stays: "OUR WORK"
- Title changes to: "Before & After Transformations"

### File changes

1. **`src/components/velour/GallerySection.tsx`** — Full rewrite:
   - Replace `images` array with a `transformations` array of 6 objects (title, before placeholder, after placeholder)
   - New `BeforeAfterCard` component replacing `GalleryImage`
   - Responsive grid instead of masonry columns
   - Keep the Instagram CTA at the bottom
   - Use placeholder colored divs with text overlay until real photos are uploaded

