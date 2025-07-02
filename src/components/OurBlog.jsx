import React from 'react';
import blog1 from "../assets/blog-01.jpg";
import blog2 from "../assets/blog-02.jpg";
import blog3 from "../assets/blog-03.jpg";

export default function OurBlog() {
  const articles = [
    {
      title: "Black Friday Guide: Best Sales & Discount Codes",
      author: "by fashe-theme Admin on Dec 28, 2017",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
      image: blog1,
    },
    {
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      author: "by fashe-theme Admin on Dec 28, 2017",
      excerpt: "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...",
      image: blog2,
    },
    {
      title: "New York SS 2018 Street Style: By Annina Mislin",
      author: "by fashe-theme Admin on Dec 28, 2017",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
      image: blog3,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 font-sans max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">OUR BLOG</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-[#2B2B2B]">{article.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{article.author}</p>
              <p className="text-gray-700 text-sm">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
