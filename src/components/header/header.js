import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <span className="navbar-brand">Star DB</span>
        <div className="collapse navbar-collapse d-flex flex-row-reverse">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Peoples
            </a>
            <a className="nav-item nav-link" href="#">
              Planets
            </a>
            <a className="nav-item nav-link" href="#">
              Starships
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
