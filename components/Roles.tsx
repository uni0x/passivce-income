import { ROLE_CARDS } from "./content";

export function Roles() {
  return (
    <section id="roles" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit">Compensation</div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Bonuses for optional support roles
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Start with laptop hosting. Increase income by opting into roles when you’re ready.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {ROLE_CARDS.map((r) => (
            <div key={r.title} className="card card-hover p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-2xl">{r.icon}</div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  {r.badge}
                </div>
              </div>

              <div className="mt-4 text-sm font-semibold">{r.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span className="leading-6">{b}</span>
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