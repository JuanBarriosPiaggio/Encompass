import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Loft conversions portfolio",
  description: "Loft conversion projects by Encompass Lofts, with photographs from published houses.",
  alternates: { canonical: "/loft-conversions-portfolio/" },
};

export default function LoftPortfolioPage() {
  const items = projects.filter((project) => !project.study && project.services.includes("lofts"));
  return (
    <>
      <header className="hero-plain">
        <p className="label">Encompass Lofts</p>
        <h1>Loft conversions portfolio</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="work-grid">
          {items.map((project) => {
            const image = project.images.find((item) => !item.low) ?? project.images[0];
            if (!image) return null;
            return (
              <Link key={project.slug} href={`/project/${project.slug}/`} className="work-card">
                <span className="frame">
                  <Photo photo={image} sizes="(max-width: 700px) 100vw, 33vw" />
                </span>
                {project.pending ? <p className="label">Photos to come</p> : null}
                <h3>{project.title}</h3>
                <p>{project.scope}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
