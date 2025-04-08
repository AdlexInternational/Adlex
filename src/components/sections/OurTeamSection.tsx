'use client'
import ImageSlider from "@/components/image slider/ImageSlider";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const StatisticsCard = ({
  label,
  number,
}: {
  label: string;
  number: string;
}) => {
  return (
    <div className="">
      <p className="text-4xl lg:text-6xl font-medium text-primaryOrange">
        {number}
      </p>
      <p className="text-sm lg:text-lg font-medium text-gray-700 sfpro">
        {label}
      </p>
    </div>
  );
};

const OurTeamSection = () => {
      const [showBounce, setShowBounce] = useState(true);
      const ref = React.useRef(null);
      const isInView = useInView(ref, { once: true });
    
      useEffect(() => {
        if (isInView) {
          setShowBounce(true);
          setTimeout(() => setShowBounce(false), 3000);
        }
      }, [isInView]);
      const HeroImage = {
        BlobImage: "/blobs/smallBlob.svg",
      };
  return (
    <section ref={ref} className="py-16 relative z-20">
         <motion.div
        className="absolute top-0 left-0 sm:left-0 w-40 h-40 md:w-100 md:h-124 -z-10"
        initial={{ scale: 2.5 }}
        animate={showBounce ? { scale: [1.2, 1, 1.2] } : { scale: 1 }}
        transition={{ duration: 1, repeat: showBounce ? Infinity : 0 }}
      >
        <Image
          src={HeroImage.BlobImage}
          alt="Decorative Blob"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </motion.div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-6xl lg:text-[64px] font-bold mb-6 rosmatika">
              Our Team
            </h2>
            <p className="text-2xl lg:text-[32px] font-medium mb-4 sfpro">
              Committed to a Sustainable Future
            </p>
            <p className="mb-4 sfpro">
              Welcome to <span className="font-semibold">Adlex International Paper Waste</span>, where we celebrate teamwork, transparency, and customer satisfaction. Together, we are paving the way for a more sustainable future. Our collective focus on innovation, reliability, and eco-conscious solutions drives us to exceed expectations. We are not just facilitators of international trade; we are advocates for a greener tomorrow, actively contributing to the global recycling ecosystem.
            </p>
            <p className="mb-4 sfpro">
              With over a decade of experience in the waste paper industry, we have gained deep expertise in sourcing and supplying high-quality recovered paper to paper mills and recyclers. Our journey in this sector has allowed us to build strong global networks, understand market dynamics, and deliver tailored solutions to clients.
            </p>
            <p className="sfpro">
              Our focus is on ensuring seamless transactions, maintaining high product quality, and fostering long-term partnerships with suppliers and buyers.
            </p>
            <p className="mb-4 sfpro">
              With a commitment to excellence and a passion for sustainability, we aim to contribute to the circular economy by promoting responsible paper recycling practices. Let us take you on a journey of discovery, where every detail is tailored to your needs, and every effort contributes to a greener planet.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
