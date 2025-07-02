
import React from "react";
import blogImg from "../assets/shopy4.webp";

export default function BlogBanner() {
  return (
    <div
      className="relative w-full h-72 md:h-65 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${blogImg})` }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <h2 className="relative text-white text-4xl md:text-5xl font-bold z-10">News</h2>
    </div>
  );
}
