import React from "react";
import Post from "../posts.json";

console.log(Post[0].image);

const style = {
  backgroundImage: `url("${Post[0].image}")`,
};

const Posts = () => {
  return (
    <div className="wrapper-posts">
      <div>
        {Post.map((obj, i) => {
          return (
            <div key={i}>
              <h1>{obj.id}</h1>
              <img src={`${process.env.PUBLIC_URL}/images/${obj.image}`} />
              {console.log(`${process.env.PUBLIC_URL}/images/${obj.image}`)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
