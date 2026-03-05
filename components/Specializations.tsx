import { SPECIALIZATIONS } from "./content";

export function Specializations() {
  return (
    <section id="specializations" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200/60 md:p-10">
          <div className="text-center">
            <div className="pill mx-auto w-fit">Our Specializations</div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              We build real software—hosting supports the work.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              Our team runs development and operations workloads. Hosting partners help us scale reliably.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SPECIALIZATIONS.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-200">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}