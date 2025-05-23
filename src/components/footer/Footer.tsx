import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003d29] text-white pt-12 pb-6 px-6 md:px-12">
      {/* Top Title Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Adlex International Pvt Ltd.</h2>
        <p className="text-sm text-gray-300">
        Adlex International is committed to revolutionizing how paper waste is managed
          across industries. Our mission is to promote sustainability by
          encouraging responsible recycling practices, reducing environmental
          impact, and creating awareness about the importance of proper paper
          waste disposal. Together, we strive for a cleaner, greener future.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-500 my-6 pt-4 flex flex-wrap justify-center gap-6 text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About Us</Link>
      {/* <Link href="/products" className="hover:underline">Explore</Link> */}
      <Link href="/contact" className="hover:underline">Contact Us</Link>
      {/* <Link href="/testimonials" className="hover:underline">Testimonial</Link> */}
    </div>

      {/* Contact Info Section */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
  {/* Email */}
  <div>
    <div className="flex justify-center mb-2 text-2xl">
      <FaEnvelope />
    </div>
    <h3 className="font-medium">Mail Us</h3>
    <p className="text-sm text-gray-300">
      <a
        href="mailto:info@adlexinternational.com"
        className="hover:underline"
      >
        info@adlexinternational.com
      </a>
    </p>
  </div>

  {/* Office Address */}
  <div>
    <div className="flex justify-center mb-2 text-2xl">
      <FaMapMarkerAlt />
    </div>
    <h3 className="font-medium">Office</h3>
    <p className="text-sm text-gray-300">
      <a
        href="https://www.google.com/maps?q=B-128+First+Floor,+Sec-2+Noida+Gautam+Budh+Nagar+UP+201301"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        B-128 First Floor, Sec-2 Noida<br />
        Gautam Budh Nagar, UP 201301
      </a>
    </p>
  </div>

  {/* Call Us */}
  <div>
    <div className="flex justify-center mb-2 text-2xl">
      <FaPhoneAlt />
    </div>
    <h3 className="font-medium">Call Us</h3>
    <p className="text-sm text-gray-300">
      <a href="tel:+919897686964" className="hover:underline">
        +91-9897686964
      </a>
    </p>
  </div>
</div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 Adlex International Pvt Ltd.
      </div>
    </footer>
  );
}
