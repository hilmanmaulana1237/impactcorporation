import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Program Inkubasi</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Akselerasi 4-6 bulan untuk traksi nyata.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Sprint terstruktur, mentoring operator, dan akses investor untuk membantu founder bergerak dari kejelasan menuju scale.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { label: "Duration", value: "16-24 Weeks" },
            { label: "Cohort Size", value: "12-18 Teams" },
            { label: "Focus", value: "PMF + Funding" },
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Modul inti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Problem discovery dan market fit",
              "Go-to-market dan distribusi",
              "Strategi pendanaan dan data room",
              "Operasional, hiring, dan tata kelola",
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
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Milestone</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Validasi", text: "Kejelasan masalah dan bukti pelanggan awal." },
              { title: "Bangun", text: "MVP rilis dengan traksi terukur." },
              { title: "Scale", text: "Channel growth yang berulang." },
              { title: "Pendanaan", text: "Kesiapan investor dan demo day." },
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
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Cocok untuk</h2>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base">
              Founder tahap awal dengan ide tervalidasi, eksekusi kuat, dan ambisi membangun bisnis berdampak.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Tim dengan traksi awal",
              "Tahap pre-seed hingga seed",
              "Founder mission-led",
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
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Gabung cohort berikutnya.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Pendaftaran ditinjau secara rolling.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
