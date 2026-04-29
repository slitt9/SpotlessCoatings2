export const SITE = {
  name: "Spotless Coatings",
  tagline: "Epoxy & polyaspartic floors — gallery clarity for garages, shops, and homes.",
  taglineShort: "Lower Mainland",
  phoneDisplay: "778-869-0520",
  phoneTel: "+17788690520",
  email: "Spotlesscoatings1@gmail.com",
  instagram: "https://instagram.com/spotless.coatings/",
  instagramHandle: "@spotless.coatings",
  area: "Greater Vancouver & Lower Mainland, BC",
} as const;

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "patio",
    title: "Outdoor Patio",
    caption: "Weathered concrete refinished with a UV-stable, easy-clean polyaspartic topcoat.",
    beforeSrc: "/images/gallery/patio-before.jpg",
    afterSrc: "/images/gallery/patio-after.jpg",
    beforeAlt: "Patio concrete before epoxy coating by Spotless Coatings",
    afterAlt: "Patio after premium epoxy polyaspartic coating",
  },
  {
    id: "stairs",
    title: "Exterior Staircase",
    caption: "Treads and landings brought to a seamless, high-gloss finish with long-term wear resistance.",
    beforeSrc: "/images/gallery/stair-before.jpg",
    afterSrc: "/images/gallery/stair-after.jpg",
    beforeAlt: "Exterior staircase before professional floor coating",
    afterAlt: "Exterior staircase after epoxy coating",
  },
  {
    id: "garage",
    title: "Residential Garage",
    caption: "Everyday concrete transformed into a chemical-resistant, showroom-grade surface.",
    beforeSrc: "/images/gallery/garage-before.jpg",
    afterSrc: "/images/gallery/garage-after.jpg",
    beforeAlt: "Residential garage floor before epoxy coating",
    afterAlt: "Residential garage floor after epoxy polyaspartic coating",
  },
];

export const flakeOptions = [
  { file: "basalt.png", label: "Basalt", tone: "Charcoal & silver" },
  { file: "bean.png", label: "Bean", tone: "Warm earth" },
  { file: "cabinfever.png", label: "Cabin Fever", tone: "Rustic blend" },
  { file: "creekbed.png", label: "Creekbed", tone: "River stone" },
  { file: "domino.png", label: "Domino", tone: "Classic black & white" },
  { file: "gunflint.png", label: "Gunflint", tone: "Industrial graphite" },
  { file: "madras.png", label: "Madras", tone: "Spice & copper flake" },
  { file: "nightfall.png", label: "Nightfall", tone: "Deep midnight" },
  { file: "orbit.png", label: "Orbit", tone: "Cosmic silver" },
  { file: "quicksilver.png", label: "Quicksilver", tone: "Mercury gloss" },
  { file: "raven.png", label: "Raven", tone: "Jet with highlights" },
  { file: "shoreline.png", label: "Shoreline", tone: "Coastal neutral" },
  { file: "stonehenge.png", label: "Stonehenge", tone: "Monument grey" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Prep & prime",
    body: "Diamond grind, repairs, and a moisture-tolerant primer so the system bonds where it counts.",
  },
  {
    step: "02",
    title: "Your finish layer",
    body: "Metallic artistry, broadcast flake, or a clean solid build — tailored to the look you want.",
  },
  {
    step: "03",
    title: "Seal & cure",
    body: "Polyaspartic topcoat for UV, chemical, and abrasion resistance — then we hand the floor back on the schedule we agreed.",
  },
] as const;
