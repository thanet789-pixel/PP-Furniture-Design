import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "PROCESS", path: "/process" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="brand" aria-label="PP Home Furniture">
      <span className="brand-mark">PP</span>
      <span>
        <strong>PP HOME</strong>
        <small>FURNITURE</small>
      </span>
    </Link>
  );
}

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Main navigation">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="gold-btn small">
            GET QUOTE
          </Link>
          <button
            className="menu-circle"
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

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/contact" className="gold-btn small mobile-quote">
          GET QUOTE
        </Link>
      </nav>
    </header>
  );
}

export { Logo };
export default Navbar;
