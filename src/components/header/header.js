import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "../search";

import logo from "./img/logo-header.png";

import style from "./style.module.scss";
import { CATEGORIES } from "../../constants";

const Header = () => {
  const navLinks = list =>
    Object.values(list).map(({ route, label }, key) => (
      <li key={key}>
        <NavLink activeClassName={style.active} className={style.link} to={route}>
          {label}
        </NavLink>
      </li>
    ));

  return (
    <div className={style.header}>
      <Link className={style.logo} to="/">
        <img className={style.image} src={logo} alt="Header logo" />
      </Link>
      <nav className={style.nav}>{navLinks(CATEGORIES)}</nav>
      <div className={style.search}>
        <Search />
      </div>
    </div>
  );
};

export default Header;
