import React from 'react';
import lookImgLeft from "../assets/banner-08.jpg";
import lookImgRight from "../assets/shop-item-09.jpg";

export default function BeautyLookbook() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen font-sans flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6">
        <div className="group relative w-full md:w-1/2 aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            src={lookImgLeft}
            alt="Look Left"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white transition-opacity duration-300 group-hover:bg-opacity-50">
            <h1 className="text-4xl font-light tracking-wider mb-2">The Beauty</h1>
            <h2 className="text-2xl font-thin tracking-widest">LOOKBOOK</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
         
          <div className="w-52 h-52 mb-4 overflow-hidden rounded-lg group">
            <img
              src={lookImgRight}
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-light mb-2 tracking-wide text-[#2B2B2B]">
            BOXY2 T-Shirt with Roll Sleeve
          </h3>
          <p className="text-lg text-[#2B2B2B] mb-4">$20.00</p>

          <button className="mt-2 px-8 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-300">
            VIEW COLLECTION
          </button>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-[#D0021B] font-mono">
            {[
              { value: "-2373", label: "days" },
              { value: "-16", label: "hrs" },
              { value: "-21", label: "mins" },
              { value: "-29", label: "secs" },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#D0021B] px-3 py-2 text-center rounded-md min-w-[60px]"
              >
                <p className="text-lg font-bold">{item.value}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
