import "./FeedSocialMedia.css";
import React from "react";
import Share from "../../mid-level/SocialMedia_ShareLayout/Share1";
import CardList from "../../mid-level/CardList/CardList";

function FeedSocialMedia({ className }) {
  return (
    <div
      className={
        className ? `il-FeedSocialMedia ${className}` : "il-FeedSocialMedia"
      }
    >
      <Share />
      <CardList />
    </div>
  );
}

export default FeedSocialMedia;
