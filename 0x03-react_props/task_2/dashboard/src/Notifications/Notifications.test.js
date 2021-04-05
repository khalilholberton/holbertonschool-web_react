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
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });
});
