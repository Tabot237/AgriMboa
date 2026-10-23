import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/in-season", label: "In season" },
  { to: "/about", label: "How it works" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="AgriMboa" />
        </Link>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar-actions">
            <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
              Log in
            </Link>
            <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>
              Join AgriMboa
            </Link>
          </div>
        </nav>

        <button
          className={`navbar-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;