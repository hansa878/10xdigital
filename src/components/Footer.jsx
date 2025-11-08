import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="10xDigital.pk" className="w-10 h-10 object-contain" />
            <span className="text-red-500 font-bold text-lg">10xDigital.pk</span>
          </div>
          <p>
            We help businesses achieve 10x faster growth through proven digital marketing strategies, high-converting ads, and professional web development.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:hello@10xdigital.pk"
              className="bg-red-900 hover:bg-red-800 p-3 rounded-full text-white transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/your-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Middle Section - Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/digital-marketing" className="hover:text-red-500 transition-colors">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="/shopify-development" className="hover:text-red-500 transition-colors">
                Shopify Development
              </a>
            </li>
            <li>
              <a href="/facebook-tiktok-ads" className="hover:text-red-500 transition-colors">
                Facebook & TikTok Ads
              </a>
            </li>
            <li>
              <a href="/podcast-production" className="hover:text-red-500 transition-colors">
                Podcast Production
              </a>
            </li>
            <li>
              <a href="/brand-building" className="hover:text-red-500 transition-colors">
                Brand Building
              </a>
            </li>
            <li>
              <a href="/web-development" className="hover:text-red-500 transition-colors">
                Web Development
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#about" className="hover:text-red-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-red-500 transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-red-500 transition-colors">
                Our Clients
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm relative">
        © 2025 10xDigital.pk. All Rights Reserved. | Helping businesses achieve 10x faster growth.
      </div>
    </footer>
  );
};

export default Footer;
