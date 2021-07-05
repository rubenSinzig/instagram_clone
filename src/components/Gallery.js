import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="wrapper-gallery-link">
        <BsGrid3X3 className="posts-icon" />
        <h6>POSTS</h6>
      </div>
      <div className="wrapper-gallery-link">
        <GiNewspaper className="guides-icon" />
        <h6>GUIDES</h6>
      </div>
      <div className="wrapper-gallery-link">
        <BsCollectionPlay className="reels-icon" />
        <h6>REELS</h6>
      </div>
      <div className="wrapper-gallery-link">
        <AiOutlineFundProjectionScreen className="igtv-icon" />
        <h6>IGTV</h6>
      </div>
      <div className="wrapper-gallery-link">
        <BiUserPin className="tagged-icon" />
        <h6>TAGGED</h6>
      </div>
    </div>
  );
};
export default Gallery;
