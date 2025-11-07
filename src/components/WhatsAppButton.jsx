import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "923001234567";
  const message = "Hello, I want to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;
