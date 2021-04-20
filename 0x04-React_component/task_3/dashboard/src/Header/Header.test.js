import Header from "./Header.js";
import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("<Header />", () => {
  it("Test 1 renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it("Test 2 renders img", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("img"));
  });
  it("Test 3 renders h1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("h1"));
  });
});
