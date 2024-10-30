import React, { useEffect, useRef, useState } from "react";
import HeroPrograms from "../components/HeroPrograms";
import Navbar from "../components/layout/Navbar";
import Finder from "../components/Finder";
import CardProgram from "../components/CardProgram";
import Footer from "../components/layout/Footer";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import logo from "../assets/ipb.png";

const data = [
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
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

  const topRef = useRef(null);

  useEffect(() => {
    fetchAPI({ keyword, programType, levelOfStudy, province });
  }, [keyword, province, programType, levelOfStudy]);

  const fetchAPI = (params) => {
    console.log("Cari dengan Parameter:", params);
  };

  // Pagination
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, data.length);

  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Scroll to topRef element when currentPage changes
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <HeroPrograms />
      <div ref={topRef}></div>
      <Finder />
      <div className="max-w-6xl w-full mx-auto my-8 px-5 space-y-6">
        {paginatedData.map((data, index) => (
          <CardProgram
            key={index}
            title={`${data.title} ${currentPage * itemsPerPage + index + 1}`}
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
      <div className="flex justify-between max-w-6xl items-center w-full mx-auto px-8 pb-8">
        <div>
          Showing {startItem} - {endItem} from {data.length}
        </div>
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </div>
      <Footer />
    </div>
  );
};

export default ResultPrograms;
