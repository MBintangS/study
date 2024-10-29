import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Reveal from "../utils/Reveal";
import ruud from "../assets/ruud.webp";
import laurina from "../assets/laurina.webp";
import christopher from "../assets/christopher.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const data = [
  {
    profil: ruud,
    name: "Ruud from Netherland",
    desc: "“Studying in Indonesia has been an incredible experience. The vibrant culture, diverse traditions, and warm hospitality make it truly unique. The education system is rigorous, with passionate lecturers who are always ready to help.”",
  },
  {
    profil: laurina,
    name: "Laurina from Australia",
    desc: "“Studying in Indonesia has been a unique experience. The lecturers are passionate, and the balance between academics and practical learning is great. Plus, the rich culture and warm hospitality made it truly unforgettable!”",
  },
  {
    profil: christopher,
    name: "Christopher from New Zealand",
    desc: "“I enjoyed the balance between academic knowledge and practical experiences, which has broadened my perspective. Plus, the chance to explore stunning landscapes and connect with locals made my time here unforgettable!”",
  }, 
  {
    profil: ruud,
    name: "Ruud from Netherland",
    desc: "“Studying in Indonesia has been an incredible experience. The vibrant culture, diverse traditions, and warm hospitality make it truly unique. The education system is rigorous, with passionate lecturers who are always ready to help.”",
  },
  {
    profil: laurina,
    name: "Laurina from Australia",
    desc: "“Studying in Indonesia has been a unique experience. The lecturers are passionate, and the balance between academics and practical learning is great. Plus, the rich culture and warm hospitality made it truly unforgettable!”",
  },
  {
    profil: christopher,
    name: "Christopher from New Zealand",
    desc: "“I enjoyed the balance between academic knowledge and practical experiences, which has broadened my perspective. Plus, the chance to explore stunning landscapes and connect with locals made my time here unforgettable!”",
  }, 
];

const Testimonial = () => {
  return (
    <div className="bg-light_blue w-full py-16">
      <Reveal>
        <div className="max-w-6xl w-full mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center">
            Testimonials
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper pt-[50px] pb-[50px]"
          >
            {data.map((data, index) => (
            <SwiperSlide className="size-[400px]" key={index}>
              <div className="bg-white mx-auto size-[350px] sm:size-full rounded-2xl">
                <img src={data.profil} alt={data.name} className="rounded-t-2xl" />
                <div className="p-2 sm:p-4 space-y-1 md:space-y-2">
                  <h1 className="text-xl font-semibold">{data.name}</h1>
                  <p className="text-sm md:text-base">{data.desc}</p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>
    </div>
  );
};

export default Testimonial;
