import React from "react";
import profilePicture from "../images/profile-picture.jpg";
import { SiMercedes } from "react-icons/si";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-img">
        <div className="header-circle-img">
          <div className="header-circle-white">
            <img src={profilePicture} alt="Mercedes-Star" />
          </div>
        </div>
      </div>
      <div className="header-wrapper-info">
        <section className="header-info-top">
          <h2>mercedesbenz_classic</h2>
          <SiMercedes className="mb-icon" />
          <button>Follow</button>
          <div>● ● ●</div>
        </section>
        <section className="header-info-middle">middle</section>
        <section className="header-info-bottom">bottom</section>
      </div>
    </div>
  );
};
export default Header;
