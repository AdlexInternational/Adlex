import SafeAreaTop from "@/layout/SafeAreaTop";
import React from "react";
import ContactFormSection from "./ContactFormSection";
import Breadscrumb from "@/components/breadscrumb/Breadscrumb";

export default function page() {
  return (
    <div>
      <SafeAreaTop>
        <Breadscrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Conatct Us", href: "/contact" },
          ]}
        />

        <ContactFormSection />
      </SafeAreaTop>
    </div>
  );
}
