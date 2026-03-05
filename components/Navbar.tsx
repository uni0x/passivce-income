import { Logo } from "./Logo";
import { NAV } from "./content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="btn-primary" href="#apply">Apply Now</a>
      </div>
    </header>
  );
}