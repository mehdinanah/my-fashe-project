import React from "react";
import bannerImage from "../assets/banner.webp"; 

export default function ShopBanner() {
  return (
    <div className="relative w-full h-61 overflow-hidden">
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold tracking-wide">
          PRODUCTS
        </h1>
      </div>
    </div>
  );
}
