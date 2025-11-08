import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* First Section */}
      <section id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Ready to <span className="text-red-500">Get Started?</span>
          </motion.h2>

          <motion.p
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-gray-400 text-lg md:text-xl"
>
  Don't let another day pass watching your competitors grow while you stay stuck.
  <br />
  Take action now.
</motion.p>

        </div>
      </section>

      {/* Second Section */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-xl p-6 shadow-lg text-center"
          >
            <div className="inline-block bg-orange-500 text-black font-semibold px-4 py-1 rounded-full mb-3 text-sm">
              ⏰ Limited Time Offer Expires in 48 Hours
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">Free Strategy Call</h2>
            <p className="text-gray-400 mb-4">
              Worth Rs15,000 - Completely Free for First-Time Visitors
            </p>

            <button
  onClick={() => {
    const element = document.getElementById("butto-call"); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full mb-4 flex items-center justify-center gap-2 transition"
>
  <FaPhoneAlt /> Book My Free Call Now
</button>



            <div className="text-gray-400 text-sm flex flex-col md:flex-row justify-center gap-4 mt-2">
              <span>✅ No commitment required</span>
              <span>✅ 30-minute consultation</span>
              <span>✅ Custom growth strategy</span>
            </div>
          </motion.div>

          {/* Right Side - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl text-white font-bold mb-4">Get in Touch</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" />
                <span>+92 3064348530</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <span>03064348530</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-600" />
                <span>hello@10xdigital.pk</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>

            <p className="mt-4 text-green-500 text-sm">
              Response time: &lt; 2 hours
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
