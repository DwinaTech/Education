import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const trackScreenWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/DwinaTech-brand.png?raw=true"
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                style={{ color: location.pathname === "/" && "#4071f4" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/about" && "#4071f4" }}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/skills" && "#4071f4" }}
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/works" && "#4071f4" }}
                to="/works"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
