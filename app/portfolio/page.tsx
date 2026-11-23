import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Encompass London projects, filtered by service and area. Lofts, extensions, kitchens, bathrooms and joinery.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Selected work</p>
        <h1>Portfolio</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <ProjectsBrowser />
      </section>
    </>
  );
}
