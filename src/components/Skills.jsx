import React, { useState } from "react";
import { FaCode, FaPalette } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua", icon: FaCode },
    { id: "frontend", name: "Frontend", icon: FaPalette },
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
      { name: "Javascript", level: 80, color: "from-yellow-400 to-indigo-500" },
      { name: "CSS", level: 80, color: "from-blue-400 to-indigo-500" },
      { name: "Tailwind CSS", level: 80, color: "from-teal-400 to-cyan-500" },
      { name: "Bootsrap", level: 80, color: "from-purple-700 to-purple-900" },
      { name: "Reactstrap", level: 80, color: "from-blue-700 to-blue-900" },
    ],
  };

  const allSkills = Object.values(skills).flat();

  const displaySkills =
    activeCategory === "all" ? allSkills : skills[activeCategory] || [];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">
              Tools & Technologies Skills in Progress
            </span>
          </h2>
          <p className="text-lg text-elegant-500 max-w-2xl mx-auto">
            Berbagai teknologi yang sedang saya pelajari dan gunakan untuk
            membangun solusi digital.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "bg-white dark:bg-elegant-800 text-elegant-600 dark:text-elegant-300 hover:bg-elegant-100 dark:hover:bg-elegant-700 border border-elegant-200 dark:border-elegant-600"
              }`}
            >
              <category.icon className="text-lg" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-elegant-800 p-6 rounded-xl shadow-md hover-lift border border-elegant-100 dark:border-elegant-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-elegant-800 dark:text-elegant-200">
                  {skill.name}
                </h4>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-elegant-200 dark:bg-elegant-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`,
                  }}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-medium text-elegant-600 dark:text-elegant-400">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* UI Design Showcase */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-4">
              UI Design Projects
            </h3>
            <p className="text-elegant-600 dark:text-elegant-400 max-w-2xl mx-auto">
              Beberapa desain UI yang telah saya buat untuk berbagai aplikasi web.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-elegant-800 dark:to-elegant-700 p-1">
                <img
                  src="/images/ui.png"
                  alt="UI Design Showcase"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent-500 rounded-full opacity-20 blur-xl animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-elegant-900 dark:to-elegant-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-elegant-800 dark:text-elegant-200 mb-4">
              Terus Belajar & Mengembangkan Skill
            </h3>
            <p className="text-elegant-600 dark:text-elegant-400 max-w-2xl mx-auto mb-6">
              Saya terus belajar dan mengikuti perkembangan teknologi frontend
              untuk meningkatkan kemampuan serta membangun tampilan web yang
              modern, responsif, dan user-friendly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Agile/Scrum",
                "UI/UX Design",
                "Time Management",
              ].map((softSkill) => (
                <span
                  key={softSkill}
                  className="px-4 py-2 bg-white dark:bg-elegant-800 text-elegant-700 dark:text-elegant-300 rounded-full text-sm font-medium border border-elegant-200 dark:border-elegant-600"
                >
                  {softSkill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
