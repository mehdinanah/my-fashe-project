import React from "react";

export default function InstagramSection() {
  return (
    <div className="bg-white font-sans px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-12">
        @ FOLLOW US ON INSTAGRAM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Free Delivery Worldwide</h3>
          <p className="text-gray-600">
            Minum est nature quam littera gathica
          </p>
        </div>
        <div className="border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-bold mb-2">30 Days Return</h3>
          <p className="text-gray-600">
            Simply return it within 30 days for an exchange.
          </p>
        </div>
        <div className="border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Store Opening</h3>
          <p className="text-gray-600">
            Shop open from Monday to Sunday
          </p>
        </div>
      </div>
    </div>
  );
}
