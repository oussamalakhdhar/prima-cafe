export type MenuCategory = {
  id: string;
  name: string;
  shortName: string;
  blurb: string;
};

export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  featured?: boolean;
};

export const categories: MenuCategory[] = [
  {
    id: "espresso",
    name: "Espresso & Coffee",
    shortName: "Espresso",
    blurb: "Single-origin beans, dialled in every morning.",
  },
  {
    id: "cappuccino",
    name: "Cappuccino & Latte",
    shortName: "Cappuccino & Latte",
    blurb: "Silky milk, poured by hand into every cup.",
  },
  {
    id: "cold",
    name: "Cold Drinks",
    shortName: "Cold Drinks",
    blurb: "Slow-steeped, shaken and served over clear ice.",
  },
  {
    id: "juices",
    name: "Fresh Juices",
    shortName: "Fresh Juices",
    blurb: "Pressed to order from seasonal fruit.",
  },
  {
    id: "tea",
    name: "Tea",
    shortName: "Tea",
    blurb: "Whole-leaf infusions and house mint tea.",
  },
  {
    id: "desserts",
    name: "Desserts & Pastries",
    shortName: "Desserts",
    blurb: "Baked in-house before the doors open.",
  },
];

export const menuItems: MenuItem[] = [
  // Espresso & Coffee
  {
    id: "espresso-classico",
    category: "espresso",
    name: "Espresso Classico",
    description:
      "Our house blend pulled short and sweet — dark chocolate, toasted almond, a clean caramel finish.",
    price: 4.5,
    image: "/images/espresso.jpg",
    tags: ["House blend"],
    featured: true,
  },
  {
    id: "flat-white",
    category: "espresso",
    name: "Flat White",
    description:
      "A double ristretto under velvety microfoam, served in a wide cup so the crema meets you first.",
    price: 8.0,
    image: "/images/flat-white.jpg",
    tags: ["Double shot"],
  },
  {
    id: "v60-slow-brew",
    category: "espresso",
    name: "V60 Slow Brew",
    description:
      "A single origin poured by hand over three minutes. Bright, floral and different every season.",
    price: 9.5,
    image: "/images/v60.jpg",
    tags: ["Single origin"],
  },

  // Cappuccino & Latte
  {
    id: "cappuccino-prima",
    category: "cappuccino",
    name: "Cappuccino Prima",
    description:
      "Equal parts espresso, steamed milk and cloud-soft foam, finished with a dusting of cocoa.",
    price: 7.5,
    image: "/images/cappuccino.jpg",
    tags: ["Signature"],
    featured: true,
  },
  {
    id: "caramel-latte",
    category: "cappuccino",
    name: "Caramel Latte",
    description:
      "Slow-cooked salted caramel folded into steamed milk, with a double shot at the base.",
    price: 9.0,
    image: "/images/caramel-latte.jpg",
    tags: ["Iced available"],
  },
  {
    id: "cinnamon-latte",
    category: "cappuccino",
    name: "Cinnamon Honey Latte",
    description:
      "Tunisian honey, Ceylon cinnamon and espresso, poured tall and dusted at the bar.",
    price: 9.0,
    image: "/images/cinnamon-latte.jpg",
  },

  // Cold Drinks
  {
    id: "iced-latte",
    category: "cold",
    name: "Iced Latte",
    description:
      "Cold milk, clear ice and a fresh double shot poured over the top so the layers settle slowly.",
    price: 9.5,
    image: "/images/iced-latte.jpg",
    tags: ["Seasonal favourite"],
    featured: true,
  },
  {
    id: "prima-cold-brew",
    category: "cold",
    name: "Prima Cold Brew",
    description:
      "Steeped for eighteen hours, served black over a single large cube. Smooth, low acid, quietly sweet.",
    price: 9.0,
    image: "/images/cold-brew.jpg",
    tags: ["18h steep"],
  },
  {
    id: "frappe-prima",
    category: "cold",
    name: "Frappé Prima",
    description:
      "Espresso blended with milk and ice, crowned with cream and a fine veil of cocoa.",
    price: 11.0,
    image: "/images/frappe.jpg",
  },

  // Juices
  {
    id: "orange-presse",
    category: "juices",
    name: "Orange Pressé",
    description:
      "Four oranges pressed to order, nothing added. Served in a chilled tumbler with the peel still on the rim.",
    price: 8.0,
    image: "/images/orange-juice.jpg",
    tags: ["Vegan"],
  },
  {
    id: "citrus-mint",
    category: "juices",
    name: "Citrus & Mint Cooler",
    description:
      "Lemon, lime and garden mint over crushed ice — the antidote to a Tunis afternoon.",
    price: 8.5,
    image: "/images/citrus-mint.jpg",
    tags: ["Vegan"],
  },
  {
    id: "strawberry-cooler",
    category: "juices",
    name: "Strawberry Cooler",
    description:
      "Ripe strawberries muddled with a little cane sugar and lime, finished with sparkling water.",
    price: 9.5,
    image: "/images/strawberry-cooler.jpg",
    tags: ["Vegan"],
  },

  // Tea
  {
    id: "mint-tea",
    category: "tea",
    name: "Moroccan Mint Tea",
    description:
      "Gunpowder green tea and a generous bunch of fresh mint, poured from height into a gilded glass.",
    price: 5.5,
    image: "/images/mint-tea.jpg",
    tags: ["Signature"],
  },
  {
    id: "earl-grey",
    category: "tea",
    name: "Earl Grey Impérial",
    description:
      "Whole-leaf Ceylon scented with bergamot and blue cornflower, served with a jug of milk.",
    price: 6.0,
    image: "/images/earl-grey.jpg",
    tags: ["Whole leaf"],
  },
  {
    id: "matcha-latte",
    category: "tea",
    name: "Matcha Latte",
    description:
      "Ceremonial-grade matcha whisked to a smooth foam, layered over milk and ice.",
    price: 10.5,
    image: "/images/matcha.jpg",
    tags: ["Iced"],
  },

  // Desserts
  {
    id: "tiramisu",
    category: "desserts",
    name: "Tiramisù della Casa",
    description:
      "Mascarpone cream, espresso-soaked savoiardi and a bitter cocoa veil. Made fresh each morning.",
    price: 9.0,
    image: "/images/tiramisu.jpg",
    tags: ["House-made"],
  },
  {
    id: "almond-croissant",
    category: "desserts",
    name: "Almond Croissant",
    description:
      "Laminated with French butter, filled with almond cream and toasted flakes. Warm if you ask.",
    price: 6.5,
    image: "/images/croissant.jpg",
    tags: ["Baked daily"],
  },
  {
    id: "pistachio-cheesecake",
    category: "desserts",
    name: "Pistachio Cheesecake",
    description:
      "Sicilian pistachio, a whisper of orange blossom and a buttery biscuit base.",
    price: 10.0,
    image: "/images/pistachio-cheesecake.jpg",
    tags: ["Baked daily"],
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export function formatPrice(price: number) {
  return price.toFixed(3);
}
