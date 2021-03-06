import React, { Component, Fragment } from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // returns true render will be invoked
    if (
      this.props.listNotifications.length < nextProps.listNotifications.length
    ) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className="NotificationsComponent">
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
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
                <div className={css(styles.notificationBox)}>
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

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid #e1484c",
    borderStyle: "dashed",
    padding: "10px",
    textAlign: "left",
  },
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "none",
    marginBottom: "10px",
  },
  notificationBox: {
    marginRight: "60px",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
export default Notifications;
