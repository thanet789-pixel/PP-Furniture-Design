import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "PROCESS", path: "/process" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

function Logo() {
  return (
    <Link
      to="/"
      className="brand-logo-link group"
      aria-label="PP Home Furniture & Design"
    >
      <img
        className="brand-logo-image"
        src="/pp-home-logo.png"
        alt="PP Home Furniture & Design"
      />

      <div className="brand-logo-text">
        <h1>PP Home</h1>
        <p>Furniture & Design</p>
      </div>
    </Link>
  );
}

function Navbar() {
  const location = useLocation();
  const isLightPage = location.pathname === "/contact";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        isScrolled || isLightPage
          ? "bg-black/80 backdrop-blur-xl border-b border-yellow-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">

          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10">
            {menu.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm tracking-[2px] font-medium transition-all duration-300
                  ${
                    active
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            <Link
              to="/contact"
              className="hidden lg:flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold tracking-wider hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
            >
              GET QUOTE
            </Link>

            {/* Mobile Button */}
            <button
              className="lg:hidden w-12 h-12 rounded-full border border-yellow-500/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-navigation"
        className={`lg:hidden overflow-hidden transition-all duration-500
        ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-2xl border-t border-yellow-500/10 px-6 py-8 flex flex-col gap-6">

          {menu.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg tracking-widest transition-all duration-300
                ${
                  active
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="mt-4 flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold tracking-widest"
          >
            GET QUOTE
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { Logo };
export default Navbar;
