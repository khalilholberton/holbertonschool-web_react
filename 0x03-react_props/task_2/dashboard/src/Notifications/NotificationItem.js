import React from "react";

const NotificationItem = (props) => {
  return (
    <li
      data-notification-type={props.type}
      dangerouslySetInnerHTML={props.html}
    >
      {props.value}
    </li>
  );
};

export default NotificationItem;
