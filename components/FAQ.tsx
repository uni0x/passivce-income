const faqs = [
  {
    q: "Do I need technical skills?",
    a: "No. If you can keep a laptop powered on with stable internet, you're good."
  },
  {
    q: "Is there any upfront cost?",
    a: "No. Partners are not required to pay fees to participate."
  },
  {
    q: "How do payments work?",
    a: "Payments are issued on a regular schedule with clear tracking and reporting."
  },
  {
    q: "What are the requirements?",
    a: "A stable internet connection, a safe place to host the laptop, and basic responsiveness."
  }
];

export function FAQ() {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
      {faqs.map((f) => (
        <div key={f.q} className="card p-6">
          <div className="text-sm font-semibold text-slate-900">{f.q}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
