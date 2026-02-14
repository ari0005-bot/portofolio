import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Kontak", href: "#contact" },
  ];

  const services = ["Frontend Development", "UI/UX Design"];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/feed/",
      label: "LinkedIn",
    },
    {
      icon: FaTelegram,
      href: "https://web.telegram.org/k/",
      label: "Telegram",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      value: "arisaprudin0005@gmail.com",
      href: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      icon: FaPhone,
      value: "+62 857-2407-3570",
      href: "https://web.whatsapp.com/",
    },
    {
      icon: FaMapMarkerAlt,
      value: "Depok, Indonesia",
      href: "https://www.google.com/maps/place/PeTIK+(Pesantren+Teknologi+Informasi+dan+Komunikasi)+Program+Kuliah+IT+Gratis+Binaan+YBM+PLN/@-6.386864,106.7748955,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e92c0df5da9d:0x8499222ee6779470!8m2!3d-6.3868693!4d106.7774704!16s%2Fg%2F11cjhzb1xx?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-elegant-900 to-elegant-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-elegant-300 mb-6 leading-relaxed">
              Seorang developer yang passionate dalam menciptakan solusi digital
              yang inovatif dan elegan dengan teknologi terkini.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-elegant-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group"
                >
                  <social.icon className="text-elegant-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-elegant-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-elegant-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-400 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-elegant-300 hover:text-primary-400 transition-colors duration-300"
                >
                  <info.icon className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{info.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 p-8 bg-elegant-800 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Tetap Terhubung</h3>
            <p className="text-elegant-300 mb-6 max-w-2xl mx-auto">
              Dapatkan update terbaru tentang proyek-proyek saya dan tips
              teknologi langsung di inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white placeholder-elegant-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover-lift whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-elegant-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-elegant-400 text-sm">
              © {new Date().getFullYear()} © 2026 Ari. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <span className="text-elegant-400 text-sm">
                Built with ❤️ using React
              </span>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-elegant-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group"
                aria-label="Back to top"
              >
                <FaArrowUp className="text-elegant-300 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
