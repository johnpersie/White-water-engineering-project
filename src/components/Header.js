import React from "react";
import Logo from "../img/WhitewatersEngineeringLimited.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-logo">
          <img className="header-logo__img" src={Logo} alt="" />
          <p className="header-logo__title">White Water Engineering</p>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="About-Us">About Us</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </div>
  );
};

export default Header;
