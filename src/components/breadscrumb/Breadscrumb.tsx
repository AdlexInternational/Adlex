"use client";
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadscrumb({ items }: Props) {
  return (
    <div className="relative w-full h-[300px] bg-[#003d29] flex items-center justify-center z-10">
      <nav className="text-white text-lg flex items-center space-x-2">
        {items.map((item, index) => (
          <div className="flex items-center space-x-2 mt-30 sm:mt-50" key={index}>
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <FaChevronRight className="text-xs opacity-70" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
