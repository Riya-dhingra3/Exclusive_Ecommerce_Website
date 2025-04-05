import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-[85%]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-16">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-500">/</span>
        <span className="text-black">Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column - Contact Information (40%) */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
            {/* Call To Us Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-lg" />
                </div>
                <h2 className="text-xl">Call To Us</h2>
              </div>
              <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-600">Phone: +880161112222</p>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Write To Us Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <h2 className="text-xl">Write To US</h2>
              </div>
              <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-600 mb-1">Emails: customer@exclusive.com</p>
              <p className="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form (60%) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg p-12 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#F5F5F5] rounded focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#F5F5F5] rounded focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#F5F5F5] rounded focus:outline-none"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 bg-[#F5F5F5] rounded focus:outline-none resize-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white px-12 py-3 rounded hover:bg-[#DB4444]/90 transition-colors"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;