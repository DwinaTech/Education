import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navWrapper">
          <div className="logo">
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/DwinaTech-brand.png?raw=true"
              alt="brand"
            />
          </div>
          <div className="listWrapper">
            <button className="menu">Menu</button>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
