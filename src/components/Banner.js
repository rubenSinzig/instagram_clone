import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { MdClose } from "react-icons/md";

const Banner = () => {
  const [closing, setClosing] = useState(true);

  const closeBanner = () => {
    setClosing(!closing);
  };

  return (
    <div className={closing ? "banner-wrapper" : "closing"}>
      <div className="banner-icon">
        <SiInstagram />
      </div>

      <div className="banner-text">
        <p>Log In to Instagram</p>
        <p>
          Log in to see photos and videos from friends and discover other
          accounts you'll love.
        </p>
      </div>

      <div className="banner-button">
        <button>
          <a href="https://www.instagram.com/accounts/login/?hl=en">Log In</a>
        </button>
        <p>
          <a href="https://www.instagram.com/accounts/emailsignup/?hl=en">
            Sign Up
          </a>
        </p>
      </div>

      <div className="banner-close">
        <MdClose onClick={closeBanner} />
      </div>
    </div>
  );
};

export default Banner;
