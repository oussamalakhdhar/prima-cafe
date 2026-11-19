export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I come for the flat white and stay for the quiet. Prima is the only place in Tunis where nobody rushes you out of your chair.",
    name: "Amira Ben Salah",
    role: "Architect, Lac 1",
  },
  {
    quote:
      "The V60 changes every few weeks and the team remembers how I take it. That attention is worth the drive across town.",
    name: "Yassine Trabelsi",
    role: "Coffee regular since 2018",
  },
  {
    quote:
      "We hosted my sister's engagement here. The pastries, the lighting, the way they poured the mint tea — everything felt considered.",
    name: "Leïla Mansour",
    role: "Private event, 2025",
  },
];
