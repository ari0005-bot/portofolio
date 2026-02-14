import React from "react";
import { FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";

const About = () => {
  const experiences = [
    {
      icon: FaBriefcase,
      title: "Pengalaman & Pembelajaran",
      items: [
        {
          position: "Web Development Student",
          company: "PeTIK (Pesantren Teknologi Informasi dan Komunikasi)",
          period: "2025 - 2026",
          description:
            "Mempelajari pengembangan frontend dan dasar UI/UX melalui project praktik.",
        },
      ],
    },
    {
      icon: FaGraduationCap,
      title: "Pendidikan",
      items: [
        {
          position: "Diploma Program - Web Development",
          company: "PeTIK (Pesantren Teknologi Informasi dan Komunikasi)",
          period: "2025 - 2026",
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Tentang Saya</span>
          </h2>
          <p className="text-lg text-elegant-500 max-w-2xl mx-auto">
            Saya adalah calon Frontend Developer yang memiliki ketertarikan
            besar pada teknologi dan desain. Saat ini saya fokus mempelajari
            frontend dan dasar UI/UX melalui berbagai project praktik untuk
            membangun tampilan web yang modern, responsif, dan user-friendly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-4">
              Menciptakan Solusi Digital yang Terus Berkembang
            </h3>
            <p className="text-elegant-600 dark:text-elegant-400 mb-6 leading-relaxed">
              Saya memiliki ketertarikan besar pada pengembangan web dan desain
              UI/UX. Saat ini saya fokus mengembangkan kemampuan untuk membangun
              aplikasi web yang fungsional, modern, dan user-friendly melalui
              berbagai project pembelajaran.
            </p>
            <p className="text-elegant-600 dark:text-elegant-400 mb-6 leading-relaxed">
              Saya percaya teknologi harus memudahkan hidup dan memberikan
              dampak positif. Karena itu, saya berusaha menggabungkan teknologi
              modern dengan desain yang sederhana, intuitif, dan elegan dalam
              setiap proyek yang saya kerjakan.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <span className="text-elegant-500 dark:text-elegant-400 text-sm">
                  Nama:
                </span>
                <p className="text-elegant-800 dark:text-elegant-200 font-medium">
                  Ari
                </p>
              </div>
              <div>
                <span className="text-elegant-500 dark:text-elegant-400 text-sm">
                  Email:
                </span>
                <p className="text-elegant-800 dark:text-elegant-200 font-medium">
                  arisaprudin0005@gmail.com
                </p>
              </div>
              <div>
                <span className="text-elegant-500 dark:text-elegant-400 text-sm">
                  Lokasi:
                </span>
                <p className="text-elegant-800 dark:text-elegant-200 font-medium">
                  <p>Depok, Indonesia</p>
                  <p>
                    <i>Originally from Ciamis</i>
                  </p>
                </p>
              </div>
              <div>
                <span className="text-elegant-500 dark:text-elegant-400 text-sm">
                  Status:
                </span>
                <p className="text-elegant-800 dark:text-elegant-200 font-medium">
                  <li>Open to Opportunities</li>
                  <li>Open to Collaboration</li>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover-lift shadow-lg"
            >
              Mari Bekerja Sama
            </a>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-elegant-50 to-white dark:from-elegant-900 dark:to-black p-6 rounded-xl border border-elegant-200 dark:border-elegant-700 hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <exp.icon className="text-white text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-elegant-800 dark:text-elegant-200">
                    {exp.title}
                  </h4>
                </div>
                <div className="space-y-4">
                  {exp.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-2 border-primary-200 pl-4"
                    >
                      <h5 className="font-semibold text-elegant-700 dark:text-elegant-300">
                        {item.position}
                      </h5>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {item.company}
                      </p>
                      <p className="text-xs text-elegant-500 dark:text-elegant-400 mb-1">
                        {item.period}
                      </p>
                      <p className="text-sm text-elegant-600 dark:text-elegant-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
