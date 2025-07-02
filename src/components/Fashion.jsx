import React, { useState } from "react";
import featuredImg from "../assets/blog-02.jpg";

const Fashion = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleImageClick = () => {
    console.log("Image clicked, activating 'crafts' tag");
    setActiveTag("crafts");
  };

  const handleTagClick = (tag) => {
    console.log(`Tag clicked: ${tag}`);
    setActiveTag(tag);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans bg-white rounded-lg">
      <div className="flex items-start gap-6 mb-6">
        <img
          src={featuredImg}
          alt="Featured"
          onClick={handleImageClick}
          className="w-500 h-[500px] object-cover rounded-lg cursor-pointer 
            transition-transform duration-300 hover:scale-105 hover:brightness-90"
          title="Click to activate 'crafts' tag"
          draggable={false}
        />

        <div className="flex flex-col justify-start">
          <div className="text-gray-700 font-semibold mb-2">Tags Cloud</div>
          <div className="flex gap-2 text-gray-700 font-semibold">
            <span
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors duration-300 ${
                activeTag === "crafts"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTagClick("crafts")}
            >
              crafts
            </span>
            <span>,</span>
            <span
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors duration-300 ${
                activeTag === "street style"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTagClick("street style")}
            >
              street style
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          The White Sneakers Nearly Every Fashion Girls Own
        </h2>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <span>by fashe-theme Admin</span>
          <span>|</span>
          <span>crafts, street style</span>
          <span>|</span>
          <span>0 Comments</span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque
          mattis augue id euismod. Inter-dum et malesuada fames
        </p>

        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Continue Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Fashion;
