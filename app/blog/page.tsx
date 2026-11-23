import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and local guides from Encompass London.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Notes</p>
        <h1>Blog</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="work-grid">
          {articles.map((article) => (
            <Link key={article.slug} href={`/${article.slug}/`} className="work-card">
              <span className="frame">
                <Photo photo={article.hero} sizes="(max-width: 700px) 100vw, 33vw" />
              </span>
              <p className="label">{article.kind}</p>
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
