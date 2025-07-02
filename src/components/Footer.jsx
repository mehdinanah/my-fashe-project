import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 sm:px-10 md:px-20 py-25 mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
       
        <div>
          <h3 className="font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Any questions? Let us know in store at 8th floor, 379 Hudson St,
            New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex space-x-4 text-xl text-gray-600">
            <a href="#"><i className="fab fa-facebook-f hover:text-black transition" /></a>
            <a href="#"><i className="fab fa-twitter hover:text-black transition" /></a>
            <a href="#"><i className="fab fa-pinterest hover:text-black transition" /></a>
            <a href="#"><i className="fab fa-google-plus-g hover:text-black transition" /></a>
            <a href="#"><i className="fab fa-instagram hover:text-black transition" /></a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">CATEGORIES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Dresses</a></li>
            <li><a href="#" className="hover:underline">Sunglasses</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">NEWSLETTER</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="flex flex-col space-y-3"
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white text-sm py-2 px-2 rounded-xl hover:bg-red-400 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © 2022 Shopify Theme Developed by MassTechnologist. All rights reserved.
      </div>
    </footer>
  );
}
