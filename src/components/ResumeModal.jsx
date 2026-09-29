import React, { useState } from "react";
import {
  FaTimes,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaCheckCircle,
  FaFileAlt,
  FaChartLine,
  FaBuilding,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import bnspImg from "../assets/bnsp2.jpg";

const ResumeModal = ({ isOpen, onClose, onNotify }) => {
  const [selectedRole, setSelectedRole] = useState("all");

  if (!isOpen) return null;

  const handleDownload = () => {
    if (onNotify) {
      onNotify("Mempersiapkan dokumen CV untuk dicetak / disimpan sebagai PDF...", "info");
    }
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const roleProfiles = {
    all: {
      roleTitle: "Web Developer, Staff Administrasi, Marketing & Office Staff",
      targetCategory: "Multi-Position (IT, Perkantoran & Industri Pabrik)",
      summary:
        "Tenaga kerja muda yang berdisiplin tinggi, adaptif, dan memiliki keahlian serbaguna. Berpengalaman magang di The Local Enablers Bandung dalam pembuatan website kantor, didukung kemahiran pengolahan data administrasi (Microsoft Excel & Microsoft Word), strategi promosi digital, serta kesiapan mendukung kelancaran operasional kerja di PT Pabrik Manufaktur, Perusahaan Swasta, maupun Perkantoran.",
      skills: [
        {
          group: "Administrasi & Pengolahan Data (Office)",
          items: [
            "Microsoft Excel (VLOOKUP, Pivot, Formula, Rekap Data)",
            "Microsoft Word (Surat Resmi, Dokumen SOP, Notulensi)",
            "Data Entry Cepat, Rapi & Akurat",
            "Pengarsipan & Filing Berkas Digital/Fisik",
            "Google Workspace (Docs, Sheets, Drive)",
          ],
        },
        {
          group: "Web Development & IT Support",
          items: [
            "Pembuatan Website Kantor (React.js, HTML, CSS)",
            "JavaScript (ES6+) & Tailwind CSS",
            "Troubleshooting Komputer, Software & Jaringan",
            "Pengelolaan Konten Digital & Database",
            "Git & GitHub",
          ],
        },
        {
          group: "Marketing & Komunikasi Kerja",
          items: [
            "Digital Marketing & Promosi Online",
            "Copywriting & Desain Penawaran Produk",
            "Komunikasi & Pelayanan Pelanggan (Customer Service)",
            "Riset Kebutuhan Pasar & Kompetitor",
            "Negosiasi & Follow-up Klien",
          ],
        },
        {
          group: "Office Staff & Operasional Pabrik",
          items: [
            "Manajemen Operasional & General Affairs",
            "Pencatatan Logistik & Inventaris Barang Masuk/Keluar",
            "Kepatuhan SOP & Standar Kerja Industri",
            "Kerja Tim Lintas Departemen",
            "Disiplin Tinggi (Siap Sistem Shift / Lembur)",
          ],
        },
      ],
      experiences: [
        {
          role: "Web Developer & IT Support Intern (Magang)",
          company: "The Local Enablers (TLE) - Bandung, Jawa Barat",
          period: "Praktik Kerja / Magang",
          points: [
            "Terlibat langsung dalam perancangan dan pembuatan website kantor The Local Enablers agar informatif dan mudah diakses.",
            "Melakukan integrasi data digital kantor, pemeliharaan konten halaman web, dan pengujian responsivitas antarmuka.",
            "Memberikan dukungan operasional teknologi informasi dan penataan dokumen digital harian kantor.",
          ],
        },
        {
          role: "Program Pendidikan Vokasi D1 IT & Administrasi",
          company: "Pesantren Teknologi Informasi dan Komunikasi (PeTIK) - Depok",
          period: "2025 - 2026",
          points: [
            "Membangun berbagai proyek website fungsional berbasis React.js, Tailwind CSS, dan integrasi data REST API.",
            "Melakukan entri data, rekapitulasi laporan berkala, serta pengolahan spreadsheet Excel secara terstruktur.",
            "Menerapkan kedisiplinan kerja industri, pembagian tugas berbasis tim, dan komunikasi profesional.",
          ],
        },
      ],
    },
    webdev: {
      roleTitle: "Web Developer & IT Support",
      targetCategory: "Divisi IT, Software House & Departemen Teknologi",
      summary:
        "Frontend Web Developer yang memiliki pengalaman magang di The Local Enablers Bandung dalam perancangan dan pembuatan website kantor resmi. Terampil membangun antarmuka web modern, responsif, dan interaktif menggunakan React.js, Tailwind CSS, JavaScript ES6+, integrasi REST API, serta troubleshooting dasar hardware dan software.",
      skills: [
        {
          group: "Frontend Core & Website Development",
          items: ["React.js", "JavaScript (ES6+)", "HTML5 Semantic", "CSS3 Modern", "Tailwind CSS", "Bootstrap"],
        },
        {
          group: "Integrasi & Tools",
          items: ["RESTful API Integration", "Git & GitHub", "Vite", "Postman", "VS Code", "Responsive Web Design"],
        },
        {
          group: "IT Support & Office",
          items: ["Troubleshooting Komputer & OS", "Instalasi Software", "Microsoft Excel", "Microsoft Word"],
        },
      ],
      experiences: [
        {
          role: "Web Developer & IT Support Intern (Magang)",
          company: "The Local Enablers (TLE) - Bandung, Jawa Barat",
          period: "Praktik Kerja / Magang",
          points: [
            "Terlibat aktif dalam pembuatan dan pengembangan website kantor The Local Enablers dari tahap perancangan hingga implementasi.",
            "Menyusun kode frontend yang bersih, responsif di ponsel/desktop, dan cepat dimuat oleh pengguna.",
            "Membantu pemeliharaan aset digital kantor dan penanganan kendala teknis ringan.",
          ],
        },
        {
          role: "Frontend Project Builder",
          company: "PeTIK Depok",
          period: "2025 - 2026",
          points: [
            "Membangun 6+ aplikasi web interaktif (NongkiBroo Coffee Shop, Qur'an Explorer REST API, Portal PeTIK, Toko Online).",
            "Mengimplementasikan component architecture dan pengujian antarmuka pengguna.",
          ],
        },
      ],
    },
    admin: {
      roleTitle: "Staff Administrasi / Administrator / Data Entry",
      targetCategory: "Divisi Administrasi Pabrik, Kantor PT & Korporat",
      summary:
        "Staff Administrasi yang teliti, terorganisir, dan berdisiplin tinggi dengan kemampuan prima dalam pengolahan data menggunakan Microsoft Excel (VLOOKUP, Pivot, Formula) dan Microsoft Word (Surat Resmi, Format SOP). Berpengalaman mengelola administrasi data digital saat magang di The Local Enablers Bandung serta siap menjalankan rekapitulasi data operasional pabrik/kantor secara teratur dan akurat.",
      skills: [
        {
          group: "Microsoft Office & Pengolahan Data",
          items: [
            "Microsoft Excel (Rumus Logika, VLOOKUP, Pivot Table, Rekap Data)",
            "Microsoft Word (Surat Menyurat Resmi, Pembuatan Laporan, Dokumen SOP)",
            "Google Sheets & Google Drive Cloud Storage",
            "Data Entry Cepat & Akurasi Tinggi",
          ],
        },
        {
          group: "Administrasi & Pengarsipan",
          items: [
            "Manajemen Dokumen & Filing System (Digital & Fisik)",
            "Pencatatan Surat Masuk / Surat Keluar & Logbook",
            "Penyusunan Laporan Harian, Mingguan & Bulanan",
            "Pengelolaan Berkas Pegawai, Vendor & Inventaris ATK",
          ],
        },
        {
          group: "Kompetensi Pendukung",
          items: [
            "Pengetikan Cepat & Ketelitian Memeriksa Angka",
            "Pengoperasian Komputer, Scanner & Printer",
            "Komunikasi Formal & Koordinasi Antar-Divisi",
            "Disiplin Tenggat Waktu (Deadline)",
          ],
        },
      ],
      experiences: [
        {
          role: "Dukungan Administrasi & Data Digital (Magang)",
          company: "The Local Enablers (TLE) - Bandung",
          period: "Praktik Kerja / Magang",
          points: [
            "Mengelola dan merapikan data katalog serta informasi kantor untuk publikasi pada website resmi.",
            "Melakukan entri data, verifikasi kelengkapan dokumen digital, dan pengarsipan berkas.",
            "Menyusun dokumentasi kegiatan dan laporan kerja berkala.",
          ],
        },
        {
          role: "Pengolahan Data & Pelaporan Administrasi",
          company: "PeTIK Depok",
          period: "2025 - 2026",
          points: [
            "Mengolah basis data informasi ratusan entri data menggunakan spreadsheet Excel secara rapi.",
            "Menyusun laporan teknis berkala dengan format dokumen baku menggunakan Microsoft Word.",
          ],
        },
      ],
    },
    marketing: {
      roleTitle: "Staff Marketing & Digital Marketing",
      targetCategory: "Divisi Marketing, Sales & Promosi Bisnis",
      summary:
        "Staff Marketing yang komunikatif, persuasif, dan memahami strategi promosi digital. Berpengalaman dalam pengembangan media promosi digital dan website kantor di The Local Enablers Bandung, didukung kemahiran pengolahan data Microsoft Excel untuk analisis penjualan dan Microsoft Word untuk pembuatan proposal penawaran.",
      skills: [
        {
          group: "Digital Marketing & Promosi",
          items: [
            "Promosi Media Sosial & Pengelolaan Konten",
            "Copywriting Penawaran Menarik & Persuasif",
            "Pembuatan Landing Page Promosi Produk",
            "Penyusunan Banner Visual & Katalog Digital",
          ],
        },
        {
          group: "Sales & Relasi Pelanggan",
          items: [
            "Customer Relationship Management (CRM)",
            "Komunikasi & Negosiasi dengan Calon Pembeli",
            "Follow-up Penawaran & Prospek Konsumen",
            "Penanganan Pertanyaan & Pelayanan Pelanggan",
          ],
        },
        {
          group: "Administrasi & Analisis Penjualan",
          items: [
            "Microsoft Excel (Rekapitulasi Penjualan & Target)",
            "Microsoft Word (Pembuatan Surat Penawaran & Proposal)",
            "Riset Kebutuhan Pasar & Pemantauan Kompetitor",
          ],
        },
      ],
      experiences: [
        {
          role: "Pengembangan Konten Web Promosi (Magang)",
          company: "The Local Enablers (TLE) - Bandung",
          period: "Praktik Kerja / Magang",
          points: [
            "Mengembangkan tampilan website kantor untuk memperkuat branding dan daya tarik program perusahaan.",
            "Menyusun narasi informasi yang persuasif dan mudah dipahami oleh mitra serta calon pengguna jasa.",
          ],
        },
      ],
    },
    office: {
      roleTitle: "Office Staff & General Affairs / Operasional Pabrik",
      targetCategory: "Divisi Operasional, General Affairs (GA) & Pabrik",
      summary:
        "Office Staff yang siap mendukung kelancaran kegiatan operasional harian di lingkungan pabrik manufaktur maupun perkantoran perusahaan. Memiliki etos kerja tinggi, disiplin, menguasai pencatatan operasional dengan Microsoft Excel & Word, berpengalaman magang di The Local Enablers Bandung, dan siap bekerja sistem shift serta lembur.",
      skills: [
        {
          group: "Operasional Kantor & Pabrik",
          items: [
            "Pencatatan Logistik & Stok Barang Masuk/Keluar",
            "Pengawasan Kepatuhan SOP & Standar K3 Dasar",
            "Pengadaan & Pemeliharaan Kebutuhan Kerja (GA)",
            "Koordinasi Jadwal Kerja & Alur Dokumen",
          ],
        },
        {
          group: "Administrasi Operasional (Office)",
          items: [
            "Microsoft Excel (Pencatatan Absensi, Logistik & Rekap Harian)",
            "Microsoft Word (Berita Acara, Notulensi & Laporan Shift)",
            "Pengoperasian Komputer & Aplikasi Kerja",
            "Pengecekan Kesiapan Sarana Kerja",
          ],
        },
        {
          group: "Etos Kerja Industri",
          items: [
            "Disiplin Tinggi, Jujur & Bertanggung Jawab",
            "Siap Kerja Sistem Shift & Lembur",
            "Komunikasi Proaktif dengan Atasan & Rekan",
            "Ketahanan Kerja & Adaptasi Cepat",
          ],
        },
      ],
      experiences: [
        {
          role: "Dukungan Operasional & IT Kantor (Magang)",
          company: "The Local Enablers (TLE) - Bandung",
          period: "Praktik Kerja / Magang",
          points: [
            "Mendukung kelancaran operasional harian kantor, pengelolaan data digital, dan pembuatan website kantor.",
            "Melakukan koordinasi dengan tim kantor mengenai kebutuhan sarana kerja dan penyiapan data.",
          ],
        },
      ],
    },
  };

  const activeData = roleProfiles[selectedRole] || roleProfiles.all;

  const roleTabs = [
    { id: "all", name: "Semua Posisi (General CV)", icon: FaFileAlt },
    { id: "webdev", name: "Web Developer / IT", icon: FaLaptopCode },
    { id: "admin", name: "Staff Administrasi", icon: FaBuilding },
    { id: "marketing", name: "Marketing & Sales", icon: FaChartLine },
    { id: "office", name: "Office Staff / Pabrik", icon: FaBriefcase },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="bg-slate-100 dark:bg-slate-800/90 px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base sm:text-lg leading-tight">
                Curriculum Vitae (CV) - Ari
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Format CV Resmi &bull; Web Dev &bull; Administrasi &bull; Marketing &bull; Office Staff
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm"
              title="Unduh / Simpan PDF"
            >
              <FaDownload className="text-xs" />
              <span>Simpan / Cetak PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
              aria-label="Tutup"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Position Target Selector Tabs */}
        <div className="bg-slate-50 dark:bg-slate-850 px-4 sm:px-6 py-2.5 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-1.5 flex-shrink-0 overflow-x-auto print:hidden">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1.5 hidden md:inline">
            Pilih Target Lamaran:
          </span>
          {roleTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedRole === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <Icon className="text-xs" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* CV Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 print:p-0 text-slate-800 dark:text-slate-200">
          
          {/* Header Profile */}
          <div className="border-b border-slate-200 dark:border-slate-700 pb-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  ARI
                </h1>
                <p className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400 mt-0.5">
                  {activeData.roleTitle}
                </p>
                <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  Target: {activeData.targetCategory}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mt-3 leading-relaxed">
                  {activeData.summary}
                </p>
              </div>
            </div>

            {/* Quick Contacts Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
              <a
                href="mailto:arisaprudin0005@gmail.com"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <span className="truncate">arisaprudin0005@gmail.com</span>
              </a>
              <a
                href="https://wa.me/6282373309755"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaPhone className="text-emerald-500 flex-shrink-0" />
                <span>+62 823-7330-9755</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400" title="Dusun Lemahneundet, Desa Awiluar, Kec. Lumbung, Kab. Ciamis, Jawa Barat">
                <FaMapMarkerAlt className="text-rose-500 flex-shrink-0" />
                <span className="truncate">Ciamis, Jawa Barat</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ari-52100a381/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="text-blue-600 flex-shrink-0" />
                <span>linkedin.com/in/ari</span>
              </a>
            </div>

            {/* Full Address Detail Sub-bar */}
            <div className="mt-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Alamat Lengkap:</span>
              <span>Dusun Lemahneundet, Desa Awiluar, Kec. Lumbung, Kab. Ciamis, Jawa Barat</span>
            </div>
          </div>

          {/* Sertifikasi Profesi BNSP */}
          <div>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                <FaCertificate />
              </div>
              <span>Sertifikasi Profesi Nasional</span>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50/50 dark:from-slate-800/80 dark:to-slate-800/40 p-4 sm:p-5 rounded-xl border border-amber-200/80 dark:border-slate-700/80 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <span>Junior Web Developer</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-white uppercase">
                    BNSP Terverifikasi
                  </span>
                </h4>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                  Lembaga Sertifikasi Profesi: LSP TIK GLOBAL
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                <div className="w-full sm:w-44 h-28 rounded-lg overflow-hidden border border-amber-300 dark:border-amber-600/50 flex-shrink-0 bg-slate-900 shadow-sm">
                  <img
                    src={bnspImg}
                    onError={(e) => {
                      e.target.src = "/images/bnsp2.jpg";
                    }}
                    alt="Sertifikat BNSP Junior Web Developer - Ari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">
                    Tersertifikasi kompetensi standar nasional oleh <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong> melalui <strong>LSP TIK GLOBAL</strong> dalam bidang perancangan dan pemrograman web terstruktur, penerapan standar kode industri, serta pengembangan aplikasi digital.
                  </p>
                  <p className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold">
                    ✓ Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Teknologi Informasi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Background */}
          <div>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400">
                <FaGraduationCap />
              </div>
              <span>Riwayat Pendidikan</span>
            </div>
            
            <div className="space-y-3">
              {/* PeTIK */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    Program Pendidikan Vokasi D1 IT &amp; Web Development (1 Tahun)
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 rounded-full w-fit">
                    Tahun Lulus: 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Pesantren Teknologi Informasi dan Komunikasi (PeTIK) - Depok, Jawa Barat
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside pt-1">
                  <li>Pelatihan intensif pengembangan Web modern (React.js, JavaScript, Tailwind CSS), pengolahan data, dan sistem informasi.</li>
                  <li>Pembinaan kedisiplinan kerja industri, etika perkantoran/manufaktur, dan manajemen tugas kolaboratif.</li>
                </ul>
              </div>

              {/* SMAN 1 Kawali */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    Sekolah Menengah Atas (SMA) - Jurusan IPS
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full w-fit">
                    Tahun Lulus: 2025 / 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  SMAN 1 Kawali - Ciamis, Jawa Barat
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Mendalami ilmu sosial, dasar administrasi, ekonomi, komunikasi publik, serta kerja sama tim dalam berbagai kegiatan sekolah.
                </p>
              </div>
            </div>
          </div>

          {/* Work & Internship Experience */}
          <div>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <FaBriefcase />
              </div>
              <span>Pengalaman Magang &amp; Riwayat Kerja</span>
            </div>

            <div className="space-y-3.5">
              {activeData.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/80 rounded border border-emerald-200 dark:border-emerald-800">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside pt-1">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Competencies & Skills for Selected Target */}
          <div>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <FaCode />
              </div>
              <span>Kualifikasi &amp; Keahlian Utama ({activeData.roleTitle})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activeData.skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2"
                >
                  <h5 className="font-bold text-xs sm:text-sm text-primary-600 dark:text-primary-400">
                    {skillGroup.group}
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-md border border-slate-200 dark:border-slate-600 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths / Why Hire for PT Pabrik, Perusahaan & Kantor */}
          <div className="p-5 bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-slate-800 dark:to-slate-850 rounded-xl border border-primary-100 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">
              Kelebihan &amp; Nilai Tambah Calon Karyawan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Pengalaman nyata membuat website kantor saat magang di The Local Enablers Bandung.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Fasih mengoperasikan Microsoft Excel (rekap/rumus data) dan Microsoft Word (surat &amp; SOP).</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Disiplin tinggi, bertanggung jawab, dan siap bekerja sistem shift / lembur di pabrik &amp; kantor.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Cepat beradaptasi dengan instruksi kerja, SOP perusahaan, dan target operasional tim.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
