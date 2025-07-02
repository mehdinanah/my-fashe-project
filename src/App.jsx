import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./components/CartContext";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Features from "./pages/FeaturesPage";
import Blog from "./pages/Blog";
import About from "./pages/AboutPage";
import Contact from "./pages/Contactpage";

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
}
