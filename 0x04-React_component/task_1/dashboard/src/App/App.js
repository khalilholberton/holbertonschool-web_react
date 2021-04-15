import React, { Fragment } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCtrlH = this.handleCtrlH.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleCtrlH);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCtrlH);
  }

  handleCtrlH(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }
  render() {
    const listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        html: { __html: getLatestNotification() },
      },
    ];

    return (
      <Fragment>
        <div className="App">
          <div className="upperBlock">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          <div>
            {this.props.isLoggedIn === false && <Login />}
            {this.props.isLoggedIn === true && (
              <CourseList listCourses={listCourses} />
            )}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};
export default App;
