import { CONTACT } from "./content";

export function Apply() {
  return (
    <section id="apply" className="section-pad bg-slate-900">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto w-fit bg-white/10 text-white ring-1 ring-white/20">
            Ready to Start?
          </div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to Start Your Passive Income Journey?
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
            Have questions before applying? We’re happy to provide additional information and discuss how this opportunity
            might fit your situation.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-white/10 md:p-8">
            <div className="text-sm font-semibold text-slate-900">Contact Information</div>
            <div className="mt-4 rounded-2xl border border-brand-300 bg-brand-50 p-5">
              <div className="text-xs text-slate-600">Email</div>
              <a className="mt-1 block font-semibold text-brand-700" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>

              <div className="mt-4 text-xs text-slate-600">Discord</div>
              <div className="mt-1 font-semibold">{CONTACT.discord}</div>

              <div className="mt-4 text-xs text-slate-600">Telegram</div>
              <div className="mt-1 font-semibold">{CONTACT.telegram}</div>

              <div className="mt-4 text-xs text-slate-600">Subject Line</div>
              <div className="mt-1 font-semibold">“{CONTACT.subject}”</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-white/10 md:p-8">
            <div className="text-sm font-semibold text-slate-900">Application Process</div>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "Send an email with the subject line above",
                "Answer a few quick questions about your setup",
                "Complete verification and shipping details",
                "Schedule a short onboarding call",
                "Start hosting and begin earning"
              ].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-xs font-extrabold text-brand-700 ring-1 ring-brand-200">
                    {i + 1}
                  </div>
                  <span className="leading-6">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "$500", v: "Base/mo" },
                { k: "$8000", v: "Potential" },
                { k: "24/7", v: "Uptime" }
              ].map((x) => (
                <div key={x.k} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200/70">
                  <div className="text-lg font-extrabold text-slate-900">{x.k}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          © 2024 Laptop Hosting Opportunity. All rights reserved.
        </div>
      </div>
    </section>
  );
}