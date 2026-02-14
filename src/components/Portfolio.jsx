import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaSearchPlus } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", name: "Semua" },
    { id: "web", name: "Web App" },
  ];

  const projects = [
    {
      id: 1,
      title: "NongkiBroo Coffee Shop",
      category: "web",
      image: "/images/nongki.png",
      description:
        "Website kedai kopi modern dengan desain yang menarik dan user-friendly untuk meningkatkan pengalaman pelanggan.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: true,
    },
    {
      id: 2,
      title: "PeTIK Blog",
      category: "web",
      image: "/images/petik.png",
      description:
        "Blog platform untuk lembaga pendidikan PeTIK yang fokus pada pengembangan keterampilan IT dan teknologi digital.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: true,
    },

    {
      id: 4,
      title: "Qur'an Explorer",
      category: "web",
      image: "/images/APIquran.png",
      description:
        "Aplikasi web untuk membaca dan mempelajari Al-Qur'an dengan fitur pencarian surat dan informasi detail.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: false,
    },

    {
      id: 6,
      title: "Donation Platform",
      category: "web",
      image: "/images/donasi.png",
      description:
        "Platform donasi online untuk membantu kegiatan sosial dan amal dengan sistem pembayaran yang aman.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: false,
    },
    {
      id: 7,
      title: "Coffee Shop",
      category: "web",
      image: "/images/kedai.png",
      description:
        "Website kedai kopi dengan sistem pemesanan online dan manajemen inventory.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: false,
    },
    {
      id: 8,
      title: "E-Commerce Shop",
      category: "web",
      image: "/images/shop.png",
      description:
        "Toko online dengan fitur shopping cart, payment gateway, dan dashboard admin.",
      technologies: ["React.js", "Bootstrap", "Reactstrap", "Javascript"],
      githubUrl: "https://github.com/",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Portofolio</span>
          </h2>
          <p className="text-lg text-elegant-500 max-w-2xl mx-auto">
            Kumpulan project yang saya kerjakan sebagai bagian dari proses
            belajar dan pengembangan skill web development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-8 text-center">
            Proyek Unggulan
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift bg-gradient-to-br from-elegant-50 to-white dark:from-elegant-900 dark:to-black"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h4 className="text-xl font-bold text-elegant-800 dark:text-elegant-200 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-elegant-600 dark:text-elegant-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg text-sm font-medium hover-lift"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "bg-elegant-100 dark:bg-elegant-800 text-elegant-600 dark:text-elegant-300 hover:bg-elegant-200 dark:hover:bg-elegant-700"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white dark:bg-elegant-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                  >
                    <FaSearchPlus className="text-elegant-700" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-elegant-800 dark:text-elegant-200 mb-2">
                  {project.title}
                </h4>
                <p className="text-elegant-600 dark:text-elegant-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-elegant-100 dark:bg-elegant-700 text-elegant-600 dark:text-elegant-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-elegant-100 dark:bg-elegant-700 text-elegant-600 dark:text-elegant-300 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                  >
                    <FaGithub className="text-xs" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-elegant-100 to-elegant-200 dark:from-elegant-800 dark:to-elegant-700 text-elegant-700 dark:text-elegant-300 rounded-lg font-medium hover-lift"
          >
            Lihat Lebih Banyak di GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-elegant-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-elegant-600 dark:text-elegant-400 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-elegant-700 dark:text-elegant-300 mb-2">
                  Teknologi yang digunakan:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover-lift"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
