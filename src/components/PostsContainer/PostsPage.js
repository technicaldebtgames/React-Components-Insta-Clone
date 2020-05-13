//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data.js";

console.log("dummyData = ");
console.log(dummyData);

const PostsPage = () => {
  // set up state for your data
  const [posts] = useState(dummyData);
  console.log("posts = useState(dummyData) = ")
  return (
    <div className="posts-container-wrapper">
      {posts.map(postData => {
        return <Post post={postData}/>;
      })}
    </div>
  );
};

export default PostsPage;
