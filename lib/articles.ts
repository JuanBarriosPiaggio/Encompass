import { photos, type Photo } from "@/lib/media";

export type Article = {
  slug: string;
  title: string;
  description: string;
  kind: "Article" | "Local guide";
  hero: Photo;
  author: string;
};

const placeholder = "[migrate original article text]";

export const articles: Article[] = [
  {
    slug: "practical-loft-conversions",
    title: "Practical loft conversions",
    description: "A practical look at loft conversions from the Encompass Lofts archive.",
    kind: "Article",
    hero: photos.loftBedroom,
    author: "Encompass London",
  },
  {
    slug: "can-loft-conversions-add-value-to-my-home",
    title: "Can loft conversions add value to my home?",
    description: "Notes on loft conversions and the value of the house, from the Encompass archive.",
    kind: "Article",
    hero: photos.loftDormerExt,
    author: "Encompass London",
  },
  {
    slug: "choosing-the-best-type-of-loft-conversion",
    title: "Choosing the best type of loft conversion",
    description: "Velux, dormer, L-shaped, hip-to-gable and mansard, and how to choose.",
    kind: "Article",
    hero: photos.loftVelux,
    author: "Encompass London",
  },
  {
    slug: "planning-a-loft-conversion",
    title: "Planning a loft conversion",
    description: "Planning and permitted development for a loft conversion.",
    kind: "Article",
    hero: photos.loftEaves,
    author: "Encompass London",
  },
  {
    slug: "loft-conversion-storage-solutions",
    title: "Loft conversion storage solutions",
    description: "Eaves storage and fitted joinery in a loft conversion.",
    kind: "Article",
    hero: photos.loftEaves,
    author: "Encompass London",
  },
  {
    slug: "mistakes-to-avoid-when-doing-a-loft-conversion",
    title: "Mistakes to avoid when doing a loft conversion",
    description: "What to settle before a loft conversion starts.",
    kind: "Article",
    hero: photos.loftGlazing,
    author: "Encompass London",
  },
  {
    slug: "safety-measures-to-consider-when-converting-a-loft",
    title: "Safety measures to consider when converting a loft",
    description: "Stairs, fire escape and the build, from the Encompass archive.",
    kind: "Article",
    hero: photos.stairSky,
    author: "Encompass London",
  },
  {
    slug: "wimbledon-why-you-should-choose-a-loft-conversion",
    title: "Wimbledon: why you should choose a loft conversion",
    description: "Loft conversions in Wimbledon, from the Encompass archive.",
    kind: "Article",
    hero: photos.brisbane1,
    author: "Encompass London",
  },
  {
    slug: "balham",
    title: "Balham",
    description: "A local guide to Balham.",
    kind: "Local guide",
    hero: photos.intLiving,
    author: "Encompass London",
  },
  {
    slug: "top-balham-pubs",
    title: "Top Balham pubs",
    description: "A local guide to pubs in Balham.",
    kind: "Local guide",
    hero: photos.extDining,
    author: "Encompass London",
  },
  {
    slug: "the-exhibit-balhams-prime-entertainment-venue",
    title: "The Exhibit, Balham's prime entertainment venue",
    description: "A local guide to The Exhibit in Balham.",
    kind: "Local guide",
    hero: photos.extPendant,
    author: "Encompass London",
  },
  {
    slug: "come-to-post-market-balham",
    title: "Come to Post Market, Balham",
    description: "A local guide to Post Market in Balham.",
    kind: "Local guide",
    hero: photos.kitBar,
    author: "Encompass London",
  },
];

export const articleBody = placeholder;

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
