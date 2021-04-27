import React from "react";
import logo from "../assets/Holberton logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="logo" className={css(styles.Applogo)} />
      <h1 className={css(styles.heading1)}>School dashboard</h1>
    </div>
  );
}
const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    textColor: "#e1484c",
  },
  Applogo: {
    height: "250px",
  },
  heading1: {
    color: "#e1484c",
  },
});

export default Header;
