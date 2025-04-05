import Breadscrumb from "@/components/breadscrumb/Breadscrumb";
import ProductSection from "@/components/sections/ProductSection";
import SafeAreaTop from "@/layout/SafeAreaTop";
import React from "react";

export default function Products() {
  return (
    <SafeAreaTop>
      <Breadscrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
        ]}
      />
      <ProductSection />
    </SafeAreaTop>
  );
}
