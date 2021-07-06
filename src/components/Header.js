import React from "react";

import { SiMercedes } from "react-icons/si";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-img">
        <div className="header-circle-img">
          <div className="header-circle-white">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile-picture.jpg`}
              alt="Mercedes-Star"
            />
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
        <section className="header-info-middle">
          <div>
            527 <span>posts</span>
          </div>
          <div>
            5.3m <span>followers</span>
          </div>
          <div>
            172 <span>following</span>
          </div>
        </section>
        <section className="header-info-bottom">
          <h3>Mercedes-Benz Classic</h3>
          <p>Welcome to the official channel of Mercedes-Benz Classic.</p>
          <h4>
            <a
              href="https://www.mercedes-benz-classic-store.com"
              target="_blank"
            >
              go to the classic store
            </a>
          </h4>
        </section>
      </div>
    </div>
  );
};
export default Header;
