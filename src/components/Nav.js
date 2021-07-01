import React from "react";
import logo from "../images/instagram-logo.png";

const Nav = () => {
  return (
    <div className="outer-nav-wrapper">
      <div className="nav-wrapper">
        {/* Logo */}
        <a href="#">
          <img className="insta-logo" src={logo} alt="Instagram Logo"></img>
        </a>

        {/* Searchbar */}
        <div className="nav-searchbar">
          {/* change later to Font Awesome */}
          <span>🔍</span>
          <input type="search" placeholder="Search"></input>
        </div>

        {/* Login */}
        <div className="nav-login">
          <button>Log In</button>
          <p>
            <a href="#"> Sign Up </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Nav;
