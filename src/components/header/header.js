import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">Star DB</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
