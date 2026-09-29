import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaFileAlt,
  FaLaptopCode,
  FaBuilding,
  FaChartLine,
  FaClipboardList,
  FaCertificate,
  FaSearchPlus,
  FaTimes,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bnspImg from "../assets/bnsp2.jpg";

const About = ({ onOpenResume }) => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const targetRoles = [
    {
      icon: FaLaptopCode,
      title: "Web Developer & IT Support",
      desc: "Pengembangan web modern (React.js, Tailwind, JS), pembuatan website kantor, dan troubleshooting IT.",
    },
    {
      icon: FaClipboardList,
      title: "Staff Administrasi & Data Entry",
      desc: "Pengolahan data akurat dengan Microsoft Excel & Word, rekapitulasi berkas, dan administrasi surat kantor/pabrik.",
    },
    {
      icon: FaChartLine,
      title: "Marketing & Digital Sales",
      desc: "Promosi digital, pembuatan landing page produk, pelayanan konsumen, serta riset tren pasar dan kompetitor.",
    },
    {
      icon: FaBuilding,
      title: "Office Staff & Operasional Pabrik",
      desc: "Dukungan operasional harian (General Affairs), pencatatan logistik, kepatuhan SOP, dan koordinasi tim.",
    },
  ];

  const educationTimeline = [
    {
      period: "2025 - 2026",
      title: "Program D1 IT & Web Development",
      duration: "1 Tahun",
      degreeBadge: "Pendidikan Vokasi IT",
      institution: "Pesantren Teknologi Informasi dan Komunikasi (PeTIK)",
      location: "Depok, Jawa Barat",
      points: [
        "Fokus mendalami pengembangan Web modern (React.js, JavaScript ES6+, Tailwind CSS) & integrasi REST API.",
        "Pelatihan kedisiplinan kerja industri, kepatuhan SOP manufaktur/perkantoran, dan penyelesaian proyek berbasis tim.",
      ],
    },
    {
      period: "2023 - 2026",
      title: "Sekolah Menengah Atas (SMA)",
      duration: "3 Tahun",
      degreeBadge: "Jurusan IPS (Sosial)",
      institution: "SMAN 1 Kawali",
      location: "Ciamis, Jawa Barat",
      points: [
        "Mempelajari dasar ilmu sosial, manajemen administrasi, komunikasi publik, dan dinamika ekonomi masyarakat.",
        "Melatih tanggung jawab, kerja sama tim, dan kepemimpinan dalam berbagai kegiatan sekolah.",
      ],
    },
  ];

  const internshipTimeline = [
    {
      period: "Praktik Kerja / Magang",
      role: "Web Developer & IT Support Intern",
      company: "The Local Enablers (TLE)",
      location: "Bandung, Jawa Barat",
      points: [
        "Terlibat langsung dalam perancangan dan pembuatan website kantor resmi The Local Enablers.",
        "Pengembangan tampilan antarmuka interaktif, pemeliharaan konten digital, serta dukungan teknis operasional kantor.",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            Mengenal Saya Lebih Dekat
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Talenta muda tersertifikasi BNSP yang berdisiplin tinggi dan siap berkontribusi dalam bidang Web Development, Administrasi Data, Marketing, maupun Operasional Kantor &amp; Industri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Info Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Siap Bekerja &amp; Memberikan Kontribusi Nyata
              </h3>
              <p>
                Saya memiliki latar belakang pendidikan di bidang <strong>Teknologi Informasi &amp; Web Development (PeTIK Depok)</strong> serta ilmu sosial dari <strong>SMAN 1 Kawali</strong>. Telah tersertifikasi resmi oleh <strong>BNSP melalui LSP TIK GLOBAL sebagai Junior Web Developer</strong> dan memiliki pengalaman praktik kerja nyata di <strong>The Local Enablers Bandung</strong> dalam pembuatan website kantor.
              </p>
              <p>
                Selain pengembangan website, saya menguasai pengolahan data menggunakan <strong>Microsoft Excel</strong> (rumus, rekapitulasi, data spreadsheet), penyusunan dokumen formal dengan <strong>Microsoft Word</strong>, serta manajemen operasional kantor. Saya berdomisili di <strong>Ciamis, Jawa Barat</strong> dan siap bekerja di <strong>PT Pabrik Manufaktur</strong>, <strong>Perusahaan Swasta</strong>, maupun <strong>Perkantoran</strong>.
              </p>
            </div>

            {/* Certification Card with Image Preview */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-indigo-500/10 border border-amber-500/30 dark:border-amber-400/20 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                    <FaCertificate />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-white uppercase tracking-wider">
                        Sertifikasi Resmi BNSP
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        LSP TIK GLOBAL
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
                      Junior Web Developer (Kualifikasi Nasional BNSP)
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <FaSearchPlus />
                  <span>Lihat Foto Sertifikat</span>
                </button>
              </div>

              {/* Photo Thumbnail Container */}
              <div
                onClick={() => setIsCertModalOpen(true)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-amber-300/60 dark:border-amber-500/30 bg-slate-950 aspect-[16/9] max-h-52 flex items-center justify-center shadow-inner"
                title="Klik untuk memperbesar foto sertifikat"
              >
                <img
                  src={bnspImg}
                  onError={(e) => {
                    e.target.src = "/images/bnsp2.jpg";
                  }}
                  alt="Sertifikat BNSP Junior Web Developer - Ari"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 group-hover:scale-105 transition-transform shadow-lg border border-white/20">
                    <FaSearchPlus />
                    <span>Perbesar Foto Sertifikat BNSP</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Telah teruji dan tersertifikasi kompetensi standar nasional oleh <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong> melalui <strong>LSP TIK GLOBAL</strong> dalam bidang perancangan dan pemrograman web terstruktur.
              </p>
            </div>

            {/* Quick Details Card / Lampiran Profil */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Nama:
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  Ari
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  WhatsApp / No. Telepon:
                </span>
                <a
                  href="https://wa.me/6282373309755"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  0823-7330-9755
                </a>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Email:
                </span>
                <a
                  href="mailto:arisaprudin0005@gmail.com"
                  className="text-sm font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  arisaprudin0005@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Sertifikasi Profesi:
                </span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                  BNSP - LSP TIK GLOBAL (Junior Web Dev)
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Alamat Domisili:
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                  Dusun Lemahneundet, Desa Awiluar, Kec. Lumbung, Kab. Ciamis, Jawa Barat
                </span>
              </div>
            </div>

            {/* Target Role Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Kesiapan Posisi &amp; Peran Kerja
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {targetRoles.map((role, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm space-y-1 hover-lift transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 text-sm">
                        <role.icon />
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                        {role.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-md hover-lift flex items-center gap-2 text-sm transition-all"
              >
                <FaFileAlt />
                <span>Buka CV Resmi (Sertifikasi BNSP &amp; 4 Posisi)</span>
              </button>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm border border-slate-300 dark:border-slate-700 transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Internship Experience Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-white dark:from-slate-800 dark:to-slate-850 border border-emerald-200 dark:border-slate-700 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xl shadow-md">
                  <FaBriefcase />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Pengalaman Magang Kerja
                  </h4>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Praktik Kerja Nyata Industri
                  </span>
                </div>
              </div>

              {internshipTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-emerald-100 dark:border-slate-700/60 shadow-sm space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {item.role}
                    </h5>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <FaBuilding className="text-xs" />
                    <span>{item.company}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 text-xs flex-shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Timeline Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50/80 to-white dark:from-slate-800 dark:to-slate-850 border border-sky-200 dark:border-slate-700 shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center text-xl shadow-md">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Riwayat Pendidikan
                  </h4>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                    Pendidikan Formal &amp; Vokasi IT
                  </span>
                </div>
              </div>

              {/* Education Cards List */}
              <div className="space-y-4">
                {educationTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-sky-100 dark:border-slate-700/60 shadow-sm space-y-2.5 hover:border-sky-300 dark:hover:border-sky-500 transition-colors"
                  >
                    {/* Top Row: Degree & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          {item.title}
                        </h5>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                          {item.degreeBadge}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        <FaCalendarAlt className="text-[10px] text-sky-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Institution & Location */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-400">
                      <FaBuilding className="text-xs flex-shrink-0" />
                      <span>{item.institution}</span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[10px] text-rose-500" />
                        {item.location}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-sky-500 mt-0.5 text-xs flex-shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {isCertModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-4 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FaCertificate className="text-amber-500 text-lg" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    Sertifikat Kompetensi BNSP - Junior Web Developer
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Lembaga Sertifikasi Profesi: LSP TIK GLOBAL
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 overflow-y-auto flex items-center justify-center bg-slate-950">
              <img
                src={bnspImg}
                onError={(e) => {
                  e.target.src = "/images/bnsp2.jpg";
                }}
                alt="Sertifikat BNSP Junior Web Developer - Ari"
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                <FaCheckCircle />
                <span>Terverifikasi Standar Kompetensi Kerja Nasional Indonesia (SKKNI)</span>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
