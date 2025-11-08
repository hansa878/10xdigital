import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-gray-900 border border-gray-700 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <p className="mt-3 text-gray-300">{answer}</p>}
    </div>
  );
};

const BookCallButton = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    revenue: '',
    challenge: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.business) newErrors.business = 'Please select a Business Type';
    if (!formData.revenue) newErrors.revenue = 'Please select Current Monthly Revenue';
    if (!formData.challenge) newErrors.challenge = 'Please describe your challenge';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Your application has been submitted. Click on WhatsApp to book.');
      setFormData({ name: '', email: '', phone: '', business: '', revenue: '', challenge: '' });
      setErrors({});
    }
  };

  const faqs = [
    { question: "How quickly can I see results?", answer: "Results depend on your business and how quickly strategies are implemented. Most clients start noticing improvements within 30-60 days." },
    { question: "What's included in the free strategy call?", answer: "The free call includes a business analysis, identifying growth opportunities, and a custom strategy roadmap for scaling your business." },
    { question: "Do you work with businesses in my industry?", answer: "Yes! We work with businesses across a wide range of industries and tailor strategies according to your specific niche." },
    { question: "What's your pricing structure?", answer: "Our pricing depends on the service package you choose. During the call, we provide transparent options based on your needs." },
    { question: "Do you guarantee results?", answer: "We provide proven strategies and guidance. While we cannot guarantee specific results, our clients typically see significant improvements when implementing our recommendations." },
    { question: "How is this different from other agencies?", answer: "We provide personalized 10x growth strategies specifically designed for your business, unlike generic approaches other agencies use." }
  ];

  return (
    <section id="butto-call" className="bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="mt-8 flex justify-center">
        <div className="bg-yellow-400 border border-yellow-500 rounded-full px-6 py-3 flex items-center gap-2 shadow-md animate-pulse">
          <span className="text-black text-2xl">🔥</span>
          <p className="text-black font-bold text-lg">
            Limited Time: Free Strategy Call (Worth ₨15,000)
          </p>
        </div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-10 mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to <span className="text-red-500">10x Your Business?</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Book your free 30-minute strategy call and discover exactly how we can scale your business 10x faster.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Form Column */}
        <div className="flex-1 max-w-md mx-auto bg-black border border-gray-500 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">
            Book Your Free Strategy Call
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {['name','email','phone','business','revenue'].map((field) => (
              <div key={field}>
                <label className="block mb-2 font-semibold text-white capitalize">
                  {field.replace(/^\w/, (c) => c.toUpperCase())}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-white bg-black placeholder-gray-500 border border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                />
                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label className="block mb-2 font-semibold text-white">Biggest Challenge</label>
              <textarea
                name="challenge"
                placeholder="Describe your biggest challenge"
                rows={3}
                value={formData.challenge}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-white bg-black placeholder-gray-500 border border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
              />
              {errors.challenge && <p className="text-red-500 text-sm mt-1">{errors.challenge}</p>}
            </div>

            <button
  type="submit"
  className="w-full flex items-center justify-center gap-2 
             bg-red-500 hover:bg-red-600 text-white font-semibold 
             px-10 py-4 rounded-full transition text-lg"
>
  <FaPhoneAlt /> Book Free Strategy Call
</button>



            <div className="mt-4 text-center">
              <p className="mb-2 font-semibold text-white">Or book instantly via WhatsApp:</p>
              <a
    href="https://wa.me/923366261060"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-center gap-2 
               bg-green-500 hover:bg-green-600 text-white font-semibold 
               px-10 py-4 rounded-full transition text-lg"
  >
    <FaWhatsapp /> WhatsApp Booking
  </a>
            </div>
          </form>
        </div>

        {/* Cards Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* What to Expect */}
          <div className="bg-black border border-white p-6 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-4">What to Expect in Your Call</h3>
            <div className="space-y-4">
              {[
                { num: 1, title: 'Business Analysis', desc: "We'll analyze your current situation and identify growth opportunities" },
                { num: 2, title: 'Custom Strategy', desc: 'Get a personalized roadmap to 10x your business growth' },
                { num: 3, title: 'Action Plan', desc: 'Leave with concrete next steps you can implement immediately' }
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 font-bold text-white">{item.num}</div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Time Slots */}
          <div className="bg-black border border-white p-6 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {[
                  { day: 'Today', time: '3:00 PM' },
                  { day: 'Tomorrow', time: '10:00 AM' }
                ].map((slot, i) => (
                  <div key={`col1-${i}`} className="bg-black border border-gray-500 rounded-md p-4 flex flex-col items-center justify-center">
                    <span className="font-semibold">{slot.day}</span>
                    <span className="text-yellow-400 font-bold">{slot.time}</span>
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                {[
                  { day: 'Today', time: '5:00 PM' },
                  { day: 'Tomorrow', time: '2:00 PM' }
                ].map((slot, i) => (
                  <div key={`col2-${i}`} className="bg-black border border-gray-500 rounded-md p-4 flex flex-col items-center justify-center">
                    <span className="font-semibold">{slot.day}</span>
                    <span className="text-yellow-400 font-bold">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 font-semibold text-yellow-400 flex items-center gap-2">
              ⚡ Only 3 slots left this week
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to the most common questions about our services
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default BookCallButton;
