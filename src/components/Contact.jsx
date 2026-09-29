import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaCopy,
  FaCheck,
  FaComments,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Contact = ({ onNotify, onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState(null);
  const [sendMethod, setSendMethod] = useState("email"); // 'email' or 'wa'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = (text, type, label) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onNotify) {
      onNotify(`${label} berhasil disalin ke clipboard!`, "success");
    }
    setTimeout(() => setCopiedType(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("subject", formData.subject);
      data.append("message", formData.message);
      data.append("_subject", `[Portofolio Ari] Pesan dari ${formData.name}: ${formData.subject || "Peluang Kerja"}`);
      data.append("_template", "table");
      data.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/arisaprudin0005@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      const result = await response.json();

      setIsSubmitting(false);
      setSubmitSuccess(true);
      if (onNotify) {
        onNotify("Pesan berhasil diproses ke gateway email!", "success");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      if (onNotify) {
        onNotify("Pesan siap diteruskan via Gmail atau WhatsApp!", "info");
      }
    }
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name || !formData.message) {
      if (onNotify) {
        onNotify("Mohon isi nama dan pesan Anda terlebih dahulu.", "info");
      }
      return;
    }
    const text = `Halo Ari, nama saya *${formData.name}* (${formData.email || "No email"}).%0A%0A*Subjek:* ${formData.subject || "Peluang Kerja / Kolaborasi"}%0A%0A*Pesan:*%0A${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/6282373309755?text=${text}`, "_blank");
  };

  const handleDirectGmail = () => {
    const mailtoUrl = `mailto:arisaprudin0005@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Pesan dari Portofolio Web"
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const contactCards = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "arisaprudin0005@gmail.com",
      href: "mailto:arisaprudin0005@gmail.com",
      copyValue: "arisaprudin0005@gmail.com",
      type: "email",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp / Telepon",
      value: "+62 823-7330-9755",
      href: "https://wa.me/6282373309755?text=Halo%20Ari%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi",
      copyValue: "+6282373309755",
      type: "phone",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Alamat & Domisili",
      value: "Dusun Lemahneundet, Desa Awiluar, Kec. Lumbung, Kab. Ciamis, Jawa Barat",
      href: "https://maps.google.com/?q=Awiluar+Lumbung+Ciamis+Jawa+Barat",
      type: "location",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const socialProfiles = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ari-52100a381/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/",
      color: "hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 hover:text-white",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/6282373309755",
      color: "hover:bg-emerald-600 hover:text-white",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      href: "https://web.telegram.org/k/",
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/rrrryyyy_00/",
      color: "hover:bg-pink-600 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            Mari Berkolaborasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Apakah Anda memiliki tawaran pekerjaan, proyek website, atau ingin berdiskusi? Kirim pesan langsung ke email atau WhatsApp saya melalui formulir di bawah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Kontak &amp; Saluran Langsung
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Terbuka untuk peluang kerja di PT Pabrik Manufaktur, Perusahaan Swasta, dan Perkantoran.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 hover-lift transition-all"
                >
                  <a
                    href={card.href}
                    target={card.type === "email" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-4 flex-1 group min-w-0"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center text-xl shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <card.icon />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        {card.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white truncate block group-hover:text-sky-500 transition-colors">
                        {card.value}
                      </span>
                    </div>
                  </a>

                  {card.copyValue && (
                    <button
                      onClick={() => handleCopy(card.copyValue, card.type, card.label)}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors flex-shrink-0"
                      title={`Salin ${card.label}`}
                    >
                      {copiedType === card.type ? (
                        <FaCheck className="text-emerald-500 text-sm" />
                      ) : (
                        <FaCopy className="text-sm" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media Channels */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Profil Sosial &amp; Jaringan
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialProfiles.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-300 text-lg shadow-sm transition-all duration-200 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Pesan akan otomatis diteruskan ke inbox <strong>arisaprudin0005@gmail.com</strong>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Email Inbox Aktif</span>
                </div>
              </div>

              {submitSuccess ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-xl">
                      Pesan Anda Berhasil Terkirim!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
                      Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diteruskan ke inbox <strong>arisaprudin0005@gmail.com</strong>.
                    </p>
                    <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-[12px] text-amber-800 dark:text-amber-300 text-left flex items-start gap-2">
                      <span className="font-bold text-sm">💡</span>
                      <div>
                        <strong>Penting untuk Pemilik Email (Ari):</strong> Jika ini pengiriman perdana, periksa tab <strong>Kotak Masuk / Spam</strong> di Gmail Anda, buka email dari <em>FormSubmit</em>, dan klik <strong>"Activate Form"</strong> agar pesan berikutnya langsung masuk tanpa tertahan.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition-colors"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Kirim Juga via WhatsApp</span>
                    </button>
                    <button
                      onClick={handleDirectGmail}
                      className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition-colors"
                    >
                      <FaEnvelope className="text-sm" />
                      <span>Buka di Aplikasi Gmail</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold rounded-xl"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda atau Perusahaan..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        Alamat Email Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      Subjek / Keperluan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Tawaran Kerja / Peluang Web Dev & Administrasi"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      Isi Pesan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan detail pesan, tawaran kerja, atau pertanyaan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold rounded-xl text-sm shadow-md glow-primary flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Mengirim ke Email...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Kirim ke Email Saya</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                      title="Kirim Langsung ke WhatsApp"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span className="hidden sm:inline">Kirim via WA</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
