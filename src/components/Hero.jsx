import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ari-52100a381/",
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-elegant-200 dark:bg-elegant-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="gradient-text">I'm Ari</span>
            </h1>

            {/* Title */}
            <div className="text-2xl md:text-3xl text-elegant-600 dark:text-elegant-400 mb-8 font-medium">
              Future Frontend Developer
            </div>

            {/* Description */}
            <p className="text-lg text-elegant-500 dark:text-elegant-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Saya sedang mengembangkan kemampuan di bidang frontend dan UI/UX
              untuk membangun tampilan web yang modern, responsif, dan
              user-friendly. Saat ini saya aktif belajar melalui berbagai
              project praktik untuk menjadi Frontend Developer profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover-lift shadow-lg"
              >
                Hubungi Saya
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white dark:bg-elegant-800 text-elegant-700 dark:text-elegant-300 rounded-lg font-medium border-2 border-elegant-200 dark:border-elegant-600 hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-16">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white dark:bg-elegant-800 rounded-full flex items-center justify-center shadow-md hover-lift text-elegant-600 dark:text-elegant-400 hover:text-primary-500 transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/images/gg.png"
                alt="Profile Illustration"
                className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] object-cover rounded-full mx-auto shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent-500 rounded-full opacity-20 blur-xl animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-elegant-400 dark:text-elegant-500 hover:text-primary-500 transition-colors duration-300"
          >
            <FaArrowDown className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
