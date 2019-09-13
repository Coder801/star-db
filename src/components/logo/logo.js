import React, { Component } from "react";

import logo from "./img/logo.png";

import "./style.css";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}
