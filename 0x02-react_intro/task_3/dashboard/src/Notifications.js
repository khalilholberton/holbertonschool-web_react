import React from "react";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";
import "./Notifications.css";

export const Notifications = () => {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};
