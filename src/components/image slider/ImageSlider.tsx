"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const images = [
  "/images/team1.jpg",
  "/images/team1.jpg",
  "/images/team2.jpg",
  "/images/team1.jpg",
  "/images/team2.jpg",


];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="w-full pr-10 xs1:pr-20 md:pr-0 h-[420px] sm1:h-[450px]  md:h-full md:w-[450px] lg:w-[600px] rounded-2xl flex items-center justify-center overflow-hidden">
      <div className="relative left-[13%] top-0 h-[250px] xs1:h-[200px] sm1:h-[275px] md:h-[325px] w-[20%] bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="relative right-[-87%] top-0 h-[250px] xs1:h-[200px] sm1:h-[275px] md:h-[325px] w-[20%] bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      <Swiper
        spaceBetween={-40}
        slidesPerView={1.5} // Show partial images
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active index
        modules={[Autoplay]}
        className="flex items-center"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center ">
            <div className="flex items-center justify-center h-[520px] ">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={`object-cover rounded-2xl shadow-lg transition-all duration-500 ${
                  index === activeIndex
                    ? "h-[300px] w-[80%] xs1:h-[300px] xs1:w-[80%] sm1:h-[375px] sm1:w-[75%] md:w-[70%] md:h-[355px] lg:w-[90%] lg:h-[450px] opacity-100" // Center image full height
                    : "h-[250px] w-[55%] xs1:h-[200px] xs1:w-[50%] sm1:h-[275px] sm1:w-[70%] md:w-[80%] md:h-[275px] lg:w-[80%] lg:h-[325px] opacity-85" // Side images 70% height
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;