import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="bg-[#07140f] text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
