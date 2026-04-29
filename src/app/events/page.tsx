import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Events</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Curated events for founder traction.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Bootcamps, clinics, and investor meetups designed to accelerate growth.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Join the Next Event
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Upcoming events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Startup Validation Sprint", date: "May 24, 2026" },
              { title: "Growth Playbook Clinic", date: "June 7, 2026" },
              { title: "Founder & Investor Meetup", date: "June 18, 2026" },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-xs text-brand-tosca font-semibold mb-2">{event.date}</div>
                <div className="text-lg font-semibold">{event.title}</div>
                <Link href="/#contact" className="text-sm text-brand-tosca mt-4 inline-block">
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Community tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Founder growth sprints",
              "Investor readiness clinics",
              "Product and distribution labs",
              "Ecosystem networking sessions",
            ].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-sm font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Past highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Impact Pitch Day", text: "35 founders pitched to 18 investors." },
              { title: "Market Validation Lab", text: "52 teams tested new growth channels." },
              { title: "Founder Retreat", text: "Deep work, strategy, and community." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">See you at the next event.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Get early access to upcoming sessions.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Join the List
          </Link>
        </div>
      </section>
    </main>
  );
}
