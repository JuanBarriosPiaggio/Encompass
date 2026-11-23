import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Lofts, extensions, kitchens, bathrooms, interiors and staircases by Encompass London. Filter the work by area or by service.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <header className="hero-plain">
        <p className="label">Portfolio</p>
        <h1>Our work</h1>
        <p className="lede">Street projects from the Houzz portfolio, plus the lofts, extensions, kitchens, bathrooms, interiors and stairs.</p>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <ProjectsBrowser />
      </section>
    </>
  );
}
