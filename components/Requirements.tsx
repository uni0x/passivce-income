import { REQUIREMENTS } from "./content";

export function Requirements() {
  return (
    <section id="requirements" className="section-pad bg-slate-50">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit">Requirements</div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            What you need to qualify
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Straightforward requirements for hosting partners, plus a few optional qualifiers.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {REQUIREMENTS.map((c) => (
            <div key={c.title} className={"card card-hover p-6 " + (c.highlight ? "highlight" : "")}>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-200">
                  {c.icon}
                </div>
                <div className="text-sm font-semibold">{c.title}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="leading-6">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}