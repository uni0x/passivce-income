import Image from "next/image";
import { INCOME_ROWS } from "./content";

export function EarningPotential() {
  return (
    <section id="earning" className="section-pad bg-brand-500">
      <div className="container-pad">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="pill mx-auto w-fit bg-white/10 text-white ring-1 ring-white/20">
            Maximum Earning Potential
          </div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            See how optional roles can increase your monthly income
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/90 md:text-base">
            Example scenario: If our team generates <span className="font-semibold">$10,000</span> in project income,
            your payout can scale with your level of involvement.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-2 shadow-soft ring-1 ring-white/30">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image src="/images/income.svg" alt="Income example" fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-white/30 md:p-10">
            <div className="text-sm font-semibold text-slate-900">Income Calculation Example</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Your baseline is hosting. Then each optional role adds a larger share of project income.
            </div>

            <div className="mt-6 divide-y divide-slate-200">
              {INCOME_ROWS.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 py-3">
                  <div className="text-sm font-medium text-slate-900">{r.label}</div>
                  <div className="text-sm font-semibold text-brand-700">{r.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-slate-500">
              * Final earnings depend on project income and the agreement terms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}