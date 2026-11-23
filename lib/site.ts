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
  logo: "/brand/encompass-mark.png",
} as const;

export const metal =
  "linear-gradient(135deg, #B06030 0%, #E0A030 45%, #F0D090 70%, #E0A030 100%)";

export const primaryNav = [
  { href: "/portfolio/", label: "Projects" },
  { href: "/areas/", label: "Areas" },
  { href: "/testimonials/", label: "Reviews" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const mobileNav = [
  { href: "/loft-conversions/", label: "Loft conversions" },
  { href: "/house-extensions-earlsfield/", label: "House extensions" },
  { href: "/home-refurbishments-earlsfield-london/", label: "Home refurbishments" },
  { href: "/interior-design/", label: "Interior design" },
  { href: "/kitchens/", label: "Kitchens" },
  { href: "/bathrooms/", label: "Bathrooms" },
  { href: "/staircases-joinery/", label: "Staircases & joinery" },
  { href: "/retail/", label: "Retail & commercial" },
  { href: "/developments/", label: "Developments" },
  { href: "/services/", label: "All services" },
  { href: "/portfolio/", label: "Projects" },
  { href: "/areas/", label: "Areas" },
  { href: "/testimonials/", label: "Reviews" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/loft-conversions/", label: "Loft conversions" },
  { href: "/house-extensions-earlsfield/", label: "House extensions" },
  { href: "/home-refurbishments-earlsfield-london/", label: "Home refurbishments" },
  { href: "/interior-design/", label: "Interior design" },
  { href: "/kitchens/", label: "Kitchens" },
  { href: "/bathrooms/", label: "Bathrooms" },
  { href: "/staircases-joinery/", label: "Staircases & joinery" },
  { href: "/retail/", label: "Retail & commercial" },
  { href: "/developments/", label: "Developments" },
  { href: "/services/", label: "All services" },
] as const;

export function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
