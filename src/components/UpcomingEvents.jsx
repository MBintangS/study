import React from "react";
import { Pagination, Autoplay } from "swiper/modules";

import cuisine from "../assets/cuisine.webp";
import culture from "../assets/culture.webp";

import "./style.css"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const UpcomingEvents = () => {
  return (
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <p className="text-[#6AAFFF] text-xl ">View More</p>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper pb-5 mt-5 swiper-news-pagination"
          >
            <SwiperSlide className="h-[350px] cursor-pointer ">
              <img
                src={culture}
                alt=""
                className="h-[240px] object-cover"
              />
              <p className="p-2 text-md w-full break-all h-[85px] line-clamp-3 overflow-hidden ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis pellentesque erat. Donec tincidunt venenatis dui, vitae lacinia mauris maximus.
              </p>
            </SwiperSlide>
            <SwiperSlide className="h-[350px]">
              <img src={cuisine} alt="" className="h-[240px] border-black" />
              <p className="p-3 text-md w-full break-all h-[90px] line-clamp-3 overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis pellentesque erat. Donec tincidunt venenatis dui, vitae lacinia mauris maximus.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
  );
};

export default UpcomingEvents;
