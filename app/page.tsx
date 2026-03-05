import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Specializations } from "../components/Specializations";
import { HowItWorks } from "../components/HowItWorks";
import { Roles } from "../components/Roles";
import { EarningPotential } from "../components/EarningPotential";
import { Requirements } from "../components/Requirements";
import { Legitimacy } from "../components/Legitimacy";
import { Testimonial } from "../components/Testimonial";
import { FaqAccordion } from "../components/FaqAccordion";
import { Apply } from "../components/Apply";

import Head from "next/head";


export default async function Page() {
  return (
    <div>
        <Navbar />

        {/* HERO */}
        <section className="section-pad">
          <div className="container-pad grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="pill w-fit">Passive Income Opportunity</div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Earn $500+ Monthly: Laptop Hosting Opportunity
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                Turn your stable internet connection into a reliable income stream.
                Host a laptop for our development team and earn passive income from the comfort of your home.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn-primary" href="#apply">Start Work Now</a>
                <a className="btn-ghost" href="#about">Learn More</a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-2 shadow-soft ring-1 ring-slate-200/60">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image src="/images/hero.svg" alt="Laptop hosting" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Specializations />
        <HowItWorks />
        <Roles />
        <EarningPotential />
        <Requirements />
        <Legitimacy />
        <Testimonial />
        <FaqAccordion />
        <Apply />
      </div>
  );
}