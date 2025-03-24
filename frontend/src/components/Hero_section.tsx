import React from "react";
import Countdown from "react-countdown";
import speaker from '../assets/Home_speaker.png';

const HeroSection: React.FC = () => {
  // Countdown Renderer
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="flex gap-4 text-white text-lg">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{days}</span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{hours}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white flex items-center justify-between px-16 py-10">
      {/* Left Section */}
      <div className="max-w-lg">
        <p className="text-green-400 text-sm uppercase">Categories</p>
        <h1 className="text-5xl font-bold mt-2">Enhance Your <br></br> Music Experience</h1>
        <div className="mt-5">
          <Countdown date={Date.now() + 500000000} renderer={renderer} />
        </div>
        <button className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-600">
          Buy Now!
        </button>
      </div>

      {/* Right Section - Speaker Image */}
      <div>
        <img src={speaker} alt="Speaker" className="w-[400px]"/>
      </div>
    </div>
  );
};

export default HeroSection;
