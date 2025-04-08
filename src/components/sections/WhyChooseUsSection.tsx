'use client'
import React from "react";

import { motion} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { CiCircleCheck, CiDeliveryTruck, CiGlobe, CiShoppingTag } from "react-icons/ci";
import { PiUsersThreeThin } from "react-icons/pi";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <CiGlobe size={32} />,
      title: "Global Sourcing Network",
      description:
        "Strong ties with suppliers in the USA, Europe, Middle East, and Asia.",
    },
    {
      icon: <CiDeliveryTruck size={32} />,
      title: "Reliable & Timely Deliveries",
      description:"Ensuring a smooth supply chain for our customers with on-time deliveries.",
    },
    {
      icon: <CiCircleCheck size={32} />,
      title: "Quality Assurance",
      description:
        "Strict quality control and compliance with international standards.",
    },
    {
      icon: <CiShoppingTag size={32} />,
      title: "Competitive Pricing",
      description: "Best market rates with complete transparency.",
    },
    {
      icon: <PiUsersThreeThin size={32} />,
      title: "Customer-Centric Approach",
      description: "Customized solutions tailored to client needs.",
    },
  ];
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 md:px-12 text-left">
        <h2 className="text-4xl lg:text-5xl  font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-8">Let’s work together to create a greener future!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
          {features.map((feature, index) => (


           <motion.div
              key={index}
              className={`relative p-6 rounded-lg shadow-md flex flex-col items-start space-y-4  ${
                index % 2 === 0 ? "bg-green-100" : "bg-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                  <div
                className={`${index % 2 === 0 ? "bg-green-50" : "bg-green-100"} p-2 rounded-full w-16 h-16 justify-center items-center flex`}
              >

              <div className="text-green-600">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold mt-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-1 text-left">{feature.description}</p>
              <motion.div
                className="absolute bottom-4 right-4 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow"
                whileHover={{ scale: 1.2 }}
              >
                <FiArrowRight className="text-gray-700" />
              </motion.div>
          
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
