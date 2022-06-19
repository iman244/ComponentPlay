import "./Share1.css";
import { Data_ShareLayout } from "../../Data/Data_ShareLayout";
import React from "react";
import ProfileInput from "../../low-level/Profile/ProfileInput";
import IconsList from "../IconsList/IconsList";
import ButtonSimple from "../../low-level/Button/ButtonSimple";

function Share({ className }) {
  return (
    <div className={className ? `il-share ${className}` : "il-share"}>
      <div className="il-shareWrapper">
        <ProfileInput
          src="/assets/person/1.jpeg"
          placeholder="Share your thoughts with others! ..."
        />
        <hr className="m-3" />
        <div className="share-btns">
          <IconsList className="share-icons" data={Data_ShareLayout} />
          <ButtonSimple>Share</ButtonSimple>
        </div>
      </div>
    </div>
  );
}
export default Share;
