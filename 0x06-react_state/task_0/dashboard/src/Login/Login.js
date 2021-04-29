import React, { Component, Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.Appbody)}>
        <div className={css(styles.inpContainer)}>
          <label htmlFor="email">Email: </label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={css(styles.inpContainer)}>
          <label htmlFor="password">Password: </label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={css(styles.inpContainer)}>
          <button>OK</button>
        </div>
      </div>
    </React.Fragment>
  );
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
