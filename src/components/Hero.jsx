import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaArrowDown,
  FaFileAlt,
  FaCode,
  FaLayerGroup,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SiReact, SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";

const Hero = ({ onOpenResume, onNotify }) => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ari-52100a381/",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rrrryyyy_00/",
      label: "Instagram",
      color: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/6282373309755?text=Halo%20Ari%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi",
      label: "WhatsApp",
      color: "hover:text-emerald-500 hover:border-emerald-500",
    },
    {
      icon: FaEnvelope,
      href: "mailto:arisaprudin0005@gmail.com",
      label: "Email",
      color: "hover:text-rose-500 hover:border-rose-500",
    },
  ];

  const techBadges = [
    { name: "React.js", icon: SiReact, color: "text-sky-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "JavaScript ES6+", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 bg-slate-50 dark:bg-slate-950 bg-grid-pattern"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-0"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headline & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Siap Kerja &bull; Web Dev &bull; Administrasi &bull; Marketing &bull; Office Staff (Pabrik &amp; Kantor)</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Halo, Selamat Datang! Saya
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                <span className="gradient-text">Ari</span>
              </h1>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                Web Developer &bull; Staff Administrasi &bull; Marketing &bull; Office Staff
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Talenta muda berdisiplin tinggi dan cepat beradaptasi. Siap memberikan kontribusi terbaik untuk <strong className="text-slate-900 dark:text-white">PT Pabrik Manufaktur</strong>, <strong className="text-slate-900 dark:text-white">Perusahaan Swasta</strong>, dan <strong className="text-slate-900 dark:text-white">Perkantoran</strong> melalui keahlian IT &amp; Web, ketelitian pengolahan data administrasi (Ms. Excel/Office), promosi digital (Marketing), serta manajemen operasional kerja.
            </p>

            {/* Tech Stack Pills in Hero */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-sm"
                >
                  <tech.icon className={`text-sm ${tech.color}`} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-3">
              <a
                href="#portfolio"
                className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg glow-primary hover-lift flex items-center justify-center gap-2 text-sm sm:text-base transition-all"
              >
                <FaLayerGroup />
                <span>Lihat Proyek Saya</span>
              </a>
              <button
                onClick={onOpenResume}
                className="px-6 sm:px-7 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 rounded-xl font-bold shadow-sm hover-lift flex items-center justify-center gap-2 text-sm sm:text-base transition-all"
              >
                <FaFileAlt className="text-sky-500" />
                <span>Lihat &amp; Unduh CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:inline">
                Hubungi:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 shadow-sm hover-lift transition-all ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>

          </div>

          {/* Right Side: Profile Photo Card & Highlights */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Glowing decorative backdrop behind photo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-center space-y-6">
                
                {/* Image Container with Ring */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-blue-500 to-indigo-600 animate-spin-slow p-1"></div>
                  <img
                    src="/images/ar.jpg"
                    onError={(e) => {
                      // Fallback to gg.png if ar.jpg fails
                      e.target.src = "/images/gg.png";
                    }}
                    alt="Ari"
                    className="relative w-full h-full object-cover rounded-full p-1 bg-white dark:bg-slate-900 shadow-inner"
                  />
                  {/* Verified Badge */}
                  <div className="absolute bottom-1 right-2 bg-sky-500 text-white p-1.5 rounded-full shadow-md" title="Frontend Web Developer">
                    <FaCheckCircle className="text-base" />
                  </div>
                </div>

                {/* Info Text */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Ari
                  </h3>
                  <div className="inline-block mt-0.5 px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 text-[11px] font-bold border border-amber-300 dark:border-amber-800">
                    Sertifikasi BNSP &bull; Junior Web Developer
                  </div>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1">
                    D1 PeTIK IT (2026) &bull; SMAN 1 Kawali (IPS)
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                    Ex-Intern The Local Enablers Bandung
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Ciamis, Jawa Barat, Indonesia
                  </p>
                </div>

                {/* Highlights Stats Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <div className="text-lg font-black text-sky-600 dark:text-sky-400">6+</div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Proyek Web</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <div className="text-lg font-black text-indigo-600 dark:text-indigo-400">100%</div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Responsif</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">Ready</div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Hire / Magang</div>
                  </div>
                </div>

                {/* Quick WhatsApp Direct CTA */}
                <a
                  href="https://wa.me/6282373309755?text=Halo%20Ari%2C%20saya%20tertarik%20merekrut%20/%20berkolaborasi%20dengan%20Anda"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-md transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Kirim Pesan Cepat via WA</span>
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group text-xs font-semibold"
          >
            <span>Scroll ke bawah</span>
            <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-bounce group-hover:border-sky-500">
              <FaArrowDown className="text-xs" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
