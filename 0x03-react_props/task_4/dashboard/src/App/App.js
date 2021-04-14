import React, { Fragment } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <Fragment>
      <div className="App">
        <div className="upperBlock">
          <Notifications />
          <Header />
        </div>
        <div>
          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList />}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
