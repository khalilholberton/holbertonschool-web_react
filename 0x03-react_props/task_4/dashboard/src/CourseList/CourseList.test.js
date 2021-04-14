import CourseList from "./CourseList";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Enzyme from "enzyme";
import CourseListRow from "./CourseListRow";

Enzyme.configure({ adapter: new Adapter() });

describe("<CourseList />", () => {
  it("Test 1 rendere without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

  it("Test 2 renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
  });
});
