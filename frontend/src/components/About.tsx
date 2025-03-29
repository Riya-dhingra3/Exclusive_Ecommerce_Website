import React, { useState } from 'react';
import shoppingImage from '../assets/Shoping_Image.png';
import tomImage from '../assets/Tom.png';
import emmaImage from '../assets/Emma.png';
import willImage from '../assets/Will.png';
import { BsShop, BsBagCheck } from 'react-icons/bs';
import { FaDollarSign, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';

const statsData = [
  {
    icon: BsShop,
    count: '10.5k',
    description: 'Sellers active our site',
  },
  {
    icon: FaDollarSign,
    count: '33k',
    description: 'Monthly Product Sale',
    isHighlighted: true,
  },
  {
    icon: BsBagCheck,
    count: '45.5k',
    description: 'Customer active in our site',
  },
  {
    icon: BiMoney,
    count: '25k',
    description: 'Annual gross sale in our site',
  },
];

const allTeamMembers = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImage },
  { name: "Emma Watson", role: "Managing Director", image: emmaImage },
  { name: "Will Smith", role: "Product Designer", image: willImage },
  { name: "Emma Watson", role: "Managing Director", image: emmaImage },
  { name: "Will Smith", role: "Product Designer", image: willImage },
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImage },
  { name: "Will Smith", role: "Product Designer", image: willImage },
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImage },
  { name: "Emma Watson", role: "Managing Director", image: emmaImage },
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImage },
  { name: "Emma Watson", role: "Managing Director", image: emmaImage },
  { name: "Will Smith", role: "Product Designer", image: willImage },
  { name: "Emma Watson", role: "Managing Director", image: emmaImage },
  { name: "Will Smith", role: "Product Designer", image: willImage },
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImage },
];

const servicesData = [
  {
    icon: "truck", 
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: "headset", 
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: "shield", 
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days"
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const membersPerPage = 3;
  const totalPages = Math.ceil(allTeamMembers.length / membersPerPage);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-12">
        <span>Home</span>
        <span>/</span>
        <span className="text-gray-500">About</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold mb-8">Our Story</h1>
          <div className="space-y-6 text-gray-600">
            <p>
              Launched in 2015, Exclusive is South Asia's premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a wide
              range of tailored marketing, data, and service solutions, Exclusive
              has 10,500 sellers and 300 brands and serves 3 million customers
              across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing very fast.
              Exclusive offers a diverse assortment in categories ranging from consumer goods to fashion.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={shoppingImage} alt="Happy shoppers with shopping bags" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className={`border rounded-md p-8 flex flex-col items-center ${stat.isHighlighted ? 'bg-[#DB4444] text-white' : ''}`}>
            <div className={`${stat.isHighlighted ? 'bg-white/20' : 'bg-gray-200'} p-4 rounded-full mb-4`}>
              {<stat.icon className="w-8 h-8" />}
            </div>
            <h2 className="text-3xl font-bold mb-2">{stat.count}</h2>
            <p className={`text-center ${stat.isHighlighted ? '' : 'text-gray-600'}`}>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4">
          {allTeamMembers.slice(activeIndex * membersPerPage, (activeIndex + 1) * membersPerPage).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-full bg-gray-100 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-1">{member.name}</h3>
              <p className="text-base text-[#000000]/70 mb-4">{member.role}</p>
              <div className="flex gap-4">
                <a href="#" className="text-black hover:text-[#DB4444]">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-black hover:text-[#DB4444]">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-black hover:text-[#DB4444]">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-[#DB4444]' : 'bg-gray-300'}`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


      {/* Services Section */}
      <div className="mt-24 mb-24 p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
              {/* inset-0 → Stretches it to cover the full size of the parent. */}
              {/* inset-2 → Shrinks it inward by 8px (inset-2 is 0.5rem or 8px in Tailwind) */}
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <div className="text-white">
                    {service.icon === "truck" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {service.icon === "headset" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    )}
                    {service.icon === "shield" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
