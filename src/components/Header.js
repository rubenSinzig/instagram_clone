import React from "react";
import profilePicture from "../images/profile-picture.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-img">
        <img src={profilePicture} alt="Mercedes-Star" />
      </div>
      <div className="header-wrapper-info">
        <section className="header-info-top">top</section>
        <section className="header-info-middle">middle</section>
        <section className="header-info-bottom">bottom</section>
      </div>
    </div>
  );
};
export default Header;
