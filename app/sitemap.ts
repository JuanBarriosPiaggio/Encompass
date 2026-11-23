import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const updated = new Date("2026-11-23");

const staticPaths = [
  "/",
  "/loft-conversions/",
  "/house-extensions-earlsfield/",
  "/home-refurbishments-earlsfield-london/",
  "/interior-design/",
  "/kitchens/",
  "/bathrooms/",
  "/staircases-joinery/",
  "/retail/",
  "/developments/",
  "/services/",
  "/loft-conversions-portfolio/",
  "/portfolio/",
  "/gallery/",
  "/lofts-gallery/",
  "/extensions-gallery/",
  "/bathrooms-gallery/",
  "/living-rooms-gallery/",
  "/about/",
  "/contact/",
  "/enquiry-thank-you/",
  "/testimonials/",
  "/faq/",
  "/blog/",
  "/areas/",
  "/estimate/",
  "/privacy-policy/",
  "/terms-conditions/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${site.url}${path}`, lastModified: updated })),
    ...projects.map((project) => ({ url: `${site.url}/project/${project.slug}/`, lastModified: updated })),
    ...areas.map((area) => ({ url: `${site.url}/${area.path}/`, lastModified: updated })),
    ...articles.map((article) => ({ url: `${site.url}/${article.slug}/`, lastModified: updated })),
  ];
}
