export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: "Coffee" | "Interior" | "Desserts" | "People";
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/barista.jpg",
    alt: "A barista pouring steamed milk into a ceramic cup to create latte art",
    caption: "Every cup, by hand",
    category: "Coffee",
    width: 880,
    height: 1184,
  },
  {
    src: "/images/interior.jpg",
    alt: "The cream and oak interior of PRIMA CAFÉ with arched windows and brass lights",
    caption: "The salon",
    category: "Interior",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/hero.jpg",
    alt: "Espresso with golden crema in a porcelain cup on a marble table",
    caption: "The first pour",
    category: "Coffee",
    width: 1392,
    height: 752,
  },
  {
    src: "/images/dessert-spread.jpg",
    alt: "An almond croissant and pistachio cheesecake served with espresso",
    caption: "The pastry counter",
    category: "Desserts",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/guests.jpg",
    alt: "Two friends laughing over coffee at a marble table by the window",
    caption: "Sunday, unhurried",
    category: "People",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/beans.jpg",
    alt: "Freshly roasted coffee beans spilling from a linen sack",
    caption: "Single origin, small batch",
    category: "Coffee",
    width: 880,
    height: 1184,
  },
  {
    src: "/images/espresso.jpg",
    alt: "A single espresso in a warm-white porcelain cup with a brass spoon",
    caption: "Four grams of patience",
    category: "Coffee",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/tiramisu.jpg",
    alt: "A slice of tiramisu dusted with cocoa beside an espresso cup",
    caption: "Tiramisù della casa",
    category: "Desserts",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/mint-tea.jpg",
    alt: "Moroccan mint tea in a gilded glass on a brass tray",
    caption: "Mint tea, poured high",
    category: "Desserts",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/cappuccino.jpg",
    alt: "A cappuccino with velvety foam dusted with cocoa",
    caption: "Cappuccino Prima",
    category: "Coffee",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/iced-latte.jpg",
    alt: "An iced latte in a tall glass with clear ice cubes",
    caption: "Cold layers",
    category: "Coffee",
    width: 1184,
    height: 880,
  },
  {
    src: "/images/orange-juice.jpg",
    alt: "Freshly pressed orange juice in a tumbler with an orange slice",
    caption: "Pressed at ten",
    category: "People",
    width: 1184,
    height: 880,
  },
];

export const homeGallery = galleryImages.slice(0, 6);
