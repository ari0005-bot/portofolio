import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-elegant-900/90 dark:backdrop-blur-md dark:shadow-lg bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold gradient-text">Portofolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-elegant-700 dark:text-elegant-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://web.telegram.org/k/"
                aria-label="Telegram"
                className="w-8 h-8 bg-elegant-100 dark:bg-elegant-800 rounded-lg flex items-center justify-center hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
              >
                <FaTelegram className="text-elegant-600 dark:text-elegant-400 text-sm" />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="w-8 h-8 bg-elegant-100 dark:bg-elegant-800 rounded-lg flex items-center justify-center hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
              >
                <FaInstagram className="text-elegant-600 dark:text-elegant-400 text-sm" />
              </a>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-elegant-100 dark:bg-elegant-800 hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-elegant-600 dark:text-elegant-400" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-elegant-100 dark:bg-elegant-800 hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-elegant-600 dark:text-elegant-400" />
              ) : (
                <FaBars className="text-elegant-600 dark:text-elegant-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white dark:bg-elegant-800 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-elegant-700 dark:text-elegant-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}

              {/* Social Links - Mobile */}
              <div className="flex items-center gap-3 pt-4 border-t border-elegant-200 dark:border-elegant-600">
                <a
                  href="https://t.me/username"
                  aria-label="Telegram"
                  className="w-8 h-8 bg-elegant-100 dark:bg-elegant-800 rounded-lg flex items-center justify-center hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
                >
                  <FaTelegram className="text-elegant-600 dark:text-elegant-400 text-sm" />
                </a>
                <a
                  href="https://instagram.com/username"
                  aria-label="Instagram"
                  className="w-8 h-8 bg-elegant-100 dark:bg-elegant-800 rounded-lg flex items-center justify-center hover:bg-elegant-200 dark:hover:bg-elegant-700 transition-colors duration-300"
                >
                  <FaInstagram className="text-elegant-600 dark:text-elegant-400 text-sm" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
