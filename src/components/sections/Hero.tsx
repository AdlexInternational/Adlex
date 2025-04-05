'use client'
import React from "react";
import Image from "next/image";
import { PiRecycleBold } from "react-icons/pi";
import { FaDumpster, FaTrashAlt, FaTruckMoving } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const HeroImage = {
    PaperImage: "/images/WastePaperRecycle.jpg",
  };
  const sections = [
    { title: "Dumpster Sizes", icon: PiRecycleBold, blob: "smallBlob.svg" },
    { title: "Waste Collection", icon: PiRecycleBold, blob: "smallBlob.svg" },
    { title: "Pickup Schedule", icon: PiRecycleBold, blob: "smallBlob.svg" },
    { title: "Pickup Schedule", icon: PiRecycleBold, blob: "smallBlob.svg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[800px] sm:h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={HeroImage.PaperImage}
            alt="Waste Management Background"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
        </div>

        {/* Left Side Green Overlay (Gradient) */}
        <div className="absolute left-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-r from-green-900 via-green-700 to-transparent opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex justify-center sm:justify-start">
          <div className="max-w-3xl text-white text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
              Waste Management <br /> Waste Less,
              <br /> Recycle More.
            </h1>

            <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light">
              Efficient solutions for waste collection, dumpster rental, and
              reliable garbage pickup services.
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

      {/* Info Section (Positioned Below Hero) */}
      <div className="relative w-full bg-white shadow-lg py-8 px-6 sm:px-12 container mx-auto rounded-2xl -mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {sections.map(({ title, icon: Icon, blob }, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Blob Background (Now Visible!) */}
              <div className="absolute sm:-top-10 -top-5 w-20 h-20 flex justify-center items-center sm:w-32 sm:h-32">
                <Image
                  src={`/blobs/${blob}`}
                  alt="Blob Background"
                  width={100} // Ensuring width
                  height={100} // Ensuring height
                  className="object-cover opacity-50"
                />
              </div>
              <div className="absolute sm:-top-10  -top-5 w-20 h-20 flex justify-center items-center sm:w-32 sm:h-32 rotate-90">
                <Image
                  src={`/blobs/${blob}`}
                  alt="Blob Background"
                  width={120} // Ensuring width
                  height={120} // Ensuring height
                  className="object-cover opacity-50"
                />
              </div>

              {/* Icon (Now in Front) */}
              <Icon size={40} className="text-green-600 relative z-20" />

              {/* Title */}
              <h3 className="font-bold text-lg mt-8 z-20">{title}</h3>
              <p className="text-gray-500 text-sm max-w-xs z-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
