import React from "react";

import "./ProfileImg.css";

function ProfileImg({ className, src, alt }) {
  return (
    <img
      className={className ? `il-profileImg ${className}` : "il-profileImg"}
      src={src}
      alt={alt}
    />
  );
}

export default ProfileImg;
