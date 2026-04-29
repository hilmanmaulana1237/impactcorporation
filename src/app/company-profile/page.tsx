import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">Profil Perusahaan</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Dibangun untuk scale founder, didukung operator nyata.
          </h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            IMPACT Inc. menggabungkan akses modal, playbook operasional, dan jaringan tepercaya untuk mempercepat startup di Indonesia dan Asia Tenggara.
          </p>
          <Link
            href="/#ecosystem"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Jelajahi Ekosistem
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Sekilas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Startup Terinkubasi", value: "120+" },
              { label: "Mentor", value: "300+" },
              { label: "Mitra Investor", value: "60+" },
              { label: "Program Dijalankan", value: "40+" },
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Pilar utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Akses Modal", text: "Introduksi investor dan strategi fundraising." },
              { title: "Talenta Founder", text: "Mentoring dari operator yang pernah scale." },
              { title: "Sistem Eksekusi", text: "Playbook, sprint, dan milestone jelas." },
              { title: "Komunitas", text: "Jaringan founder berkualitas yang bergerak bersama." },
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Tata kelola & standar</h2>
            <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base leading-relaxed">
              Kami menjalankan tata kelola transparan, hasil terukur, dan akuntabilitas berbasis founder. Setiap cohort dievaluasi melalui metrik dampak dan traksi.
            </p>
          </div>
          <div className="space-y-4">
            {["Milestone jelas", "Pengukuran dampak", "Akuntabilitas founder"].map((item) => (
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

      <section className="py-20 md:py-28 px-6 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Ekosistem mitra</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Komunitas Investor",
              "Dewan Riset",
              "Kampus Hub",
              "Innovation Lab",
              "Mitra Korporasi",
              "Jaringan Media",
            ].map((partner) => (
              <div
                key={partner}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-4 py-6 text-center text-xs md:text-sm font-semibold text-neutral-600 dark:text-neutral-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Siap berkolaborasi?</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Mari bangun generasi founder berikutnya bersama.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </main>
  );
}
