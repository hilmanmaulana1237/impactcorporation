import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Event Organizer</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Founder experiences that turn exposure into opportunity.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            From demo days to corporate innovation summits, we build events that create measurable traction.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Plan an Event
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Event formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Demo Days",
              "Founder Meetups",
              "Investor Roundtables",
              "Corporate Innovation Summits",
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Signature experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Impact Pitch Day", text: "High-signal investor showcase for the best teams." },
              { title: "Founder Clinics", text: "Hands-on growth and fundraising workshops." },
              { title: "Ecosystem Connect", text: "Strategic matchmaking with partners and mentors." },
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
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Production process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Define objectives",
              "Curate speakers",
              "Execute production",
              "Post-event momentum",
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Founder-first", text: "Every event is optimized for startup outcomes." },
            { title: "High-signal network", text: "We bring decision-makers into the room." },
            { title: "Measured impact", text: "We track outcomes beyond attendance." },
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Let us build your next event.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Tell us your goals and we will design the experience.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
