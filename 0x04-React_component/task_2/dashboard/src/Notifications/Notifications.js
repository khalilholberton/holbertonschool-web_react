import React, { Component, Fragment } from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;

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
            {listNotifications.length === 0 && (
              <p>No new notification for now</p>
            )}
            {listNotifications.length > 0 && (
              <Fragment>
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
                          markAsRead={this.markAsRead}
                        />
                      );
                    })}
                  </ul>
                </div>
              </Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
export default Notifications;
