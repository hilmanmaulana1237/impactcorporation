import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Contact Us</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Tell us what you are building.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Whether you are applying, partnering, or exploring, our team will respond quickly.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Ways to connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Apply to Incubator", text: "Tell us about your startup and traction." },
              { title: "Partnerships", text: "Collaborate on programs and ecosystem initiatives." },
              { title: "Media & Press", text: "Press inquiries and founder stories." },
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Visit us</h2>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base">
              IMPACT Inc. HQ - Jakarta, Indonesia
            </p>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base mt-2">Mon-Fri, 09:00-18:00 WIB</p>
          </div>
          <div className="space-y-4">
            {[
              "hello@impactinc.id",
              "+62 812 0000 0000",
              "LinkedIn: IMPACT Inc.",
            ].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5"
              >
                <div className="text-sm font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "How long is the program?", text: "The incubation program runs 4-6 months per cohort." },
              { title: "Do you invest directly?", text: "We provide investor access and support fundraising strategy." },
              { title: "Can institutions partner with you?", text: "Yes, we co-build programs and incubators." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-sm font-semibold mb-2">{item.title}</div>
                <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Let us build together.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Send your brief and we will respond within two business days.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Open the Form
          </Link>
        </div>
      </section>
    </main>
  );
}
