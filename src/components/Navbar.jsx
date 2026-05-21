import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

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
          <button className="menu-circle" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export { Logo };
export default Navbar;
