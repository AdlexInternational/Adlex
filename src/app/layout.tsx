import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Adlex International | Sustainable Waste & Recycling Services",
  description:
    "Adlex International Leading waste management company offering comprehensive recycling services, dumpster rentals, and eco-friendly waste solutions.",
  keywords: [
    "adlex international",
    "adlex",
    "waste management",
    "recycling services",
    "dumpster rental",
    "eco-friendly waste solutions",
    "garbage collection",
    "sustainable waste disposal",
    "paper recycling",
    "corrugated packaging",
    "industrial waste management",
    "waste paper recycling",
    "paper trade company",
    "sustainable paper solutions",
    "global waste paper management",
    "paper recycling experts",
    "eco-friendly paper trade",
    "waste paper suppliers",
    "paper mills",
  ],
  openGraph: {
    title: "Adlex International | Sustainable Waste & Recycling Services",
    description:
      "Leading waste management company offering comprehensive recycling services, dumpster rentals, and eco-friendly waste solutions.",
    url: "https://adlexinternational.com",
    siteName: "Adlex International Waste Solutions",
    images: [
      {
        url: "/images/wastepaperImages/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Adlex International Waste Management Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adlex International | Sustainable Waste & Recycling Services",
    description:
      "Leading waste management company offering comprehensive recycling services, dumpster rentals, and eco-friendly waste solutions.",
    images: ["/images/wastepaperImages/banner1.jpg"],
  },
  alternates: {
    canonical: "https://adlexinternational.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adlex International Waste Solutions",
              url: "https://adlexinternational.com",
              logo: "https://adlexinternational.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/adlexinternational",
                "https://www.linkedin.com/company/adlexinternational",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9953213711",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: "en",
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
