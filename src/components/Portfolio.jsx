import React, { useState, useMemo } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaSearch,
  FaTimes,
  FaStar,
  FaCheck,
  FaLayerGroup,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", name: "Semua Proyek" },
    { id: "webapp", name: "Web Application" },
    { id: "landing", name: "Landing Page & Portal" },
    { id: "ecommerce", name: "E-Commerce & Platform" },
  ];

  const projects = [
    {
      id: 1,
      title: "NongkiBroo Coffee Shop",
      category: "webapp",
      image: "/images/nongki.png",
      badge: "Featured Project",
      shortDesc: "Platform pemesanan kopi interaktif & katalog menu modern berbasis React.js.",
      description:
        "NongkiBroo adalah aplikasi web coffee shop modern yang dirancang untuk memudahkan pelanggan memilih kopi favorit, melihat promo, dan merasakan pengalaman pemesanan visual yang menarik dan responsif di berbagai perangkat.",
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      features: [
        "Katalog menu kopi interaktif dengan filter kategori",
        "Tampilan visual responsif & modern dengan micro-animations",
        "Perhitungan subtotal & estimasi order",
        "Navigasi dinamis dan modal detail produk",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Qur'an Explorer Digital App",
      category: "webapp",
      image: "/images/APIquran.png",
      badge: "API Integration",
      shortDesc: "Aplikasi penjelajah Al-Qur'an online dengan REST API, audio, & pencarian surat instan.",
      description:
        "Aplikasi web Al-Qur'an digital yang mengintegrasikan REST API publik untuk menampilkan 114 surat lengkap dengan teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, dan pemutar audio murottal.",
      technologies: ["React.js", "REST API", "Tailwind CSS", "Axios", "Audio API"],
      features: [
        "Pencarian surat cepat berdasarkan nama atau nomor",
        "Teks Arab yang jelas dengan terjemahan bahasa Indonesia",
        "Pemutar audio ayat & surat interaktif",
        "State management yang ringan dan efisien",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: true,
    },
    {
      id: 3,
      title: "PeTIK Information & Blog Portal",
      category: "landing",
      image: "/images/petik.png",
      badge: "Institutional Portal",
      shortDesc: "Website portal informasi & artikel edukasi IT untuk lembaga pendidikan PeTIK.",
      description:
        "Portal web resmi untuk PeTIK (Pesantren Teknologi Informasi dan Komunikasi) yang memuat artikel edukasi IT, info pendaftaran, visi misi lembaga, dan galeri kegiatan santri.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "JavaScript", "CSS3"],
      features: [
        "Tata letak halaman berita dan artikel terstruktur",
        "Formulir informasi dan kontak terintegrasi",
        "Desain clean dengan palet warna korporat islami",
        "Kecepatan loading optimal dan navigasi lancar",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: true,
    },
    {
      id: 4,
      title: "Donation & Peduli Sesama Platform",
      category: "ecommerce",
      image: "/images/donasi.png",
      badge: "Crowdfunding Web",
      shortDesc: "Platform donasi sosial online dengan pelacakan target dana dan program bantuan.",
      description:
        "Aplikasi web crowdfunding sosial untuk mengumpulkan donasi kemanusiaan, program beasiswa pendidikan, dan bantuan tanggap bencana dengan antarmuka yang transparan dan mudah digunakan.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Component State"],
      features: [
        "Progress bar pencapaian donasi dinamis",
        "Kategori program sosial terfilter rapi",
        "Formulir nominal donasi dengan pilihan metode transfer",
        "Desain UI yang menumbuhkan rasa empati dan kepercayaan",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: false,
    },
    {
      id: 5,
      title: "Kedai Kopi & Cafe Storefront",
      category: "landing",
      image: "/images/kedai.png",
      badge: "F&B Storefront",
      shortDesc: "Website landing page estetik untuk kafe lokal dengan sajian menu & reservasi meja.",
      description:
        "Website kedai kopi lokal berkonsep minimalis modern yang menonjolkan keunikan racikan biji kopi nusantara, testimoni pelanggan, lokasi maps, dan jam operasional.",
      technologies: ["React.js", "CSS Modules", "JavaScript", "Responsive UI"],
      features: [
        "Hero showcase dengan visual estetis",
        "Daftar menu andalan beserta detail harga",
        "Integrasi peta lokasi dan tombol WhatsApp reservasi",
        "Animasi transisi halus antar section",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: false,
    },
    {
      id: 6,
      title: "Modern E-Commerce Store",
      category: "ecommerce",
      image: "/images/shop.png",
      badge: "Full Storefront",
      shortDesc: "Aplikasi toko online dengan sistem keranjang belanja (cart) & filter produk.",
      description:
        "Prototype aplikasi belanja online dengan fitur katalog produk, filter harga, modal detail item, sistem penambahan ke keranjang (add to cart), dan ringkasan checkout.",
      technologies: ["React.js", "Tailwind CSS", "Context API / State", "JavaScript"],
      features: [
        "Filter produk berdasarkan kategori dan rentang harga",
        "Keranjang belanja (cart drawer) interaktif realtime",
        "Modal quick view produk dengan galeri gambar",
        "Kalkulasi total belanja dan simulasi checkout",
      ],
      githubUrl: "https://github.com/",
      demoUrl: "https://github.com/",
      featured: false,
    },
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        activeFilter === "all" || project.category === activeFilter;
      const matchSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            Karya &amp; Hasil Implementasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portofolio <span className="gradient-text">Proyek</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kumpulan proyek web nyata yang telah saya bangun untuk mempraktikkan arsitektur frontend, kebersihan kode, dan pengalaman pengguna yang optimal.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md glow-primary"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60"
                  }`}
                >
                  {filter.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek / teknologi..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                &times;
              </button>
            )}
          </div>

        </div>

        {/* Empty Search Result Feedback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              Tidak ada proyek yang sesuai dengan kata kunci "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="mt-3 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white font-bold rounded-xl text-xs hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-all shadow-lg flex items-center justify-center gap-1.5"
                    >
                      <FaLaptopCode />
                      <span>Lihat Detail Proyek</span>
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-sky-500/90 backdrop-blur-md text-white shadow-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-[11px] font-semibold border border-slate-200 dark:border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 text-[11px] font-semibold">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700/50 mt-4 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center"
                >
                  Detail &amp; Fitur
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  title="Lihat Source Code GitHub"
                >
                  <FaGithub className="text-sm" />
                  <span>Repo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Tertarik Melihat Kode &amp; Repositori Lainnya?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
              Saya rutin mendokumentasikan pembelajaran dan kode proyek di GitHub. Silakan kunjungi profil saya untuk melihat aktivitas coding terbaru.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-sm shadow-md hover-lift flex items-center gap-2 flex-shrink-0 transition-all"
          >
            <FaGithub className="text-base" />
            <span>Kunjungi GitHub Profil</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 bg-slate-950 flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Tutup Detail"
              >
                <FaTimes />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-500 text-white inline-block mb-2">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Deskripsi Proyek
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Fitur Utama &amp; Implementasi Teknis
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Stack Teknologi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <FaGithub />
                  <span>Lihat di GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm transition-colors"
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
