import React, { useEffect } from "react";
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const typeConfig = {
    success: {
      bg: "bg-emerald-600 text-white border-emerald-500",
      icon: FaCheckCircle,
    },
    info: {
      bg: "bg-sky-600 text-white border-sky-500",
      icon: FaInfoCircle,
    },
    error: {
      bg: "bg-rose-600 text-white border-rose-500",
      icon: FaExclamationCircle,
    },
  };

  const current = typeConfig[type] || typeConfig.success;
  const Icon = current.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm sm:max-w-md transition-all">
      <div className={`${current.bg} rounded-2xl px-4 py-3.5 shadow-2xl flex items-center gap-3 border backdrop-blur-md`}>
        <Icon className="text-xl flex-shrink-0" />
        <p className="text-xs sm:text-sm font-semibold flex-1">{message}</p>
        <button
          onClick={onClose}
          className="p-1 hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label="Tutup notifikasi"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
