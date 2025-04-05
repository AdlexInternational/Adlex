'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const StatisticsCard = ({ label, number }: { label: string; number: string }) => {
  return (
    <div>
      <p className="text-4xl lg:text-6xl font-medium text-primaryOrange">{number}</p>
      <p className="text-sm lg:text-lg font-medium text-gray-700 sfpro">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  const HeroImage = {
    PaperImage: "/images/WastePaperRecycle.jpg",
    BlobImage: "/blobs/largeBlog.svg",
  };
 const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");

  return (
    <section className="py-16 relative z-20 px-4">
      <div className="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-104 -z-10">
        <Image
          src={HeroImage.BlobImage}
          alt="Decorative Blob"
          width={320}
          height={320}
          priority
        />
      </div>

      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">ABOUT US</h2>
            <p className="text-2xl lg:text-[32px] font-medium mb-4 sfpro">
              Leading the Future of Waste Paper Recycling
            </p>
            <p className="mb-4 sfpro">
              Welcome to <span className="font-semibold">Arowlex Paper Waste</span>, a trusted name in waste paper management.
              We are a leading waste paper indentor, connecting global suppliers with paper mills and recyclers.
            </p>
            <p className="mb-4 sfpro">
              We specialize in sourcing and supplying high-quality recovered paper to meet diverse industry needs.
              Our collective focus on innovation, reliability, and eco-conscious solutions drives us to exceed expectations.
            </p>
            <p className="mb-4 sfpro">
              Our mission is to deliver premium-grade waste paper at competitive prices while promoting sustainable recycling practices.
              With a strong global network, we ensure seamless transactions, efficient logistics, and timely deliveries.
            </p>
            <p className="mb-4 sfpro">
              We are not just facilitators of international trade — we are advocates for a greener tomorrow, actively contributing to the global recycling ecosystem.
            </p>
            <p className="mb-4 sfpro">
              At <span className="font-semibold">Arowlex Paper Waste</span>, we build long-term relationships based on trust, integrity, and excellence.
              Our strength lies in the dedication of our exceptional team — a mix of industry veterans, dynamic professionals, and passionate problem-solvers
              who bring years of experience in the import/export of waste and finished paper.
            </p>
            <p className="sfpro">
              We aim to bridge the gap between suppliers and buyers with transparency, quality assurance, and mutual growth.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 sm:mt-0">
            <Image
              src={HeroImage.PaperImage}
              alt="Waste Paper Recycling"
              className="rounded-2xl"
              width={700}
              height={200}
              priority
            />
          </div>
        </div>

        {/* Mission Section - only for About Page */}
        {isAboutPage && (
          <div className="mt-16 text-gray-800">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-center">Our Mission</h3>
            <p className="max-w-4xl mx-auto text-lg sfpro text-center">
              Our mission is to be a catalyst for sustainable paper recycling by streamlining the global trade of recovered paper.
              We are committed to reducing waste, conserving natural resources, and empowering industries to adopt eco-friendly alternatives.
              Through innovation, transparency, and partnership, we aim to be the preferred global link between waste paper suppliers and mills.
            </p>
          </div>
        )}

        {/* Centered Discover Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl lg:text-6xl font-medium mb-6 rosmatika">
            Leading in Waste Paper Management Services
          </h3>
          <div className="flex justify-center space-x-12 flex-wrap gap-4">
            <StatisticsCard label="Global Suppliers Connected" number="150+" />
            <StatisticsCard label="Paper Mills Served" number="200+" />
            <StatisticsCard label="Tons Recycled" number="500K+" />
          </div>
          {!isAboutPage && (
            <div className="mt-8">
              <button onClick={()=>handleNavigate('/about')} className="w-full sm:w-auto bg-[#003d29] text-white px-6 py-3 font-semibold rounded-md cursor-pointer hover:bg-green-400 transition">
                More About Us
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
