import React, { useState } from "react";

const CaseStudies = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="case-studies" className="bg-black text-center py-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-red-500">Proven Results</span>{" "}
        <span className="text-white">That Speak for Themselves</span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
        Real businesses, real growth, real results. Here’s how we’ve helped our
        clients achieve <span className="text-red-500 font-semibold">10x growth</span>.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* CARD 1 */}
        <div
          onMouseLeave={() => setActiveCard(null)}
          className={`bg-[#111] border ${
            activeCard === 1
              ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
              : "border-gray-800"
          } transition-all duration-300 rounded-2xl overflow-hidden flex flex-col cursor-pointer`}
        >
          <div className="p-4">
            <img
              src="https://photos.peopleimages.com/picture/202302/2781542-ecommerce-fashion-startup-clothing-stock-and-online-retail-business-selling-designer-boutique-clothes-to-customers-on-internet-sales-website.-a-black-woman-designer-business-leader-and-delivery-man-fit_400_400.jpg"
              alt="Fashion E-commerce"
              className="w-full h-44 object-cover rounded-xl"
            />
          </div>
          <div className="px-6 pb-6 text-left transition-all duration-300">
            <h3 className="text-white text-2xl font-bold mb-2">
              Fashion E-commerce Store
            </h3>
            <p className="text-gray-400 mb-6">
              From ₨50K to ₨200K monthly revenue in just 90 days
            </p>

            <div className="flex justify-between items-center text-sm md:text-base mb-4">
              <span className="text-gray-300">90 Days</span>
              <span
                onClick={() => handleCardClick(1)}
                className="text-red-500 font-semibold hover:underline"
              >
                Read Full Story →
              </span>
            </div>

            {activeCard === 1 && (
              <div className="border-t border-gray-700 pt-4 space-y-4 text-gray-300 text-sm animate-fadeIn">
                <div>
                  <strong className="text-white">Challenge:</strong>
                  <p>Low conversions, weak ad targeting, no brand identity.</p>
                </div>
                <div>
                  <strong className="text-white">Solution:</strong>
                  <p>Improved website UX + influencer marketing + ad optimization.</p>
                </div>
                <div>
                  <strong className="text-white">Results:</strong>
                  <ul className="list-disc list-inside">
                    <li>Revenue growth: ₨50K → ₨200K (+300%)</li>
                    <li>Customer base +180%</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CARD 2 */}
        <div
          onMouseLeave={() => setActiveCard(null)}
          className={`bg-[#111] border ${
            activeCard === 2
              ? "border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              : "border-gray-800"
          } transition-all duration-300 rounded-2xl overflow-hidden flex flex-col cursor-pointer`}
        >
          <div className="p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR008sTW6Qng8lh8KxYLWxlM6Af5OPu84C92A&s"
              alt="SaaS Startup"
              className="w-full h-44 object-cover rounded-xl"
            />
          </div>
          <div className="px-6 pb-6 text-left">
            <h3 className="text-white text-2xl font-bold mb-2">SaaS Startup</h3>
            <p className="text-gray-400 mb-6">
              Doubled conversions and tripled user acquisition in 6 weeks
            </p>

            <div className="flex justify-between items-center text-sm md:text-base mb-4">
              <span className="text-gray-300">6 Weeks</span>
              <span
                onClick={() => handleCardClick(2)}
                className="text-red-500 font-semibold hover:underline"
              >
                Read Full Story →
              </span>
            </div>

            {activeCard === 2 && (
              <div className="border-t border-gray-700 pt-4 space-y-4 text-gray-300 text-sm animate-fadeIn">
                <div>
                  <strong className="text-white">Challenge:</strong>
                  <p>Low trial conversions, poor funnel optimization.</p>
                </div>
                <div>
                  <strong className="text-white">Solution:</strong>
                  <p>Rebuilt funnel + Google Ads targeting + landing page redesign.</p>
                </div>
                <div>
                  <strong className="text-white">Results:</strong>
                  <ul className="list-disc list-inside">
                    <li>Trial conversions +200%</li>
                    <li>MRR increased 250%</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CARD 3 */}
        <div
          onMouseLeave={() => setActiveCard(null)}
          className={`bg-[#111] border ${
            activeCard === 3
              ? "border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              : "border-gray-800"
          } transition-all duration-300 rounded-2xl overflow-hidden flex flex-col cursor-pointer`}
        >
          <div className="p-4">
            <img
              src="https://media.istockphoto.com/id/2158195039/photo/female-broadcaster-interviewing-her-guest-in-a-studio.jpg?s=612x612&w=0&k=20&c=rotjVWD-q_O-i047xT1Gic8TUSgFTQhraSncZDeO8-g="
              alt="Business Podcast"
              className="w-full h-44 object-cover rounded-xl"
            />
          </div>
          <div className="px-6 pb-6 text-left">
            <h3 className="text-white text-2xl font-bold mb-2">Business Podcast</h3>
            <p className="text-gray-400 mb-6">
              From zero to 20K+ monthly plays and industry authority
            </p>

            <div className="flex justify-between items-center text-sm md:text-base mb-4">
              <span className="text-gray-300">4 Months</span>
              <span
                onClick={() => handleCardClick(3)}
                className="text-red-500 font-semibold hover:underline"
              >
                Read Full Story →
              </span>
            </div>

            {activeCard === 3 && (
              <div className="border-t border-gray-700 pt-4 space-y-4 text-gray-300 text-sm animate-fadeIn">
                <div>
                  <strong className="text-white">Challenge:</strong>
                  <p>No audience, no SEO optimization, inconsistent uploads.</p>
                </div>
                <div>
                  <strong className="text-white">Solution:</strong>
                  <p>SEO-optimized content strategy + LinkedIn + YouTube promotion.</p>
                </div>
                <div>
                  <strong className="text-white">Results:</strong>
                  <ul className="list-disc list-inside">
                    <li>1M+ monthly plays</li>
                    <li>70% audience retention</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call-to-action Text */}
      <p className="text-gray-300 text-xl font-semibold mt-16 mb-6">
        Ready to be our next success story?
      </p>

      {/* Button */}
      <div>
  <button
    
    onClick={() => {
      const section = document.getElementById("butto-call"); // target section ka id
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="bg-red-600 text-white font-semibold text-lg py-3 px-8 rounded-md hover:bg-red-700 transition duration-300"
  >
    Get Your FREE Strategy Call →
  </button>
</div>

    </section>
    
  );
};

export default CaseStudies;
