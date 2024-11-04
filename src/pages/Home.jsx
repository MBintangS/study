import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import VideoPlayer from "../components/VideoPlayer";
import WhyIndonesia from "../components/WhyIndonesia";
import Step from "../components/Step";
import DiscoverMore from "../components/DiscoverMore";
import Testimonial from "../components/Testimonial";
import Finder from "../components/Finder";
import ArticleContainer from "../components/ArticleContainer";
import logoBannerHome from "/hero-banner.webp"
import Hero from "../components/Hero";
import { useEffect } from "react";

const Home = () => {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <Hero imgBanner={logoBannerHome} />
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
