import "./IconText.css";
import React from "react";

function IconText({ className, icon, text }) {
  return (
    <div className={className ? `il-iconText ${className}` : "il-iconText"}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default IconText;
