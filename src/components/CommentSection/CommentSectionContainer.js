// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  const commentsData = useState(props.comments); // use useState or not? just props.comments?
  // Why do we break apart state like this? I thought it was all
  // supposed to be top-level.

  console.log("commentsData: ");
  console.log(commentsData);

  return (
    <div>
      {commentsData.map(commentData => {
        return <Comment comment={commentData}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
