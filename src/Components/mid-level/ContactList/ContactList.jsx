import "./ContactList.css";
import React from "react";
import ProfileTXT from "../../low-level/Profile/ProfileTXT";

function ContactList({ className, data }) {
  return (
    <ul
      className={className ? `il-contactList ${className}` : "il-contactList"}
    >
      {data.map((item) => (
        <li key={item.text}>
          <ProfileTXT src={item.src} text={item.text} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
