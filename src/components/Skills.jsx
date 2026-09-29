import React, { useState } from "react";
import {
  FaCode,
  FaPalette,
  FaTools,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaFileExcel,
  FaFileWord,
  FaTable,
  FaTasks,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Keahlian", icon: FaCode },
    { id: "frontend", name: "Web & Frontend", icon: SiReact },
    { id: "office", name: "Office & Administrasi", icon: FaFileExcel },
    { id: "tools", name: "Tools & Workflow", icon: FaTools },
  ];

  const skillsData = [
    // Office & Administrasi
    {
      name: "Microsoft Excel",
      category: "office",
      level: 88,
      icon: FaFileExcel,
      color: "text-emerald-500",
      bgGradient: "from-emerald-500 to-green-600",
      description: "Formula Logika, VLOOKUP, Pivot Table, Rekapitulasi Data, Formatting Spreadsheet",
    },
    {
      name: "Microsoft Word",
      category: "office",
      level: 90,
      icon: FaFileWord,
      color: "text-blue-500",
      bgGradient: "from-blue-500 to-indigo-600",
      description: "Penyusunan Surat Resmi, Dokumen SOP, Laporan Berkala, Notulensi, Tata Letak Rapi",
    },
    {
      name: "Data Entry & Rekapitulasi",
      category: "office",
      level: 90,
      icon: FaTable,
      color: "text-teal-500",
      bgGradient: "from-teal-500 to-cyan-600",
      description: "Pengetikan Cepat & Teliti, Validasi Data, Pengarsipan Dokumen Kantor & Pabrik",
    },
    {
      name: "Google Workspace",
      category: "office",
      level: 85,
      icon: FaTasks,
      color: "text-amber-500",
      bgGradient: "from-amber-500 to-orange-600",
      description: "Google Docs, Google Sheets, Google Drive Cloud Storage, Kolaborasi Dokumen Online",
    },

    // Frontend & Web
    {
      name: "React.js",
      category: "frontend",
      level: 85,
      icon: SiReact,
      color: "text-sky-400",
      bgGradient: "from-sky-500 to-blue-600",
      description: "Hooks, Component Architecture, State Management, Router, Props, Pembuatan Web Kantor",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: 82,
      icon: SiJavascript,
      color: "text-amber-400",
      bgGradient: "from-amber-400 to-yellow-600",
      description: "Async/Await, Fetch API, DOM Manipulation, Array Methods, Logika Pemrograman",
    },
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      level: 90,
      icon: SiHtml5,
      color: "text-orange-500",
      bgGradient: "from-orange-500 to-red-600",
      description: "Struktur Semantik, Layout Responsif, Form Validation, Flexbox & Grid System",
    },
    {
      name: "Tailwind CSS & Bootstrap",
      category: "frontend",
      level: 88,
      icon: SiTailwindcss,
      color: "text-teal-400",
      bgGradient: "from-teal-400 to-cyan-600",
      description: "Utility-First, Responsive Design Multi-Device, Custom UI, Modern Components",
    },

    // Tools & Workflow
    {
      name: "Git & GitHub",
      category: "tools",
      level: 80,
      icon: SiGithub,
      color: "text-slate-700 dark:text-slate-200",
      bgGradient: "from-slate-600 to-slate-800",
      description: "Version Control, Branching, Pull Requests, Commits, Manajemen Repositori Proyek",
    },
    {
      name: "REST API Integration",
      category: "tools",
      level: 82,
      icon: FaCode,
      color: "text-emerald-500",
      bgGradient: "from-emerald-500 to-teal-600",
      description: "Konsumsi Endpoint API, JSON Parsing, Error Handling, State Data Terstruktur",
    },
    {
      name: "Figma & UI Slicing",
      category: "tools",
      level: 75,
      icon: SiFigma,
      color: "text-rose-400",
      bgGradient: "from-rose-400 to-pink-600",
      description: "Penerjemahan Desain Wireframe ke Kode Web Nyata, Penyelarasan Tipografi & Warna",
    },
  ];

  const softSkills = [
    {
      title: "Ketelitian Data",
      desc: "Akurat dan teliti dalam mengolah angka, rekapitulasi data, serta dokumen administrasi.",
      icon: FaCheckCircle,
    },
    {
      title: "Problem Solving",
      desc: "Mampu menganalisis masalah teknis/operasional dan mencari solusi efisien.",
      icon: FaLightbulb,
    },
    {
      title: "Kerja Tim & Komunikasi",
      desc: "Komunikatif, ramah, dan siap berkolaborasi lintas departemen kantor maupun pabrik.",
      icon: FaUsers,
    },
    {
      title: "Disiplin & Manajemen Waktu",
      desc: "Menyelesaikan tugas tepat waktu dan patuh pada SOP serta standar kerja perusahaan.",
      icon: FaClock,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            Tech Stack &amp; Kapabilitas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keahlian &amp; <span className="gradient-text">Kompetensi</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kombinasi keahlian Web Development, pengolahan data Microsoft Excel &amp; Word, serta manajemen administrasi operasional.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md glow-primary scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                <Icon className="text-base" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 shadow-sm hover-lift transition-all space-y-4"
              >
                {/* Header: Icon + Name + Percentage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl shadow-inner">
                      <Icon className={skill.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                        {skill.category === "office"
                          ? "Office & Administrasi"
                          : skill.category === "frontend"
                          ? "Web & Frontend"
                          : "Workflow & Tools"}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-black text-sky-600 dark:text-sky-400">
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.bgGradient} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Description Tag */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Professional Attributes */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white to-sky-50/70 dark:from-slate-900 dark:to-slate-850 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Karakter &amp; Soft Skills Profesional
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Kombinasi keahlian teknis dengan etos kerja dan komunikasi yang siap pakai untuk dunia industri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-lg">
                  <item.icon />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
