import "./Icon.css";
import React from "react";

function Icon({ className, icon, badge }) {
  return (
    <div className={`il-icon ${className}`}>
      {icon}
      <span className="badge">{badge}</span>
    </div>
  );
}

export default Icon;
