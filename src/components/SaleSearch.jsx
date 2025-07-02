import React, { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";


const products = [
  { id: 1, name: "Black T-Shirt" },
  { id: 2, name: "White Hoodie" },
  { id: 3, name: "Red Sneakers" },
  { id: 4, name: "Blue Jeans" },
  { id: 5, name: "Gray Jacket" },
  { id: 6, name: "Green Hat" },
  { id: 7, name: "Purple Socks" },
  { id: 8, name: "Yellow Scarf" },
];

export default function SaleSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 1000);
  };

  return (
    <footer className="bg-[#f9f9f9] py-16 px-6">
      <div className="container mx-auto max-w-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Search Products</h3>

       
        <div className="relative shadow-md">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition flex items-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Loading
              </>
            ) : (
              <>
                <FaSearch />
                Search
              </>
            )}
          </button>
        </div>
        <div className="mt-8">
          {loading ? null : results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="p-3 bg-white border rounded shadow-sm hover:bg-gray-50 transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : query && !loading ? (
            <p className="text-center text-gray-500 mt-4">No results found.</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
