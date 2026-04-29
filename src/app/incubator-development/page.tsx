import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Pengembangan Inkubator</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Bangun inkubator yang menghasilkan outcome founder nyata.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Kami membantu institusi merancang program, sistem mentoring, dan kerangka pengukuran yang scalable.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Mulai Konsultasi
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Apa yang kami bangun</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Arsitektur Program", text: "Desain cohort, kurikulum, dan milestone founder." },
              { title: "Sistem Mentor", text: "Rekrutmen, training, dan playbook engagement." },
              { title: "Pengukuran Dampak", text: "KPI, dashboard, dan ritme pelaporan." },
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Fase blueprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Diagnosa", text: "Audit gap dan target outcome." },
              { title: "Desain", text: "Bangun program dan alur operasional." },
              { title: "Deploy", text: "Luncurkan cohort dan sistem mentor." },
              { title: "Optimasi", text: "Ukur, iterasi, dan scale." },
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Inkubator Dibangun", value: "12" },
              { label: "Founder Didampingi", value: "500+" },
              { label: "Rata-rata NPS Cohort", value: "72" },
            ].map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl font-semibold">{item.value}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">Strategy Sprint</h3>
            <p className="text-neutral-600 dark:text-brand-gray text-sm">
              Sprint 4-6 minggu untuk menetapkan tujuan, struktur, dan kerangka pengukuran.
            </p>
          </div>
          <div className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">Full Build</h3>
            <p className="text-neutral-600 dark:text-brand-gray text-sm">
              Desain inkubator end-to-end, peluncuran, dan dukungan operasional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Bangun inkubator dengan percaya diri.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Kami akan memetakan strategi dan membangun sistemnya.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Jadwalkan Panggilan
          </Link>
        </div>
      </section>
    </main>
  );
}
