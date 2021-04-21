import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    if (html === undefined)
      return (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    else
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
