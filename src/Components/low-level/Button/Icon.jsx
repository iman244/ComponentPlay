import React from "react";

import "./Icon.css";

function Icon({ className, icon, badge }) {
  return (
    <div className={`il-icon ${className}`}>
      {icon}
      <span className="badge">{badge}</span>
    </div>
  );
}

export default Icon;
