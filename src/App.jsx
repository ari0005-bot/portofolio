import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Toast from "./components/Toast";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  const showNotification = (message, type = "success") => {
    setToast({ message, type });
  };

  const closeNotification = () => {
    setToast({ message: "", type: "success" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navbar Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNotify={showNotification}
        />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Portfolio />
        <Contact
          onNotify={showNotification}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNotify={showNotification}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onNotify={showNotification}
      />

      {/* Toast Notification Alert */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeNotification}
      />
    </div>
  );
}

export default App;
