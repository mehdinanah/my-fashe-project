
import React from "react";
import contactImg from "../assets/shopy6.webp"; 

export default function ContactBanner() {
  return (
    <div
      className="relative w-full h-72 md:h-65 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <h2 className="relative text-white text-4xl md:text-5xl font-bold z-10">CONTACT</h2>
    </div>
  );
}
