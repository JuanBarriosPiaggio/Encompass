import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sheen } from "@/components/Buttons";
import { areas, getArea } from "@/lib/areas";
import { areaName, heroForArea, projectsForArea } from "@/lib/projects";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Loft conversions & extensions in ${area.name}`,
    description: `Loft conversions and extensions in ${area.name} (${area.postcodes}). ${area.intro.slice(0, 120)} Planning: ${area.council}.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const hero = heroForArea(area.slug);
  const { items, nearby } = projectsForArea(area.slug);
  const neighbours = area.neighbours.map((item) => getArea(item)).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: area.name, path: `/areas/${area.slug}` },
        ])}
      />
      {hero ? (
        <PageHero
          photo={hero.image}
          label={`${area.name} · ${area.postcodes}`}
          title={`Loft conversions & extensions in ${area.name}`}
          caption={hero.nearby ? `Nearby project · ${hero.caption}` : hero.caption}
        />
      ) : (
        <header className="hero-plain">
          <p className="label">
            {area.name} · {area.postcodes}
          </p>
          <h1>Loft conversions & extensions in {area.name}</h1>
        </header>
      )}
      <section className="section">
        <div className="measure">
          <p>{area.intro}</p>
          <p style={{ marginTop: "1rem" }}>
            Local planning is decided by {area.council}. We confirm whether a project can use permitted development or needs an application, and we deal with the drawings, the structural engineer and building control.
          </p>
        </div>
        <div className="section-head" style={{ marginTop: "3.5rem" }}>
          <p className="label">{nearby ? "Nearby projects" : `Recent work in ${area.name}`}</p>
          <h2>{nearby ? "Work on neighbouring streets" : "Projects"}</h2>
        </div>
        {!nearby ? (
          <ol className="project-index">
            {items.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                  <span>{project.scope}</span>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="lede" style={{ marginTop: 0, marginBottom: "1.4rem" }}>
            We have not published a project photograph for {area.name} here. These are nearby Encompass London projects.
          </p>
        )}
        <div className="work-grid">
          {items.map((project) => {
            const image = project.images.find((item) => !item.low) ?? project.images[0];
            if (!image) return null;
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={image.low ? "work-card low" : "work-card"}>
                <span className="frame">
                  <Photo photo={image} sizes="(max-width: 700px) 100vw, 33vw" />
                </span>
                <p className="label">{nearby ? areaName(project.areaSlug) : area.name}</p>
                <h3>{project.title}</h3>
                <p>{project.scope}</p>
              </Link>
            );
          })}
        </div>
        <div className="hero-actions" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimate" className="btn btn-gold">
            <Sheen />
            <span className="btn-label">Get an instant estimate</span>
          </Link>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
        {neighbours.length ? (
          <div style={{ marginTop: "3rem" }}>
            <p className="label">Neighbouring areas</p>
            <div className="area-strip" style={{ marginTop: "0.8rem" }}>
              {neighbours.map((item) => (
                <Link key={item.slug} href={`/areas/${item.slug}`}>
                  {item.name}
                  <span>{item.postcodes}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
