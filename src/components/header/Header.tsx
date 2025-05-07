"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi"; // Icons for menu toggle
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SocialLinks } from "@/app/contact/ContactFormSection";
import Image from "next/image";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    toggleSidebar();
  }, [pathname]);

  return (
    <div className="">
      {/* Overlay (Closes Sidebar on Click) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
          className="fixed inset-0 bg-gray-100 bg-opacity-60 backdrop-blur-sm z-50"
        />
      )}
      {/* Sidebar */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-base z-[1000] flex flex-col p-6 shadow-lg transition-all bg-green-50"
      >
        {/* Close Button */}
        <button onClick={toggleSidebar} className="self-end mb-6">
          <FiX className="text-2xl text-dark-black" />
        </button>

        {/* Sidebar Items */}
        <nav className="flex flex-col gap-3 ">
          {[
            { icon: <FiArrowRight />, label: "Home", path: "/" },
            { icon: <FiArrowRight />, label: "Products", path: "/products/" },
            { icon: <FiArrowRight />, label: "About", path: "/about/" },
            { icon: <FiArrowRight />, label: "Contact", path: "/contact/" },
          ].map(({ icon, label, path }, index) => (
            <Link href={path} key={label}>
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-2 py-3 hover:bg-gray-300 rounded-lg cursor-pointer justify-between ${
                  pathname === path ? "bg-green-200" : "bg-base "
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 * index }}
              >
                <span className="text-sm text-dark-black">{label}</span>
                <span className="text-xl text-dark-black">{icon}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <div className="mb-5">
            <h3 className="rosmatika text-lg">Contact Information</h3>
            <p className="sfpro text-sm font-medium">
              We are here to assist you!
            </p>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="flex items-center gap-4 text-sm"
                  href={"tel:+91 1234567890"}
                >
                  <BiSolidPhoneCall size={16} className="text-green-600" /> +91
                  1234567890
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="flex items-center gap-4 text-sm "
                  href={"mailto:thetravelcollection@gmail.com"}
                >
                  <IoMailSharp size={14} className="text-green-600" />
                  arowlexwaste@gmail.com
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 text-sm" href={"#"}>
                  <FaMapMarkerAlt size={16} className="text-green-600" />
                  India
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mt-80 mt-8">
            <SocialLinks />
          </div>
        </div>
      </motion.aside>
    </div>
  );
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed w-full p-2 lg:p-5 z-[900] ">
        <div className="flex  justify-between items-center lg:px-14 px-5 lg:py-[20px] py-4 bg-white shadow-md z-50 rounded-2xl border-1 border-green-100">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo1.png" 
              alt="Arowlex Logo"
              width={200} 
              height={200} 
              className="w-[120px] md:w-70 md:h-16 object-contain"
            />
            {/* <span className="text-xl lg:text-4xl font-normal rosmatika text-green-500">
              Arowlex
            </span> */}
          </Link>

          {/* Container for Links */}
          <div className="relative right-5 xl2:right-5 hidden md:flex space-x-4 w-[378px] xl4:w-[368px] h-[39px] justify-between items-center">
            <Link
              href="/"
              className={`text-md xl2:text-xl sfpro text-black  ${
                pathname === "/" ? "font-semibold" : "font-medium"
              } hover:text-gray-600 relative`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-gradient" />
              )}
            </Link>
            <Link
              href="/products"
              className={`text-md xl2:text-xl sfpro text-black  ${
                pathname === "/products" ? "font-semibold" : "font-medium"
              } hover:text-gray-600 relative`}
            >
              Products
              {pathname === "/products" && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-gradient" />
              )}
            </Link>
            <Link
              href="/about"
              className={`text-md xl2:text-xl sfpro text-black  font-medium ${
                pathname === "/about" ? "font-semibold" : "font-medium"
              } hover:text-gray-600 relative`}
            >
              About Us
              {pathname === "/about" && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-gradient" />
              )}
            </Link>
            <Link
              href="/contact"
              className={`text-white font-medium px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-gradient  ${
                pathname === "/contact" ? "bg-[#003d29]" : "bg-[#003d29]"
              }`}
            >
              Contact Us <FiArrowRight />
            </Link>
          </div>

          {/* Sidebar Toggle Button (Mobile) */}

          <div onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
            <FiMenu color="#000000" />
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
