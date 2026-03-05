export function ContactCard() {
  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-slate-800/60 p-6 text-center text-slate-100 ring-1 ring-white/10">
      <div className="text-xs text-slate-200/80">Email</div>
      <div className="mt-1 font-semibold">contact@example.com</div>

      <div className="mt-5 text-xs text-slate-200/80">Discord</div>
      <div className="mt-1 font-semibold">your_discord#0000</div>

      <div className="mt-5 text-xs text-slate-200/80">Telegram</div>
      <div className="mt-1 font-semibold">@yourtelegram</div>

      <div className="mt-6 text-xs text-slate-300">
        Subject Line: “Laptop Hosting Partner Inquiry”
      </div>
    </div>
  );
}
