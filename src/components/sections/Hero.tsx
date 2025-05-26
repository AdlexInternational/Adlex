"use client";
import React from "react";
import { PiPackageLight, PiRecycleBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsPrinter } from "react-icons/bs";
import { MdLineStyle } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Hero() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const heroImages = [
    "/images/wastepaperImages/banner02.png",
    "/images/wastepaperImages/banner1.jpg",
    "/images/wastepaperImages/packaging.jpeg",
    "/images/wastepaperImages/PackagingImage.jpeg",
    "/images/wastepaperImages/Specialty.jpeg",
    "/images/wastepaperImages/wastepaper.jpeg",
    "/images/wastepaperImages/banner3.jpg",
    "/images/wastepaperImages/mixed.jpg",
    "/images/wastepaperImages/curagation.jpeg",
  ];

  const sections = [
    {
      title: "Corrugation",
      icon: MdLineStyle,
      blob: "smallBlob.svg",
      pera: "Eco-friendly corrugated materials for sustainable packaging solutions.",
    },
    {
      title: "Writing & Printing",
      icon: BsPrinter,
      blob: "smallBlob.svg",
      pera: "High-quality recycled paper for writing and printing needs.",
    },
    {
      title: "Packaging",
      icon: PiPackageLight,
      blob: "smallBlob.svg",
      pera: "Durable and sustainable packaging options for various industries.",
    },
    {
      title: "Food & Specialty",
      icon: IoFastFoodOutline,
      blob: "smallBlob.svg",
      pera: "Specialized paper solutions for food-grade and unique packaging needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[800px] sm:h-screen flex items-center pt-20">
        {/* Swiper Slider Background */}
        <div className="absolute inset-0 w-full h-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Waste Management Background ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    className="z-0"
                    quality={75}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Left Side Green Overlay (Gradient) */}
        <div className="absolute left-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-r from-green-900 via-green-700 to-transparent opacity-70 z-10"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex justify-center sm:justify-start">
          <div className="max-w-3xl text-white text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
              Reduce. <br /> Reuse.
              <br /> Recycle More.
            </h2>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-4xl font-light">
              Adlex International Group
            </h2>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light">
              Leading the Future of Sustainable Paper Trade
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
              <button
                onClick={() => handleNavigate("/products")}
                className="w-full sm:w-auto bg-[#003d29] text-white px-6 py-3 font-semibold rounded-md cursor-pointer hover:bg-green-600 transition"
              >
                Explore Our Services
              </button>
              <button
                onClick={() => handleNavigate("/about")}
                className="w-full sm:w-auto bg-white text-black px-6 py-3 font-semibold rounded-md cursor-pointer hover:bg-gray-100 transition"
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Swiper for mobile, Grid for desktop */}
      <div className=" relative w-full bg-white shadow-lg py-6 px-6 sm:px-12 container mx-auto rounded-2xl -mt-24 z-30">
        {/* Mobile Swiper (hidden on sm and up) */}
        <div className="sm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-pagination",
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="info-swiper"
          >
            {sections.map(({ title, icon: Icon, blob, pera }, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center pb-10">
                  {/* Blob Background */}
                  <div className="absolute -top-3 w-20 h-20 flex justify-center items-center">
                    <Image
                      src={`/blobs/${blob}`}
                      alt="Blob Background"
                      width={100}
                      height={100}
                      className="object-cover opacity-50"
                      quality={75}
                    />
                  </div>
                  <div className="absolute -top-3 w-20 h-20 flex justify-center items-center rotate-90">
                    <Image
                      src={`/blobs/${blob}`}
                      alt="Blob Background"
                      width={120}
                      height={120}
                      className="object-cover opacity-50"
                      quality={75}
                    />
                  </div>

                  {/* Icon */}
                  <Icon size={40} className="text-green-600 relative z-20" />

                  {/* Title */}
                  <h3 className="font-bold text-lg mt-8 z-20">{title}</h3>
                  <p className="text-gray-500 text-sm max-w-xs z-20 text-center">
                    {pera}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className=" hidden sm:grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {sections.map(({ title, icon: Icon, blob, pera }, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Blob Background */}
              <div className="absolute sm:-top-10 -top-5 w-20 h-20 flex justify-center items-center sm:w-32 sm:h-32">
                <Image
                  src={`/blobs/${blob}`}
                  alt="Blob Background"
                  width={100}
                  height={100}
                  className="object-cover opacity-50"
                  quality={75}
                />
              </div>
              <div className="absolute sm:-top-10 -top-5 w-20 h-20 flex justify-center items-center sm:w-32 sm:h-32 rotate-90">
                <Image
                  src={`/blobs/${blob}`}
                  alt="Blob Background"
                  width={120}
                  height={120}
                  className="object-cover opacity-50"
                  quality={75}
                />
              </div>

              {/* Icon */}
              <Icon size={40} className="text-green-600 relative z-20" />

              {/* Title */}
              <h3 className="font-bold text-lg mt-8 z-20">{title}</h3>
              <p className="text-gray-500 text-sm max-w-xs z-20">{pera}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
