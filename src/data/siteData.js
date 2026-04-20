// Solaire Lightworks — luxury wireless rechargeable lighting, Zimbabwe
// Single source of truth for all page content.

export const business = {
  name: "Solaire Lightworks",
  shortName: "Solaire",
  tagline: "Light, untethered.",
  established: 2023,
  city: "Harare",
  country: "Zimbabwe",
  instagram: "https://instagram.com/solaire_lightworks_zw",
  instagramHandle: "@solaire_lightworks_zw",
  followers: "5,495",
  whatsapp: "+263771234567",
  whatsappDisplay: "+263 77 123 4567",
  email: "hello@solairelightworks.co.zw",
  phone: "+263 242 700 800",
  address: "Sam Levy's Village, Borrowdale, Harare",
  hours: {
    weekdays: "09:00 – 18:00",
    saturday: "09:00 – 17:00",
    sunday: "10:00 – 15:00",
  },
  delivery: "Nationwide delivery across Zimbabwe",
  logo: "/logo.png",
};

const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
const mailHref = (subject, body) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Zimbabwe · Wireless Rechargeable Lighting",
  headline: "Light, quietly luxurious.",
  headlineAccent: "wireless. rechargeable. effortless.",
  sub: "Elegant lamps, pendants and sconces that need no cables, no sockets, no compromise. Designed for the way you actually live — on the table, by the bedside, on the terrace at dusk.",
  ctaPrimary: {
    label: "Shop the collection",
    to: "/shop",
  },
  ctaSecondary: {
    label: "Chat on WhatsApp",
    href: waHref("Hi Solaire, I'd love to know more about your wireless lighting."),
  },
  images: [
    {
      src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80",
      alt: "Warm rechargeable table lamp glowing on a minimalist dining table at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1600&q=80",
      alt: "Sculptural pendant light casting a soft halo in a quiet room",
    },
    {
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80",
      alt: "Small cordless lamp on a linen-dressed bedside in the evening",
    },
    {
      src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1600&q=80",
      alt: "Portable rechargeable lamp on outdoor terrace table",
    },
  ],
  stats: [
    { value: "USB-C", label: "Universal charging" },
    { value: "24 hr", label: "Battery life" },
    { value: "IP54", label: "Indoor · outdoor" },
    { value: "Zim-wide", label: "Delivery" },
  ],
};

// ---------- ANNOUNCEMENT ----------
export const announcement = {
  items: [
    "New arrival · The Halo Pendant — now in brushed brass",
    "Complimentary gift-wrap on orders over $250",
    "Free delivery within Harare · Nationwide shipping available",
    "Follow @solaire_lightworks_zw on Instagram",
  ],
};

// ---------- COLLECTIONS ----------
export const collections = [
  {
    slug: "table",
    name: "Table & Desk",
    caption: "Soft, tactile light for the spaces you linger in.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    count: 12,
  },
  {
    slug: "pendant",
    name: "Pendants",
    caption: "Sculptural silhouettes that float above the moment.",
    image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1400&q=80",
    count: 8,
  },
  {
    slug: "sconce",
    name: "Wall Sconces",
    caption: "Cordless wall light — no wiring, no walls drilled.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1400&q=80",
    count: 6,
  },
  {
    slug: "floor",
    name: "Floor & Reading",
    caption: "A quiet pool of warmth beside your favourite chair.",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1400&q=80",
    count: 5,
  },
  {
    slug: "outdoor",
    name: "Terrace & Garden",
    caption: "Weather-ready glow for the golden hour after sunset.",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80",
    count: 9,
  },
  {
    slug: "candle",
    name: "Candle & Accent",
    caption: "Flameless flicker — the romance, without the risk.",
    image: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=1400&q=80",
    count: 7,
  },
];

// ---------- PRODUCTS ----------
// Each product has WhatsApp + Email CTAs prefilled.
const productBase = (p) => ({
  ...p,
  whatsapp: waHref(
    `Hi Solaire, I'm interested in the ${p.name} (${p.sku}). Is it in stock and what's the total with delivery to my area?`
  ),
  email: mailHref(
    `Order inquiry — ${p.name} (${p.sku})`,
    `Hello Solaire Lightworks,\n\nI'd like to order the ${p.name} (${p.sku}) listed at $${p.price}.\n\nDelivery address:\n\nPreferred payment:\n\nThank you.`
  ),
});

