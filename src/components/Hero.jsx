import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaChartLine, FaDollarSign, FaTrophy } from "react-icons/fa";
import HeroImage from "../assets/logos/lapp.jpg";

const Hero = () => {
  return (
    <>
      <section
 id="home"
  className="relative flex flex-col items-center justify-center text-center font-[Poppins] w-full min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${HeroImage})` ,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "100px",         // header ke neeche content
     // optional, image ko scroll ke saath stable rakhta hai
  }}
>

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl flex flex-col items-center">
          {/* Limited Spots */}
          <div className="flex justify-center mb-6 animate-pulse">
            <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-600 rounded-full px-5 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-black text-lg">⚡</span>
              <p className="text-black font-semibold text-sm sm:text-base tracking-wide">
                Limited Spots: Only{" "}
                <span className="text-red-600 font-bold">5 Strategy Calls</span> This Week
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight">
            Scale Your Business{" "}
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">
              10x
            </span>
            <br />
            Faster with Proven Digital
            <br />
            Marketing
          </h1>

          {/* Stats */}
          <div className="text-green-400 text-center mb-10 leading-relaxed font-inter">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
              100% Revenue Increase in 90 Days | Doubled Conversions in 6
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
              Weeks | 1M+ Podcast Plays
            </p>
          </div>

          {/* Buttons */}
{/* Buttons Section */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">

  {/* Book Free Strategy Call Button */}
  <button
    type="submit"
    className="flex items-center justify-center gap-2 
               bg-red-600 hover:bg-red-700 text-white font-semibold 
               px-10 py-3 rounded-full transition text-lg 
               whitespace-nowrap w-64 h-14"
  >
    <FaPhoneAlt className="text-xl" /> Book Free Call 
  </button>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/923366261060"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 
               bg-green-500 hover:bg-green-600 text-white font-semibold 
               px-10 py-3 rounded-full transition text-lg 
               whitespace-nowrap w-64 h-14"
  >
    <FaWhatsapp className="text-xl" /> WhatsApp Now
  </a>

</div>


          {/* Stats Numbers */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 mt-10 text-center">
            <div>
              <div className="text-green-600 font-bold text-3xl sm:text-6xl">180+</div>
              <div className="text-white mt-1 text-sm sm:text-base">Clients Served</div>
            </div>
            <div>
              <div className="text-green-600 font-bold text-3xl sm:text-6xl">₨50M+</div>
              <div className="text-white mt-1 text-sm sm:text-base">Revenue Generated</div>
            </div>
            <div>
              <div className="text-green-600 font-bold text-3xl sm:text-6xl">1M+</div>
              <div className="text-white mt-1 text-sm sm:text-base">Average Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards Section */}
<section className="bg-black py-20 px-4 sm:px-6 md:px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500 leading-snug mb-6">
      Are You Tired of <span className="text-red-500">Slow Growth?</span>
    </h2>
    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-16">
      Most businesses struggle with the same frustrating problems that keep them stuck...
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center mb-12">
      {/* Card 1 */}
      <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="bg-red-500/10 p-5 rounded-full mb-5">
          <FaChartLine className="text-red-500 text-5xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-red-500 mb-3">Stagnant Revenue</h3>
        <p className="text-gray-300 mb-3">Your revenue has been flat for months, maybe even declining</p>
        <div className="text-red-500 text-3xl font-bold mb-2">-15%</div>
        <p className="text-gray-400 text-sm sm:text-base">Average business decline without proper marketing</p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="bg-yellow-400/10 p-5 rounded-full mb-5">
          <FaDollarSign className="text-yellow-400 text-5xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">Wasted Ad Spend</h3>
        <p className="text-gray-300 mb-3">Throwing money at Facebook and Google ads with poor results</p>
        <div className="text-yellow-400 text-3xl font-bold mb-2">Rs200K+</div>
        <p className="text-gray-400 text-sm sm:text-base">Average wasted on ineffective campaigns</p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="bg-red-500/10 p-5 rounded-full mb-5">
          <FaTrophy className="text-red-500 text-5xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-red-500 mb-3">Competitors Winning</h3>
        <p className="text-gray-300 mb-3">Watching competitors steal your market share</p>
        <div className="text-red-500 text-3xl font-bold mb-2">67%</div>
        <p className="text-gray-400 text-sm sm:text-base">Market share lost to better-marketed competitors</p>
      </div>
    </div>

    {/* Below cards text + button */}
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500 text-center mb-6">
      What if we told you there's a proven way to 10x your growth?
    </h3>
    <a
  href="#services"
  className="inline-block bg-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300 whitespace-nowrap"
>
  Show Me The Solution →
</a>

  </div>
</section>

    </>
  );
};

export default Hero;
