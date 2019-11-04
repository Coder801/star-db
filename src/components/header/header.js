import React from "react";
import { Link } from "react-router-dom";
import { SwSearch } from "../sw-components";
import Navigation from "../navigation";

import logo from "./img/logo-header.png";

import style from "./style.module.scss";
import { CATEGORIES as categories } from "../../constants";

const Header = () => {
  return (
    <div className={`${style.header} ${style.navOpen}`}>
      <nav className={style.nav}>
        <Navigation categories={categories} />
      </nav>
      <div className={style.logo}>
        <Link className={style.link} to="/">
          <img className={style.image} src={logo} alt="" />
        </Link>
      </div>
      <div className={style.search}>
        <SwSearch />
      </div>
    </div>
  );
};

export default Header;
