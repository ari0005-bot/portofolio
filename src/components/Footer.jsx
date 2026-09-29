import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaFileAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = ({ onNotify, onOpenResume }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onNotify) {
      onNotify("Terima kasih telah terhubung dengan newsletter saya!", "success");
    }
  };

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Saya", href: "#about" },
    { name: "Keahlian & Tech", href: "#skills" },
    { name: "Portofolio Proyek", href: "#portfolio" },
    { name: "Hubungi Saya", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ari-52100a381/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/6282373309755",
      label: "WhatsApp",
    },
    {
      icon: FaTelegram,
      href: "https://web.telegram.org/k/",
      label: "Telegram",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rrrryyyy_00/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Profile Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                A
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Ari
                </span>
                <span className="text-xs font-semibold text-sky-400 block">
                  Frontend Web Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Mendedikasikan diri untuk membangun aplikasi web modern, cepat, dan responsif. Terbuka untuk peluang kerja full-time, magang, dan proyek kolaboratif.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  title={s.label}
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>Lihat Curriculum Vitae (CV)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tetap Terhubung
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapatkan pembaruan portofolio dan artikel teknologi langsung di inbox Anda.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700 text-emerald-300 rounded-xl text-xs font-semibold">
                ✓ Terima kasih! Anda telah terdaftar.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ketik email Anda..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-all whitespace-nowrap"
                >
                  Langganan
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>📍 Dusun Lemahneundet, Awiluar, Lumbung, Ciamis, Jawa Barat</div>
              <div>📱 0823-7330-9755</div>
              <div>✉️ arisaprudin0005@gmail.com</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} Ari. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-rose-500 text-xs" /> React &amp; Tailwind CSS
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
