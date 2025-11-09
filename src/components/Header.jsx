import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollProps = {
    smooth: true,
    duration: 600,
    offset: -70,
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
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
        <nav className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6">
          <Link to="home" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            Home
          </Link>
          <Link to="services" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            Services
          </Link>
          <Link to="case-studies" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            Case Studies
          </Link>
          <Link to="clients" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            Our Clients
          </Link>
          <Link to="about" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            About Us
          </Link>
          <Link to="contact" {...scrollProps} className="cursor-pointer text-black hover:text-red-600 font-semibold transition">
            Contact Us
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-2">
          <a
            href="https://wa.me/923366261060?text=Hello!%20I%20want%20to%20connect%20with%2010xDigital.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <Link
            to="butto-call"
            {...scrollProps}
            className="cursor-pointer bg-red-600 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-red-700 transition"
          >
            Book Call
          </Link>
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
        <nav className="flex flex-col items-center space-y-3 py-4">
          <Link to="home" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            Home
          </Link>
          <Link to="services" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            Services
          </Link>
          <Link to="case-studies" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            Case Studies
          </Link>
          <Link to="clients" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            Our Clients
          </Link>
          <Link to="about" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            About Us
          </Link>
          <Link to="contact" {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer text-black hover:text-red-600 font-semibold">
            Contact Us
          </Link>

          {/* Buttons (Mobile) */}
          <div className="flex space-x-2 pt-3">
            <a
              href="https://wa.me/923366261060?text=Hello!%20I%20want%20to%20connect%20with%2010xDigital.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            
<Link
  to="butto-call"       // <-- ensure this matches section id exactly
  smooth={true}
  duration={600}
  offset={-70}         // adjust for fixed header height
  className="cursor-pointer bg-red-600 text-white px-6 py-2.5 font-semibold rounded-full hover:bg-red-700 transition"
>
  Book Call
</Link>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
