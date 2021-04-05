import React from "react";
import ReactDom from "react-dom";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem.js";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          float: "right",
          postion: "relative",
          top: "-40",
          background: "none",
          border: "none",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="close-icon" width="20px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
