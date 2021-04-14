import React from "react";
import Notifications from "./Notifications";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Suite - <Notifications />", () => {
  it("Test 1 Renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });

  it("Test 2 renders the text Here is the list of notifications", () => {
    const props = { displayDrawer: true };
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });

  it("Test 3 menu item is being displayed if displayDrawer is false", () => {
    const props = { displayDrawer: false };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".menuItem")).toEqual(true);
  });

  it("Test 4 div.Notifications is not being displayed  displayDrawer is false", () => {
    const props = { displayDrawer: false };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".Notifications")).toEqual(false);
  });

  it("Test 5 menu item is being displayed if displayDrawer is true", () => {
    const props = { displayDrawer: true };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".menuItem")).toEqual(true);
  });

  it("Test 6 div.Notifications is being displayed if displayDrawer is true", () => {
    const props = { displayDrawer: true };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".Notifications")).toEqual(true);
  });
});
