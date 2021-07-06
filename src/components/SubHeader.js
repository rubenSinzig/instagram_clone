import React from "react";

const SubHeader = () => {
  return (
    <div className="sub-header-wrapper">
      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img
              src={`${process.env.PUBLIC_URL}/images/wallpaper.jpg`}
              alt="wallpaper"
            />
          </div>
        </div>
        <h4>Wallpaper.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img
              src={`${process.env.PUBLIC_URL}/images/models.jpg`}
              alt="events"
            />
          </div>
        </div>
        <h4>Events.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img
              src={`${process.env.PUBLIC_URL}/images/events.jpg`}
              alt="models"
            />
          </div>
        </div>
        <h4>Models.</h4>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list-outer">
          <div className="story-list-inner">
            <img
              src={`${process.env.PUBLIC_URL}/images/shopping.jpg`}
              alt="shopping"
            />
          </div>
        </div>
        <h4>Shopping.</h4>
      </div>
    </div>
  );
};
export default SubHeader;
