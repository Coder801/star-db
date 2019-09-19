import React, { Component } from "react";

import logo from "./img/logo-header.png";

import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            <img className="logo-header" src={logo} alt="Header logo" />
          </span>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  People
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Spaceships
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Planets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
