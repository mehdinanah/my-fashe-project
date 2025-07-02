import React, { useState } from "react";
import cardts1 from "../assets/cards1.webp";
import cardts2 from "../assets/cards2.webp";
import cardts3 from "../assets/cards3.webp";
import cardts4 from "../assets/cards4.webp";
import cardts5 from "../assets/cards5.webp";
import cardts6 from "../assets/cards6.webp";
import banner02 from "../assets/banner-02.jpg";
import banner07 from "../assets/banner-07.jpg";

const products = [
  {
    id: 1,
    name: "Boxy3 T-Shirt with Roll Sleeve",
    image: cardts1,
    price: 20,
    oldPrice: 30,
    onSale: true,
  },
  {
    id: 2,
    name: "Boxy4 T-Shirt with Roll Sleeve",
    image: cardts2,
    price: 20,
    onSale: false,
  },
  {
    id: 3,
    name: "Boxy5 T-Shirt with Roll Sleeve",
    image: cardts3,
    price: 20,
    onSale: false,
  },
  {
    id: 4,
    name: "Boxy6 T-Shirt",
    image: cardts4,
    price: 25,
    onSale: false,
  },
  {
    id: 5,
    name: "Boxy7 T-Shirt",
    image: cardts5,
    price: 22,
    onSale: false,
  },
  {
    id: 6,
    name: "Boxy8 T-Shirt",
    image: cardts6,
    price: 28,
    onSale: true,
  },
  {
    id: 7,
    name: "Boxy9 T-Shirt",
    image: banner02,
    price: 30,
    onSale: false,
  },
  {
    id: 8,
    name: "Boxy10 T-Shirt",
    image: banner07,
    price: 35,
    onSale: false,
  },
];

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1;
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  ); 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };
  const handleAddToCart = (product) => {
    alert(`Added "${product.name}" to cart!`);
  };

  return (
    <div className="flex flex-col md:flex-row px-4 py-8 max-w-7xl mx-auto">
      <aside className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r space-y-6 mb-6 md:mb-0">
        <div>
          <h2 className="font-bold text-lg mb-2">Categories</h2>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Best Seller (8)</li>
            <li>Featured (8)</li>
            <li>Men (8)</li>
            <li>Women (8)</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Color</h2>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> Black
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> Gray
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> Red
          </label>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Price</h2>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> 0-20
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> 20-40
          </label>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Size</h2>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> S
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> M
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> L
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-1" /> XL
          </label>
        </div>
      </aside>
      <main className="w-full md:w-3/4 p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded"
            aria-label="Search products"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded relative group overflow-hidden"
              >
                {product.onSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                    Sale
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  ADD TO CART
                </button>
                <div className="p-3">
                  <h3 className="text-sm mb-1">{product.name}</h3>
                  <p className="text-sm">
                    {product.oldPrice && (
                      <span className="line-through text-gray-400 mr-1">
                        ${product.oldPrice}
                      </span>
                    )}
                    <span className="text-black font-semibold">${product.price}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded ${
                currentPage === page
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
