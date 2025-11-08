import React from "react";
import { FaChartLine, FaShoppingBag, FaVideo, FaMicrophone, FaLightbulb, FaCode } from "react-icons/fa";

const GrowthSystem = () => {
  return (
    <section id="services" className="bg-black text-center py-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Our <span className="text-red-500">10x Growth System</span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
        Six proven services that work together to accelerate your business
        growth exponentially
      </p>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto mb-12">
        {/* Card 1 */}
        <div className="bg-[#111] border border-gray-800 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-red-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaChartLine className="text-red-500 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">
            Digital Marketing
          </h3>
          <p className="text-gray-400 mb-4">
            Strategic campaigns that drive qualified leads and maximize ROI
          </p>
          <p className="text-green-400 font-semibold text-lg">
            +300% Revenue Growth
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111] border border-gray-800 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-red-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaShoppingBag className="text-red-400 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">
            Shopify Development
          </h3>
          <p className="text-gray-400 mb-4">
            High-converting e-commerce stores that sell while you sleep
          </p>
          <p className="text-green-400 font-semibold text-lg">
            +250% Conversion Rate
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111] border border-gray-800 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-yellow-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaVideo className="text-yellow-400 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">
            Facebook & TikTok Ads
          </h3>
          <p className="text-gray-400 mb-4">
            Viral campaigns that reach millions and convert like crazy
          </p>
          <p className="text-green-400 font-semibold text-lg">
            5M+ Reach Monthly
          </p>
        </div>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
        {/* Card 4 */}
        <div className="bg-[#111] border border-gray-800 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-green-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaMicrophone className="text-green-500 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">
            Podcast Production
          </h3>
          <p className="text-gray-400 mb-4">
            Build authority and reach new audiences through podcasting
          </p>
          <p className="text-green-400 font-semibold text-lg">
            20K+ Monthly Plays
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#111] border border-gray-800 hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-amber-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaLightbulb className="text-amber-400 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">Brand Building</h3>
          <p className="text-gray-400 mb-4">
            Create a memorable brand that customers love and trust
          </p>
          <p className="text-green-400 font-semibold text-lg">
            +400% Brand Recognition
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-[#111] border border-gray-800 hover:border-red-600 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300 p-8 rounded-2xl shadow-lg text-left max-w-sm w-full">
          <div className="bg-red-900/30 w-14 h-14 flex items-center justify-center rounded-full mb-6">
            <FaCode className="text-red-500 text-3xl" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-3">Web Development</h3>
          <p className="text-gray-400 mb-4">
            Lightning-fast websites that convert visitors into customers
          </p>
          <p className="text-green-400 font-semibold text-lg">
            +180% Page Speed
          </p>
        </div>
      </div>

      {/* Button */}
<div className="mt-16">
  <button
    id="case-studies"
    className="bg-red-600 text-white font-semibold text-lg py-4 px-12 rounded-full border border-white/20 hover:bg-red-700 hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all duration-300"
    onClick={() => {
      const section = document.getElementById("case-studies");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    See Real Results →
  </button>
</div>

    </section>
  );
};

export default GrowthSystem;
