import { HOW_IT_WORKS } from "./content";

export function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit">How it works</div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Simple setup. Low effort. Clear payouts.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Most partners start with hosting only, then opt into bonuses later.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map((s, idx) => (
            <div key={s.n} className={"card card-hover p-6 " + (idx === 1 ? "highlight" : "")}>
              <div className="flex items-start justify-between">
                <div className="text-2xl">{s.icon}</div>
                <div className="stepNum">{s.n}</div>
              </div>
              <div className="mt-3 text-sm font-semibold">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}