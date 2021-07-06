import React from "react";
import Post from "../posts.json";
import { BsHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

const postGallery = Post.map((obj, i) => {
  return (
    <div className="wrapper-posts" key={i}>
      <img src={`${process.env.PUBLIC_URL}/images/${obj.image}`} />
      <div className="posts-overlay">
        <div>
          <BsHeartFill />
          <span>{obj.likes}</span>
        </div>
        <div>
          <FaComment />
          <span>{obj.comments}</span>
        </div>
      </div>
    </div>
  );
});

const Posts = () => {
  return <div className="main-wrapper-posts">{postGallery}</div>;
};

export default Posts;
