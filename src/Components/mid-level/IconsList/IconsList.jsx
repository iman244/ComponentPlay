import "./IconsList.css";
import React from "react";
import IconText from "../../low-level/Icon/IconText";

function IconsList({ className, data }) {
  return (
    <ul className={className ? `il-iconsList ${className}` : "il-iconsList"}>
      {data.map((item) => (
        <li key={item.text}>
          <IconText icon={item.icon} text={item.text} />
        </li>
      ))}
    </ul>
  );
}

export default IconsList;
