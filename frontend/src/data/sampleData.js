// Temporary sample data. In Phase 10 this will come from the database.

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const heroImage = img("photo-1551649001-7a2482d98d05");
export const ctaImage = img("photo-1464226184884-fa280b87c399");

export const regions = [
  "Adamawa",
  "Centre",
  "East",
  "Far North",
  "Littoral",
  "North",
  "North-West",
  "South",
  "South-West",
  "West",
];

export const popularSearches = ["Maize", "Cassava", "Cocoa", "Eggs", "Pigs"];

// type: "now" (green tag), "soon" (gold tag), "all" (brown tag)
export const inSeason = [
  { product: "Cocoa", region: "South-West", status: "Peak season", type: "now" },
  { product: "Maize", region: "Centre", status: "Harvesting soon", type: "soon" },
  { product: "Irish potatoes", region: "North-West", status: "Harvesting now", type: "now" },
  { product: "Tomatoes", region: "West", status: "Harvesting in 2 weeks", type: "soon" },
  { product: "Plantain", region: "Littoral", status: "Available all year", type: "all" },
  { product: "Groundnuts", region: "North", status: "Harvesting now", type: "now" },
  { product: "Pineapples", region: "Centre", status: "Peak season", type: "now" },
  { product: "Broiler chickens", region: "Centre", status: "Ready this week", type: "all" },
];

export const categories = [
  {
    slug: "food-crops",
    name: "Food crops",
    examples: "Cassava, plantain, maize, tomatoes",
    image: img("photo-1542838132-92c53300491e"),
  },
  {
    slug: "cash-crops",
    name: "Cash crops",
    examples: "Cocoa, coffee, palm oil",
    image: img("photo-1447933601403-0c6688de566e"),
  },
  {
    slug: "poultry",
    name: "Poultry",
    examples: "Broilers, layers, eggs, turkeys",
    image: img("photo-1548550023-2bdb3c5beed7"),
  },
  {
    slug: "livestock",
    name: "Livestock",
    examples: "Pigs, goats, cattle",
    image: img("photo-1516467508483-a7212febe31a"),
  },
];

export const featuredFarmers = [
  {
    id: 1,
    name: "Ngwa Emmanuel",
    town: "Santa",
    region: "North-West",
    main: ["Irish potatoes"],
    side: ["Carrots", "Cabbage"],
    rating: 4.8,
    status: "Harvesting now",
    statusType: "now",
    cover: img("photo-1518977676601-b53f82aba655"),
  },
  {
    id: 2,
    name: "Mbah Christabel",
    town: "Bafoussam",
    region: "West",
    main: ["Tomatoes"],
    side: ["Pepper", "Maize"],
    rating: 4.7,
    status: "Harvesting in 2 weeks",
    statusType: "soon",
    cover: img("photo-1592924357228-91a4daadcfea"),
  },
  {
    id: 3,
    name: "Eyong Mercy",
    town: "Buea",
    region: "South-West",
    main: ["Broiler chickens", "Eggs"],
    side: ["Turkeys"],
    rating: 4.9,
    status: "Ready this week",
    statusType: "all",
    cover: img("photo-1506976785307-8732e854ad03"),
  },
  {
    id: 4,
    name: "Tchoupo Alain",
    town: "Mbalmayo",
    region: "Centre",
    main: ["Cassava"],
    side: ["Plantain", "Cocoyams"],
    rating: 4.6,
    status: "Available all year",
    statusType: "all",
    cover: img("photo-1540420773420-3366772f4999"),
  },
];

export const supplyExample = {
  product: "cassava",
  region: "Centre",
  needed: 50,
  unit: "bags",
  farmers: [
    { name: "Tchoupo Alain", amount: 20 },
    { name: "Ateba Marie", amount: 20 },
    { name: "Essomba Farmers GIC", amount: 15 },
  ],
};