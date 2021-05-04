import * as notifData from "../../notifications.json";
import { normalize, schema } from "normalizr";

export const getAllNotificationsByUser = (userId) => {
  const notifs = normalized.entities.notifications;
  const msgs = normalized.entities.messages;
  const notifUser = [];

  for (const property in notifs) {
    if (notifs[property].author === userId) {
      notifUser.push(msgs[notifs[property].context]);
    }
  }

  return notifUser;
};

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notifData.default, [notification]);

export { normalized };
