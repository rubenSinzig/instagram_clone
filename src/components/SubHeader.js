import React from "react";

// Images
import Wallpaper from "../images/wallpaper.jpg";
import Events from "../images/events.jpg";
import Models from "../images/models.jpg";
import Shopping from "../images/shopping.jpg";

const SubHeader = () => {
  return (
    <div className="sub-header-wrapper">
      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img src={Wallpaper} alt="wallpaper" />
          </div>
        </div>
        <h4>Wallpaper.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img src={Events} alt="events" />
          </div>
        </div>
        <h4>Events.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img src={Models} alt="models" />
          </div>
        </div>
        <h4>Models.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img src={Shopping} alt="shopping" />
          </div>
        </div>
        <h4>Shopping.</h4>
      </div>
    </div>
  );
};
export default SubHeader;
