import React from "react";
import NotificationItem from "./NotificationItem";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Notifications from "./Notifications";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Suite - <Notifications />", () => {
  it("Test 1 renders <NotificationItem />", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });
  it("Test 2 renders the first <NotificationItem /> element with the right HTML", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});
