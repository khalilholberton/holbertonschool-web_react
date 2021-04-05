import React from "react";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import App from "./App.js";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

Enzyme.configure({ adapter: new Adapter() });
describe("<App />", () => {
  it("Test 1 renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  it("Test 2 <App /> contains the <Notifications /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).to.equal(true);
  });

  it("Test 3 <App /> contains the <Header /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).to.equal(true);
  });

  it("Test 4 <App /> contains the <Login /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).to.equal(true);
  });

  it("Test 5 <App /> contains the <Footer /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).to.equal(true);
  });
});
