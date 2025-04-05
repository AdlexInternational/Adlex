"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { PiRecycleBold } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";



const products = [
  {
    title: "NDLKC",
    description: "NDLKC stands for New Double Lined Kraft Corrugated Cuttings, a popular grade in packaging reuse.",
    Icon: PiRecycleBold,
  },
  {
    title: "NCC",
    description: "NCC (Newsprint Corrugated Cuttings) is a common recovered fiber used in recycled paper manufacturing.",
    Icon: PiRecycleBold,
  },
  {
    title: "SOP",
    description: "Sorted Office Paper (SOP) includes white and pastel-colored paper generated in offices and institutions.",
    Icon: PiRecycleBold,
  },
  {
    title: "CBS",
    description: "CBS or Coated Book Stock is high-grade recovered paper from books with minimal contaminants.",
    Icon: PiRecycleBold,
  },
  {
    title: "ONP",
    description: "Old Newspaper (ONP) is collected post-consumer newspaper material used in recycled newsprint.",
    Icon: PiRecycleBold,
  },
  {
    title: "Mixed Office Waste Paper",
    description: "A blend of office-generated waste paper including prints, shredded docs, and post-consumer waste.",
    Icon: PiRecycleBold,
  },
  {
    title: "Hard White Shavings (HWS)",
    description: "HWS are high-quality shavings from paper trimmings, usually uncoated and suitable for white paper production.",
    Icon: PiRecycleBold,
  },
  {
    title: "Newsprint Waste & Magazines",
    description: "Recycled newsprint and glossy magazines repurposed for sustainable pulp production.",
    Icon: PiRecycleBold,
  },
  {
    title: "Cup Stock (All Grades)",
    description: "Post-consumer cup waste including PE-lined and fiber-based cups suitable for recycling.",
    Icon: PiRecycleBold,
  },
  {
    title: "Kraft Waste & Sack Kraft Paper",
    description: "Recovered kraft paper from industrial sacks and packaging, high in tensile strength.",
    Icon: PiRecycleBold,
  },
  {
    title: "Specialty Grades OCC (All Grades)",
    description: "Old Corrugated Containers (OCC) in various grades sourced from commercial and industrial waste.",
    Icon: PiRecycleBold,
  },
  {
    title: "DSOCC Imported Waste Paper",
    description: "Double Sorted Old Corrugated Containers (DSOCC), an export-grade OCC with minimal contaminants.",
    Icon: PiRecycleBold,
  },
];

export default function ProductSection() {
  const HeroImage = {
    BlobImage: "/blobs/largeblog.svg",
  };
  const pathname = usePathname();
  const isProductPage = pathname.includes("/products");
  const [showBounce, setShowBounce] = useState(true);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
 const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  useEffect(() => {
    if (isInView) {
      setShowBounce(true);
      setTimeout(() => setShowBounce(false), 3000);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative container mx-auto py-12 px-6">
      <motion.div
        className="absolute top-0 left-0  w-40 h-40 md:w-100 md:h-124 -z-10"
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
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
        Waste Services
      </h2>
      <p className="text-black mt-2 max-w-lg">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
      </p>
      {!isProductPage && (
        <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
          <button   onClick={() => handleNavigate("/products")} className="w-full sm:w-auto bg-[#003d29] text-white px-6 py-3 font-semibold rounded-md cursor-pointer hover:bg-green-600 transition">
            Explore Our Products
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {(isProductPage ? products : products.slice(0, 6)).map(
          (product, index) => {
            const { Icon } = product;
            const bgColor = index % 2 === 0 ? "bg-green-100" : "bg-white";
            const bgColorR = index % 2 === 0 ? "bg-green-50" : "bg-green-100";

            return (
              <motion.div
                key={index}
                className={`relative ${bgColor} p-6 rounded-xl shadow-md overflow-hidden cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`${bgColorR} p-2 rounded-full w-16 h-16 justify-center items-center flex`}
                >
                  <Icon size={32} className="text-green-600 " />
                </div>
                <h3 className="text-lg font-bold mt-4">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>

                <motion.div
                  className="absolute bottom-4 right-4 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow"
                  whileHover={{ scale: 1.2 }}
                >
                  <FiArrowRight className="text-gray-700" />
                </motion.div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}
