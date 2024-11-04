import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import BannerArticle from "/banner-campus-update.webp";
import CardArticle from "../components/CardArticle";

import culture from "../assets/culture.webp";
import Pagination from "../components/Pagination";

const data = [
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
  },
  {
    img: culture,
    caption: "Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports",
    date: "Nov 13, 2023",
    navigateTo: "/search",
  },
];

const CampusUpdate = () => {

  const topRef = useRef(null);


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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    // Scroll to topRef element when currentPage changes
    useEffect(() => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [currentPage]);


  return (
    <div className="bg-[#F0F3F6]" ref={topRef} >
      <Navbar />
      <Hero imgBanner={BannerArticle} />
      <div className="max-w-6xl w-full mx-auto my-8 px-5">
        <h1 className="text-2xl md:text-4xl my-10 font-semibold text-center">
          Campus Update
        </h1>
        {paginatedData.map((data, index) => (
          <CardArticle
            img={data.img}
            caption={data.caption}
            date={data.date}
            navigateTo={data.navigateTo}
            key={index}
          />
        ))}
      </div>

      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        startItem={startItem}
        endItem={endItem}
        totalItem={data.length}
      />

      

      <Footer />
    </div>
  );
};

export default CampusUpdate;
