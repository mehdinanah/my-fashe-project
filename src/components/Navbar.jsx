import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";  

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/sale", label: "Sale" },
    { to: "/features", label: "Features" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          Fashe<span className="text-red-500">.</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                className="hover:text-red-500 transition duration-200"
              >
                {link.label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-4 text-xl relative">
          <button
            onClick={() => setProfileOpen(true)}
            className="hover:text-red-500"
            aria-label="Open profile"
          >
            👤
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-red-500 relative"
            aria-label="Open cart"
          >
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium md:hidden z-40">
          {links.map((link) => (
            <li key={link.to} className="w-full">
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-2 hover:text-red-500 border-b hover:border-red-500 transition duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {profileOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center shadow-xl">
          <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setProfileOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              aria-label="Close profile modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6">Account</h2>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">New Customer</h3>
                <p className="text-sm text-gray-600 mb-4">
                  By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                  Register Account
                </button>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Returning Customer</h3>
                <label className="inline-flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  I am a returning customer
                </label>
                <form className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                      placeholder="Password"
                    />
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline block">
                    Forgot your password?
                  </a>
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-6 text-sm text-blue-600 hover:underline">
              <Link to="/" onClick={() => setProfileOpen(false)}>← Return to Store</Link>
            </div>
          </div>
        </div>
      )}
      {cartOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative text-center max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setCartOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              aria-label="Close cart modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-600">🛍️ Your shopping cart is empty!</p>
            ) : (
              <ul className="divide-y divide-gray-300">
                {cartItems.map(({ id, title, price, image }, i) => (
                  <li key={i} className="flex items-center space-x-4 py-2">
                    <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6">
              <button
                onClick={() => {
                  setCartOpen(false);
                  navigate("/shop");
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Go to Shop
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
