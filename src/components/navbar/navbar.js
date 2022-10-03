import React from "react";
import "./navbar.css";
import Notiffication from "./../../img/notification-bell-svgrepo-com.svg";
import Mesage from "./../../img/message-svgrepo-com.svg";
import Settings from "./../../img/settings-svgrepo-com.svg";

const navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Jeanndo App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notiffication} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Mesage} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
