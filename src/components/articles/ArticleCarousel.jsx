import React from "react";
import { Pagination, Autoplay } from "swiper/modules";

import "../style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";


const ArticleCarousel = ({title, navigateTo, dataArticle, autoplayDelay=3000 }) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <p
          className="text-[#6AAFFF] text-base md:text-xl cursor-pointer"
          onClick={() => navigate(navigateTo)}
        >
          View More
        </p>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        className="mySwiper pb-5 mt-5 swiper-news-pagination rounded-lg"
      >
        {dataArticle.map((data, index) => (
          <SwiperSlide className="h-[290px] md:h-[350px] cursor-pointer" key={index}>
            <img
              src={data.img}
              alt="Article Image"
              className="w-full h-[180px] md:h-[240px] object-cover"
            />
            <p className="p-2 text-md w-full break-all h-[85px] line-clamp-3 overflow-hidden ">
              {data.caption}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )}
export default ArticleCarousel