import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div
        className="universalCenter"
        style={{ backgroundColor: "#0C0E17", width: "100%", height: "70px" }}
      >
        <div className="container universalBetween">
          <div>
            <img
              src="https://res.cloudinary.com/dydwwknyv/image/upload/v1625893130/Logo-on-dark-bg-transparent_1_1_v0v3ii.png"
              style={{ height: "40px", width: "auto" }}
            />
          </div>
          <div className="menua-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div onClick={handleClick}>
            <ul className={click ? "navbarSite active" : "navbarSite "}>
              <li className="nav-itema">
                <Link className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="#">
                  Messages
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="#">
                  <i className="fas fa-bell"></i>
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="#">
                  <img
                    src="https://res.cloudinary.com/dydwwknyv/image/upload/v1625851606/Rectangle_67_qz7qnx_okl0mp.png"
                    style={{ height: "60px", width: "auto" }}
                  />
                </Link>
              </li>
              <li className="nav-itema">
                <button className="adminButton">
                  <i className="far fa-eye"></i>
                  <span style={{ marginLeft: "3px" }}>View as admin</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
