import React, { useState } from 'react';
import Slider from "infinite-react-carousel";
import img from '../assets/Product1.png';
import carosel_images1 from '../assets/curosel_image1.png';
import Card from './Card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Category from './Category';
import { categories } from './Category_data';
import Hero_section from './Hero_section';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    virtualList: true,
    duration: 20,
    arrows: false,
    dots: true,
  };

  // Sample products data - replace with your actual data
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: img
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 3,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 4,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 5,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 6,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
  ];
  const products1 = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: img
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 3,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    },
    {
      id: 4,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: img
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - cardsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(products.length - cardsPerPage, prev + cardsPerPage));
  };

  return (
    <>
      <div className="w-full flex justify-between container mx-auto">
        <div className='mt-[3%] flex flex-col gap-4 text-left '>
          <div>
            Woman's Fashion
          </div>
          <div>
            Men's Fashion
          </div>
          <div>
            Electronics
          </div>
          <div>
            Health & Beauty
          </div>
          <div>
            Medicine
          </div>
          <div>
            Baby's & Toys
          </div>
        </div>
        <div className="w-[0.5px] border-t h-[300px] bg-gray-400"></div>
        <div className='mt-[3%] w-[70%] h-[344px]'>
          <Slider {...settings}>
            <div className="row">
              <img
                src={carosel_images1}
                className="slide_img w-[100%] h-[250px] object-fill"
                alt="Responsive img"
              />
            </div>
            <div>
              <img
                src={carosel_images1}
                className="slide_img w-[100%] h-[250px] object-fill"
                alt="Responsive img"
              />
            </div>
            <div>
              <img
                src={carosel_images1}
                className="slide_img w-[100%] h-[250px] object-fill"
                alt="Responsive img"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className='container mx-auto mt-16 mb-16'>
        <div className='flex justify-between items-center'>
          <p className='text-red-500 font-bold text-1xl border-l-8 border-red-500 rounded-sm pl-[1%]'>Today's</p>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Flash Sales</h2>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200' : 'bg-black'}`}
            >
              <IoIosArrowBack className={`w-6 h-6 ${currentIndex === 0 ? 'text-gray-400' : 'text-white'}`} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= products.length - cardsPerPage}
              className={`p-2 rounded-full ${currentIndex >= products.length - cardsPerPage ? 'bg-gray-200' : 'bg-black'}`}
            >
              <IoIosArrowForward className={`w-6 h-6 ${currentIndex >= products.length - cardsPerPage ? 'text-gray-400' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Fixed width container to show exactly 4 cards */}
        <div className="max-w-[1200px] mx-auto overflow-hidden">
          <div
            className="flex gap-6 w-max" // w-max ensures cards don't shrink
            style={{
              transform: `translateX(-${currentIndex * (270 + 100)}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {products.map(product => (
              <div className="w-[270px] flex-shrink-0"> {/* Fixed width wrapper */}
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  rating={product.rating}
                  reviews={product.reviews}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%] border-t border-gray-300 mt-[8%]"></div>
        <div className='container mx-auto mt-[8%]'>
        <div className='flex justify-between items-center'>
          <p className='text-red-500 font-bold text-1xl border-l-8 border-red-500 rounded-sm pl-[1%]'>Categories</p>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
        </div>

        {/* Fixed width container to show exactly 4 cards */}
        <div className="max-w-[1200px] mx-auto overflow-hidden">
          <div
            className="flex gap-6 w-max container mx-auto" 
          >
            {categories.map(category => (
              <div className="w-[140px] hover:bg-red-500 hover:text-white"> {/* Fixed width wrapper */}
                <Category
                  key={category.id}
                  name={category.name}
                  image={category.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] border-t border-gray-300 mt-[8%]"></div>
      </div>
      <div className='container mx-auto mt-[8%]'>
        <div className='flex justify-between items-center'>
          <p className='text-red-500 font-bold text-1xl border-l-8 border-red-500 rounded-sm pl-[1%]'>This Month</p>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div><h2 className="text-2xl font-bold">Best Selling Products</h2>
          </div>
          <div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md'>View All</button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto overflow-hidden">
          <div
            className="flex gap-6 w-max container mx-auto" 
          >
            {products1.map(product => (
              <div key={product.id} className="w-[23.6%] flex-shrink-0">
                <Card
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="container mx-auto bg-black w-full relative mt-[10%] mb-[10%]">
          <Hero_section/>
        </div>
    </>
  );
};

export default Home;