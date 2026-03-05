const checks = [
  "Clear, documented agreements outlining responsibilities and compensation",
  "Regular payment schedule with verifiable income tracking",
  "Established teams with proven track record of successful projects",
  "No upfront fees or costs required from partners",
  "Open communication channels with direct access to team leadership",
];

export function CheckList() {
  return (
    <ul className="mt-6 space-y-3 text-left text-sm text-slate-700">
      {checks.map((c) => (
        <li key={c} className="flex gap-3">
          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="leading-6">{c}</span>
        </li>
      ))}
    </ul>
  );
}
