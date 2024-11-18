import React, { useEffect, useRef, useState } from "react";
import usePagination from "../../hooks/usePagination";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../Hero";
import Pagination from "../Pagination";
import SkeletonCardArticle from "../skeleton/SkeletonCardArticle";
import ArticleCard from "./ArticleCard";
import culture from "../../assets/culture.webp";

const ArticlePage = ({
  title,
  bannerImage,
  data = [],
  isLoading,
  isError,
  error,
}) => {
  const topRef = useRef(null);

  // Pagination
  const itemsPerPage = 10;
  const {
    currentPage,
    pageCount,
    handlePageChange,
    startItem,
    endItem,
    paginatedData,
  } = usePagination(data, itemsPerPage);

  // Scroll to Top
  useEffect(() => {
    // window.scrollTo(0, 0);
    console.log(data)
  }, []);

  // Scroll to topRef element when currentPage changes
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="bg-[#F0F3F6]" ref={topRef}>
      <Navbar />
      <Hero imgBanner={bannerImage} />
      <div className="max-w-6xl w-full mx-auto my-8 px-5">
        <h1 className="text-2xl md:text-4xl my-10 font-semibold text-center">
          {title}
        </h1>

        {/* Interface 1 */}
        {/* <div className='bg-white rounded-lg space-y-4 p-4'>
          {isLoading ? (
            <SkeletonCardArticle count={3} />
          ) : (
            paginatedData.map((data, index) => (
              <ArticleCard
                img={data.img}
                caption={data.caption}
                date={data.date}
                navigateTo={data.caption}
                key={index}
              />
            ))
          )}
        </div> */}

        {/* Interface 2 */}
        {isLoading ? (
          <SkeletonCardArticle count={3} />
        ) : isError ? (
          error
        ) : (
          paginatedData.map((data, index) => (
            <ArticleCard
              img={culture}
              caption={data.body}
              date={data.id}
              navigateTo={data.id}
              key={index}
            />
          ))
        )}
      </div>

      {data && data.length > 0 && (
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          startItem={startItem}
          endItem={endItem}
          totalItem={data.length}
        />
      )}

      <Footer />
    </div>
  );
};

export default ArticlePage;
