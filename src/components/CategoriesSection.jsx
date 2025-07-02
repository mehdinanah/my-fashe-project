import { useNavigate } from "react-router-dom";
import dresses from "../assets/cards1.webp";
import watches from "../assets/cards2.webp";
import bags from "../assets/cards3.webp";
import sunglasses from "../assets/cards4.webp";
import footwear from "../assets/cards5.webp";
import accessories from "../assets/cards6.webp";

export default function CategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    { name: "DRESSES", image: dresses },
    { name: "WATCHES", image: watches },
    { name: "BAGS", image: bags },
    { name: "SUNGLASSES", image: sunglasses },
    { name: "FOOTWEAR", image: footwear },
    { name: "ACCESSORIES", image: accessories },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-20 py-10">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="relative group overflow-hidden cursor-pointer rounded-md shadow-lg"
          onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)}
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            draggable={false}
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-sm font-semibold px-4 py-2 rounded shadow group-hover:bg-gray-100 transition select-none">
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}
