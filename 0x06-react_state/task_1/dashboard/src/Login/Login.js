import React, { Component, Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    const { password } = this.state;

    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    const { value } = event.target;
    const { email } = this.state;

    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className={css(styles.Appbody)}>
          <div className={css(styles.inpContainer)}>
            <label htmlFor="email">Email: </label>
            <input
              className={css(styles.input)}
              value={this.state.email}
              onChange={this.handleChangeEmail}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className={css(styles.inpContainer)}>
            <label htmlFor="password">Password: </label>
            <input
              className={css(styles.input)}
              value={this.state.password}
              onChange={this.handleChangePassword}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className={css(styles.inpContainer)}>
            <button type="submit" disabled={!this.state.enableSubmit}>
              OK
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Appbody: {
    textAlign: "left",
    margin: "50px",
  },
  button: {
    marginLeft: "10px",
    height: "20px",
  },
  input: {
    margin: "0 16px 0 8px",
  },
  inpContainer: {
    display: "inline",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});

export default Login;
