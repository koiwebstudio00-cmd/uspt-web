import React from "react";

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "5493815828720"; // Ajustar si corresponde
  const message = encodeURIComponent("Hola, quiero más información sobre la USPT.");
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#610076] shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#610076]/20"
    >
      {/* Icono WhatsApp SVG inline para no depender de assets */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7 text-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.19c-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29 0 1.34.99 2.64 1.13 2.82.14.18 1.95 2.98 4.73 4.2.66.29 1.17.46 1.57.59.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32z" />
        <path d="M16.02 3.2C9.3 3.2 3.84 8.66 3.84 15.38c0 2.66.86 5.12 2.32 7.12L4.8 28.83l6.5-1.7c1.93 1.06 4.16 1.66 6.52 1.66 6.72 0 12.18-5.46 12.18-12.18S22.74 3.2 16.02 3.2zm0 22.13c-2.15 0-4.15-.65-5.8-1.76l-.42-.27-3.86 1.01 1.03-3.77-.28-.39a10.14 10.14 0 01-1.87-5.98c0-5.62 4.58-10.2 10.2-10.2s10.2 4.58 10.2 10.2-4.58 10.2-10.2 10.2z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;