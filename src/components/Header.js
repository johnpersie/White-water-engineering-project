import React from "react";
import Logo from "../img/WhitewatersEngineeringLimited.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-logo">
          <img className="header-logo__img" src={Logo} alt="" />
        </div>
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
      </header>
    </div>
  );
};

export default Header;
