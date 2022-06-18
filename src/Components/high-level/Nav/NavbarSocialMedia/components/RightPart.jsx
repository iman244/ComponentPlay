import React from "react";
import Icon from "../../../../low-level/Button/Icon";
import ProfileImg from "../../../../low-level/Button/ProfileImg";

function RightPart() {
  const icons = [
    {
      name: "user",
      icon: <i className="fa-solid fa-user"></i>,
      badge: 1,
    },
    {
      name: "message",
      icon: <i class="fa-solid fa-message"></i>,
      badge: 3,
    },
    {
      name: "user",
      icon: <i class="fa-solid fa-bell"></i>,
      badge: 2,
    },
  ];

  return (
    <div className="right-part">
      <div className="links">
        <span>Homepage</span>
        <span>Timeline</span>
      </div>
      <div className="icons">
        {icons.map((item) => (
          <Icon className="icon" icon={item.icon} badge={item.badge} />
        ))}
      </div>
      <ProfileImg src="/assets/person/1.jpeg" alt="profile" />
    </div>
  );
}

export default RightPart;
