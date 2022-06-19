import "./ProfileInput.css";
import React from "react";
import ProfileImg from "../../low-level/Profile/ProfileImg";

function ProfileInput({ className, src, placeholder }) {
  return (
    <div
      className={className ? `il-profileInput ${className}` : "il-profileInput"}
    >
      <ProfileImg src={src} />
      <input placeholder={placeholder} />
    </div>
  );
}

export default ProfileInput;
