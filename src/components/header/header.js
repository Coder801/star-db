import React from "react";
import { Link } from "react-router-dom";

import logo from "./img/logo-header.png";

import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          <img className="logo-header" src={logo} alt="Header logo" />
        </span>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item active">
              <Link to="/people" className="nav-link">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/starships" className="nav-link">
                Spaceships
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
