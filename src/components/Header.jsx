import React, { useState } from "react";
import Logo from "../assets/logo.jpg"; // apna logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold text-red-600 whitespace-nowrap">
            10xDigital.pk
          </h1>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-10">
          <a href="#home" className="text-black hover:text-red-600 font-semibold transition">
            Home
          </a>
          <a href="#services" className="text-black hover:text-red-600 font-semibold transition">
            Services
          </a>
          <a href="#case-studies" className="text-black hover:text-red-600 font-semibold transition">
            Case Studies
          </a>
          <a href="#clients" className="text-black hover:text-red-600 font-semibold transition">
            Clients
          </a>
          <a href="#about" className="text-black hover:text-red-600 font-semibold transition">
            About Us
          </a>
          <a href="#contact" className="text-black hover:text-red-600 font-semibold transition">
            Contact Us
          </a>
        </nav>

        <div className="hidden md:flex space-x-3">
  <a
    href="https://wa.me/923366261060?text=Hello!%20I%20want%20to%20connect%20with%2010xDigital.pk"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-green-600 transition"
  >
    WhatsApp
  </a>
  <a
    href="#butto-call"
    className="bg-red-600 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-red-700 transition"
  >
    Book Call
  </a>
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="text-black hover:text-red-600 font-semibold">
            Home
          </a>
          <a href="#services" className="text-black hover:text-red-600 font-semibold">
            Services
          </a>
          <a href="#case-studies" className="text-black hover:text-red-600 font-semibold">
            Case Studies
          </a>
          <a href="#clients" className="text-black hover:text-red-600 font-semibold">
            Clients
          </a>
          <a href="#about" className="text-black hover:text-red-600 font-semibold">
            About Us
          </a>
          <a href="#contact" className="text-black hover:text-red-600 font-semibold">
            Contact Us
          </a>

          {/* Buttons (Mobile) */}
<div className="flex space-x-3 pt-3">
  <a
    href="https://wa.me/923366261060?text=Hello!%20I%20want%20to%20connect%20with%2010xDigital.pk"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-green-600 transition"
  >
    WhatsApp
  </a>
  <a
    href="#button"
    className="bg-red-600 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-red-700 transition"
  >
    Book Call
  </a>
</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
