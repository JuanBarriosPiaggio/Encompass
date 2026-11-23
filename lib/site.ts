export const site = {
  name: "Encompass London",
  tradeName: "Encompass Lofts",
  legalName: "Encompass London LLP",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.encompasslofts.com",
  phoneDisplay: "020 8871 3323",
  phoneTel: "+442088713323",
  email: "jason@encompasslondon.com",
  street: "338 Garratt Lane",
  locality: "Earlsfield",
  region: "London",
  postcode: "SW18 4EL",
  houzz: "https://www.houzz.co.uk/professionals/design-and-build/encompass-london-pfvwgb-pf~2016001331",
  houzzRating: "4.9",
  houzzReviews: 40,
  houzzYears: [2019, 2020, 2021, 2022, 2024, 2026] as const,
  instagram: "https://www.instagram.com/encompasslondon/",
  facebook: "https://www.facebook.com/encompassldn",
  logo: "/brand/logo.jpg",
} as const;

export const metal =
  "linear-gradient(135deg, #B06030 0%, #E0A030 45%, #F0D090 70%, #E0A030 100%)";

export const primaryNav = [
  { href: "/projects", label: "Work" },
  { href: "/loft-conversions", label: "Lofts" },
  { href: "/extensions", label: "Extensions" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/staircases", label: "Joinery" },
  { href: "/about", label: "About" },
] as const;

export const mobileNav = [
  { href: "/projects", label: "Work" },
  { href: "/loft-conversions", label: "Loft conversions" },
  { href: "/extensions", label: "Extensions" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/interiors", label: "Interiors" },
  { href: "/staircases", label: "Staircases & joinery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/loft-conversions", label: "Loft conversions" },
  { href: "/extensions", label: "Extensions" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/interiors", label: "Interiors & refurbishments" },
  { href: "/staircases", label: "Staircases & joinery" },
] as const;

export function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
