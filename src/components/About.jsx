import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img2.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ====== Heading ====== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Meet the <span className="text-red-500">Growth Experts</span>
          </h2>
          <p className="text-gray-400 text-lg">
            The masterminds behind 500+ successful business transformations
          </p>
        </motion.div>

        {/* ====== Expert Cards ====== */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* === Card 1 === */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111] rounded-2xl p-6 text-center border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-md"
          >
            <div className="relative w-36 h-36 mx-auto mb-4">
              <div className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 blur-sm z-0"></div>
              <img
                src={img1}
                alt="Syed Ali Raza"
                className="relative z-10 rounded-full w-full h-full object-cover border-[2px] border-black"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-1">Syed Ali Raza</h3>
            <p className="text-red-500 font-medium mb-4 text-base">Founder & CEO</p>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              7+ years of experience scaling businesses from startup to 8-figures. Specialized in performance marketing and conversion optimization.
            </p>

            <div className="flex justify-center gap-8 mb-4">
              <div>
                <h4 className="text-green-400 text-xl font-semibold">300+</h4>
                <p className="text-gray-400 text-xs">Campaigns Managed</p>
              </div>
              <div>
                <h4 className="text-green-400 text-xl font-semibold">Rs2B+</h4>
                <p className="text-gray-400 text-xs">Revenue Generated</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">Google Ads Certified</span>
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">Facebook Blueprint</span>
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">HubSpot Expert</span>
            </div>
          </motion.div>

          {/* === Card 2 === */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111] rounded-2xl p-6 text-center border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-md"
          >
            <div className="relative w-36 h-36 mx-auto mb-4">
              <div className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 blur-sm z-0"></div>
              <img
                src={img2}
                alt="Abdul Qadeer"
                className="relative z-10 rounded-full w-full h-full object-cover border-[2px] border-black"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-1">Abdul Qadeer</h3>
            <p className="text-red-500 font-medium mb-4 text-base">CTO</p>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              10+ years building high-performance web applications and e-commerce platforms. Expert in modern web technologies and scalable architectures.
            </p>

            <div className="flex justify-center gap-8 mb-4">
              <div>
                <h4 className="text-green-400 text-xl font-semibold">200+</h4>
                <p className="text-gray-400 text-xs">Websites Built</p>
              </div>
              <div>
                <h4 className="text-green-400 text-xl font-semibold">99.9%</h4>
                <p className="text-gray-400 text-xs">Uptime Record</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">React Expert</span>
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">Shopify Partner</span>
              <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">AWS Certified</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Combined Experience */}
      <div className="mt-12 flex justify-center">
        <div className="bg-[#111] rounded-full px-6 py-3 flex items-center gap-2 border border-gray-800 shadow-sm">
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <p className="text-white text-sm font-medium">
            Combined Experience: <span className="text-green-400 font-semibold">17+ Years</span>
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
          Why Choose <span className="text-red-500">10xDigital.pk?</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">
          See how we stack up against other agencies and freelancers
        </p>

        <div className="overflow-x-auto flex justify-center">
  <table className="min-w-[800px] border-collapse text-center inline-block">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="py-4 px-8 text-gray-400 font-medium">Features</th>
        <th className="py-4 px-8 text-red-500 font-medium">10xDigital.pk</th>
        <th className="py-4 px-8 text-gray-300 font-medium">Other Agencies</th>
        <th className="py-4 px-8 text-gray-300 font-medium">Freelancers</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-700">
        <td className="py-4 px-8 font-medium text-white">Response Time</td>
        <td className="py-4 px-8 text-green-500 font-bold">✓ &lt; 2 Hours</td>
        <td className="py-4 px-8 text-orange-500 font-bold">24-48 Hours</td>
        <td className="py-4 px-8 text-red-500 font-bold">Varies</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="py-4 px-8 font-medium text-white">Dedicated Account Manager</td>
        <td className="py-4 px-8 text-green-500 font-bold">✓</td>
        <td className="py-4 px-8 text-orange-500 font-bold">✗</td>
        <td className="py-4 px-8 text-red-500 font-bold">✗</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="py-4 px-8 font-medium text-white">Money-Back Guarantee</td>
        <td className="py-4 px-8 text-green-500 font-bold">✓ 30 Days</td>
        <td className="py-4 px-8 text-orange-500 font-bold">Limited</td>
        <td className="py-4 px-8 text-red-500 font-bold">None</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="py-4 px-8 font-medium text-white">Proven Track Record</td>
        <td className="py-4 px-8 text-green-500 font-bold">✓ 500+ Clients</td>
        <td className="py-4 px-8 text-orange-500 font-bold">Mixed</td>
        <td className="py-4 px-8 text-red-500 font-bold">Unverified</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="py-4 px-8 font-medium text-white">Full-Service Solution</td>
        <td className="py-4 px-8 text-green-500 font-bold">✓</td>
        <td className="py-4 px-8 text-orange-500 font-bold">✗</td>
        <td className="py-4 px-8 text-red-500 font-bold">✗</td>
      </tr>
    </tbody>
  </table>
</div>



      </div>

      {/* Guarantee */}
      <div className="mt-8 flex justify-center">
        <div className="bg-[#111] border border-yellow-500 rounded-full px-6 py-3 flex items-center gap-2 shadow-sm">
          <span className="text-yellow-400 text-lg">🛡️</span>
          <p className="text-yellow-400 text-sm font-medium">
            30-Day Money-Back Guarantee
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-center mt-2 text-sm">
        We're so confident in our results, we guarantee them.
      </p>

      {/* Call-to-Action Button */}
      <div className="mt-6 flex justify-center">
        <button
  onClick={() => {
    const section = document.getElementById("butto-call"); // Replace with your target section's id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-red-500 text-white font-medium px-8 py-3 rounded-md hover:bg-red-600 transition"
>
  Start Risk-Free Today
</button>

      </div>
    </section>
  );
};

export default About;
