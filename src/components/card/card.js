import React, { useState } from "react";
import "./card.css";
import Heart from "./../../img/heart-svgrepo-com.svg";
import HeartFilled from "./../../img/heartFilled.svg";
import Info from "./../../img/infoicon.svg";
import Share from "./../../img/share-svgrepo-com.svg";
import Comments from "./../../img/comments-o-svgrepo-com.svg";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotiffication = () => {
    setLiked(true);
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />

      <div className="interaction">
        {liked ? (
          <img src={HeartFilled} alt="" className="cardIcon" />
        ) : (
          <img
            src={Heart}
            alt=""
            className="cardIcon"
            onClick={handleNotiffication}
          />
        )}

        <img src={Comments} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
