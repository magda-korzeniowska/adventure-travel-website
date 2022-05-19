import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./styles.scss";

function Navbar() {
  const [isClicked, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!isClicked);
  const handleCloseMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // button will render only once and will not appear in mobile ver. after refreshing the page
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={handleCloseMobileMenu}>
            UNCOMMON <i className="fas fa-route"></i>
          </Link>
          <div className="navbar__menu-icon" onClick={handleClick}>
            <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              isClicked ? "navbar__menu navbar__menu--active" : "navbar__menu"
            }
          >
            <li className="navbar__item">
              <Link
                to="/"
                className="navbar__links"
                onClick={handleCloseMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/services"
                className="navbar__links"
                onClick={handleCloseMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/products"
                className="navbar__links"
                onClick={handleCloseMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/sign-up"
                className="navbar__links-mobile"
                onClick={handleCloseMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button btnStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
