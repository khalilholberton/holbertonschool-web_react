import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({ displayDrawer, listNotifications }) {
  if (listNotifications.length == 0) {
    return <div>No new notification for now</div>;
  } else
    return (
      <div className="NotificationsComponent">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
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
            <div className="notification-box">
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notif) => {
                  return (
                    <NotificationItem
                      key={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
