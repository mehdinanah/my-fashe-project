import React, { useState } from "react";
import thumb1 from "../assets/banner-02.jpg";
import thumb2 from "../assets/banner-07.jpg";
import thumb3 from "../assets/banner-08.jpg";
import thumb4 from "../assets/cards4.webp";
import thumb5 from "../assets/cards5.webp";
import featuredImg from "../assets/blog-02.jpg";

const products = [
  {
    img: thumb1,
    name: "Boxy7 T-Shirt with Roll Sleeve",
    price: "$20.00",
    description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.`,
    sizes: ["S", "M", "L", "XL"],
    brand: "MyVendor",
    categories: ["boxy", "Shirts", "sleeveless"],
  },
  {
    img: thumb2,
    name: "Boxy6 T-Shirt with Roll Sleeve",
    price: "$20.00",
    description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.`,
    sizes: ["S", "M", "L", "XL"],
    brand: "MyVendor",
    categories: ["boxy", "Shirts", "sleeveless"],
  },
  {
    img: thumb3,
    name: "Boxy5 T-Shirt with Roll Sleeve",
    price: "$20.00",
    description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.`,
    sizes: ["S", "M", "L", "XL"],
    brand: "MyVendor",
    categories: ["boxy", "Shirts", "sleeveless"],
  },
  {
    img: thumb4,
    name: "Boxy4 T-Shirt with Roll Sleeve",
    price: "$18.00",
    description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.`,
    sizes: ["S", "M", "L", "XL"],
    brand: "MyVendor",
    categories: ["boxy", "Shirts", "sleeveless"],
  },
  {
    img: thumb5,
    name: "Boxy3 T-Shirt with Roll Sleeve",
    price: "$22.00",
    description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.`,
    sizes: ["S", "M", "L", "XL"],
    brand: "MyVendor",
    categories: ["boxy", "Shirts", "sleeveless"],
  },
];

export default function FeaturedProductsWithBlog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize("");
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedSize("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
     
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Search products"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10">
        
        <div className="w-full md:w-2/3">
          <img
            src={featuredImg}
            alt="Featured"
            className="rounded-lg shadow-lg w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">
              Black Friday Guide: Best Sales & Discount Codes
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              by <span className="font-semibold">fashe-theme Admin</span> | crafts, street style | 1 Comments
            </p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </p>
            <button className="text-red-500 font-semibold hover:underline">
              Continue Reading
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col space-y-6">
          {!selectedProduct ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
              <div className="space-y-3 max-h-[600px] overflow-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded transition"
                      onClick={() => openProduct(product)}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                        draggable={false}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">{product.name}</span>
                        <span className="text-gray-600">{product.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No products found.</p>
                )}
              </div>
            </>
          ) : (
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                onClick={closeProduct}
                className="text-gray-500 hover:text-red-500 mb-4 font-semibold"
              >
                ← Back to Products
              </button>

              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-red-600 font-semibold mb-2">{selectedProduct.price}</p>

              <p className="mb-4 text-gray-700">{selectedProduct.description}</p>

              
              <div className="mb-4">
                <span className="font-semibold mr-2">Sizes:</span>
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`mr-2 mb-2 px-3 py-1 border rounded ${
                      selectedSize === size
                        ? "bg-red-500 text-white border-red-500"
                        : "border-gray-400 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

             
              <button
                disabled={!selectedSize}
                className={`w-full py-2 rounded text-white font-semibold ${
                  selectedSize
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() =>
                  alert(
                    `Added ${selectedProduct.name} (Size: ${selectedSize}) to cart!`
                  )
                }
              >
                Add to Cart
              </button>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Brand:</strong> {selectedProduct.brand}
                </p>
                <p>
                  <strong>Categories:</strong> {selectedProduct.categories.join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