export const products = [
  productBase({
    slug: "halo-pendant-brass",
    sku: "SL-P-01",
    name: "Halo Pendant",
    collection: "pendant",
    price: 285,
    currency: "USD",
    tagline: "A sculpted ring of light, suspended in quiet.",
    description:
      "The Halo floats on a single matte cord, casting a concentric wash of warmth across dining tables and entryways. No junction box required — charge once, hang anywhere.",
    badges: ["New", "Brushed Brass"],
    finishes: ["Brushed Brass", "Soft Black", "Warm White"],
    specs: {
      material: "Hand-spun aluminium · brass finish",
      diameter: "34 cm",
      battery: "4,000 mAh · 22 hrs on low",
      charge: "USB-C · 3 hr full",
      dimming: "Three-stage touch",
      color: "2,700 K warm white",
    },
    image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "lumiere-table",
    sku: "SL-T-02",
    name: "Lumière Table Lamp",
    collection: "table",
    price: 165,
    currency: "USD",
    tagline: "The candle, re-imagined as furniture.",
    description:
      "A slim, silhouette table lamp weighted in solid aluminium. Soft at the base, haloed at the top — moves from kitchen counter to bedside without a single cable in tow.",
    badges: ["Bestseller"],
    finishes: ["Ivory", "Ink", "Sage"],
    specs: {
      material: "Solid aluminium · powder coat",
      height: "28 cm",
      battery: "2,800 mAh · 18 hrs",
      charge: "USB-C · 2 hr full",
      dimming: "Stepless touch",
      color: "2,200 – 3,000 K",
    },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "ember-bedside",
    sku: "SL-T-03",
    name: "Ember Bedside",
    collection: "table",
    price: 125,
    currency: "USD",
    tagline: "A quiet warmth, last thing at night.",
    description:
      "Designed for the moment between reading and sleep. A hand-feel brass cap, a matte glass diffuser, and a touch dimmer that finds the softest setting instinctively.",
    finishes: ["Brass · Milk Glass", "Black · Smoke Glass"],
    specs: {
      material: "Brass cap · frosted glass",
      height: "22 cm",
      battery: "2,200 mAh · 14 hrs",
      charge: "USB-C · 2 hr full",
      dimming: "Stepless touch",
      color: "2,700 K warm white",
    },
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "solstice-floor",
    sku: "SL-F-04",
    name: "Solstice Floor",
    collection: "floor",
    price: 420,
    currency: "USD",
    tagline: "Reading light you don't plug in.",
    description:
      "A slender cordless floor lamp with an adjustable head — the one you move from the sofa to the armchair, to the balcony at sundown. Solid weight in the foot, feather in the wrist.",
    badges: ["Editor's pick"],
    finishes: ["Warm Bronze", "Soft White"],
    specs: {
      material: "Steel · solid brass joints",
      height: "148 cm",
      battery: "6,000 mAh · 30 hrs",
      charge: "USB-C · 4 hr full",
      dimming: "Three-stage · reading mode",
      color: "3,000 K",
    },
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
  productBase({
    slug: "silhouette-sconce",
    sku: "SL-W-05",
    name: "Silhouette Sconce",
    collection: "sconce",
    price: 195,
    currency: "USD",
    tagline: "The wall light that never meets a wire.",
    description:
      "A magnetic-back sconce that mounts on a slim plate — no electrician, no hole in the wall. Lift it down to charge, click it back into place to bathe the wall in warmth.",
    finishes: ["Brushed Brass", "Matte Black"],
    specs: {
      material: "Anodised aluminium · magnetic mount",
      width: "24 cm",
      battery: "3,000 mAh · 20 hrs",
      charge: "USB-C dock · 3 hr",
      dimming: "Touch · motion-aware",
      color: "2,700 K warm white",
    },
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "terrace-lantern",
    sku: "SL-O-06",
    name: "Terrace Lantern",
    collection: "outdoor",
    price: 220,
    currency: "USD",
    tagline: "The golden hour, on demand.",
    description:
      "IP54-rated for balconies, tables under the stars, and those long evenings after the rain. A woven leather handle for carrying it wherever the company moves.",
    badges: ["IP54 · Outdoor"],
    finishes: ["Bronze · Tan leather", "Graphite · Black leather"],
    specs: {
      material: "Aluminium · leather handle",
      height: "32 cm",
      battery: "5,200 mAh · 26 hrs",
      charge: "USB-C · 3 hr full",
      dimming: "Three-stage · candle mode",
      rating: "IP54 — splash resistant",
    },
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "ember-candle",
    sku: "SL-C-07",
    name: "Ember Candle Set",
    collection: "candle",
    price: 95,
    currency: "USD",
    tagline: "Flameless flicker · set of three.",
    description:
      "A trio of rechargeable candles that breathe like the real thing. Scatter them down a table runner, beside the bath, along the mantel. Charge once a week.",
    finishes: ["Ivory", "Clay", "Soft Black"],
    specs: {
      material: "Wax shell · silicone flame",
      height: "12 / 18 / 24 cm",
      battery: "3 × 1,200 mAh · 40 hrs each",
      charge: "Magnetic USB-C dock",
      dimming: "Candle · solid · off",
      color: "1,900 K flame warm",
    },
    image: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
  productBase({
    slug: "pebble-mini",
    sku: "SL-T-08",
    name: "Pebble Mini",
    collection: "table",
    price: 85,
    currency: "USD",
    tagline: "Pocket-sized light for every corner.",
    description:
      "A river-stone-shaped companion — for bathroom shelves, bookcases, the bedside of a guest. Soft to hold, cool to the touch, warm in the room.",
    finishes: ["Ivory", "Sage", "Terracotta"],
    specs: {
      material: "Ceramic-feel silicone",
      height: "11 cm",
      battery: "1,800 mAh · 16 hrs",
      charge: "USB-C · 90 min full",
      dimming: "Touch · three stages",
      color: "2,700 K",
    },
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
  productBase({
    slug: "aurora-pendant",
    sku: "SL-P-09",
    name: "Aurora Pendant",
    collection: "pendant",
    price: 340,
    currency: "USD",
    tagline: "Light that falls like silk.",
    description:
      "A pleated alabaster shade suspended in a brass cage. Casts a diffused, almost fabric-soft light — the kind that makes the room feel hushed.",
    badges: ["Signature"],
    finishes: ["Brass · Alabaster"],
    specs: {
      material: "Alabaster shade · brass frame",
      diameter: "38 cm",
      battery: "4,400 mAh · 24 hrs",
      charge: "USB-C · 3 hr",
      dimming: "Stepless touch",
      color: "2,700 K",
    },
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    inStock: true,
  }),
  productBase({
    slug: "atrium-garden-stake",
    sku: "SL-O-10",
    name: "Atrium Garden Stake",
    collection: "outdoor",
    price: 145,
    currency: "USD",
    tagline: "Pathways, softened.",
    description:
      "A slim brass-and-glass stake that sinks into beds and borders. Trip-free charging with a magnetic base — lift up, charge inside, return to the garden.",
    finishes: ["Aged Brass", "Graphite"],
    specs: {
      material: "Brass · tempered glass",
      height: "46 cm",
      battery: "3,200 mAh · 18 hrs",
      charge: "Magnetic USB-C base",
      dimming: "On · low · off",
      rating: "IP54",
    },
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
  productBase({
    slug: "arc-reading",
    sku: "SL-F-11",
    name: "Arc Reading Lamp",
    collection: "floor",
    price: 385,
    currency: "USD",
    tagline: "The armchair's quiet companion.",
    description:
      "A gentle arc that leans over the page — articulated to find the right angle, weighted to stay where it's set. Designed for long evenings with a book.",
    finishes: ["Soft Black", "Ivory"],
    specs: {
      material: "Steel arc · cast base",
      height: "142 cm",
      battery: "5,600 mAh · 28 hrs",
      charge: "USB-C · 4 hr",
      dimming: "Reading · ambient",
      color: "3,000 K",
    },
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
  productBase({
    slug: "dune-wall",
    sku: "SL-W-12",
    name: "Dune Wall Light",
    collection: "sconce",
    price: 230,
    currency: "USD",
    tagline: "A soft rise on the wall, lit from within.",
    description:
      "A plaster-finish curve that grazes the wall with warmth. Rests on a magnetic plate — rearrange a hallway without a single cable behind it.",
    finishes: ["Plaster White", "Warm Sand"],
    specs: {
      material: "Plaster composite",
      width: "28 cm",
      battery: "3,400 mAh · 22 hrs",
      charge: "Magnetic USB-C dock",
      dimming: "Touch · stepless",
      color: "2,700 K",
    },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: false,
    inStock: true,
  }),
];

// ---------- FEATURE STRIP ----------
export const features = [
  {
    icon: "Lightning",
    title: "24-hour battery",
    body: "Lithium cells tuned for long, warm evenings. Charge once, forget for a week.",
  },
  {
    icon: "UsbLogo",
    title: "Universal USB-C",
    body: "One cable for every piece in the home. No proprietary bricks, no tangles.",
  },
  {
    icon: "WaveTriangle",
    title: "Stepless dimming",
    body: "A touch of the metal cap finds the softest setting for the moment you're in.",
  },
  {
    icon: "CloudSun",
    title: "Indoor · outdoor",
    body: "IP54-rated pieces move from dining table to terrace without a second thought.",
  },
  {
    icon: "Truck",
    title: "Delivered, nationwide",
    body: "Free within Harare, careful packaging to every corner of Zimbabwe.",
  },
  {
    icon: "ShieldCheck",
    title: "Two-year warranty",
    body: "Every lamp is covered on battery and finish — with the option to renew the cell.",
  },
];

// ---------- STORY ----------
export const story = {
  eyebrow: "Our story",
  title: "Quiet light. Thoughtfully made.",
  paragraphs: [
    "Solaire Lightworks began with a small frustration — a beautiful home in Harare, a load-shedding evening, and no single light that was both elegant and truly untethered. We started sourcing and later curating a collection of wireless, rechargeable pieces that felt as considered as the rooms they'd live in.",
    "Today we bring in lighting that has been hand-selected for its silhouette, its quality of glow, and its quiet confidence. Each piece is tested in our own living rooms before it reaches yours. If it doesn't earn its place on our bedside, it doesn't earn a place in the collection.",
    "We believe light should feel like hospitality — warm, easy, generous. Not a cable management problem.",
  ],
  imagePortrait:
    "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200&q=80",
  imageLandscape:
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80",
  stats: [
    { value: "120+", label: "Homes lit across Zimbabwe" },
    { value: "30", label: "Curated pieces in collection" },
    { value: "2,700 K", label: "Our house warmth" },
  ],
};

// ---------- VALUES ----------
export const values = [
  {
    icon: "Sparkle",
    title: "Considered, not cluttered",
    body: "We'd rather carry thirty pieces we love than three hundred we don't.",
  },
  {
    icon: "Leaf",
    title: "Low-impact by design",
    body: "Replaceable cells, repairable joints, recyclable packaging. Designed to stay with you.",
  },
  {
    icon: "HandHeart",
    title: "Local, personal service",
    body: "We help you plan a room, not just pick a product. A WhatsApp message away.",
  },
  {
    icon: "CheckCircle",
    title: "Tested before it ships",
    body: "Every lamp is charged, lit and checked by our team before it leaves the studio.",
  },
];

// ---------- REVIEWS ----------
export const reviews = [
  {
    name: "Tariro M.",
    role: "Borrowdale",
    rating: 5,
    body: "The Halo Pendant transformed our dining room. No electrician, no drilling — and the light is genuinely beautiful. Solaire delivered in two days.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rumbidzai K.",
    role: "Mount Pleasant",
    rating: 5,
    body: "We bought the Ember Bedside pair for our guest room. The touch dimmer is perfection and guests always ask where they're from. Worth every cent.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Farai Z.",
    role: "Avondale",
    rating: 5,
    body: "Terrace Lanterns on our balcony have completely changed how we use the space in the evening. Charge lasts nearly a week and the leather handle is gorgeous.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chipo N.",
    role: "Gweru",
    rating: 5,
    body: "Ordered from Gweru — packaging arrived immaculate, lamp was pre-charged and lit up the moment we opened it. Proper attention to detail from Solaire.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nigel & Chiedza",
    role: "Harare",
    rating: 5,
    body: "We used the Silhouette Sconces in a hallway we were told would need an electrician. It didn't. It needed Solaire.",
    avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=400&q=80",
  },
];

// ---------- INSPIRATION GRID ----------
export const inspiration = [
  {
    src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    caption: "Ember, mid-conversation.",
    tag: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1400&q=80",
    caption: "Halo, suspended.",
    tag: "Pendants",
  },
  {
    src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&q=80",
    caption: "Bedside, last page.",
    tag: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80",
    caption: "Terrace, sundown.",
    tag: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1400&q=80",
    caption: "Silhouette, on plaster.",
    tag: "Sconces",
  },
  {
    src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1400&q=80",
    caption: "Solstice, by the armchair.",
    tag: "Floor",
  },
  {
    src: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=1400&q=80",
    caption: "Ember Candle, flicker.",
    tag: "Accent",
  },
  {
    src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1400&q=80",
    caption: "Pebble, on a shelf.",
    tag: "Table",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    caption: "Atrium, in the garden.",
    tag: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    caption: "Arc, over the page.",
    tag: "Reading",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    caption: "Dune, grazing the wall.",
    tag: "Sconces",
  },
  {
    src: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1400&q=80",
    caption: "A quiet corner, lit.",
    tag: "Living",
  },
];

// ---------- JOURNAL / STYLING NOTES ----------
export const journal = [
  {
    slug: "styling-a-dining-table",
    title: "Styling a dining table with wireless light",
    excerpt:
      "Three simple rules for layering light on a table — a ring above, a glow on the surface, and a flicker at the ends.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    readTime: "4 min read",
    tag: "Styling",
  },
  {
    slug: "light-for-zimbabwe-evenings",
    title: "Designed for Zimbabwean evenings",
    excerpt:
      "Why warm colour temperature (2,700 K) and long battery runtime matter more here than anywhere else.",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80",
    readTime: "5 min read",
    tag: "Guide",
  },
  {
    slug: "care-and-charging",
    title: "Care & charging — keeping your lamp for years",
    excerpt:
      "A gentle guide to battery cycles, cleaning brass, and when to ask us about a replacement cell.",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1400&q=80",
    readTime: "3 min read",
    tag: "Care",
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "How long does the battery last?",
    a: "Between 14 and 30 hours depending on the piece and dimmer setting. Every lamp charges via USB-C — most reach full charge in 2–4 hours.",
  },
  {
    q: "Do you deliver nationwide?",
    a: "Yes. Delivery is complimentary within Harare and we ship carefully to every province in Zimbabwe. Outside of Harare is typically 2–4 working days.",
  },
  {
    q: "Can I replace the battery?",
    a: "Yes. Every Solaire lamp is designed to have its cell replaced — we offer a fitted replacement service so your lamp stays with you for years.",
  },
  {
    q: "Are the outdoor pieces weatherproof?",
    a: "Outdoor-rated pieces are IP54, meaning they handle splashes, wind-driven rain and dust. We do still recommend bringing them in during heavy downpours.",
  },
  {
    q: "How do I pay?",
    a: "We accept EcoCash, ZIPIT, USD cash on delivery within Harare, and direct USD transfers. Just tell us what works — we'll invoice you accordingly.",
  },
  {
    q: "Do you offer trade or interior-designer pricing?",
    a: "Yes — please WhatsApp us with your project and we'll share trade terms. We also supply boutique hotels and restaurants across Zimbabwe.",
  },
];

// ---------- CONTACT / CTA HELPERS ----------
export const contact = {
  whatsappGeneric: waHref("Hi Solaire, I'd love to ask a question."),
  emailGeneric: mailHref("Hello Solaire Lightworks", "Hello Solaire,\n\n"),
  instagram: business.instagram,
  map: "https://maps.app.goo.gl/LXpA1W1FzZpJt2fa6",
  address: business.address,
  hours: business.hours,
  phoneHref: `tel:${business.phone.replace(/\s/g, "")}`,
};

export const trust = [
  "Nationwide delivery",
  "2-year warranty",
  "Replaceable batteries",
  "Curated in Harare",
  "Secure local payments",
];

export const brand = {
  primary: "#03C155",
  primarySoft: "#DCFCE7",
  cream: "#FEFDF9",
  ink: "#1A1A1D",
  glow: "#F9B972",
};
