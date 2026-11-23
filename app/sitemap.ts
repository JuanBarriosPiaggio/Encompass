import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const updated = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/loft-conversions", "/extensions", "/kitchens", "/bathrooms", "/interiors", "/staircases", "/projects", "/about", "/contact", "/estimate"];
  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: updated,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: updated,
    })),
    ...areas.map((area) => ({
      url: `${site.url}/areas/${area.slug}`,
      lastModified: updated,
    })),
  ];
}
