import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Tentang IMPACT Inc.</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Inkubator berbasis founder untuk dampak nyata.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            Kami membantu startup validasi lebih cepat, scale lebih cerdas, dan fundraising dengan arah yang jelas. Ekosistem kami menggabungkan akses modal, mentoring, dan komunitas untuk membangun perusahaan yang tahan lama.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Bicara dengan Tim
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Cerita kami</h2>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base leading-relaxed">
              IMPACT Inc. hadir untuk menutup celah di ekosistem: founder membutuhkan dukungan eksekusi yang terstruktur, bukan sekadar inspirasi. Kami membangun playbook yang menggabungkan mentoring, akses modal, dan disiplin operasional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Validasi & MVP", desc: "Fokus pada traksi nyata" },
              { title: "Mentorship", desc: "Pendampingan 1-on-1" },
              { title: "Akses Permodalan", desc: "Jejaring investor strategis" },
              { title: "Komunitas", desc: "Ekosistem kolaboratif" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 text-center flex flex-col justify-center"
              >
                <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Visi</h3>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base">
              Menjadi inkubator dampak paling terpercaya di Asia Tenggara dengan melahirkan founder yang bertumbuh secara bertanggung jawab.
            </p>
          </div>
          <div className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Misi</h3>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base">
              Menyediakan jalur berkecepatan tinggi dari validasi hingga pendanaan dengan jaringan mentor dan investor global.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Nilai kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Founder-first", text: "Kami mengutamakan fokus, kejelasan, dan eksekusi founder." },
              { title: "Impact + Profit", text: "Kami menumbuhkan nilai dan dampak terukur secara bersamaan." },
              { title: "Menang bersama", text: "Kami tumbuh lebih cepat saat founder bergerak bersama." },
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
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Sorotan kepemimpinan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Yogi Saputra", role: "Chief Executive Officer", desc: "Memimpin strategi ekosistem dan mengorkestrasi pertumbuhan jangka panjang." },
              { name: "Awang Dody Kardeli", role: "Chief Technology Officer", desc: "Arsitek platform teknologi dan solusi inovatif operasional inkubasi." },
              { name: "Hilman Maulana", role: "Core Team", desc: "Mendukung eksekusi harian dan memastikan kejelasan produk bagi para founder." },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-brand-tosca mt-1">{item.role}</div>
                <p className="text-neutral-600 dark:text-brand-gray text-sm mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Bangun bersama IMPACT.</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">
            Siap melaju lebih cepat dengan inkubator berbasis founder?
          </p>
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
