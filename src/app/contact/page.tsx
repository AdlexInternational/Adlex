import React from "react";
import Head from "next/head";
import SafeAreaTop from "@/layout/SafeAreaTop";
import ContactFormSection from "./ContactFormSection";
import Breadscrumb from "@/components/breadscrumb/Breadscrumb";

export default function page() {
  return (
    <>
      <Head>
        <title>Contact Us | Adlex International</title>
        <meta
          name="description"
          content="Get in touch with Adlex International for sustainable waste management and recycling services. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.adlexinternational.com/contact"
        />
      </Head>

      <SafeAreaTop>
        <Breadscrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />
        <ContactFormSection />
      </SafeAreaTop>
    </>
  );
}
