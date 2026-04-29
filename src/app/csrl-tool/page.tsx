import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Tools CSRL</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Ukur, kelola, dan scale dampak CSR dengan jelas.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Tools terstruktur untuk program CSR dan pembelajaran yang mengubah aktivitas menjadi hasil terukur.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Minta Demo
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Fungsi utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pemetaan Program", text: "Ubah inisiatif CSR menjadi outcome dan KPI yang jelas." },
              { title: "Pelacakan Dampak", text: "Pantau progres lewat dashboard dan bukti pelaksanaan." },
              { title: "Pelaporan", text: "Buat laporan dampak siap eksekutif dalam hitungan menit." },
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
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Metrik dampak</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Program Dipantau", value: "150+" },
              { label: "Komunitas Terjangkau", value: "1.2M" },
              { label: "Laporan Dibuat", value: "800+" },
              { label: "Visibilitas ROI", value: "100%" },
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
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Use case</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Akses pendidikan dan beasiswa",
              "Pemberdayaan UMKM",
              "Inisiatif keberlanjutan dan iklim",
              "Program kesehatan komunitas",
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
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Implementasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Audit & Peta", text: "Tetapkan outcome, metrik, dan kebutuhan pelaporan." },
              { title: "Konfigurasi", text: "Sesuaikan dashboard dan alur kerja." },
              { title: "Peluncuran", text: "Latih tim dan rilis laporan dampak." },
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Siap melihat dampak Anda?</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Jadwalkan demo dan kami sesuaikan tools dengan tujuan CSR Anda.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Minta Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
