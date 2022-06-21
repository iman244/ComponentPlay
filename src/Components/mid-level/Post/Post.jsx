import "./Post.css";
import React from "react";
import PostContent from "../../low-level/Post/PostContent";
import Topbar from "../Topbar/Topbar";
import PostFeedbackbar from "../PostFeedbackbar/PostFeedbackbar";

function Post({ className, src, text }) {
  return (
    <div className={className ? `il-post ${className}` : "il-post"}>
      <div className="il-postWrapper">
        <Topbar UserImgSrc="/assets/person/1.jpeg" UserImgTXT="zahra" />
        <PostContent
          className="my-3"
          src="/assets/post/1.jpeg"
          text="post text"
        />
        <PostFeedbackbar />
      </div>
    </div>
  );
}

export default Post;
