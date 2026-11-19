export const site = {
  name: "PRIMA CAFÉ",
  shortName: "Prima",
  tagline: "Every Cup Tells a Story.",
  description:
    "A specialty coffee house in the heart of Les Berges du Lac, Tunis. Single-origin espresso, slow filter brews, fresh juices and pastries baked in-house each morning.",
  phoneDisplay: "+216 25 400 900",
  phoneHref: "tel:+21625400900",
  whatsappNumber: "21625400900",
  email: "hello@primacafe.tn",
  address: {
    street: "12 Rue du Lac Léman",
    district: "Les Berges du Lac",
    city: "Tunis 1053",
    country: "Tunisia",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Les+Berges+du+Lac+1%2C+Tunis",
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  instagramHandle: "@primacafe.tn",
  hours: [
    { days: "Monday — Thursday", time: "07:30 — 22:00" },
    { days: "Friday — Saturday", time: "07:30 — 23:30" },
    { days: "Sunday", time: "08:30 — 21:00" },
  ],
  established: "2016",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}, ${site.address.country}`;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsappMessage =
  "Hello PRIMA CAFÉ! I would like to ask about a table reservation.";
