import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Portfolio Startups</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Ventures built through the IMPACT pipeline.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            From health to climate, our founders build solutions with traction and measurable outcomes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Partner with Our Startups
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Portfolio grid</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "NovaTech",
              "AgriPulse",
              "EduSpark",
              "HealthLink",
              "CivicLab",
              "RetailFlow",
            ].map((startup) => (
              <div
                key={startup}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-200"
              >
                {startup}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Focus sectors</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Health",
              "AgriTech",
              "Education",
              "Climate",
              "FinTech",
              "B2B SaaS",
            ].map((sector) => (
              <span
                key={sector}
                className="px-4 py-2 rounded-full bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 text-xs md:text-sm"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "IMPACT helped us close our seed round in 10 weeks with clear metrics.",
              name: "Darren Satria",
              role: "CEO, NovaTech",
            },
            {
              quote: "We rebuilt our go-to-market in one cohort and doubled revenue.",
              name: "Maya Lestari",
              role: "Founder, HealthLink",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8"
            >
              <p className="text-neutral-700 dark:text-brand-gray text-base leading-relaxed mb-6">"{item.quote}"</p>
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Alumni Community", text: "Continued access to mentors and partners." },
            { title: "Investor Relations", text: "Support through Series A and beyond." },
            { title: "Market Expansion", text: "Regional expansion playbooks and networks." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Back the next cohort.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Partner with our founders or join the mentor network.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}
