import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/FaqList";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loft conversion FAQ",
  description: "Answers on loft conversion time, cost, planning, party wall, disturbance and quotes from Encompass London.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <JsonLd data={data} />
      <header className="hero-plain">
        <p className="label">{site.name}</p>
        <h1>Loft conversion questions</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <FaqList />
        <p style={{ marginTop: "2rem" }}>
          <Link className="text-link" href="/estimate/">
            Get an instant estimate
          </Link>
        </p>
      </section>
    </>
  );
}
