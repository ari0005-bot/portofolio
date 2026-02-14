import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "arisaprudin0005@gmail.com",
      href: "https://mail.google.com/mail/u/0/",
    },
    {
      icon: FaPhone,
      label: "Telepon",
      value: "+62 857-2407-3570",
      href: "https://web.whatsapp.com/",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Lokasi",
      value: "Based in Depok, Indonesia (Originally from Ciamis)",
      href: "https://www.google.com/maps/place/PeTIK+(Pesantren+Teknologi+Informasi+dan+Komunikasi)+Program+Kuliah+IT+Gratis+Binaan+YBM+PLN/@-6.3868639,106.772857,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e92c0df5da9d:0x8499222ee6779470!8m2!3d-6.3868693!4d106.7774704!16s%2Fg%2F11cjhzb1xx?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/feed/",
      label: "LinkedIn",
    },
    { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Hubungi Saya</span>
          </h2>
          <p className="text-lg text-elegant-500 max-w-2xl mx-auto">
            Mari diskusikan proyek Anda bersama saya. Saya siap membantu
            mewujudkan ide-ide brilian Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-8">
              Mari Terhubung
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-6 bg-white dark:bg-elegant-800 rounded-xl shadow-md hover-lift group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-elegant-500 dark:text-elegant-400 font-medium">
                      {info.label}
                    </p>
                    <p className="text-elegant-800 dark:text-elegant-200 font-semibold group-hover:text-primary-500 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-elegant-900 dark:to-elegant-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-elegant-800 dark:text-elegant-200 mb-4">
                Temukan saya di
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white dark:bg-elegant-800 rounded-lg flex items-center justify-center shadow-md hover-lift text-elegant-600 dark:text-elegant-400 hover:text-primary-500 transition-all duration-300"
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-elegant-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-6">
                Kirim Pesan
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                  Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan
                  segera menghubungi Anda.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-elegant-700 dark:text-elegant-300 mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-elegant-200 dark:border-elegant-600 bg-white dark:bg-elegant-700 text-elegant-800 dark:text-elegant-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="...."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-elegant-700 dark:text-elegant-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-elegant-200 dark:border-elegant-600 bg-white dark:bg-elegant-700 text-elegant-800 dark:text-elegant-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="...@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-elegant-700 dark:text-elegant-300 mb-2"
                  >
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-elegant-200 dark:border-elegant-600 bg-white dark:bg-elegant-700 text-elegant-800 dark:text-elegant-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Apa yang ingin Anda diskusikan?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-elegant-700 dark:text-elegant-300 mb-2"
                  >
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-elegant-200 dark:border-elegant-600 bg-white dark:bg-elegant-700 text-elegant-800 dark:text-elegant-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Halo, saya ingin mendiskusikan proyek..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover-lift shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-elegant-500 dark:text-elegant-400">
                Atau email langsung ke{" "}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="text-primary-500 hover:underline"
                >
                  arisaprudin0005@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Mari wujudkan ide-ide brilian Anda menjadi solusi digital yang
              luar biasa. Saya siap membantu dari konsep hingga implementasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover-lift"
              >
                <FaEnvelope />
                Email Sekarang
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
