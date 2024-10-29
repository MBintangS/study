import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import VideoPlayer from "../components/VideoPlayer";
import WhyIndonesia from "../components/WhyIndonesia";
import Step from "../components/Step";
import DiscoverMore from "../components/DiscoverMore";
import Testimonial from "../components/Testimonial";
import Finder from "../components/Finder";
import ArticleContainer from "../components/ArticleContainer";
import HeroHome from "../components/HeroHome";
import { useEffect, useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProgramType, setSelectedProgramType] = useState("");
  const [selectedLevelOfStudy, setSelectedLevelOfStudy] = useState("");
  

  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <HeroHome />
      <Finder />
      <div className="bg-light_blue w-full h-[1250px] lg:h-[900px] mt-[150px] md:mt-[450px] relative flex flex-col items-center">
        <VideoPlayer className="absolute justify-center items-center top-[-100px] md:top-[-400px]" />
        <WhyIndonesia className="absolute justify-center items-center top-[150px] sm:top-[100px] lg:top-[300px]" />
      </div>
      <ArticleContainer />
      <Step />
      <DiscoverMore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
