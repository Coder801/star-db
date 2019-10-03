import React from "react";
import { Link } from "react-router-dom";

import logo from "./img/logo-header.png";

import style from "./style.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Link className={style.logo} to="/people">
        <img className={style.image} src={logo} alt="Header logo" />
      </Link>
      <nav className={style.nav}>
        <li>
          <Link className={style.link} to="/people">
            People
          </Link>
        </li>
        <li>
          <Link className={style.link} to="/planets">
            Planets
          </Link>
        </li>
        <li>
          <Link className={style.link} to="/spaceships">
            Spaceships
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
