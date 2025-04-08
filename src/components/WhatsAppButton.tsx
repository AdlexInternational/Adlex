import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919897686964"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-900 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
