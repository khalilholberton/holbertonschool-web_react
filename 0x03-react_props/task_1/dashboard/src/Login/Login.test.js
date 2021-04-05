import Login from "./Login.js";
import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("<Login />", () => {
  it("Test 1 <Login /> renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
    // or : expect(wrapper.render()).to.not.be.an('undefined');
  });
  it("Test 2 Login /> render 2 inputs", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).to.have.lengthOf(2);
  });

  it("Test 3 <Login /> render 2 labels", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).to.have.lengthOf(2);
  });
});
