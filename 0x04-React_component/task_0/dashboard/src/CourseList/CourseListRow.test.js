import CourseListRow from "./CourseListRow";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<CourseListRow />", () => {
  it("Test 1 component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const props = {
      isHeader: true,
      textFirstCell: "test",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.contains(
        <tr>
          <th colSpan={2}>{props.textFirstCell}</th>
        </tr>
      )
    ).to.equal(true);
  });
  it("Test 2 component renders 2 cells when textSecondCell exists and isHeader is true", () => {
    const props = {
      isHeader: true,
      textFirstCell: "test",
      textSecondCell: "test",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.contains(
        <tr>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it("Test 3 component renders 2 cells when textSecondCell exists and isHeader is true", () => {
    const props = {
      isHeader: false,
      textFirstCell: "test",
      textSecondCell: "test",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.contains(
        <tr>
          <td>{props.textFirstCell}</td>
          <td>{props.textSecondCell}</td>
        </tr>
      )
    ).to.equal(true);
  });
});
