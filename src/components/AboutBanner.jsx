import React from "react";
import aboutBanner from "../assets/shopi1.webp"; 

export default function AboutBanner() {
  return (
    <div
      className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutBanner})`,
      }}
    >
      <div className="absolute inset-0  bg-opacity-40" />
      <h2 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10 tracking-wide">
        ABOUT
      </h2>
    </div>
  );
}
