export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <div className="pill mx-auto w-fit">{eyebrow}</div> : null}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
