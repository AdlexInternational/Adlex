"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ravi Patel",
    country: "India",
    feedback:
      "Arowlex has made waste paper disposal so easy and efficient. Their team is punctual, professional, and environmentally conscious.",
    date: "2024.03.18",
    image:
      "https://images.unsplash.com/photo-1628264047320-49bab8dc07d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sana Khan",
    country: "UAE",
    feedback:
      "We’ve been working with Arowlex for our office paper waste, and their service has been top-notch. It feels good to contribute to sustainability.",
    date: "2024.03.30",
    image:
      "https://images.unsplash.com/photo-1571908599538-7e1e6e92b064?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manoj Gupta",
    country: "India",
    feedback:
      "Arowlex’s paper recycling solutions are eco-friendly and reliable. Highly recommend their services for both homes and businesses.",
    date: "2024.04.02",
    image:
      "https://images.unsplash.com/photo-1611423085608-b4322e02da73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fatima Noor",
    country: "UAE",
    feedback:
      "Thanks to Arowlex, we’ve significantly reduced paper waste in our company. Their monthly pickup service is super convenient!",
    date: "2024.04.04",
    image:
      "https://images.unsplash.com/photo-1609231124359-9cf5f13cdbe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[280px] md:h-[350px] md:w-[450px] lg:w-[1000px] rounded-2xl flex items-center justify-center overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-background to-transparent pointer-events-none z-10 " />
      <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

      <Swiper
        spaceBetween={0}       
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        slideToClickedSlide
        className=""
      breakpoints={{
        640: {
          slidesPerView: 1, // Mobile view: 1 full
        },
        768: {
          slidesPerView: 1.2, // Tablet view: 1.2 full
        },
        1024: {
          slidesPerView: 1.5, // Small desktop view: 1.5 full
        },
        1280: {
          slidesPerView: 1.5  , // Large desktop view: 2 full
        },
      }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}  >
            <div className="flex items-center justify-center h-[520px]">
              <div className=" bg-white rounded-2xl shadow-lg p-6 w-[80%] sm:w-[90%] md:w-[95%] opacity-100">
                <div className="flex items-start flex-col xs3:flex-row space-x-4">
                  <div className="w-16 h-16 xs3:w-20 xs3:h-20 rounded-full relative overflow-hidden flex-shrink-0 m-auto xs3:m-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </div>
                 
                  <div className="text-left flex-grow">
                    <h3 className="font-medium text-lg md:text-2xl rosmatika ">
                      {testimonial.name}
                    </h3>
                    <p className="text-base font-semibold text-mute">
                      {testimonial.country}
                    </p>
                    <p className="mt-2 text-gray-700 text-sm md:text-lg">
                      {testimonial.feedback}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-mute mt-2">
                      TTC User, {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
