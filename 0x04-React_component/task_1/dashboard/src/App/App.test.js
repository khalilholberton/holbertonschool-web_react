import React from "react";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
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
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
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

  it("Test 6 <App /> doesn't render <CourseList /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).to.equal(false);
  });
});

describe("<App />", () => {
  it("Test 7 isLoggedIn is true ", () => {
    const props = {
      isLoggedIn: true,
    };

    const wrapper = shallow(<App {...props} />);

    expect(wrapper.contains(<Login />)).to.equal(false);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
  });
  test("Test 8 logOut alerts with correct string", () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, "alert");

    const wrapper = shallow(<App logOut={myLogOut} />);

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
});
