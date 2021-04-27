import React, { Component, Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.Appbody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
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
});

export default Login;
