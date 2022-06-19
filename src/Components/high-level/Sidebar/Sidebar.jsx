import "./Sidebar.css";
import React from "react";
import { Data_ContactList, Sidebar_icons } from "../../Data/SidebarData";
import IconsList from "../../mid-level/IconsList/IconsList";
import ContactList from "../../mid-level/ContactList/ContactList";
import LayoutButton from "../../low-level/Button/LayoutButton";

function Sidebar({ className }) {
  return (
    <div className={`il-sidebar ${className}`}>
      <div className="il-sidebarWrapper">
        <IconsList data={Sidebar_icons} />
        <LayoutButton className="center">Show More</LayoutButton>
        <hr />
        <ContactList data={Data_ContactList} />
      </div>
    </div>
  );
}

export default Sidebar;
