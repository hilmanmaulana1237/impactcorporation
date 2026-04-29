"use client";

import { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import {
  IconHome,
  IconInfoCircle,
  IconMessage,
  IconMap,
  IconBulb,
  IconShieldCheck,
  IconRocket,
  IconUsers,
  IconCoin,
  IconNotes,
  IconCertificate,
  IconBuildingCommunity,
  IconBook,
} from "@tabler/icons-react";
import Image from "next/image";

const parallaxProducts = [
  { title: "Kesiapan Founder", link: "#programs", thumbnail: "/foto/foto (1).jpeg" },
  { title: "Tim IMPACT", link: "#team", thumbnail: "/foto/foto (2).jpg" },
  { title: "Akses Investor", link: "#ecosystem", thumbnail: "/foto/foto (3).jpg" },
  { title: "Go-to-Market", link: "#programs", thumbnail: "/foto/foto (1).jpg" },
  { title: "Perjalanan Startup", link: "#journey", thumbnail: "/foto/foto (1).jpeg" },
  { title: "Visi Kami", link: "#about", thumbnail: "/foto/foto (2).jpg" },
  { title: "Klinik Growth", link: "#events", thumbnail: "/foto/foto (3).jpg" },
  { title: "Portofolio", link: "#portfolio", thumbnail: "/foto/foto (1).jpg" },
  { title: "Jaringan Riset", link: "#journals", thumbnail: "/foto/foto (1).jpeg" },
  { title: "Workspace", link: "#ecosystem", thumbnail: "/foto/foto (2).jpg" },
  { title: "Komunitas", link: "#ecosystem", thumbnail: "/foto/foto (3).jpg" },
  { title: "Demo Day", link: "#events", thumbnail: "/foto/foto (1).jpg" },
  { title: "Persiapan Pendanaan", link: "#programs", thumbnail: "/foto/foto (1).jpeg" },
  { title: "Validasi Pasar", link: "#how", thumbnail: "/foto/foto (2).jpg" },
  { title: "Dukungan Penuh", link: "#team", thumbnail: "/foto/foto (3).jpg" },
];

const HeroHeader = () => {
  return (
    <div className="z-10 flex flex-col items-start justify-center px-4 md:px-6 max-w-7xl mx-auto text-left gap-6 relative mt-4 md:mt-0 w-full left-0 top-0 pt-6 md:pt-16 pb-0">
      <div className="px-5 py-2 rounded-full border border-brand-tosca/30 text-brand-tosca shadow-[0_0_20px_rgba(31,75,154,0.2)] text-xs md:text-sm tracking-[0.2em] uppercase font-medium bg-neutral-50 dark:bg-brand-black/80 backdrop-blur-md w-fit">
        IMPACT Inc. <span className="text-neutral-900 dark:text-white">Inkubator Startup</span>
      </div>

      <TextGenerateEffect
        words="Kami bukan hanya membangun startup. Kami membangun perusahaan berdampak."
        className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 dark:text-white tracking-tight leading-tight z-10"
      />

      <p className="text-neutral-600 dark:text-brand-gray text-base md:text-xl max-w-2xl mt-4 max-md:mt-2 font-light leading-relaxed">
        Inkubator untuk founder yang ingin tumbuh cepat, menggalang pendanaan dengan cerdas, dan menciptakan dampak terukur melalui ekosistem end-to-end.
      </p>

      <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-8 md:mt-12 relative z-20">
        <a href="#contact" className="px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca hover:scale-[1.02] shadow-[0_0_40px_rgba(31,75,154,0.4)] transition-all text-sm md:text-base text-center">
          Daftar Sekarang
        </a>
        <a href="#journey" className="px-8 py-4 rounded-full border border-brand-gray/50 text-neutral-900 dark:text-white font-medium hover:bg-brand-tosca/10 hover:border-brand-tosca hover:text-brand-tosca transition-colors text-sm md:text-base text-center backdrop-blur-sm bg-white dark:bg-black/40">
          Lihat Perjalanan
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    intent: "Bergabung Inkubator",
    message: ""
  });

  const WA_NUMBER = "6283827580259";

  const navItems = [
    { name: "Beranda", link: "/", icon: <IconHome className="h-4 w-4" /> },
    {
      name: "Tentang",
      link: "/about-us",
      icon: <IconInfoCircle className="h-4 w-4" />,
      children: [
        { name: "Tentang Kami", link: "/about-us" },
        { name: "Profil Perusahaan", link: "/company-profile" },
      ],
    },
    {
      name: "Layanan",
      link: "/incubation-program",
      icon: <IconBuildingCommunity className="h-4 w-4" />,
      children: [
        { name: "Program Inkubasi", link: "/incubation-program" },
        { name: "Tools CSRL", link: "/csrl-tool" },
        { name: "Pengembangan Inkubator", link: "/incubator-development" },
        { name: "Penyelenggara Event", link: "/event-organizer" },
      ],
    },
    {
      name: "Komunitas",
      link: "/startups",
      icon: <IconUsers className="h-4 w-4" />,
      children: [
        { name: "Startup", link: "/startups" },
        { name: "Event", link: "/events" },
        { name: "Jurnal", link: "/journals" },
      ],
    },
    { name: "Hubungi", link: "/contact-us", icon: <IconMessage className="h-4 w-4" /> },
  ];

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo IMPACT Inc., saya ingin terhubung dengan detail berikut:
%0A
%0ANama: ${formData.firstName} ${formData.lastName}
%0APhone: ${formData.phone}
%0AEmail: ${formData.email}
%0ATujuan: ${formData.intent}
%0APesan Tambahan: ${formData.message || '-'}
%0A
  %0ATerima kasih!`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${text}`;

    const newWindow = window.open(waUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = waUrl;
    }
  };

  return (
    <main className="bg-neutral-50 dark:bg-brand-black min-h-screen selection:bg-brand-tosca/30 selection:text-brand-tosca font-sans text-neutral-600 dark:text-brand-gray overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden w-full h-auto min-h-screen bg-neutral-50 dark:bg-brand-black z-10">
        <HeroParallax products={parallaxProducts} header={<HeroHeader />} />
      </section>

      {/* (Impact Metrics dihilangkan karena startup masih tahap awal) */}

      {/* ABOUT / VISION */}
      <section id="about" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/foto/foto (2).jpg"
            fill
            className="object-cover grayscale"
            alt="Latar kota"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-brand-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#1f4b9a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-tosca/10 border border-brand-tosca/30 text-sm text-brand-tosca mb-6 backdrop-blur-sm">
              <IconInfoCircle className="w-4 h-4" /> Tentang & Visi
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Standar baru untuk inkubasi startup.</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-6 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
              IMPACT Inc. adalah inkubator berbasis founder yang menggabungkan akses modal, mentoring strategis, dan ruang kerja berkinerja tinggi untuk membangun perusahaan berdampak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Visi</h3>
              <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base leading-relaxed">
                Menjadi inkubator dampak paling terpercaya di Asia Tenggara, melahirkan founder yang bertumbuh secara bertanggung jawab dan menyelesaikan masalah nyata.
              </p>
            </div>
            <div className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Misi</h3>
              <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-base leading-relaxed">
                Menyediakan jalur terstruktur dan berkecepatan tinggi dari validasi hingga pendanaan dengan jaringan mentor dan investor global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-24 px-4 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,75,154,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,75,154,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Kenapa founder memilih IMPACT</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Berani, praktis, dan fokus pada traksi terukur.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              [
                { title: "Model impact-first", text: "Fokus pada nilai berkelanjutan, bukan vanity growth.", icon: <IconBuildingCommunity className="w-7 h-7 text-brand-tosca" /> },
                { title: "Akses investor", text: "Perkenalan hangat ke modal dan angel yang tepat.", icon: <IconCoin className="w-7 h-7 text-brand-tosca" /> },
                { title: "Mentoring berbasis operator", text: "Founder nyata, playbook nyata, hasil nyata.", icon: <IconUsers className="w-7 h-7 text-brand-tosca" /> },
                { title: "Milestone jelas", text: "Checkpoint berbasis data di tiap fase pertumbuhan.", icon: <IconShieldCheck className="w-7 h-7 text-brand-tosca" /> },
              ]
            .map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl backdrop-blur-xl hover:border-brand-tosca/50 hover:-translate-y-1 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1f4b9a2B,transparent_60%)]"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Cara kerja</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Satu jalur jelas dari aplikasi hingga pendanaan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Daftar & Match", text: "Kami memilih founder dengan visi dan DNA eksekusi." },
              { step: "02", title: "Validasi & Bangun", text: "Bukti pasar, penguatan produk, dan traksi awal." },
              { step: "03", title: "Scale & Pendanaan", text: "Akses investor, playbook pertumbuhan, persiapan pendanaan." },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-7 backdrop-blur-xl"
              >
                <div className="text-brand-tosca text-sm font-semibold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-brand-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCUBATION PROGRAM */}
      <section id="programs" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/foto/foto (1).jpeg"
            fill
            className="object-cover grayscale"
            alt="Latar program"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-brand-black/90"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Program Inkubasi</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Akselerasi 4-6 bulan untuk product-market fit dan kesiapan investor.</p>
          </div>

          <div className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] p-10 backdrop-blur-xl">
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="p-4 bg-neutral-50 dark:bg-brand-black rounded-2xl border border-neutral-300 dark:border-neutral-700">
                <IconRocket className="w-8 h-8 text-brand-tosca" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">Track Akselerasi Founder</h3>
                <p className="text-neutral-600 dark:text-brand-gray mb-6 text-sm md:text-base">
                  Modul terstruktur untuk validasi, pertumbuhan, dan pendanaan dengan sprint mingguan yang praktis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Penemuan Masalah & Market Fit",
                    "Go-to-Market & Distribusi",
                    "Strategi Pendanaan",
                    "Operasional & Tata Kelola",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-brand-gray">
                      <IconShieldCheck className="w-5 h-5 text-brand-tosca" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-brand-tosca text-white font-medium hover:bg-brand-darkTosca transition-colors"
                  >
                    Daftar Sekarang
                  </a>
                  <a
                    href="#journey"
                    className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium hover:border-brand-tosca hover:text-brand-tosca transition-colors"
                  >
                    Lihat Timeline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1f4b9a33,transparent_60%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Ekosistem menyatu, siap bertumbuh.</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Modal, mentoring, workspace, dan komunitas dalam satu ekosistem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              [
                { title: "Jaringan Investor", text: "Akses hangat ke angel dan fund yang sejalan dengan impact.", icon: <IconCoin className="w-7 h-7 text-brand-tosca" /> },
                { title: "Dewan Mentor", text: "Operator, founder, dan ahli domain yang siap membantu.", icon: <IconUsers className="w-7 h-7 text-brand-tosca" /> },
                { title: "Workspace & Komunitas", text: "Hub hybrid dengan kultur founder berperforma tinggi.", icon: <IconBuildingCommunity className="w-7 h-7 text-brand-tosca" /> },
                { title: "Dukungan Funding", text: "Perbaikan pitch, akses grant, dan kesiapan demo day.", icon: <IconShieldCheck className="w-7 h-7 text-brand-tosca" /> },
              ]
            .map((item) => (
              <div
                key={item.title}
                className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl backdrop-blur-xl hover:border-brand-tosca/50 hover:-translate-y-1 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(31,75,154,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,75,154,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,75,154,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-brand-tosca text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3">Tim IMPACT Inc.</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 dark:text-white tracking-tight">Penggerak Perubahan.</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-6 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
              Membangun fondasi kuat untuk masa depan ekosistem startup. Kami memadukan visi teknis, strategis, dan operasional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-5xl mx-auto">
            {[
              {
                name: "Yogi Saputra",
                role: "Chief Executive Officer",
                image: "/foto team/yogi.jpg",
                desc: "Mengorkestrasi visi besar dan strategi ekosistem IMPACT Inc.",
                size: "large"
              },
              {
                name: "Awang Dody Kardeli",
                role: "Chief Technology Officer",
                image: "/foto team/awang.jpg",
                desc: "Arsitek solusi inovatif dan platform teknologi inkubasi.",
                size: "large"
              },
              {
                name: "Hilman Maulana",
                role: "Core Team",
                image: "/foto team/hilman.png",
                size: "normal"
              },
              {
                name: "M. Dhaffin Fawwaz",
                role: "Core Team",
                image: "",
                size: "normal"
              },
              {
                name: "Satria Agung P.",
                role: "Core Team",
                image: "",
                size: "normal"
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`group flex flex-col items-center text-center ${
                  member.size === "large" ? "w-full sm:w-[calc(50%-2rem)] md:w-[40%]" : "w-full sm:w-[calc(33.33%-2rem)] md:w-[28%]"
                }`}
              >
                <div className={`relative mb-6 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(31,75,154,0.3)] bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center border-4 border-white dark:border-brand-black ${
                  member.size === "large" ? "w-48 h-48 md:w-56 md:h-56" : "w-40 h-40 md:w-44 md:h-44"
                }`}>
                  <div className="absolute inset-0 border border-neutral-200/50 dark:border-white/10 rounded-full z-20 pointer-events-none"></div>
                  {member.image ? (
                    <Image src={member.image} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt={member.name} />
                  ) : (
                    <IconUsers className="w-12 h-12 text-neutral-400 dark:text-neutral-500 transition-transform duration-500 group-hover:scale-110" />
                  )}
                </div>

                <h3 className={`font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-brand-tosca ${
                  member.size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}>
                  {member.name}
                </h3>
                <div className="text-brand-tosca font-medium text-sm md:text-base mb-3 tracking-wide">
                  {member.role}
                </div>
                {member.desc && (
                  <p className="text-neutral-600 dark:text-brand-gray/80 text-sm leading-relaxed max-w-xs mx-auto">
                    {member.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STARTUP JOURNEY */}
      <section id="journey" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,75,154,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,75,154,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Timeline Perjalanan Startup</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Roadmap jelas dari ide hingga scale.</p>
          </div>

          <div className="space-y-6">
            {[
              { title: "Spark", text: "Validasi ide dan founder-market fit." },
              { title: "Build", text: "MVP, pengguna awal, dan kejelasan produk." },
              { title: "Launch", text: "Eksekusi go-to-market dan traksi." },
              { title: "Scale", text: "Pertumbuhan revenue, sistem operasi, dan hiring." },
              { title: "Fund", text: "Fundraising strategis dan ekspansi." },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-6 bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 backdrop-blur-xl"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-tosca text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  {index !== 4 && <div className="w-px h-10 bg-brand-tosca/30 mt-2"></div>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-brand-gray text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a26,transparent_60%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Portofolio Startup</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Traksi nyata di sektor kesehatan, finansial, edukasi, dan iklim.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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
                className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:border-brand-tosca/50 hover:-translate-y-1 transition-all"
              >
                {startup}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,75,154,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,75,154,0.04)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Founder yang melaju lebih cepat</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Suara asli dari tim yang bertumbuh bersama IMPACT.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "IMPACT membuka akses investor yang sebelumnya sulit kami jangkau. Seed round kami selesai dalam 10 minggu.",
                name: "Darren Satria",
                role: "CEO, NovaTech",
              },
              {
                quote: "Struktur sprint memaksa kami fokus. Revenue kami naik dua kali dalam empat bulan.",
                name: "Maya Lestari",
                role: "Founder, HealthLink",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-xl"
              >
                <p className="text-neutral-700 dark:text-brand-gray text-base leading-relaxed mb-6">"{item.quote}"</p>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">{item.name}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/foto/foto (1).jpeg"
            fill
            className="object-cover grayscale"
            alt="Latar event"
          />
          <div className="absolute inset-0 bg-white/90 dark:bg-brand-black/90"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-50 dark:from-brand-black to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-50 dark:from-brand-black to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight mb-4">Event & Workshop</h2>
            <div className="w-20 h-1 bg-brand-tosca mx-auto mb-6"></div>
            <p className="text-neutral-600 dark:text-brand-gray max-w-2xl mx-auto text-sm md:text-lg">Bootcamp startup, klinik growth, dan meetup founder yang fokus pada traksi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sprint Validasi Startup",
                date: "May 24, 2026",
                image: "/foto/foto (1).jpg",
                category: "Inkubator",
              },
              {
                title: "Klinik Growth Playbook",
                date: "June 7, 2026",
                image: "/foto/foto (2).jpg",
                category: "Pertumbuhan",
              },
              {
                title: "Meetup Founder & Investor",
                date: "June 18, 2026",
                image: "/foto/foto (3).jpg",
                category: "Komunitas",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:border-brand-tosca/50 hover:-translate-y-1 transition-all"
              >
                <div className="relative h-44 w-full">
                  <Image src={event.image} fill className="object-cover" alt={event.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-tosca/10 text-brand-tosca font-semibold">{event.category}</span>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{event.title}</h3>
                  <a href="#contact" className="text-sm font-semibold text-brand-tosca hover:text-brand-darkTosca transition-colors">
                    Daftar Sekarang &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNALS */}
      <section id="journals" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/foto/foto (2).jpg"
            fill
            className="object-cover grayscale"
            alt="Latar jurnal"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-brand-black/90"></div>
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Jurnal & Platform Riset</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-2xl mx-auto text-sm md:text-lg">Template OJS modern dan sistem jurnal untuk mitra riset.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-xl">
              <IconNotes className="w-8 h-8 text-brand-tosca mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Template OJS</h3>
              <p className="text-neutral-600 dark:text-brand-gray text-sm">Template premium untuk keterbacaan, indexing, dan kredibilitas internasional.</p>
            </div>
            <div className="bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-xl">
              <IconCertificate className="w-8 h-8 text-brand-tosca mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Dukungan Indexing</h3>
              <p className="text-neutral-600 dark:text-brand-gray text-sm">Panduan DOAJ dan indexing internasional untuk meningkatkan dampak riset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="apply" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a40,transparent_60%)]"></div>
        <div className="relative max-w-5xl mx-auto text-center bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-16 border border-brand-tosca/30 shadow-[0_0_80px_rgba(31,75,154,0.2)]">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Siap membangun sesuatu yang berdampak?</h2>
          <p className="text-neutral-300 mt-4 mb-8 text-sm md:text-lg">Gabung inkubator berbasis founder untuk scale impact.</p>
          <a href="#contact" className="px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors">
            Daftar Sekarang
          </a>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 px-4 w-full relative">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/foto/foto (3).jpg"
            fill
            className="object-cover grayscale"
            alt="Latar kontak"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-brand-black/85"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(31,75,154,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,75,154,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-10"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-50 dark:from-brand-black to-transparent z-10"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-white tracking-tight">Daftar atau Bermitra</h2>
            <p className="text-neutral-600 dark:text-brand-gray mt-4 max-w-xl mx-auto text-sm md:text-lg">Ceritakan apa yang sedang Anda bangun. Tim IMPACT Inc. akan menghubungi Anda segera.</p>
          </div>

          <div className="relative bg-white/90 dark:bg-neutral-950/70 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-12 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-brand-tosca to-transparent"></div>

            <form onSubmit={handleOrder} className="flex flex-col gap-6 md:gap-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Nama Depan</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 text-neutral-900 dark:text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-tosca transition-all font-light"
                    placeholder="Budi"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Nama Belakang</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 text-neutral-900 dark:text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-tosca transition-all font-light"
                    placeholder="Santoso"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 text-neutral-900 dark:text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-tosca transition-all font-light"
                    placeholder="budi@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Nomor HP</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 text-neutral-900 dark:text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-tosca transition-all font-light"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Saya ingin</label>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-brand-tosca transition-all appearance-none font-light"
                  >
                    <option value="Bergabung Inkubator">Bergabung Inkubator</option>
                    <option value="Membuat Jurnal">Membuat Jurnal</option>
                    <option value="Beli Template">Beli Template</option>
                    <option value="Kemitraan">Kemitraan</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-600 dark:text-brand-gray ml-1">Pesan</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-neutral-50 dark:bg-brand-black/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-5 text-neutral-900 dark:text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-tosca transition-all resize-none font-light"
                  placeholder="Ceritakan kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-5 rounded-2xl bg-brand-tosca text-white font-semibold text-base hover:bg-brand-darkTosca hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(31,75,154,0.3)]"
              >
                <IconMessage className="w-5 h-5" />
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-brand-tosca/20 bg-neutral-50 dark:bg-brand-black pt-16 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 mb-12">
          <div className="flex items-center gap-5">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-brand-tosca/20 shadow-[0_0_30px_rgba(31,75,154,0.1)] group">
              <Image
                src="/logo without name.png"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Logo IMPACT Inc."
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-2xl md:text-3xl font-light tracking-widest text-brand-tosca">
                IMPACT<span className="font-bold text-neutral-600 dark:text-brand-gray">Inc.</span>
              </div>
              <p className="text-neutral-600 dark:text-brand-gray text-xs md:text-sm tracking-wide uppercase">Inkubator Startup</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-600 dark:text-brand-gray">
            <a href="#programs" className="hover:text-brand-tosca transition-colors">Program</a>
            <a href="#ecosystem" className="hover:text-brand-tosca transition-colors">Ekosistem</a>
            <a href="#events" className="hover:text-brand-tosca transition-colors">Event</a>
            <a href="#contact" className="hover:text-brand-tosca transition-colors">Kontak</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 border-t border-brand-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-600 dark:text-brand-gray/70 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} IMPACT Inc. All rights reserved.
          </div>
          <div className="text-brand-tosca text-xs text-center md:text-right uppercase tracking-[0.2em] font-medium">
            Bangun. Tumbuh. Berdampak.
          </div>
        </div>
      </footer>
    </main>
  );
}
