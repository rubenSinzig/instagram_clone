import React from "react";

const Nav = () => {
  return (
    <div className="outer-nav-wrapper">
      <div className="nav-wrapper">
        {/* Logo */}
        <a href="https://rubensinzig.github.io/instagram/">
          <img
            className="insta-logo"
            src={`${process.env.PUBLIC_URL}/images/instagram-logo.png`}
            alt="Instagram Logo"
          />
        </a>
        {console.log(`${process.env.PUBLIC_URL}/images/instagram-logo.png`)}
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
            <a href="https://www.instagram.com/accounts/emailsignup/?hl=en">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Nav;
