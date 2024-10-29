import React, { useEffect, useState } from "react";
import HeroPrograms from "../components/HeroPrograms";
import Navbar from "../components/layout/Navbar";
import Finder from "../components/Finder";
import CardProgram from "../components/CardProgram";
import Footer from "../components/layout/Footer";
import { useLocation } from "react-router-dom";
import logo from "../assets/ipb.png";

const data = [
  {
    title: "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title: "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title: "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
];

const ResultPrograms = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const keyword = searchParams.get("keyword");
  const programType = searchParams.get("programType");
  const levelOfStudy = searchParams.get("levelOfStudy");
  const province = searchParams.get("province");

  useEffect(() => {
    fetchAPI({ keyword, programType, levelOfStudy, province });
  }, [keyword, province, programType, levelOfStudy]);

  const fetchAPI = (params) => {
    console.log("Cari dengan Parameter:", params);
  };

  // Buat pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <HeroPrograms />
      <Finder />
      <div className="max-w-6xl w-full mx-auto my-8 px-5 space-y-6">
        {data.map((data, index) => (
          <CardProgram
            key={index}
            title={data.title}
            logoPT={data.logoPT}
            namePT={data.namePT}
            location={data.location}
            levelStudy={data.levelStudy}
            typeOfPT={data.typeOfPT}
            cost={data.cost}
            link={data.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ResultPrograms;
