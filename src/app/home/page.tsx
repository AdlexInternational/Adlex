import Hero from "@/components/sections/Hero";
import SafeAreaTop from "@/layout/SafeAreaTop";
import React from "react";
import AboutSection from "../about/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactFormSection from "../contact/ContactFormSection";
import TestimonialSlider from "@/components/image slider/TestimonialSlider";
import Testimonials from "@/components/testimonials/Testimonials";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProductSection />
      <OurTeamSection />
      <WhyChooseUsSection />
      {/* <Testimonials/> */}
      <ContactFormSection/>
    </div>
  );
}
