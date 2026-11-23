"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className={expanded ? "faq-item is-open" : "faq-item"}>
            <h2>
              <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
                {item.question}
              </button>
            </h2>
            {expanded ? <p>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
