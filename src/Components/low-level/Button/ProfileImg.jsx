import React from "react";

import "./ProfileImg.css";

function ProfileImg({ className, src, alt }) {
  return <img className={`il-img ${className}`} src={src} alt={alt} />;
}

export default ProfileImg;
