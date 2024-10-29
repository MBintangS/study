import React from "react";
import { PiGlobe, PiGraduationCap, PiMicroscope } from "react-icons/pi";
import { Link } from "react-router-dom";

const WhyIndonesia = ({ className }) => {
  return (
    <div className={`max-w-6xl px-5 w-full mx-auto space-y-10 ${className}`}>
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center text-white font-bold">
        Why choose Indonesia?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-16 sm:gap-8 items-center">

        <div className="w-full text-center flex flex-col gap-2 md:gap-4">
          <div className="bg-[#FFC772] size-[100px] md:size-[150px] rounded-full mx-auto flex items-center justify-center">
            <PiGlobe className="size-10 md:size-16 mx-auto" />
          </div>
          <div className="text-white space-y-0 md:space-y-2 p-2">
            <h2 className="text-xl md:text-3xl font-semibold">World Class University</h2>
            <p className="text-md w-[250px] mx-auto md:w-full md:text-2xl p-3">
              QS World University Rankings among the best in Southeast Asia
            </p>
            <div className="text-xl underline cursor-pointer">See more</div>
          </div>
        </div>
        <div className="w-full text-center flex flex-col gap-2 md:gap-4">
          <div className="bg-[#C1FF72] size-[100px] md:size-[150px] rounded-full mx-auto flex items-center justify-center">
            <PiGraduationCap className="size-10 md:size-16 mx-auto" />
          </div>
          <div className="text-white space-y-0 md:space-y-2 p-2">
            <h2 className="text-xl md:text-3xl font-semibold">Affordability</h2>
            <p className="text-md w-[250px] mx-auto md:w-full md:text-2xl p-3">
            Indonesia offers international students an affordable education
            </p>
            <div className="text-xl underline cursor-pointer">See more</div>
          </div>
        </div>

        <div className="w-full text-center flex flex-col gap-2 md:gap-4">
          <div className="bg-[#D272FF] size-[100px] md:size-[150px] rounded-full mx-auto flex items-center justify-center">
            <PiMicroscope className="size-10 md:size-16 mx-auto" />
          </div>
          <div className="text-white space-y-0 md:space-y-2 p-2">
            <h2 className="text-xl md:text-3xl font-semibold">Research Opportunity</h2>
            <p className="text-md w-[250px] mx-auto md:w-full md:text-2xl p-3">
            Indonesia offers unique opportunities to engage in research 
            </p>
            <div className="text-xl underline cursor-pointer">See more</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyIndonesia;
