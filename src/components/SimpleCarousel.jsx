import { useState } from "react";

import img1 from "../assets/shopi1.webp";
import img2 from "../assets/shopi2.webp";
import img3 from "../assets/shopy3.webp";
import img4 from "../assets/shopy4.webp";
import img5 from "../assets/shopy5.webp";
import img6 from "../assets/shopy6.webp";
import img7 from "../assets/shopy7.webp";
import img8 from "../assets/shopy8.webp";

const slides = [
  { id: 1, image: img1, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
  { id: 2, image: img2, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: true },
  { id: 3, image: img3, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
  { id: 4, image: img4, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
  { id: 5, image: img5, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: true },
  { id: 6, image: img6, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
  { id: 7, image: img7, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
  { id: 8, image: img8, title: "Boxy7 T-Shirt with Roll Sleeve", price: 20.0, isOnSale: false },
];

import { useCart } from "./CartContext";

export default function SimpleCarousel() {
  const { addToCart } = useCart();
  const [index, setIndex] = useState(0);
  const slidesPerPage = 4;

  const next = () => {
    if (index < slides.length - slidesPerPage) setIndex(index + slidesPerPage);
  };

  const prev = () => {
    if (index > 0) setIndex(index - slidesPerPage);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 relative mt-20">
      <h1 className="text-center pb-10 text-4xl">FEATURED PRODUCTS</h1>
      <div className="flex space-x-4 overflow-hidden">
        {slides.slice(index, index + slidesPerPage).map(({ id, image, title, price, isOnSale }) => (
          <div
            key={id}
            className="flex-shrink-0 w-1/4 rounded-lg shadow-lg bg-white relative group"
          >
            {isOnSale && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Sale
                </span>
              </div>
            )}
            <div className="relative h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button
                  onClick={() => addToCart({ id, title, price, image })}
                  className="bg-black text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-center font-semibold mb-2 line-clamp-2">{title}</h3>
              <div className="flex justify-center">
                <span className="text-xl font-semibold text-gray-900">${price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ‹
      </button>
      <button
        onClick={next}
        disabled={index >= slides.length - slidesPerPage}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ›
      </button>
    </div>
  );
}
