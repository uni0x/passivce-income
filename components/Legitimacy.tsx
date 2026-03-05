import { LEGIT_CHECKS } from "./content";

export function Legitimacy() {
  return (
    <section id="legit" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit">Trust & Transparency</div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            What Makes This Legitimate?
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Remote opportunities can raise concerns. Here’s what sets this apart as a trustworthy partnership.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl card p-8 md:p-10">
          <ul className="space-y-3 text-sm text-slate-700">
            {LEGIT_CHECKS.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="leading-6">{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm italic leading-6 text-slate-600">
            Our business model is built on long-term partnerships, not one-time transactions. Your success directly
            contributes to our success, creating aligned incentives for a mutually beneficial relationship.
          </p>
        </div>
      </div>
    </section>
  );
}