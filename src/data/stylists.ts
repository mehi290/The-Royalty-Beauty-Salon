export type Stylist = {
  id: string;
  name: string;
  title: string;
  image: string;
};

export const stylists: Stylist[] = [
  {
    id: "sofia-martinez",
    name: "Sofia Martinez",
    title: "Senior Stylist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "marco-rossi",
    name: "Marco Rossi",
    title: "Color Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "aisha-khan",
    name: "Aisha Khan",
    title: "Makeup Artist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "nina-chen",
    name: "Nina Chen",
    title: "Nail Artist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
];

export function getStylistById(id: string): Stylist | undefined {
  return stylists.find((s) => s.id === id);
}
