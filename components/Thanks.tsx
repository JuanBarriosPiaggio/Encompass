"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Thanks() {
  const [note, setNote] = useState("");
  useEffect(() => {
    const raw = sessionStorage.getItem("encompass-enquiry");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { name?: string; subject?: string };
      setNote([parsed.name, parsed.subject].filter(Boolean).join(" · "));
    } catch {
      setNote("");
    }
  }, []);
  return (
    <>
      <header className="hero-plain">
        <p className="label">Enquiry</p>
        <h1>Thank you</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="measure">
          <p>Your note stays on this page. Nothing is sent.</p>
          {note ? <p style={{ marginTop: "1rem" }}>{note}</p> : null}
          <p className="est-note" style={{ marginTop: "1rem" }}>
            Call {site.phoneDisplay} or email {site.email} and a director will pick it up.
          </p>
          <p style={{ marginTop: "1.4rem" }}>
            <Link className="text-link" href="/contact/">
              Back to contact
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
