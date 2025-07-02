import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

const slides = [
  { src: img1, alt: "img1", title: "NEW ARRIVALS", subtitle: "Women Collection 2018" },
  { src: img2, alt: "img2", title: "SUMMER SALE", subtitle: "Up to 50% OFF" },
  { src: img3, alt: "img3", title: "LIMITED EDITION", subtitle: "Exclusive for You" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 500);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, idx) => (
          <div className="min-w-full h-full relative" key={idx}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
            <div
              className={`absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4 transition-opacity duration-500 ${
                fade && idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {
                slide.subtitle === "Exclusive for You" ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base sm:text-lg md:text-xl mb-2"
                  >
                    {slide.subtitle}
                  </motion.p>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl mb-2">{slide.subtitle}</p>
                )
              }
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <button
                onClick={() => navigate("/shop")}
                className="bg-white text-black px-6 py-2 text-base font-semibold rounded hover:bg-gray-200 transition"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 focus:outline-none z-20"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 focus:outline-none z-20"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
