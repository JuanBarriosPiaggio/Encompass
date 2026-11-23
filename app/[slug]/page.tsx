import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaView } from "@/components/AreaView";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { areaHeading, areas, getAreaByPath } from "@/lib/areas";
import { articleBody, articles, getArticle } from "@/lib/articles";
import { breadcrumbJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...areas.map((area) => ({ slug: area.path })), ...articles.map((article) => ({ slug: article.slug }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaByPath(slug);
  if (area) {
    return {
      title: areaHeading(area.path),
      description: `${areaHeading(area.path)}. Loft conversions by Encompass London. Planning: ${area.council}.`,
      alternates: { canonical: `/${area.path}/` },
    };
  }
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/${article.slug}/` },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaByPath(slug);
  if (area) return <AreaView area={area} />;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: article.kind === "Local guide" ? "Local guides" : "Blog", path: "/blog/" },
          { name: article.title, path: `/${article.slug}/` },
        ])}
      />
      <PageHero photo={article.hero} label={article.kind} title={article.title} caption={article.author} />
      <section className="section">
        <div className="measure">
          <p className="label">{article.author}</p>
          <p style={{ marginTop: "1rem" }}>{articleBody}</p>
        </div>
      </section>
    </>
  );
}
