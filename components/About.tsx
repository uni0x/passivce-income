import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-pad bg-slate-50">
      <div className="container-pad">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-3xl bg-white p-2 shadow-soft ring-1 ring-slate-200/60">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100">
              <Image src="/images/team.svg" alt="Team" fill className="object-cover" />
            </div>
          </div>

          <div>
            <div className="pill w-fit">About the program</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Earn passive income by hosting a laptop—like renting space for technology
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 md:text-base">
              <p>
                This opportunity is designed for American homeowners and remote workers who have stable internet
                and a safe place to host a laptop. Your responsibility is simple: keep the laptop powered and online.
              </p>
              <p>
                Our team uses hosted laptops to support real software development and operations work. We prioritize
                trust, transparency, and a long-term partnership mindset—clear agreements, clear payments, and
                clear communication.
              </p>
              <p>
                Most partners start around <span className="font-semibold text-slate-900">$500/month</span> with hosting only.
                With optional roles, some partners target <span className="font-semibold text-slate-900">$8,000/month</span> depending on project income and involvement.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href="#apply">Start Now</a>
              <a className="btn-ghost" href="#how">How it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}