import { Chip } from "@material-tailwind/react";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { PiGraduationCap, PiMoney } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const CardProgram = ({title, logoPT ,namePT, location, levelStudy, typeOfPT, cost, link }) => {
  return (
    <div className="w-full bg-white rounded-lg px-8 py-6 flex flex-col space-y-4">
      <div className="flex flex-wrap gap-4">
        <Chip variant="outlined" value="Agriculture" color="light-blue" />
        <Chip variant="outlined" value="Agriculture Technology" color="light-blue" />
        <Chip variant="outlined" value="Bio Technology" color="light-blue" />
        <Chip variant="outlined" value="Agriculture" color="light-blue" />
      </div>
      <h1 className="text-xl md:text-2xl font-medium">
        {title}
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="max-w-20">
          <img src={logoPT} alt="Logo" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg md:text-xl font-medium">
            {namePT}
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <GrLocation />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-2">
              <PiGraduationCap />
              <p>{levelStudy}</p>
            </div>
            <div className="flex items-center gap-2">
              <LuSchool />
              <p>{typeOfPT}</p>
            </div>
            <div className="flex items-center gap-2">
              <PiMoney />
              <p>{cost}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div>
        <a href={link} className="inline-flex gap-6 bg-[#1F86FF] px-3 py-2 text-white rounded-lg items-center ">
          <p className="text-base md:text-lg font-normal">Web Application</p>
          <FaArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default CardProgram;
