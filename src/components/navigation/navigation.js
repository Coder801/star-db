import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.scss";

const Header = ({ categories }) => {
  const navLinks = list =>
    Object.values(list).map(({ route, label }, key) => (
      <li className={style.item} key={key}>
        <NavLink activeClassName={style.active} className={style.link} to={route}>
          {label}
        </NavLink>
      </li>
    ));

  return <ul className={style.navigation}>{navLinks(categories)}</ul>;
};

export default Header;
