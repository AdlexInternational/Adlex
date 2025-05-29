"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { PiRecycleBold } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";

const importedWastePaperProducts = [
  {
    title: "NDLKC",
    description:
      "NDLKC stands for New Double Lined Kraft Corrugated Cuttings, a popular grade in packaging reuse.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/ndlkc.jpg",
    category: "Imported waste paper",
  },
  {
    title: "NCC",
    description:
      "NCC (Newsprint Corrugated Cuttings) is a common recovered fiber used in recycled paper manufacturing.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/ncc.jpg",
    category: "Imported waste paper",
  },
  {
    title: "SOP",
    description:
      "Sorted Office Paper (SOP) includes white and pastel-colored paper generated in offices and institutions.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/sop.jpg",
    category: "Imported waste paper",
  },
  {
    title: "CBS",
    description:
      "CBS or Coated Book Stock is high-grade recovered paper from books with minimal contaminants.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/cbs.jpg",
    category: "Imported waste paper",
  },
  {
    title: "ONP",
    description:
      "Old Newspaper (ONP) is collected post-consumer newspaper material used in recycled newsprint.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/onp.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Mixed Office Waste Paper",
    description:
      "A blend of office-generated waste paper including prints, shredded docs, and post-consumer waste.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Hard White Shavings (HWS)",
    description:
      "HWS are high-quality shavings from paper trimmings, usually uncoated and suitable for white paper production.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Newsprint Waste & Magazines",
    description:
      "Recycled newsprint and glossy magazines repurposed for sustainable pulp production.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Cup Stock (All Grades)",
    description:
      "Post-consumer cup waste including PE-lined and fiber-based cups suitable for recycling.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Kraft Waste & Sack Kraft Paper",
    description:
      "Recovered kraft paper from industrial sacks and packaging, high in tensile strength.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "Specialty Grades OCC (All Grades)",
    description:
      "Old Corrugated Containers (OCC) in various grades sourced from commercial and industrial waste.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
  {
    title: "DSOCC Imported Waste Paper",
    description:
      "Double Sorted Old Corrugated Containers (DSOCC), an export-grade OCC with minimal contaminants.",
    Icon: PiRecycleBold,
    image: "/images/wastepaperImages/mixed.jpg",
    category: "Imported waste paper",
  },
];

const finishPaperProducts = [
  {
    title: "Writing & Printing",
    description:
      "High-quality paper designed for writing and printing purposes with excellent finish.",
    Icon: PiRecycleBold,
    image: "/images/finishpaper/writing.jpg",
    category: "Finish paper",
  },
  {
    title: "Corrugation",
    description:
      "Specialty paper used for corrugated boxes and packaging materials.",
    Icon: PiRecycleBold,
    image: "/images/finishpaper/corrugation.jpg",
    category: "Finish paper",
  },
  {
    title: "Packaging",
    description:
      "Durable paper products specifically designed for packaging applications.",
    Icon: PiRecycleBold,
    image: "/images/finishpaper/packaging.jpg",
    category: "Finish paper",
  },
  {
    title: "Food & Specialty",
    description:
      "Food-grade and specialty papers for various industrial applications.",
    Icon: PiRecycleBold,
    image: "/images/finishpaper/food.jpg",
    category: "Finish paper",
  },
];

const allProducts = [...importedWastePaperProducts, ...finishPaperProducts];

export default function ProductSection() {
  const HeroImage = {
    BlobImage: "/blobs/largeblog.svg",
  };
  const pathname = usePathname();
  const isProductPage = pathname.includes("/products");
  const [showBounce, setShowBounce] = useState(true);
  const [activeCategory, setActiveCategory] = useState(isProductPage?"All":'Imported waste paper');
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

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  const displayProducts = isProductPage
    ? filteredProducts
    : filteredProducts;

  return (
    <div ref={ref} className="relative container mx-auto py-12 px-6">
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 md:w-100 md:h-124 -z-10"
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
        Paper Products
      </h2>
      <h1 className="text-black mt-2 max-w-lg">
       Adlex International, we specialize in sustainable paper solutions,
        offering both imported waste paper for recycling and high-quality finish
        paper products.
      </h1>
      {!isProductPage && (
        <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
          <button
            onClick={() => handleNavigate("/products")}
            className="w-full sm:w-auto bg-[#003d29] text-white px-6 py-3 font-semibold rounded-md cursor-pointer hover:bg-green-600 transition"
          >
            Explore All Products
          </button>
        </div>
      )}
      {/* Category filter buttons - now shown on both pages */}
      <div className="mt-6 flex flex-wrap gap-4">
        {isProductPage && (
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-md ${
              activeCategory === "All"
                ? "bg-[#003d29] text-white"
                : "bg-gray-200"
            }`}
          >
            All Products
          </button>
        )}
        <button
          onClick={() => setActiveCategory("Imported waste paper")}
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Imported waste paper"
              ? "bg-[#003d29] text-white"
              : "bg-gray-200"
          }`}
        >
          Imported Waste Paper
        </button>
        <button
          onClick={() => setActiveCategory("Finish paper")}
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Finish paper"
              ? "bg-[#003d29] text-white"
              : "bg-gray-200"
          }`}
        >
          Finish Paper
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {displayProducts.map((product, index) => {
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
              <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-green-200 text-green-800">
                {product.category}
              </span>

              <motion.div
                className="absolute bottom-4 right-4 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow"
                whileHover={{ scale: 1.2 }}
              >
                <FiArrowRight className="text-gray-700" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
