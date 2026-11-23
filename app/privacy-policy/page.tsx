import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for Encompass London. Placeholder text until the client supplies the policy.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Encompass London LLP</p>
        <h1>Privacy policy</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="measure">
          <p>[Placeholder. The privacy policy text is still to be supplied by Encompass London LLP.]</p>
          <p style={{ marginTop: "1rem" }}>
            This website does not send form entries to a server. An enquiry stays in the browser and ends on the thank-you page.
          </p>
        </div>
      </section>
    </>
  );
}
