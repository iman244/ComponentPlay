import "./PostContent.css";
import React from "react";

function PostContent({ className, t_className, i_className, src, text }) {
  return (
    <div
      className={className ? `il-postContent ${className}` : "il-postContent"}
    >
      <p className={t_className ? `il-postText ${t_className}` : "il-postText"}>
        {text}
      </p>
      <img
        className={i_className ? `il-postImg ${i_className}` : "il-postImg"}
        src={src}
        alt="post"
      />
    </div>
  );
}

export default PostContent;
