import React from 'react';
import Slider from "infinite-react-carousel";
import carosel_images1 from '../assets/curosel_image1.png';

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

  return (
    <div className="w-full flex justify-evenly">
      <div className='mt-[3%] flex flex-col gap-4 text-left'>
        <div>
        Woman’s Fashion
        </div>
        <div>
        Men’s Fashion
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
        Baby’s & Toys
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
  );
};

export default Home;
