import React from "react";
import Post from "../posts.json";

console.log(Post[0].image);

const Posts = () => {
  return (
    <div className="wrapper-posts">
      {Post.map((obj, i) => {
        return (
          <div key={i}>
            <img src={`${process.env.PUBLIC_URL}/images/${obj.image}`} />
            <div className="posts-overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
