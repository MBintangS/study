import React from "react";

const Hero = ({imgBanner}) => {
  return (
    <div className="w-full relative">
      <div className="relative">
        <img src={imgBanner} alt="banner-studyinindonesia" className="w-full h-auto" width="1200" height="600"  />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">STUDY IN INDONESIA</h1>
              <p className="text-sm md:text-xl lg:text-2xl text-center justify-center">A myriad of perspectives bloom from Indonesia's education</p>
          </div>
      </div>
    </div>
  );
};

export default Hero;
