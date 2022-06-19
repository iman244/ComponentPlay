import "./ProfileTXT.css";
import React from "react";
import ProfileImg from "./ProfileImg";

function ProfileTXT({ className, src, text }) {
  return (
    <div className={className ? `il-profileTXT ${className}` : "il-profileTXT"}>
      <ProfileImg src={src} alt="profile" />
      <span className="il-desText">{text}</span>
    </div>
  );
}

export default ProfileTXT;
