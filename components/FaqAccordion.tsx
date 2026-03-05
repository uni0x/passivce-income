"use client";

import { useState } from "react";
import { FAQS } from "./content";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit">FAQ</div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Click a question to expand the answer.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={f.q}
                className={"faqItem w-full text-left " + (isOpen ? "highlight" : "")}
                onClick={() => setOpen(isOpen ? null : idx)}
                type="button"
              >
                <div className="faqQ">
                  <span>{f.q}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen ? <div className="faqA">{f.a}</div> : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}