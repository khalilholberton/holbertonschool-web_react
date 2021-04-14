import Footer from "./Footer.js";
import React from "react";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("<Footer />", () => {
  it("Test 1 <Footer /> renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test 2 <Footer /> renders the text 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test 2 <Footer /> renders at least the text: Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.children("p").html()).to.include("Copyright");
  });
});
