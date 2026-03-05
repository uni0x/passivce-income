export function BonusCard({
  headline,
  title,
  desc,
}: {
  headline: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-2xl font-extrabold text-brand-600">{headline}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}
