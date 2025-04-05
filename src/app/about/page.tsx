import SafeAreaTop from "@/layout/SafeAreaTop";
import React from "react";
import AboutSection from "./AboutSection";
import Breadscrumb from "@/components/breadscrumb/Breadscrumb";

export default function page() {
  return (
    <div >
 

      <SafeAreaTop >
        <Breadscrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
       
          ]}
          />
      
        <AboutSection />
      </SafeAreaTop>
    </div>
  );
}
